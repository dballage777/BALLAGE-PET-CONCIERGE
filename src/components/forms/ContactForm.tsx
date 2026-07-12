"use client";

import { useState, type FormEvent } from "react";
import { Field, Input, Textarea, SuccessCard } from "./fields";

/**
 * General contact form. On submit it currently validates and shows a
 * confirmation. Wire the handler to an email/API route (e.g. Resend, Formspree,
 * or a Next.js route handler) before launch.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: POST form data to your contact endpoint.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <SuccessCard
        title="Message received"
        message="Thank you for reaching out. We'll get back to you within one business day."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="c-name" required>
          <Input id="c-name" name="name" autoComplete="name" required />
        </Field>
        <Field label="Phone" htmlFor="c-phone">
          <Input id="c-phone" name="phone" type="tel" autoComplete="tel" />
        </Field>
      </div>
      <Field label="Email" htmlFor="c-email" required>
        <Input id="c-email" name="email" type="email" autoComplete="email" required />
      </Field>
      <Field label="How can we help?" htmlFor="c-message" required>
        <Textarea
          id="c-message"
          name="message"
          required
          placeholder="Tell us a little about your pet and what you're looking for…"
        />
      </Field>
      <button
        type="submit"
        className="w-full rounded-full bg-forest-800 px-7 py-3.5 text-sm font-semibold text-cream shadow-soft transition-all hover:-translate-y-0.5 hover:bg-forest-700 sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
