import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Section from "@/components/shared/Section";
import ServiceCard from "@/components/shared/ServiceCard";
import HowItWorks from "@/components/home/HowItWorks";
import CTASection from "@/components/shared/CTASection";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Pet Care Services in Southern Indiana",
  description:
    "Explore our premium pet care services: Daily Pet Concierge, Puppy Foundations™, Senior Companion Care™, and Final Journey Care™ — serving Southern Indiana & Louisville.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Our Services"
        title="Concierge care for every chapter of life"
        subtitle="From a puppy's first adventures to a senior's gentle days and the most tender final moments — thoughtful, professional care tailored to your pet."
      />

      <Section className="bg-cream">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <HowItWorks />
      <CTASection />
    </>
  );
}
