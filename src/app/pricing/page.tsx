import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import Icon from "@/components/shared/Icon";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import {
  packages,
  addOns,
  bundles,
  pricingIntro,
  weeklyDiscountNote,
  travelNote,
  launchOffer,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing & Packages",
  description:
    "Simple, competitive pricing for dog walking, drop-in visits, puppy care, senior care, and vacation care across Southern Indiana & the Louisville metro. Founding Family launch offer available now.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ])}
      />
      <PageHero
        eyebrow="Pricing & Packages"
        title="Premium care, honest pricing"
        subtitle={pricingIntro}
      />

      {/* Launch offer */}
      <section className="bg-gold-500">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-800">
                {launchOffer.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-forest-950">
                {launchOffer.title}
              </h2>
              <p className="mt-3 text-forest-900/80">{launchOffer.subtitle}</p>
              <p className="mt-4 text-xs text-forest-900/70">
                {launchOffer.finePrint}
              </p>
            </div>
            <ul className="space-y-3 rounded-2xl bg-cream/80 p-6">
              {launchOffer.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-forest-900">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-800 text-gold-400">
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.4}
                      aria-hidden
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Packages & Bundles */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Packages & Bundles"
          title="Save more with recurring care"
          description="Popular bundles for regular clients — better value, and a routine your dog can count on."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bundles.map((bundle) => (
            <div
              key={bundle.name}
              className={`flex flex-col rounded-2xl border p-6 shadow-card ${
                bundle.highlight
                  ? "border-gold-300 bg-gold-50 ring-1 ring-gold-300"
                  : "border-forest-100 bg-white"
              }`}
            >
              {bundle.badge && (
                <span className="mb-3 inline-flex w-fit rounded-full bg-gold-500 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-forest-950">
                  {bundle.badge}
                </span>
              )}
              <h3 className="font-display text-lg font-semibold text-forest-900">
                {bundle.name}
              </h3>
              <p className="mt-1">
                <span className="font-display text-2xl font-semibold text-forest-900">
                  {bundle.price}
                </span>{" "}
                <span className="text-xs text-forest-500">{bundle.unit}</span>
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-700/80">
                {bundle.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl rounded-xl bg-white px-5 py-3 text-center text-sm text-forest-700 ring-1 ring-forest-100">
          🚗 <span className="font-semibold">Travel:</span> {travelNote}
        </p>
      </Section>

      {/* Per-service pricing */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="À La Carte Pricing"
          title="Every service, clearly priced"
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {packages.map((pkg) => (
            <div
              key={pkg.serviceName}
              className="flex flex-col rounded-3xl border border-forest-100 bg-white p-8 shadow-card"
            >
              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl ${
                    pkg.accent === "gold"
                      ? "bg-gold-100 text-gold-700"
                      : "bg-forest-100 text-forest-700"
                  }`}
                >
                  <Icon name={pkg.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-forest-900">
                    {pkg.serviceName}
                    {pkg.trademark && (
                      <span className="align-super text-xs text-forest-400">
                        ™
                      </span>
                    )}
                  </h3>
                  {pkg.note && (
                    <p className="text-xs font-medium uppercase tracking-wide text-gold-600">
                      {pkg.note}
                    </p>
                  )}
                </div>
              </div>

              <ul className="flex-1 divide-y divide-forest-100">
                {pkg.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-4 py-4"
                  >
                    <div>
                      <p className="font-semibold text-forest-900">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-sm text-forest-700/80">
                        {item.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="font-display text-lg font-semibold text-forest-900">
                        {item.price}
                      </p>
                      {item.unit && (
                        <p className="text-xs text-forest-500">{item.unit}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800 transition-colors hover:text-gold-600"
              >
                Learn about {pkg.serviceName}
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-10 rounded-3xl border border-forest-100 bg-white p-8 shadow-card">
          <h3 className="font-display text-xl font-semibold text-forest-900">
            Add-ons &amp; what&apos;s always included
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {addOns.map((item) => (
              <div key={item.name} className="rounded-2xl bg-cream p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-semibold text-forest-900">{item.name}</p>
                  <p className="font-display font-semibold text-gold-700">
                    {item.price}
                  </p>
                </div>
                <p className="mt-2 text-sm text-forest-700/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-xl bg-forest-50 px-4 py-3 text-sm font-medium text-forest-800">
            💚 {weeklyDiscountNote}
          </p>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-forest-600/80">
          Prices are starting rates for the Southern Indiana &amp; Louisville
          metro area. Your exact plan is tailored to your dog&apos;s needs at
          your free Meet &amp; Greet — no obligation, no surprises.
        </p>
      </Section>

      <CTASection
        title="Ready to build your dog's care plan?"
        subtitle="Start with a complimentary Meet & Greet and ask about our Founding Family Offer."
      />
    </>
  );
}
