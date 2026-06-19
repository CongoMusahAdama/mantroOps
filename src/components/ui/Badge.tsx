import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "papaya" | "verdemar" | "neutral" | "light";
  className?: string;
};

const variants = {
  papaya: "bg-papaya-soft text-papaya border-papaya/20",
  verdemar: "bg-verdemar-soft text-verdemar border-verdemar/20",
  neutral: "bg-surface text-foggy border-border",
  light: "border-white/25 bg-white/15 text-white",
};

export function Badge({
  children,
  variant = "neutral",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
