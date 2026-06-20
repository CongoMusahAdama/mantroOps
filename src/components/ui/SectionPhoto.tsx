"use client";

import Image from "next/image";
import { FadeInMedia } from "@/components/motion/FadeIn";

type SectionPhotoProps = {
  src: string;
  alt: string;
  className?: string;
  aspect?: "video" | "wide" | "square" | "portrait";
  priority?: boolean;
  direction?: "up" | "down" | "left" | "right" | "none";
  flush?: boolean;
};

const aspectClasses = {
  video: "aspect-video",
  wide: "aspect-video sm:aspect-[2.4/1]",
  square: "aspect-square",
  portrait: "aspect-[4/5] sm:aspect-[3/4]",
} as const;

export function SectionPhoto({
  src,
  alt,
  className = "",
  aspect = "video",
  priority = false,
  direction = "up",
  flush = false,
}: SectionPhotoProps) {
  const frameClass = flush
    ? "relative overflow-hidden bg-surface"
    : "relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_20px_50px_-28px_rgba(79,78,79,0.25)]";

  return (
    <FadeInMedia direction={direction} className={className}>
      <div className={`${frameClass} ${aspectClasses[aspect]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
          className="object-cover object-center"
        />
      </div>
    </FadeInMedia>
  );
}
