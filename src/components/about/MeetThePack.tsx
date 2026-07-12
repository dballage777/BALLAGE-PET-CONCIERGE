import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Video from "@/components/shared/Video";
import ImageWithFallback from "@/components/shared/ImageWithFallback";
import Icon from "@/components/shared/Icon";
import { pack, type PackMember } from "@/lib/family";

function FeaturedDog({ dog }: { dog: PackMember }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-forest-100 bg-white shadow-soft">
      <div className="grid lg:grid-cols-2">
        {/* Media */}
        <div className="bg-forest-950 p-5 sm:p-6">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl bg-forest-800">
              <ImageWithFallback
                src={dog.photo}
                alt={dog.name}
                className="aspect-[4/5] w-full object-cover"
                fallback={
                  <div className="grid aspect-[4/5] w-full place-items-center text-gold-400">
                    <Icon name="paw" className="h-16 w-16" />
                  </div>
                }
              />
            </div>
            {dog.videos && dog.videos[0] && (
              <div className="overflow-hidden rounded-2xl bg-black">
                <Video
                  src={dog.videos[0]}
                  className="mx-auto max-h-[320px] w-full object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* Story */}
        <div className="p-8 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-wide text-gold-600">
            {dog.tagline}
          </p>
          <h3 className="mt-1 font-display text-3xl font-semibold text-forest-900">
            {dog.name}
          </h3>
          <p className="mt-1 text-forest-600">
            {[dog.breed, dog.age].filter(Boolean).join(" • ")}
          </p>

          {dog.badge && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-forest-100 px-4 py-1.5 text-xs font-semibold text-forest-700">
              <Icon name="shield" className="h-4 w-4" />
              {dog.badge}
            </p>
          )}

          <div className="mt-5 space-y-4 leading-relaxed text-forest-700/90">
            {dog.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {dog.loves && (
            <div className="mt-6">
              <p className="font-display text-lg font-semibold text-forest-900">
                A few of {dog.name}&apos;s favorite things
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {dog.loves.map((love) => (
                  <li
                    key={love}
                    className="flex items-start gap-2 text-sm text-forest-700"
                  >
                    <Icon
                      name="heart"
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-600"
                    />
                    {love}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {dog.commands && (
            <div className="mt-6 rounded-2xl bg-cream p-5">
              <p className="font-display text-lg font-semibold text-forest-900">
                Words only {dog.name} knows
              </p>
              <dl className="mt-3 space-y-2.5">
                {dog.commands.map((c) => (
                  <div key={c.phrase} className="text-sm">
                    <dt className="inline font-semibold text-gold-700">
                      &ldquo;{c.phrase}&rdquo;
                    </dt>
                    <dd className="inline text-forest-700"> — {c.meaning}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ComingSoonDog({ dog }: { dog: PackMember }) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-dashed border-forest-200 bg-cream p-8 text-center sm:flex-row sm:text-left">
      <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-soft">
        <ImageWithFallback
          src={dog.photo}
          alt={dog.name}
          className="h-full w-full object-cover"
          fallback={
            <div className="grid h-full w-full place-items-center bg-forest-800 text-gold-400">
              <Icon name="paw" className="h-10 w-10" />
            </div>
          }
        />
      </div>
      <div className="mt-4 sm:ml-6 sm:mt-0">
        <h3 className="font-display text-2xl font-semibold text-forest-900">
          {dog.name}
        </h3>
        <p className="text-sm font-medium uppercase tracking-wide text-gold-600">
          {dog.tagline}
        </p>
        <div className="mt-3 space-y-1 text-sm leading-relaxed text-forest-700/85">
          {dog.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MeetThePack() {
  const featured = pack.filter((d) => !d.comingSoon);
  const comingSoon = pack.filter((d) => d.comingSoon);

  return (
    <Section id="pack" className="bg-white">
      <SectionHeading
        eyebrow="Meet the Pack"
        title="The dogs who inspire us"
        description="Our own dogs are the reason we do this. They remind us every day what it means to love a dog like family."
      />
      <div className="mx-auto mt-14 max-w-5xl space-y-8">
        {featured.map((dog) => (
          <FeaturedDog key={dog.name} dog={dog} />
        ))}
        {comingSoon.map((dog) => (
          <ComingSoonDog key={dog.name} dog={dog} />
        ))}
      </div>
    </Section>
  );
}
