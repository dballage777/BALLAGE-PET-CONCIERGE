import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import ReviewCard from "@/components/shared/ReviewCard";
import Button from "@/components/shared/Button";
import { reviews } from "@/lib/reviews";

export default function ReviewsPreview() {
  return (
    <Section className="bg-cream">
      <SectionHeading
        eyebrow="Kind Words"
        title="Trusted by Southern Indiana families"
        description="Real peace of mind, in the words of the families and pets we care for."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {reviews.slice(0, 3).map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/reviews" variant="ghost">
          Read More Reviews
        </Button>
      </div>
    </Section>
  );
}
