"use client";

import { Field, Input, Textarea, Select, SuccessCard, Honeypot, ErrorNote } from "./fields";
import { useFormSubmit } from "./useFormSubmit";

/**
 * Detailed pet intake questionnaire. This is the foundation of the future
 * pet-profile / client-portal architecture — the fields map cleanly to a
 * PetProfile record. Submissions POST to /api/submit and are emailed via Resend.
 */
export default function PetIntakeForm() {
  const { handleSubmit, submitting, success, error } = useFormSubmit("intake");

  if (success) {
    return (
      <SuccessCard
        title="Dog profile started"
        message="Thank you for the details! We'll review your dog's profile and follow up to finalize the care plan."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Honeypot />
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

      {/* Dog basics */}
      <fieldset className="space-y-5">
        <legend className="font-display text-xl font-semibold text-forest-900">
          About Your Dog
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Dog's name" htmlFor="i-pet" required>
            <Input id="i-pet" name="petName" required />
          </Field>
          <Field label="Breed" htmlFor="i-breed">
            <Input id="i-breed" name="breed" placeholder="e.g. Labrador mix" />
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
              <option>Puppy</option>
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

      <ErrorNote message={error} />
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-forest-800 px-7 py-4 text-sm font-semibold text-cream shadow-soft transition-all hover:-translate-y-0.5 hover:bg-forest-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Submitting…" : "Submit Dog Profile"}
      </button>
    </form>
  );
}
