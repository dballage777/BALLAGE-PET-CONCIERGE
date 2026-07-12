import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import Section from "@/components/shared/Section";
import CTASection from "@/components/shared/CTASection";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { blogPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Dog Care Blog — Tips for Southern Indiana Dog Owners",
  description:
    "Expert dog care advice for Southern Indiana and Louisville-area families: choosing a dog sitter, senior dog care, in-home dog care, and more.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ])}
      />
      <PageHero
        eyebrow="The Ballage Journal"
        title="Thoughtful dog care advice"
        subtitle="Guidance, tips, and stories to help Southern Indiana families care for the dogs they love — at every stage of life."
      />

      <Section className="bg-cream">
        {/* Featured */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid overflow-hidden rounded-3xl border border-forest-100 bg-white shadow-card transition-all hover:shadow-soft lg:grid-cols-2"
        >
          <div className="relative min-h-[240px] bg-gradient-to-br from-forest-800 to-forest-950 p-8">
            <span className="inline-flex rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-forest-950">
              Featured
            </span>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-sm text-cream/70">
                {featured.category} • {featured.readingTime}
              </p>
            </div>
          </div>
          <div className="p-8">
            <p className="text-sm text-forest-500">
              {formatDate(featured.date)}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-forest-900 group-hover:text-gold-600">
              {featured.title}
            </h2>
            <p className="mt-3 leading-relaxed text-forest-700/80">
              {featured.excerpt}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800 group-hover:text-gold-600">
              Read article
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </Link>

        {/* Rest */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-forest-100 bg-white p-7 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-gold-600">
                {post.category}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-forest-900 group-hover:text-gold-600">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-700/80">
                {post.excerpt}
              </p>
              <p className="mt-5 text-xs text-forest-500">
                {formatDate(post.date)} • {post.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
