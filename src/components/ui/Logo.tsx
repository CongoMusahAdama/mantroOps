import Image from "next/image";

type LogoProps = {
  className?: string;
  height?: number;
  /** default: white wordmark for teal/dark backgrounds · light: foggy wordmark for white backgrounds */
  variant?: "default" | "light";
};

export function Logo({ className = "", height = 104, variant = "default" }: LogoProps) {
  const width = Math.round(height * (1536 / 1024));
  const src = variant === "light" ? "/logo.png" : "/image.png";

  return (
    <Image
      src={src}
      alt="MantroOps"
      width={width}
      height={height}
      className={`w-auto object-contain ${className}`}
      style={{ height }}
      priority
    />
  );
}
