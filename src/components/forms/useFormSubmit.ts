"use client";

import { useState, type FormEvent } from "react";
import type { FormType } from "@/lib/forms";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Shared client-side submit logic for all lead forms. Serializes the form via
 * FormData, POSTs to /api/submit, and exposes status + error for the UI.
 */
export function useFormSubmit(formType: FormType) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = Object.fromEntries(
      new FormData(form).entries()
    ) as Record<string, string>;

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, fields }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(
          data.error || "Something went wrong. Please try again."
        );
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return {
    status,
    error,
    handleSubmit,
    submitting: status === "submitting",
    success: status === "success",
  };
}
