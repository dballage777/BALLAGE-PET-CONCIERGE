import Link from "next/link";
import type { Service } from "@/types";
import Icon from "./Icon";

export default function ServiceCard({ service }: { service: Service }) {
  const accentRing =
    service.accent === "gold"
      ? "group-hover:ring-gold-300"
      : "group-hover:ring-forest-300";
  const iconWrap =
    service.accent === "gold"
      ? "bg-gold-100 text-gold-700"
      : "bg-forest-100 text-forest-700";

  return (
    <Link
      href={service.href}
      className={`group relative flex flex-col rounded-2xl border border-forest-100 bg-white p-8 shadow-card ring-1 ring-transparent transition-all duration-200 hover:-translate-y-1 hover:shadow-soft ${accentRing}`}
    >
      <div
        className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${iconWrap}`}
      >
        <Icon name={service.icon} className="h-7 w-7" />
      </div>
      <h3 className="font-display text-xl font-semibold text-forest-900">
        {service.name}
        {service.trademark && (
          <span className="align-super text-xs text-forest-400">™</span>
        )}
      </h3>
      <p className="mt-1 text-sm font-medium text-gold-600">
        {service.tagline}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-700/80">
        {service.shortDescription}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800 transition-colors group-hover:text-gold-600">
        Learn more
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
