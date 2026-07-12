import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Icon from "@/components/shared/Icon";
import Video from "@/components/shared/Video";
import Link from "next/link";

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
      {/* Featured: meet Oz */}
      <div className="mt-14 grid items-center gap-8 rounded-3xl border border-forest-100 bg-white p-6 shadow-card lg:grid-cols-2 lg:p-8">
        <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl bg-forest-950">
          <Video
            src="/videos/oz-hello.mp4"
            autoLoop
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
            Meet Oz
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-forest-900">
            The reason we do this
          </h3>
          <p className="mt-3 leading-relaxed text-forest-700/85">
            Oz is our nine-year-old Heeler-Lab mix and the heart of the Ballage
            family — the “real boy” who inspires the way we care for every pet
            we meet. Come say hello and meet the whole pack.
          </p>
          <Link
            href="/about#pack"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800 transition-colors hover:text-gold-600"
          >
            Meet the Ballage pack
            <svg
              className="h-4 w-4 transition-transform"
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
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
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
