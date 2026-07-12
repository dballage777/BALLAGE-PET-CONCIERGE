import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Icon from "@/components/shared/Icon";
import { serviceAreas, site } from "@/lib/site";

/** Local-SEO service area grid, reused on Home and Contact. */
export default function ServiceArea({
  className = "bg-cream",
}: {
  className?: string;
}) {
  return (
    <Section className={className}>
      <SectionHeading
        eyebrow="Service Area"
        title="Proudly serving Southern Indiana"
        description={`Local, dependable pet care across ${site.areaLabel}. Not sure if we reach you? Just ask — we're happy to help.`}
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {serviceAreas.map((area) => (
          <div
            key={area.city}
            className="flex items-start gap-4 rounded-2xl border border-forest-100 bg-white p-6 shadow-card"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest-100 text-forest-700">
              <Icon name="location" className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-forest-900">
                {area.city}, {area.state}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-forest-700/80">
                {area.blurb}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
