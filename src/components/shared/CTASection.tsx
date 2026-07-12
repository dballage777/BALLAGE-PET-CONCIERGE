import Button from "@/components/shared/Button";
import { site } from "@/lib/site";

interface CTAProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "Ready to give your dog the care they deserve?",
  subtitle = "Start with a complimentary Meet & Greet. No obligation — just a conversation about your dog and how we can help.",
}: CTAProps) {
  return (
    <section className="bg-gold-500">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8 lg:py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-forest-950 sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-forest-900/80">
          {subtitle}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact#booking" variant="secondary">
            Schedule a Meet &amp; Greet
          </Button>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-forest-900/30 px-7 py-3.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-forest-950/5"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
