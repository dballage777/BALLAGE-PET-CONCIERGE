import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  fullWidth?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

const variants = {
  primary:
    "bg-gold-500 text-forest-950 shadow-soft hover:bg-gold-400 hover:-translate-y-0.5",
  secondary:
    "bg-forest-800 text-cream shadow-soft hover:bg-forest-700 hover:-translate-y-0.5",
  ghost:
    "border border-forest-300 text-forest-800 hover:border-forest-500 hover:bg-forest-50",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  fullWidth = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </Link>
  );
}
