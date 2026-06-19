"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type FadeInProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "none";
};

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  ...props
}: FadeInProps) {
  const offset = direction === "up" ? 20 : direction === "down" ? -20 : 0;

  return (
    <motion.div
      initial={{ y: offset, opacity: 1 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -20px 0px" }}
      transition={{ duration: 0.5, delay, ease }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ y: 18, opacity: 1 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -20px 0px" }}
      transition={{ duration: 0.5, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type FadeInMediaProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

/** Scroll-triggered fade for app mockups and media — keeps text FadeIn opacity-safe. */
export function FadeInMedia({
  children,
  delay = 0,
  direction = "up",
  className,
  ...props
}: FadeInMediaProps) {
  const offset = 28;
  const x =
    direction === "left" ? -offset : direction === "right" ? offset : 0;
  const y =
    direction === "up" ? offset : direction === "down" ? -offset : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -48px 0px" }}
      transition={{ duration: 0.75, delay, ease }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
