import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import ImageWithFallback from "@/components/shared/ImageWithFallback";
import { caregivers } from "@/lib/family";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Caregivers() {
  return (
    <Section className="bg-cream">
      <SectionHeading
        eyebrow="Meet Your Caregivers"
        title="The family behind Ballage"
        description="When you trust us with your pet, you're trusting real people who treat your family member like their own. Here's who we are."
      />
      <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2">
        {caregivers.map((person) => (
          <div
            key={person.name}
            className="flex flex-col items-center rounded-3xl border border-forest-100 bg-cream p-8 text-center shadow-card"
          >
            <div className="h-32 w-32 overflow-hidden rounded-full ring-4 ring-white shadow-soft">
              <ImageWithFallback
                src={person.photo}
                alt={person.name}
                className="h-full w-full object-cover"
                fallback={
                  <div className="grid h-full w-full place-items-center bg-forest-800 font-display text-3xl font-semibold text-gold-400">
                    {initials(person.name)}
                  </div>
                }
              />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-forest-900">
              {person.name}
            </h3>
            <p className="text-sm font-medium uppercase tracking-wide text-gold-600">
              {person.role}
            </p>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-forest-700/85">
              {person.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
