import Link from "next/link";
import { site, serviceAreas, navLinks } from "@/lib/site";
import { services } from "@/lib/services";
import Logo from "./Logo";
import NewsletterSignup from "@/components/forms/NewsletterSignup";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forest-950 text-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo inverted />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
              {site.positioning} Serving {site.areaLabel}.
            </p>
            <p className="mt-5 font-display text-lg text-gold-300">
              {site.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    className="transition-colors hover:text-gold-300"
                  >
                    {s.trademark ? `${s.name}™` : s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks
                .filter((l) => !("children" in l) || !l.children)
                .map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="transition-colors hover:text-gold-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
            </ul>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-cream">
              Service Area
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              {serviceAreas.map((a) => (
                <li key={a.city}>
                  {a.city}, {a.state}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">
              Stay in Touch
            </h3>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-gold-300"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-gold-300"
                >
                  {site.email}
                </a>
              </p>
            </div>
            <div className="mt-6">
              <p className="mb-3 text-sm text-cream/70">
                Get seasonal dog-care tips and local updates.
              </p>
              <NewsletterSignup variant="footer" />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-forest-800 pt-8 text-xs text-cream/60 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            {site.name} — {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
