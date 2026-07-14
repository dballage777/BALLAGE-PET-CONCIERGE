import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

const points = [
  {
    title: "Genuine relationships",
    body: "We build long-term relationships with your dog and your family — not one-off visits. Consistency and trust are the foundation of great care.",
  },
  {
    title: "One-on-one attention",
    body: "Every visit is personal and unhurried. Your dog is never one of a crowd; the whole visit is theirs.",
  },
  {
    title: "Complete transparency",
    body: "Photos, videos, and detailed notes after every visit mean you always know exactly how your dog's day went.",
  },
  {
    title: "Care for every stage",
    body: "From energetic puppies to adventurous adults and gentle seniors, we're here for the whole journey.",
  },
];

export default function WhyBallage() {
  return (
    <Section className="bg-white">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
            Why Ballage
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-forest-900 sm:text-4xl">
            Your dog is family. They deserve more than someone stopping by.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-forest-700/80">
            Ballage Pet Concierge was built on a simple belief: the dogs we
            love are members of the family, and their care should feel that way.
            We bring professionalism, compassion, and consistency to every
            visit — so you can be fully present in your life, knowing your dog
            is truly cared for.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              Our Story
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-forest-100 bg-cream p-6"
            >
              <h3 className="font-display text-lg font-semibold text-forest-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-700/80">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
