import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

/** Consistent interior-page hero band. */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-forest-700 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-gold-700/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-28 lg:px-8">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
