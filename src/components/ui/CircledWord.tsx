"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const padding = {
  sm: { x: 5, y: 3 },
  md: { x: 6, y: 4 },
  lg: { x: 8, y: 5 },
} as const;

function buildEllipsePath(width: number, height: number): string {
  const cx = width / 2;
  const cy = height / 2;
  const rx = Math.max(width / 2 - 2, 1);
  const ry = Math.max(height / 2 - 2, 1);

  return `M ${cx} ${cy - ry} A ${rx} ${ry} 0 1 1 ${cx - 0.01} ${cy - ry}`;
}

type CircledWordProps = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  delay?: number;
  animateOnMount?: boolean;
};

export function CircledWord({
  children,
  className = "",
  size = "md",
  delay = 0,
  animateOnMount = false,
}: CircledWordProps) {
  const prefersReducedMotion = useReducedMotion();
  const textRef = useRef<HTMLSpanElement>(null);
  const [dims, setDims] = useState({ width: 0, height: 0 });
  const isInView = useInView(textRef, { once: true, amount: 0.5, margin: "0px" });

  useLayoutEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const update = () => {
      const { width, height } = element.getBoundingClientRect();
      if (width > 0 && height > 0) {
        setDims({ width: Math.ceil(width), height: Math.ceil(height) });
      }
    };

    update();
    document.fonts?.ready.then(update).catch(() => undefined);

    const observer = new ResizeObserver(update);
    observer.observe(element);

    return () => observer.disconnect();
  }, [children]);

  const pad = padding[size];
  const svgWidth = Math.ceil(dims.width + pad.x * 2);
  const svgHeight = Math.ceil(dims.height + pad.y * 2);
  const ringPath = dims.width > 0 ? buildEllipsePath(svgWidth, svgHeight) : "";
  const shouldDraw = animateOnMount || isInView;

  const strokeWidth = size === "lg" ? 2 : size === "md" ? 1.85 : 1.65;

  const drawTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.85, delay, ease };

  const pathVariants: Variants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: drawTransition },
  };

  return (
    <span
      className={`relative isolate inline-block align-baseline ${className}`}
      style={{ marginInline: "0.1em" }}
    >
      {ringPath && (
        <svg
          className="pointer-events-none absolute inset-0 overflow-visible"
          width={svgWidth}
          height={svgHeight}
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d={ringPath}
            stroke="#F1583B"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            animate={shouldDraw ? "visible" : "hidden"}
          />
        </svg>
      )}
      <span ref={textRef} className="relative z-10 inline-block whitespace-nowrap">
        {children}
      </span>
    </span>
  );
}

export function normalizeWord(word: string) {
  return word.replace(/[.,!?;:—–-]/g, "").toLowerCase();
}

export function isHighlightedWord(word: string, highlight?: string) {
  if (!highlight) return false;
  return normalizeWord(word) === highlight.toLowerCase();
}
