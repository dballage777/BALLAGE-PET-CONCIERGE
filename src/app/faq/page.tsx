import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Section from "@/components/shared/Section";
import FaqAccordion from "@/components/shared/FaqAccordion";
import CTASection from "@/components/shared/CTASection";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { faqs, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about insurance, safety, Meet & Greets, daily updates, and how Ballage Dog Care cares for dogs across New Albany, Clarksville & Southern Indiana.",
  alternates: { canonical: "/faq" },
};

const categories: FaqItem["category"][] = [
  "Trust & Safety",
  "Getting Started",
  "Visits & Updates",
  "Logistics",
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ])}
      />
      <PageHero
        eyebrow="Questions & Answers"
        title="Everything you want to know"
        subtitle="Trusting someone with your family member is a big decision. Here are honest answers to the questions dog owners ask us most."
      />

      <Section className="bg-cream">
        <div className="mx-auto max-w-3xl space-y-12">
          {categories.map((category) => {
            const items = faqs.filter((f) => f.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category}>
                <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
                  {category}
                </h2>
                <FaqAccordion items={items} />
              </div>
            );
          })}
        </div>
      </Section>

      <CTASection
        title="Still have a question?"
        subtitle="We'd love to hear from you. Reach out anytime — there's no such thing as too many questions when it comes to your dog."
      />
    </>
  );
}
