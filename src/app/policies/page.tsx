import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Section from "@/components/shared/Section";
import CTASection from "@/components/shared/CTASection";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { policies, policiesIntro } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Policies & Service Agreement",
  description:
    "How Ballage Dog Care works: booking, cancellations, vaccination requirements, key handling, payments, and safety — simple, fair, and transparent.",
  alternates: { canonical: "/policies" },
};

export default function PoliciesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Policies", href: "/policies" },
        ])}
      />
      <PageHero
        eyebrow="Policies & Service Agreement"
        title="How we work — simple and fair"
        subtitle={policiesIntro}
      />

      <Section className="bg-cream">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {policies.map((policy) => (
            <div
              key={policy.title}
              className="rounded-2xl border border-forest-100 bg-white p-7 shadow-card"
            >
              <h2 className="font-display text-lg font-semibold text-forest-900">
                {policy.title}
              </h2>
              <div className="mt-3 space-y-2.5">
                {policy.body.map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-forest-700/85">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-forest-600/80">
          Have a question about any of this? We&apos;re happy to talk it through
          at your complimentary Meet &amp; Greet.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
