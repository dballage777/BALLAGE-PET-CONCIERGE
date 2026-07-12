"use client";

import { useState, type ReactNode } from "react";

/**
 * Renders an image if it loads, otherwise an elegant fallback. This lets us
 * reference real photo paths (e.g. /gallery/oz-1.jpg) before the files exist —
 * the fallback shows until the photo is added, then the photo appears
 * automatically with no code change.
 */
export default function ImageWithFallback({
  src,
  alt,
  className = "",
  fallback,
}: {
  src?: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
}) {
  const [errored, setErrored] = useState(false);
  if (!src || errored) return <>{fallback}</>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
