import Link from "next/link";
import { site } from "@/lib/site";

/** Wordmark logo with an inline paw monogram — no image asset required. */
export default function Logo({ inverted = false }: { inverted?: boolean }) {
  const textColor = inverted ? "text-cream" : "text-forest-900";
  const subColor = inverted ? "text-cream/70" : "text-forest-600/70";
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label={`${site.name} — home`}
    >
      <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-800 text-gold-400 ring-1 ring-forest-700 transition-transform group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="currentColor"
          aria-hidden
        >
          <circle cx="7" cy="8.5" r="1.7" />
          <circle cx="12" cy="6.6" r="1.7" />
          <circle cx="17" cy="8.5" r="1.7" />
          <path d="M12 11.5c-2.6 0-4.7 1.9-4.7 4.1 0 1.7 1.4 2.7 3.1 2.7.9 0 1.1-.3 1.6-.3s.7.3 1.6.3c1.7 0 3.1-1 3.1-2.7 0-2.2-2.1-4.1-4.7-4.1Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-semibold ${textColor}`}>
          Ballage
        </span>
        <span
          className={`text-[0.65rem] font-medium uppercase tracking-[0.22em] ${subColor}`}
        >
          Dog Care
        </span>
      </span>
    </Link>
  );
}
