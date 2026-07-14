import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Section from "@/components/shared/Section";
import ReviewCard from "@/components/shared/ReviewCard";
import CTASection from "@/components/shared/CTASection";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews & Testimonials",
  description:
    "See why Southern Indiana families trust Ballage Pet Concierge for dog walking, puppy care, adventure outings, and senior dog care.",
  alternates: { canonical: "/reviews" },
};

const avg =
  reviews.reduce((s, r) => s + r.rating, 0) / (reviews.length || 1);

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Reviews", href: "/reviews" },
        ])}
      />
      {/* AggregateRating schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: site.legalName,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: avg.toFixed(1),
            reviewCount: reviews.length,
            bestRating: 5,
          },
          review: reviews.map((r) => ({
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
              bestRating: 5,
            },
            author: { "@type": "Person", name: r.name },
            reviewBody: r.quote,
          })),
        }}
      />

      <PageHero
        eyebrow="Reviews"
        title="Kind words from families we serve"
        subtitle="Peace of mind, in the words of the Southern Indiana families and dogs who trust us with their care."
      />

      <Section className="bg-cream">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </Section>

      {/* Google reviews placeholder */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl rounded-3xl border border-dashed border-forest-200 bg-forest-50 p-10 text-center">
          <div className="mx-auto mb-4 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="h-6 w-6 text-gold-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
              </svg>
            ))}
          </div>
          <h2 className="font-display text-2xl font-semibold text-forest-900">
            Google Reviews
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-forest-700/80">
            Our verified Google reviews will appear here. This section is ready
            to connect to the Google Places / Business Profile API once the
            business profile is live.
          </p>
          <p className="mt-6 text-sm text-forest-500">
            {/*
              Integration note: drop in a Google Places API call or an embed
              widget here and map results to the <ReviewCard /> component above.
            */}
            Placeholder — Google reviews integration ready.
          </p>
        </div>
      </Section>

      <CTASection
        title="Become our next happy family"
        subtitle="Experience the Ballage difference for yourself. Start with a complimentary Meet & Greet."
      />
    </>
  );
}
