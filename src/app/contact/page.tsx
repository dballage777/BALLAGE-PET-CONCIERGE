import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceArea from "@/components/shared/ServiceArea";
import Icon from "@/components/shared/Icon";
import JsonLd from "@/components/shared/JsonLd";
import BookingForm from "@/components/forms/BookingForm";
import ContactForm from "@/components/forms/ContactForm";
import PetIntakeForm from "@/components/forms/PetIntakeForm";
import NewsletterSignup from "@/components/forms/NewsletterSignup";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Book a Meet & Greet",
  description:
    "Book a complimentary Meet & Greet with Ballage Dog Care. Serving New Albany, Clarksville, Sellersburg, Jeffersonville, Floyds Knobs & the Louisville metro.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Get in Touch"
        title="Let's meet your family member"
        subtitle="Every relationship starts with a complimentary Meet & Greet. Reach out and we'll take it from there — no obligation, just a conversation."
      />

      {/* Contact details */}
      <Section className="bg-white">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: "clock" as const,
              title: "Call or Text",
              value: site.phone,
              href: site.phoneHref,
            },
            {
              icon: "report" as const,
              title: "Email",
              value: site.email,
              href: `mailto:${site.email}`,
            },
            {
              icon: "location" as const,
              title: "Service Area",
              value: site.areaLabel,
            },
          ].map((c) => (
            <div
              key={c.title}
              className="flex items-start gap-4 rounded-2xl border border-forest-100 bg-cream p-6"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest-800 text-gold-400">
                <Icon name={c.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-forest-900">
                  {c.title}
                </p>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-sm text-forest-700 transition-colors hover:text-gold-600"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm text-forest-700">{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Booking form */}
      <Section id="booking" className="bg-cream">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Book a Meet & Greet"
              title="Request your complimentary visit"
              description="Tell us a little about you and your dog. We'll reach out to schedule your Meet & Greet and start building a personalized care plan."
            />
            <div className="mt-8 rounded-2xl border border-forest-100 bg-white p-6">
              <p className="font-display text-lg font-semibold text-forest-900">
                What to expect
              </p>
              <ol className="mt-4 space-y-3 text-sm text-forest-700">
                {[
                  "We reach out within one business day.",
                  "We schedule an in-home Meet & Greet at your convenience.",
                  "We build a care plan tailored to your dog.",
                  "You relax — with Daily Paw Reports after every visit.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-500 text-xs font-bold text-forest-950">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="rounded-3xl border border-forest-100 bg-white p-6 shadow-soft sm:p-8">
            <BookingForm />
          </div>
        </div>
      </Section>

      {/* Dog intake questionnaire */}
      <Section id="intake" className="bg-white">
        <SectionHeading
          eyebrow="Dog Intake Questionnaire"
          title="Tell us about your dog"
          description="Already booked, or ready to share the details? This intake helps us build a complete, thoughtful care plan — the foundation of your dog's future profile."
        />
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-forest-100 bg-cream p-6 shadow-card sm:p-10">
          <PetIntakeForm />
        </div>
      </Section>

      {/* General contact */}
      <Section className="bg-cream">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Questions?"
              title="Send us a message"
              description="Not ready to book yet? Have a question about our services or service area? We'd love to hear from you."
            />
            <div className="mt-8 rounded-2xl border border-forest-100 bg-white p-6">
              <p className="mb-3 font-semibold text-forest-900">
                Join our newsletter
              </p>
              <p className="mb-4 text-sm text-forest-700/80">
                Seasonal dog-care tips, local updates, and the occasional
                adorable client photo.
              </p>
              <NewsletterSignup />
            </div>
          </div>
          <div className="rounded-3xl border border-forest-100 bg-white p-6 shadow-soft sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Section>

      <ServiceArea className="bg-white" />
    </>
  );
}
