import { site } from "./site";

/**
 * Form submission plumbing shared by the client forms and the /api/submit
 * route handler. Submissions are emailed via Resend (https://resend.com).
 *
 * Required environment variable for delivery:
 *   RESEND_API_KEY       – your Resend API key
 * Optional overrides:
 *   CONTACT_TO_EMAIL     – where leads are sent (defaults to site.email)
 *   CONTACT_FROM_EMAIL   – verified sender (defaults to Resend's test sender)
 */

export type FormType = "booking" | "contact" | "intake" | "newsletter";

export interface SubmissionPayload {
  formType: FormType;
  fields: Record<string, string>;
}

/** Human-readable labels + display order per form type. */
const FIELD_LABELS: Record<FormType, Record<string, string>> = {
  booking: {
    name: "Name",
    phone: "Phone",
    email: "Email",
    city: "City",
    service: "Service of Interest",
    start: "Preferred Start",
    notes: "About the Pet",
  },
  contact: {
    name: "Name",
    phone: "Phone",
    email: "Email",
    message: "Message",
  },
  intake: {
    owner: "Owner Name",
    phone: "Phone",
    email: "Email",
    address: "Address",
    petName: "Pet's Name",
    breed: "Species / Breed",
    age: "Age",
    weight: "Weight",
    lifeStage: "Life Stage",
    routine: "Routine & Preferences",
    medical: "Medical Needs & Medications",
    behavior: "Behavior Notes",
    emergency: "Emergency Contact",
    vet: "Veterinary Clinic",
  },
  newsletter: {
    email: "Email",
  },
};

const SUBJECTS: Record<FormType, string> = {
  booking: "New Meet & Greet request",
  contact: "New contact message",
  intake: "New pet intake submission",
  newsletter: "New newsletter signup",
};

/** Minimal required fields for server-side validation. */
export const REQUIRED_FIELDS: Record<FormType, string[]> = {
  booking: ["name", "phone", "email", "city", "service"],
  contact: ["name", "email", "message"],
  intake: ["owner", "phone", "email", "petName"],
  newsletter: ["email"],
};

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function subjectFor(formType: FormType): string {
  return `${SUBJECTS[formType]} — ${site.name}`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Render a submission as a simple, readable HTML email. */
export function renderEmailHtml(payload: SubmissionPayload): string {
  const labels = FIELD_LABELS[payload.formType];
  const rows = Object.entries(labels)
    .map(([key, label]) => {
      const value = (payload.fields[key] ?? "").trim();
      if (!value) return "";
      return `
        <tr>
          <td style="padding:8px 12px;font-weight:600;color:#213c33;vertical-align:top;white-space:nowrap;">${escapeHtml(
            label
          )}</td>
          <td style="padding:8px 12px;color:#1f2624;">${escapeHtml(value).replace(
            /\n/g,
            "<br/>"
          )}</td>
        </tr>`;
    })
    .join("");

  return `
  <div style="font-family:Inter,Arial,sans-serif;background:#faf7f1;padding:24px;">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #dfe9e3;">
      <div style="background:#213c33;padding:20px 24px;">
        <p style="margin:0;color:#d5a047;font-size:12px;letter-spacing:1px;text-transform:uppercase;">${site.name}</p>
        <h1 style="margin:6px 0 0;color:#faf7f1;font-size:20px;">${escapeHtml(
          SUBJECTS[payload.formType]
        )}</h1>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${rows}
      </table>
      <div style="padding:16px 24px;border-top:1px solid #dfe9e3;color:#5f927c;font-size:12px;">
        Submitted via ${site.url}
      </div>
    </div>
  </div>`;
}
