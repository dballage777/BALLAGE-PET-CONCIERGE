import Button from "@/components/shared/Button";

/**
 * Empathy section that speaks directly to the emotional reality of leaving a
 * pet — owner guilt and anxiety are among the strongest feelings pet parents
 * carry. This reframes that worry into reassurance, which is what makes a care
 * brand feel genuinely warm rather than transactional.
 */
export default function PeaceOfMind() {
  return (
    <section className="relative overflow-hidden bg-forest-950 text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-forest-800 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-gold-700/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-24 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
          We understand
        </p>
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Leaving them is hard. We make it easier.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
          That little pull at your heart when you walk out the door? It means
          you&apos;re a wonderful dog parent. You shouldn&apos;t have to choose
          between your day and your dog&apos;s happiness — and with Ballage, you
          don&apos;t. While you&apos;re away, they&apos;re walked, loved, and
          cared for like family, and you see every happy moment through their
          Daily Paw Report.
        </p>
        <p className="mx-auto mt-6 max-w-2xl font-display text-xl italic text-gold-200">
          Go live your life. We&apos;ve got them.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact#booking" variant="primary">
            Schedule a Meet &amp; Greet
          </Button>
          <Button
            href="/faq"
            variant="ghost"
            className="!border-forest-600 !text-cream hover:!bg-forest-800"
          >
            Read Common Questions
          </Button>
        </div>
      </div>
    </section>
  );
}
