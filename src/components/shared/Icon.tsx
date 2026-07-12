import type { IconName } from "@/types";

interface IconProps {
  name: IconName;
  className?: string;
}

/**
 * Inline SVG icon set — no external dependency, fully controllable stroke color.
 * Icons use currentColor so they inherit text color from the parent.
 */
export default function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "paw":
      return (
        <svg {...common}>
          <circle cx="7" cy="8.5" r="1.6" />
          <circle cx="12" cy="6.5" r="1.6" />
          <circle cx="17" cy="8.5" r="1.6" />
          <path d="M12 12c-2.5 0-4.5 1.8-4.5 3.9 0 1.6 1.3 2.6 3 2.6.8 0 1-.3 1.5-.3s.7.3 1.5.3c1.7 0 3-1 3-2.6C16.5 13.8 14.5 12 12 12Z" />
        </svg>
      );
    case "puppy":
      return (
        <svg {...common}>
          <path d="M4 9c0-2 1.5-3.5 2.5-3.5S8 7 8 7l1.5-.5c1.5-.5 3.5-.5 5 0L16 7s.5-1.5 1.5-1.5S20 7 20 9c0 1-.5 1.5-.5 2.5 0 3.5-2.5 6.5-7.5 6.5S4.5 15 4.5 11.5C4.5 10.5 4 10 4 9Z" />
          <circle cx="9.5" cy="11" r=".8" fill="currentColor" stroke="none" />
          <circle cx="14.5" cy="11" r=".8" fill="currentColor" stroke="none" />
          <path d="M11 14.5h2" />
        </svg>
      );
    case "senior":
      return (
        <svg {...common}>
          <path d="M12 21c-4-3-7-6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4-3 7-7 10Z" />
          <path d="M9.5 11.5s.8 1 2.5 1 2.5-1 2.5-1" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20s-6.5-4.3-9-8.4C1.4 8.9 2.6 5.5 6 5.5c2 0 3.2 1.3 4 2.4.8-1.1 2-2.4 4-2.4 3.4 0 4.6 3.4 3 6.1-2.5 4.1-9 8.3-9 8.3Z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "report":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h4" />
        </svg>
      );
    case "location":
      return (
        <svg {...common}>
          <path d="M12 21c4-4 7-7.4 7-11a7 7 0 1 0-14 0c0 3.6 3 7 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 1.5" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
          <circle cx="12" cy="13" r="3.2" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M20 4S8 4 5 11c-2 4.5 1 8 4 8 6 0 11-8 11-15Z" />
          <path d="M11 13c2.5-2.5 5-3.5 5-3.5" />
        </svg>
      );
    default:
      return null;
  }
}
