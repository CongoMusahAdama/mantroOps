"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Layers,
  ShieldCheck,
  WifiOff,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURES } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const ICONS = {
  layers: Layers,
  clipboard: ClipboardList,
  calendar: CalendarClock,
  "check-circle": CheckCircle2,
  "shield-check": ShieldCheck,
  "bar-chart": BarChart3,
  "wifi-off": WifiOff,
} as const;

const scrollDirections = [
  { x: -32, y: 16 },
  { x: 32, y: 16 },
  { x: 0, y: 28 },
] as const;

type Feature = (typeof FEATURES)[number];

function FeatureTab({
  feature,
  index,
  isActive,
  onSelect,
}: {
  feature: Feature;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  const Icon = ICONS[feature.icon];
  const direction = scrollDirections[index % scrollDirections.length];

  return (
    <motion.button
      type="button"
      initial={{ x: direction.x, y: direction.y }}
      whileInView={{ x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -30px 0px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease }}
      onClick={onSelect}
      aria-pressed={isActive}
      className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3.5 text-left transition-colors duration-200 sm:gap-4 sm:px-5 sm:py-4 ${
        isActive
          ? "border-papaya/25 bg-white shadow-[0_8px_24px_-16px_rgba(79,78,79,0.18)]"
          : "border-transparent bg-transparent hover:border-border hover:bg-white/70"
      }`}
    >
      <span
        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors duration-200 ${
          isActive
            ? "border-papaya/20 bg-papaya-soft text-papaya"
            : "border-border bg-white text-foggy"
        }`}
      >
        <Icon size={18} strokeWidth={1.75} />
      </span>
      <span className="min-w-0">
        <span
          className={`block font-display text-base ${
            isActive ? "text-foggy" : "text-foggy/85"
          }`}
        >
          {feature.title}
        </span>
        <span className="mt-0.5 block text-sm leading-snug text-foggy line-clamp-1">
          {feature.description}
        </span>
      </span>
    </motion.button>
  );
}

function FeatureDetail({ feature }: { feature: Feature }) {
  const Icon = ICONS[feature.icon];

  return (
    <motion.div
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      exit={{ y: -6 }}
      transition={{ duration: 0.35, ease }}
      className="rounded-2xl border border-border bg-white p-6 sm:p-8 lg:p-10"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-papaya/20 bg-papaya-soft text-papaya">
          <Icon size={22} strokeWidth={1.75} />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-verdemar">
            Planned capability
          </p>
          <h3 className="mt-1 font-display text-2xl text-foggy sm:text-[1.65rem]">
            {feature.title}
          </h3>
        </div>
      </div>

      <p className="mt-5 text-base leading-relaxed text-foggy">
        {feature.description}
      </p>

      <div className="mt-6 border-t border-border pt-6">
        <p className="text-sm font-semibold text-foggy">What it will do</p>
        <ul className="mt-4 space-y-3">
          {feature.details.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-relaxed text-foggy"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-verdemar" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = FEATURES[activeIndex];

  return (
    <section id="features" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything your maintenance team needs"
          highlight="maintenance"
          description="A connected toolkit for assets, work orders, maintenance, safety, approvals, reporting, and field work — configured to how your firm operates."
          align="center"
          className="max-w-2xl"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-start lg:gap-8">
          <div className="flex flex-col gap-1.5">
            {FEATURES.map((feature, index) => (
              <FeatureTab
                key={feature.title}
                feature={feature}
                index={index}
                isActive={activeIndex === index}
                onSelect={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <motion.div
            initial={{ x: 32 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -30px 0px" }}
            transition={{ duration: 0.6, ease }}
            className="lg:sticky lg:top-24"
          >
            <AnimatePresence mode="wait">
              <FeatureDetail key={activeFeature.title} feature={activeFeature} />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
