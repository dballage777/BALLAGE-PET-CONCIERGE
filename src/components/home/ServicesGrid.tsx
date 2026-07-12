import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import Button from "@/components/shared/Button";
import { featuredServices } from "@/lib/services";

export default function ServicesGrid() {
  return (
    <Section className="bg-cream">
      <SectionHeading
        eyebrow="Our Services"
        title="Care for every stage of a dog's life"
        description="Thoughtful, professional care designed around your dog's needs — from a puppy's first lessons to a senior's gentle days."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredServices.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/services" variant="ghost">
          View All Services
        </Button>
      </div>
    </Section>
  );
}
