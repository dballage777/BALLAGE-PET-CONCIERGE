import type { Review } from "@/types";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-gold-500" : "text-forest-200"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-forest-100 bg-white p-7 shadow-card">
      <Stars rating={review.rating} />
      <blockquote className="mt-4 flex-1 text-forest-800">
        <p className="leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-6 border-t border-forest-100 pt-4">
        <p className="font-semibold text-forest-900">{review.name}</p>
        <p className="text-sm text-forest-600/80">
          {review.location} • {review.petName}
        </p>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gold-600">
          {review.service}
        </p>
      </figcaption>
    </figure>
  );
}
