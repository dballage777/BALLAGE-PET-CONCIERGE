interface VideoProps {
  src: string;
  className?: string;
  /** Muted autoplay loop (for ambient tiles) vs. click-to-play with controls. */
  autoLoop?: boolean;
  poster?: string;
}

export default function Video({
  src,
  className = "",
  autoLoop = false,
  poster,
}: VideoProps) {
  if (autoLoop) {
    return (
      <video
        className={className}
        src={src}
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        aria-hidden
      />
    );
  }
  return (
    <video
      className={className}
      src={src}
      controls
      playsInline
      preload="metadata"
      poster={poster}
    />
  );
}
