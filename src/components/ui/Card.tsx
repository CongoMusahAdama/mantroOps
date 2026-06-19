import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-white p-6 transition-colors duration-300 hover:border-border-strong ${className}`}
    >
      {children}
    </div>
  );
}
