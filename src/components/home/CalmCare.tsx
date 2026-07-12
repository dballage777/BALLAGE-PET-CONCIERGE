import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";
import type { IconName } from "@/types";

const points: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "heart",
    title: "We move at their pace",
    body: "No forcing, no flooding. We read your dog's body language and never push past their comfort — trust is earned slowly and gently.",
  },
  {
    icon: "shield",
    title: "Low-stress handling",
    body: "Calm energy, positive reinforcement, and careful management of triggers keep visits safe and reassuring for nervous dogs.",
  },
  {
    icon: "paw",
    title: "One-on-one, always",
    body: "Your dog is never thrown into a group or a chaotic daycare. Every visit is private, predictable, and built around them.",
  },
];

/**
 * Anxious/reactive dogs are one of the most underserved needs among dog owners
 * (see r/reactivedogs). Very few local sitters market to them — this section
 * positions Ballage as the calm, low-stress choice.
 */
export default function CalmCare() {
  return (
    <Section className="bg-white">
      <div className="rounded-3xl bg-forest-900 px-8 py-12 text-cream sm:px-12 sm:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            Anxious &amp; Reactive Dogs Welcome
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Nervous, shy, or reactive? You&apos;ve found the right people.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/85">
            Some dogs need a little extra patience — and they deserve someone who
            gets that. We specialize in calm, gentle, low-stress care for dogs who
            find the world a bit overwhelming, so anxious pups (and their worried
            humans) can finally relax.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-forest-950/50 p-6 text-center"
            >
              <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-gold-500 text-forest-950">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg font-semibold text-cream">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/75">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/contact#booking" variant="primary">
            Tell Us About Your Dog
          </Button>
        </div>
      </div>
    </Section>
  );
}
