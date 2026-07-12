import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/shared/Section";
import CTASection from "@/components/shared/CTASection";
import JsonLd from "@/components/shared/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { blogPosts, getPost, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ])}
      />

      <article>
        <header className="bg-forest-900 text-cream">
          <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-cream/70 transition-colors hover:text-gold-300"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              All articles
            </Link>
            <p className="mt-6 text-sm font-medium uppercase tracking-wide text-gold-300">
              {post.category}
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-5 text-sm text-cream/70">
              {formatDate(post.date)} • {post.readingTime} • {post.author}
            </p>
          </div>
        </header>

        <Section className="bg-white">
          <div className="mx-auto max-w-3xl">
            <p className="text-xl leading-relaxed text-forest-800">
              {post.excerpt}
            </p>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-forest-700">
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-forest-100 bg-cream p-8 text-center">
              <p className="font-display text-xl font-semibold text-forest-900">
                Looking for trusted dog care in Southern Indiana?
              </p>
              <p className="mx-auto mt-2 max-w-lg text-forest-700/80">
                Ballage Dog Care is here for every stage of your dog&apos;s
                life. Start with a complimentary Meet &amp; Greet.
              </p>
              <Link
                href="/contact#booking"
                className="mt-6 inline-flex rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
              >
                Schedule a Meet &amp; Greet
              </Link>
            </div>
          </div>
        </Section>
      </article>

      {related.length > 0 && (
        <Section className="bg-cream">
          <h2 className="font-display text-2xl font-semibold text-forest-900">
            Keep reading
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-2xl border border-forest-100 bg-white p-7 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-gold-600">
                  {p.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-forest-900 group-hover:text-gold-600">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-forest-700/80">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
