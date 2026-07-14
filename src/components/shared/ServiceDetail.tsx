import Link from "next/link";
import Section from "@/components/shared/Section";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import Icon from "@/components/shared/Icon";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { services } from "@/lib/services";
import type { Service } from "@/types";

export default function ServiceDetail({ service }: { service: Service }) {
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd data={serviceSchema(service.slug)!} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          {
            name: service.trademark ? `${service.name}™` : service.name,
            href: service.href,
          },
        ])}
      />

      <PageHero
        eyebrow={service.trademark ? `${service.name}™` : "Our Services"}
        title={service.heroHeadline}
        subtitle={service.heroSubcopy}
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-lg font-medium text-gold-600">
              {service.tagline}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-forest-800">
              {service.intro}
            </p>

            {service.note && (
              <div className="mt-6 rounded-2xl border border-gold-300 bg-gold-50 p-5">
                <p className="text-sm leading-relaxed text-forest-800">
                  {service.note}
                </p>
              </div>
            )}

            <h2 className="mt-12 font-display text-2xl font-semibold text-forest-900">
              What&apos;s included
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {service.features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-forest-100 bg-cream p-6"
                >
                  <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-forest-800 text-gold-400">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-forest-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-700/80">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl border border-forest-100 bg-forest-50 p-6">
                <h3 className="font-display text-lg font-semibold text-forest-900">
                  Ideal for
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.idealFor.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-forest-800">
                      <Icon
                        name="paw"
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold-600"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-forest-100 bg-white p-6 shadow-card">
                <h3 className="font-display text-lg font-semibold text-forest-900">
                  Every plan includes
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-forest-800">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-forest-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.2}
                        aria-hidden
                      >
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact#booking"
                  className="mt-6 block rounded-full bg-gold-500 px-6 py-3 text-center text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
                >
                  Schedule a Meet &amp; Greet
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Explore other services */}
      <Section className="bg-cream">
        <h2 className="font-display text-2xl font-semibold text-forest-900">
          Explore more of our care
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group flex items-start gap-4 rounded-2xl border border-forest-100 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-100 text-forest-700">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-forest-900 group-hover:text-gold-600">
                  {s.trademark ? `${s.name}™` : s.name}
                </h3>
                <p className="mt-1 text-sm text-forest-700/80">{s.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
