"use client";

import { motion } from "framer-motion";
import { CircledWord, isHighlightedWord } from "@/components/ui/CircledWord";

const ease = [0.22, 1, 0.36, 1] as const;

const headerVariants = {
  hidden: { y: 14, opacity: 1 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease,
      staggerChildren: 0.06,
      delayChildren: 0.03,
    },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 1 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease },
  },
};

const titleGroupVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.02,
    },
  },
};

const titleWordVariants = {
  hidden: { y: 8, opacity: 1 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease },
  },
};

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

function TitleWord({
  word,
  highlight,
  index,
}: {
  word: string;
  highlight?: string;
  index: number;
}) {
  const punctuation = word.match(/[.,!?;:]+$/)?.[0] ?? "";
  const core = punctuation ? word.slice(0, -punctuation.length) : word;
  const circled = isHighlightedWord(core, highlight);

  return (
    <motion.span variants={titleWordVariants} className="mr-[0.3em] inline-block last:mr-0">
      {circled ? (
        <CircledWord size="md" delay={0.1 + index * 0.03}>
          {core}
        </CircledWord>
      ) : (
        core
      )}
      {punctuation}
    </motion.span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const alignClass = isCenter ? "text-center mx-auto" : "text-left";
  const lineOrigin = isCenter ? "origin-center" : "origin-left";
  const titleWords = title.split(" ");

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -20px 0px" }}
      variants={headerVariants}
      className={`max-w-2xl ${alignClass} ${className}`}
    >
      {eyebrow && (
        <motion.div
          variants={itemVariants}
          className={isCenter ? "flex flex-col items-center" : ""}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-papaya">
            {eyebrow}
          </p>
          <span className={`mt-3 block h-px w-10 bg-papaya/70 ${lineOrigin}`} />
        </motion.div>
      )}

      <motion.h2
        variants={titleGroupVariants}
        className={`font-display text-3xl font-medium leading-snug tracking-tight text-foggy sm:text-4xl sm:leading-snug ${
          eyebrow ? "mt-5" : ""
        }`}
      >
        {titleWords.map((word, index) => (
          <TitleWord key={`${word}-${index}`} word={word} highlight={highlight} index={index} />
        ))}
      </motion.h2>

      {description && (
        <p className="mt-4 text-base leading-relaxed text-foggy sm:text-lg">
          {description}
        </p>
      )}
    </motion.header>
  );
}
