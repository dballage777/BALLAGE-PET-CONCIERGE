"use client";

import { Field, Input, Textarea, SuccessCard, Honeypot, ErrorNote } from "./fields";
import { useFormSubmit } from "./useFormSubmit";

/**
 * General contact form. Submissions POST to /api/submit and are emailed to the
 * business via Resend (see src/app/api/submit/route.ts).
 */
export default function ContactForm() {
  const { handleSubmit, submitting, success, error } = useFormSubmit("contact");

  if (success) {
    return (
      <SuccessCard
        title="Message received"
        message="Thank you for reaching out. We'll get back to you within one business day."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Honeypot />
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
          placeholder="Tell us a little about your dog and what you're looking for…"
        />
      </Field>
      <ErrorNote message={error} />
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-forest-800 px-7 py-3.5 text-sm font-semibold text-cream shadow-soft transition-all hover:-translate-y-0.5 hover:bg-forest-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
