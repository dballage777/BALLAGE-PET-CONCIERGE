import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import {
  REQUIRED_FIELDS,
  EMAIL_REGEX,
  renderEmailHtml,
  subjectFor,
  type FormType,
  type SubmissionPayload,
} from "@/lib/forms";

const VALID_TYPES: FormType[] = ["booking", "contact", "intake", "newsletter"];

/**
 * Receives form submissions and emails them to the business via Resend.
 *
 * Delivery requires RESEND_API_KEY. Without it the submission is logged
 * server-side and the request still succeeds, so the UX works in local dev —
 * but no email is sent. Set the key in production to receive leads.
 */
export async function POST(request: Request) {
  let body: SubmissionPayload & { company?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { formType, fields } = body ?? {};

  // Honeypot: bots fill the hidden "company" field. Silently accept & drop.
  if (fields?.company) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  if (!formType || !VALID_TYPES.includes(formType) || typeof fields !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  // Validate required fields.
  const missing = REQUIRED_FIELDS[formType].filter(
    (key) => !fields[key] || !String(fields[key]).trim()
  );
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required fields." },
      { status: 422 }
    );
  }
  if (fields.email && !EMAIL_REGEX.test(String(fields.email))) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;
  // Resend's onboarding sender works out of the box for testing; swap to a
  // verified domain sender (e.g. hello@ballagepetconcierge.com) in production.
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Ballage Dog Care <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn(
      `[submit] RESEND_API_KEY not set — ${formType} submission received but not emailed:`,
      fields
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: fields.email ? String(fields.email) : undefined,
        subject: subjectFor(formType),
        html: renderEmailHtml({ formType, fields }),
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[submit] Resend error:", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your message. Please call or email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[submit] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
