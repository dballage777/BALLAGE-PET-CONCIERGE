import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import Icon from "@/components/shared/Icon";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import type { IconName } from "@/types";

export const metadata: Metadata = {
  title: "About Ballage Pet Concierge",
  description:
    "Ballage Pet Concierge is a premium, locally owned pet care company serving Southern Indiana and the Louisville metro. Learn about our values, our promise, and our approach.",
  alternates: { canonical: "/about" },
};

const values: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "heart",
    title: "Compassion",
    body: "We treat every pet as our own and every family with warmth. Care, to us, is a feeling before it's a service.",
  },
  {
    icon: "shield",
    title: "Trust & Safety",
    body: "Pet First Aid certified, insured, and meticulous about your pet's wellbeing and your home's security.",
  },
  {
    icon: "report",
    title: "Transparency",
    body: "Daily Paw Reports and honest communication mean you're never left wondering how your pet is doing.",
  },
  {
    icon: "paw",
    title: "Consistency",
    body: "Dependable, familiar care builds real relationships — the kind pets and families can count on for years.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About Us"
        title="More than pet care. Peace of mind."
        subtitle={site.positioning}
      />

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
            Our Story
          </p>
          <div className="mt-4 space-y-6 text-lg leading-relaxed text-forest-800">
            <p>
              Ballage Pet Concierge was founded on a belief that anyone who has
              ever loved an animal understands instinctively:{" "}
              <strong className="font-semibold text-forest-900">
                our pets are family.
              </strong>{" "}
              They greet us at the door, curl up beside us on hard days, and give
              us their whole hearts. They deserve care that honors that bond.
            </p>
            <p>
              We saw too many families settling for someone who simply &ldquo;stops
              by.&rdquo; So we built something different — a premium, concierge
              approach to pet care rooted in professionalism, compassion, and
              genuine relationships. We care for pets at every stage of life,
              from a puppy&apos;s first wobbly walks to a senior&apos;s gentle
              days, and through the most tender final chapters.
            </p>
            <p>
              As a locally owned business serving {site.areaLabel}, we&apos;re not
              a faceless app or a rotating cast of strangers. We&apos;re your
              neighbors — the people who learn your pet&apos;s name, quirks, and
              favorite spots, and who show up with consistency and heart.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Our Values"
          title="What guides every visit"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-forest-100 bg-white p-7 shadow-card"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-forest-100 text-forest-700">
                <Icon name={v.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-forest-900">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-700/80">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-forest-900 text-cream">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">
            Our Promise
          </p>
          <blockquote className="mt-5 font-display text-2xl font-medium leading-relaxed sm:text-3xl">
            &ldquo;We don&apos;t just care for pets. We care for family members —
            with the professionalism you expect and the compassion they
            deserve.&rdquo;
          </blockquote>
          <p className="mt-6 text-cream/70">— The Ballage Pet Concierge Family</p>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
