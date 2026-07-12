"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/services";
import { serviceAreas } from "@/lib/site";
import { Field, Input, Textarea, Select, SuccessCard } from "./fields";

/**
 * Meet & Greet / booking request form. Captures enough to start a care plan.
 * Wire the handler to your scheduling/CRM endpoint before launch.
 */
export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: POST booking request to scheduling / CRM endpoint.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <SuccessCard
        title="Request received"
        message="Thank you! We'll reach out shortly to schedule your complimentary Meet & Greet and build your pet's care plan."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
      <button
        type="submit"
        className="w-full rounded-full bg-gold-500 px-7 py-4 text-sm font-semibold text-forest-950 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-gold-400"
      >
        Request My Meet &amp; Greet
      </button>
      <p className="text-center text-xs text-forest-500">
        No obligation. We&apos;ll confirm details before anything is scheduled.
      </p>
    </form>
  );
}
