import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import WhyBallage from "@/components/home/WhyBallage";
import ServicesGrid from "@/components/home/ServicesGrid";
import PeaceOfMind from "@/components/home/PeaceOfMind";
import HowItWorks from "@/components/home/HowItWorks";
import PawReports from "@/components/home/PawReports";
import ReviewsPreview from "@/components/home/ReviewsPreview";
import ServiceArea from "@/components/shared/ServiceArea";
import CTASection from "@/components/shared/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyBallage />
      <PeaceOfMind />
      <HowItWorks />
      <PawReports />
      <ReviewsPreview />
      <ServiceArea className="bg-white" />
      <CTASection />
    </>
  );
}
