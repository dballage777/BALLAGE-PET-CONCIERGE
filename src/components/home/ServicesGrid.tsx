import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import { services } from "@/lib/services";

export default function ServicesGrid() {
  return (
    <Section className="bg-cream">
      <SectionHeading
        eyebrow="Our Services"
        title="Concierge care for every chapter"
        description="Thoughtful, professional services designed around your pet's needs — from their first adventures to their most tender moments."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </Section>
  );
}
