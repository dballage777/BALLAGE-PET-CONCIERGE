import type { Metadata } from "next";
import ServiceDetail from "@/components/shared/ServiceDetail";
import { getService } from "@/lib/services";

const service = getService("final-journey-care")!;

export const metadata: Metadata = {
  title: "Final Journey Care™ — Compassionate End-of-Life Support",
  description:
    "Final Journey Care™ helps families create peaceful, meaningful final moments with comfort visits, last adventures, transportation support, and family support.",
  alternates: { canonical: service.href },
};

export default function FinalJourneyCarePage() {
  return <ServiceDetail service={service} />;
}
