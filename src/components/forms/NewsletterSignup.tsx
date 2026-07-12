"use client";

import { Honeypot } from "./fields";
import { useFormSubmit } from "./useFormSubmit";

interface Props {
  variant?: "footer" | "inline";
}

/**
 * Newsletter signup. Submissions POST to /api/submit (formType "newsletter").
 * Wire delivery to your ESP by handling the newsletter type in the route, or
 * let it email the business like the other forms.
 */
export default function NewsletterSignup({ variant = "inline" }: Props) {
  const { handleSubmit, submitting, success, error } = useFormSubmit("newsletter");
  const footer = variant === "footer";

  if (success) {
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
      <Honeypot />
      <label htmlFor={`newsletter-${variant}`} className="sr-only">
        Email address
      </label>
      <input
        id={`newsletter-${variant}`}
        type="email"
        name="email"
        required
        placeholder="you@email.com"
        aria-invalid={error ? true : undefined}
        className={
          footer
            ? "w-full rounded-full border border-forest-700 bg-forest-900 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-gold-500 focus:outline-none"
            : "w-full rounded-full border border-forest-200 bg-white px-4 py-2.5 text-sm text-forest-900 placeholder:text-forest-400 focus:border-gold-500 focus:outline-none"
        }
      />
      <button
        type="submit"
        disabled={submitting}
        className="whitespace-nowrap rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "…" : "Subscribe"}
      </button>
    </form>
  );
}
