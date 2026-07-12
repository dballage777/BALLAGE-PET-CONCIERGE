import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Icon from "@/components/shared/Icon";

/**
 * "Happy Tails" gallery. Photo galleries of real client pets are the single
 * most persuasive trust signal for pet owners — more than any written
 * testimonial. These are styled placeholders; drop in real (permissioned)
 * client photos by replacing each tile's background with an <Image />.
 *
 * To add real photos: place files in /public/gallery and swap the gradient
 * <div> tiles below for <Image src="/gallery/your-photo.jpg" ... />.
 */

const tiles = [
  { from: "from-forest-300", to: "to-forest-500", caption: "Morning walks" },
  { from: "from-gold-200", to: "to-gold-400", caption: "Sunny naps" },
  { from: "from-forest-200", to: "to-forest-400", caption: "Puppy playtime" },
  { from: "from-gold-300", to: "to-gold-500", caption: "Best friends" },
  { from: "from-forest-400", to: "to-forest-600", caption: "Park adventures" },
  { from: "from-gold-200", to: "to-gold-300", caption: "Gentle senior days" },
  { from: "from-forest-300", to: "to-forest-500", caption: "Belly rubs" },
  { from: "from-gold-300", to: "to-gold-400", caption: "Tail wags" },
];

export default function HappyTails() {
  return (
    <Section className="bg-cream">
      <SectionHeading
        eyebrow="Happy Tails"
        title="The best part of our day"
        description="Real moments from the pets we're lucky to care for. Every wag, every sunny nap, every happy face — this is what peace of mind looks like."
      />
      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {tiles.map((tile, i) => (
          <div
            key={i}
            className={`group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${tile.from} ${tile.to} shadow-card`}
          >
            <div className="absolute inset-0 grid place-items-center opacity-40 transition-opacity group-hover:opacity-60">
              <Icon name="paw" className="h-10 w-10 text-cream" />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/60 to-transparent p-3">
              <p className="text-xs font-medium text-cream">{tile.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-forest-600/80">
        Follow along for daily doses of joy — real Happy Tails from our client
        families.
      </p>
    </Section>
  );
}
