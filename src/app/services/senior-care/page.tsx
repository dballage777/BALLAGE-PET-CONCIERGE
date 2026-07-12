import type { Metadata } from "next";
import ServiceDetail from "@/components/shared/ServiceDetail";
import { getService } from "@/lib/services";

const service = getService("senior-care")!;

export const metadata: Metadata = {
  title: "Senior Companion Care™ — Gentle Care for Senior Dogs",
  description:
    "Senior Companion Care™ offers mobility support, medication reminders, and gentle companionship for senior dogs across Southern Indiana and the Louisville metro.",
  alternates: { canonical: service.href },
};

export default function SeniorCarePage() {
  return <ServiceDetail service={service} />;
}
