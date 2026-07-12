import type { Metadata } from "next";
import ServiceDetail from "@/components/shared/ServiceDetail";
import { getService } from "@/lib/services";

const service = getService("vet-rides")!;

export const metadata: Metadata = {
  title: "Vet Visit Rides — Dog Transportation to the Vet",
  description:
    "Safe, caring dog transportation to and from vet appointments across Southern Indiana and the Louisville metro. Round-trip rides or stay-through-appointment support.",
  alternates: { canonical: service.href },
};

export default function VetRidesPage() {
  return <ServiceDetail service={service} />;
}
