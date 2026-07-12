"use client";

import { useState, type FormEvent } from "react";

interface Props {
  variant?: "footer" | "inline";
}

/**
 * Newsletter signup. Currently stores intent client-side and shows confirmation.
 * Wire `onSubmit` to your ESP (Mailchimp, ConvertKit, Resend, etc.) at launch.
 */
export default function NewsletterSignup({ variant = "inline" }: Props) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: POST to newsletter API / ESP endpoint.
    setDone(true);
  }

  const footer = variant === "footer";

  if (done) {
    return (
      <p
        className={`text-sm ${footer ? "text-gold-300" : "text-forest-700"}`}
        role="status"
      >
        Thank you — you&apos;re on the list. 🐾
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
      <label htmlFor={`newsletter-${variant}`} className="sr-only">
        Email address
      </label>
      <input
        id={`newsletter-${variant}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className={
          footer
            ? "w-full rounded-full border border-forest-700 bg-forest-900 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-gold-500 focus:outline-none"
            : "w-full rounded-full border border-forest-200 bg-white px-4 py-2.5 text-sm text-forest-900 placeholder:text-forest-400 focus:border-gold-500 focus:outline-none"
        }
      />
      <button
        type="submit"
        className="whitespace-nowrap rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
      >
        Subscribe
      </button>
    </form>
  );
}
