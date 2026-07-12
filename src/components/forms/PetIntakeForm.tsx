"use client";

import { useState, type FormEvent } from "react";
import { Field, Input, Textarea, Select, SuccessCard } from "./fields";

/**
 * Detailed pet intake questionnaire. This is the foundation of the future
 * pet-profile / client-portal architecture — the fields map cleanly to a
 * PetProfile record. Wire the handler to your database/CRM before launch.
 */
export default function PetIntakeForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Persist intake as a pet profile record (future client portal).
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <SuccessCard
        title="Pet profile started"
        message="Thank you for the details! We'll review your pet's profile and follow up to finalize the care plan."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Owner */}
      <fieldset className="space-y-5">
        <legend className="font-display text-xl font-semibold text-forest-900">
          About You
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Owner name" htmlFor="i-owner" required>
            <Input id="i-owner" name="owner" autoComplete="name" required />
          </Field>
          <Field label="Phone" htmlFor="i-phone" required>
            <Input id="i-phone" name="phone" type="tel" required />
          </Field>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email" htmlFor="i-email" required>
            <Input id="i-email" name="email" type="email" required />
          </Field>
          <Field label="Home address" htmlFor="i-address">
            <Input id="i-address" name="address" autoComplete="street-address" />
          </Field>
        </div>
      </fieldset>

      {/* Pet basics */}
      <fieldset className="space-y-5">
        <legend className="font-display text-xl font-semibold text-forest-900">
          About Your Pet
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Pet's name" htmlFor="i-pet" required>
            <Input id="i-pet" name="petName" required />
          </Field>
          <Field label="Species / breed" htmlFor="i-breed">
            <Input id="i-breed" name="breed" placeholder="e.g. Dog — Labrador mix" />
          </Field>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          <Field label="Age" htmlFor="i-age">
            <Input id="i-age" name="age" placeholder="e.g. 4 years" />
          </Field>
          <Field label="Weight" htmlFor="i-weight">
            <Input id="i-weight" name="weight" placeholder="e.g. 55 lbs" />
          </Field>
          <Field label="Life stage" htmlFor="i-stage">
            <Select id="i-stage" name="lifeStage" defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option>Puppy / Kitten</option>
              <option>Adult</option>
              <option>Senior</option>
            </Select>
          </Field>
        </div>
      </fieldset>

      {/* Care details */}
      <fieldset className="space-y-5">
        <legend className="font-display text-xl font-semibold text-forest-900">
          Care & Health
        </legend>
        <Field
          label="Routine & preferences"
          htmlFor="i-routine"
          hint="Feeding times, walk preferences, favorite games, quirks."
        >
          <Textarea id="i-routine" name="routine" />
        </Field>
        <Field
          label="Medical needs & medications"
          htmlFor="i-medical"
          hint="Allergies, conditions, medication schedule, vet name & phone."
        >
          <Textarea id="i-medical" name="medical" />
        </Field>
        <Field
          label="Behavior notes"
          htmlFor="i-behavior"
          hint="Reactivity, anxiety, how they greet new people, resource guarding, etc."
        >
          <Textarea id="i-behavior" name="behavior" />
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Emergency contact" htmlFor="i-emergency">
            <Input id="i-emergency" name="emergency" />
          </Field>
          <Field label="Veterinary clinic" htmlFor="i-vet">
            <Input id="i-vet" name="vet" />
          </Field>
        </div>
      </fieldset>

      <button
        type="submit"
        className="w-full rounded-full bg-forest-800 px-7 py-4 text-sm font-semibold text-cream shadow-soft transition-all hover:-translate-y-0.5 hover:bg-forest-700"
      >
        Submit Pet Profile
      </button>
    </form>
  );
}
