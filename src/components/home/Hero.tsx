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

        {/* Visual panel — meet Oz */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div className="overflow-hidden rounded-3xl border border-forest-700 shadow-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gallery/oz-1.jpg"
                alt="Oz, a nine-year-old Heeler-Lab mix, enjoying the sunshine"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            {/* Floating trust chip */}
            <div className="absolute -left-3 top-6 flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-xs font-semibold text-forest-900 shadow-soft sm:-left-5">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-forest-800 text-gold-400">
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  aria-hidden
                >
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </span>
              Pet First Aid Certified
            </div>
            {/* Tagline badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold-500 px-6 py-2.5 text-sm font-semibold text-forest-950 shadow-soft">
              {site.tagline}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
