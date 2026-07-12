import type { Metadata } from "next";
import ServiceDetail from "@/components/shared/ServiceDetail";
import { getService } from "@/lib/services";

const service = getService("puppy-care")!;

export const metadata: Metadata = {
  title: "Puppy Foundations™ — Puppy Care & Socialization",
  description:
    "Puppy Foundations™ builds routine, socialization, exercise, and owner education for a confident, well-adjusted dog. Serving Sellersburg, New Albany & Southern Indiana.",
  alternates: { canonical: service.href },
};

export default function PuppyCarePage() {
  return <ServiceDetail service={service} />;
}
