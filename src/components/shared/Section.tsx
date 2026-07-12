import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

/** Standard vertical rhythm + max-width container used across the site. */
export default function Section({
  children,
  className = "",
  id,
  containerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
