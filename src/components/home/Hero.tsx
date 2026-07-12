import Button from "@/components/shared/Button";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-950">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-forest-800/60 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gold-700/25 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #f5ebd2 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-28">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-forest-700 bg-forest-900/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-300">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {site.areaLabel}
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-cream sm:text-5xl lg:text-6xl">
            Professional Pet Care Through Every Stage of Life.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            {site.description}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact#booking" variant="primary">
              Schedule a Meet &amp; Greet
            </Button>
            <Button href="/services" variant="ghost" className="!border-forest-600 !text-cream hover:!bg-forest-800">
              Explore Services
            </Button>
          </div>
          <p className="mt-8 font-display text-lg italic text-gold-200/90">
            &ldquo;{site.positioning}&rdquo;
          </p>
        </div>

        {/* Visual panel */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div className="rounded-3xl border border-forest-700 bg-gradient-to-br from-forest-800 to-forest-900 p-8 shadow-soft">
              <div className="space-y-6">
                {[
                  {
                    stat: "Every stage",
                    label: "Puppy • Adult • Senior • Final Journey",
                  },
                  {
                    stat: "Daily Paw Reports",
                    label: "Photos, videos & notes after every visit",
                  },
                  {
                    stat: "Pet First Aid Certified",
                    label: "Trained, insured & genuinely caring",
                  },
                ].map((item) => (
                  <div
                    key={item.stat}
                    className="flex items-start gap-4 rounded-2xl bg-forest-950/40 p-4"
                  >
                    <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-500 text-forest-950">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.2}
                        aria-hidden
                      >
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold text-cream">
                        {item.stat}
                      </p>
                      <p className="text-sm text-cream/70">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-cream px-6 py-2.5 text-sm font-semibold text-forest-900 shadow-soft">
              {site.tagline}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
