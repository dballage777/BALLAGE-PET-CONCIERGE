"use client";

import { services } from "@/lib/services";
import { serviceAreas } from "@/lib/site";
import { Field, Input, Textarea, Select, SuccessCard, Honeypot, ErrorNote } from "./fields";
import { useFormSubmit } from "./useFormSubmit";

/**
 * Meet & Greet / booking request form. Submissions POST to /api/submit and are
 * emailed to the business via Resend (see src/app/api/submit/route.ts).
 */
export default function BookingForm() {
  const { handleSubmit, submitting, success, error } = useFormSubmit("booking");

  if (success) {
    return (
      <SuccessCard
        title="Request received"
        message="Thank you! We'll reach out shortly to schedule your complimentary Meet & Greet and build your pet's care plan."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="b-name" required>
          <Input id="b-name" name="name" autoComplete="name" required />
        </Field>
        <Field label="Phone" htmlFor="b-phone" required>
          <Input id="b-phone" name="phone" type="tel" autoComplete="tel" required />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" htmlFor="b-email" required>
          <Input id="b-email" name="email" type="email" autoComplete="email" required />
        </Field>
        <Field label="Your city" htmlFor="b-city" required>
          <Select id="b-city" name="city" defaultValue="" required>
            <option value="" disabled>
              Select your area
            </option>
            {serviceAreas.map((a) => (
              <option key={a.city} value={`${a.city}, ${a.state}`}>
                {a.city}, {a.state}
              </option>
            ))}
          </Select>
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Service of interest" htmlFor="b-service" required>
          <Select id="b-service" name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.trademark ? `${s.name}™` : s.name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet — help me choose</option>
          </Select>
        </Field>
        <Field label="Preferred start" htmlFor="b-start">
          <Input id="b-start" name="start" type="date" />
        </Field>
      </div>
      <Field
        label="Tell us about your pet"
        htmlFor="b-notes"
        hint="Breed, age, personality, and anything special we should know."
      >
        <Textarea
          id="b-notes"
          name="notes"
          placeholder="Cooper is a 3-year-old golden retriever who loves long morning walks…"
        />
      </Field>
      <ErrorNote message={error} />
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-gold-500 px-7 py-4 text-sm font-semibold text-forest-950 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Request My Meet & Greet"}
      </button>
      <p className="text-center text-xs text-forest-500">
        No obligation. We&apos;ll confirm details before anything is scheduled.
      </p>
    </form>
  );
}
