import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

const steps = [
  {
    number: "1",
    title: "Meet",
    body: "We start with a complimentary Meet & Greet — in your home, on your pet's turf. We learn their routine, personality, and needs, and you get to know us.",
  },
  {
    number: "2",
    title: "Plan",
    body: "Together we build a personalized care plan: the right visits, the right pace, and every detail that keeps your pet comfortable and happy.",
  },
  {
    number: "3",
    title: "Relax",
    body: "We handle the rest. You receive Daily Paw Reports after every visit — photos, videos, and notes — so you can truly relax with peace of mind.",
  },
];

export default function HowItWorks() {
  return (
    <Section className="bg-forest-900 text-cream">
      <SectionHeading
        eyebrow="How It Works"
        title={<span className="text-cream">Three simple steps to peace of mind</span>}
        description={
          <span className="text-cream/75">
            Getting started is easy. We do the work of earning your trust — and
            your pet&apos;s.
          </span>
        }
      />
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.number} className="relative">
            {i < steps.length - 1 && (
              <div className="absolute left-8 top-16 hidden h-[calc(100%-2rem)] w-px bg-forest-700 lg:hidden" />
            )}
            <div className="flex flex-col items-start">
              <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-gold-500 font-display text-2xl font-semibold text-gold-400">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-cream">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-cream/75">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
