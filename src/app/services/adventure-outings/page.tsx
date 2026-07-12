import type { Metadata } from "next";
import ServiceDetail from "@/components/shared/ServiceDetail";
import { getService } from "@/lib/services";

const service = getService("adventure-outings")!;

export const metadata: Metadata = {
  title: "Adventure Outings™ — Dog Hikes & Trail Adventures",
  description:
    "Adventure Outings™ takes active adult dogs beyond the block — trail hikes, sniffaris, and one-on-one exploring across Southern Indiana and the Louisville metro.",
  alternates: { canonical: service.href },
};

export default function AdventureOutingsPage() {
  return <ServiceDetail service={service} />;
}
