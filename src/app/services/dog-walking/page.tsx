import type { Metadata } from "next";
import ServiceDetail from "@/components/shared/ServiceDetail";
import { getService } from "@/lib/services";

const service = getService("dog-walking")!;

export const metadata: Metadata = {
  title: "Daily Pet Concierge — Dog Walking & Drop-In Visits",
  description:
    "Professional dog walking, drop-in visits, and vacation care in New Albany, Clarksville, Jeffersonville & across Southern Indiana. Personalized, reliable, and reported daily.",
  alternates: { canonical: service.href },
};

export default function DogWalkingPage() {
  return <ServiceDetail service={service} />;
}
