"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  DraftingCompass,
  FileStack,
  Layers,
  MapPin,
  ShieldCheck,
  Sparkles,
  WifiOff,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURES, FEATURE_TIER_LABELS } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const ICONS = {
  layers: Layers,
  "drafting-compass": DraftingCompass,
  clipboard: ClipboardList,
  calendar: CalendarClock,
  "check-circle": CheckCircle2,
  "shield-check": ShieldCheck,
  "bar-chart": BarChart3,
  "map-pin": MapPin,
  "file-stack": FileStack,
  "wifi-off": WifiOff,
  sparkles: Sparkles,
} as const;

const TIER_STYLES = {
  core: "bg-papaya-soft text-papaya border-papaya/20",
  platform: "bg-verdemar-soft text-verdemar border-verdemar/20",
  industry: "bg-surface text-foggy border-border",
  phase2: "bg-surface text-foggy border-border",
  ai: "bg-foggy/10 text-foggy border-foggy/20",
} as const;

type Feature = (typeof FEATURES)[number];

function FeatureTierBadge({ tier }: { tier: Feature["tier"] }) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${TIER_STYLES[tier]}`}
    >
      {FEATURE_TIER_LABELS[tier]}
    </span>
  );
}

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

  return (
    <motion.button
      type="button"
      initial={{ y: 16, opacity: 1 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -30px 0px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      onClick={onSelect}
      aria-pressed={isActive}
      className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3.5 text-left transition-colors duration-200 sm:gap-4 sm:px-5 sm:py-4 ${
        isActive
          ? feature.tier === "core"
            ? "border-papaya/30 bg-white shadow-[0_8px_24px_-16px_rgba(79,78,79,0.18)]"
            : "border-verdemar/25 bg-white shadow-[0_8px_24px_-16px_rgba(79,78,79,0.18)]"
          : "border-transparent bg-transparent hover:border-border hover:bg-white/70"
      }`}
    >
      <span
        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors duration-200 ${
          isActive
            ? feature.tier === "core"
              ? "border-papaya/20 bg-papaya-soft text-papaya"
              : feature.tier === "ai"
                ? "border-foggy/20 bg-foggy/10 text-foggy"
                : "border-verdemar/20 bg-verdemar-soft text-verdemar"
            : "border-border bg-white text-foggy"
        }`}
      >
        <Icon size={18} strokeWidth={1.75} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="mb-1.5 block">
          <FeatureTierBadge tier={feature.tier} />
        </span>
        <span
          className={`block font-display text-base ${
            isActive ? "text-foggy" : "text-foggy/85"
          }`}
        >
          {feature.title}
        </span>
        <span className="mt-0.5 block text-sm leading-snug text-foggy line-clamp-2 lg:line-clamp-1">
          {feature.description}
        </span>
      </span>
    </motion.button>
  );
}

function FeatureChip({
  feature,
  isActive,
  onSelect,
}: {
  feature: Feature;
  isActive: boolean;
  onSelect: () => void;
}) {
  const Icon = ICONS[feature.icon];

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
        isActive
          ? feature.tier === "core"
            ? "border-papaya/30 bg-papaya-soft text-papaya"
            : "border-verdemar/30 bg-verdemar-soft text-verdemar"
          : "border-border bg-white text-foggy"
      }`}
    >
      <Icon size={16} strokeWidth={1.75} />
      {feature.title}
    </button>
  );
}

function FeatureDetail({ feature }: { feature: Feature }) {
  const Icon = ICONS[feature.icon];
  const iconStyle =
    feature.tier === "core"
      ? "border-papaya/20 bg-papaya-soft text-papaya"
      : feature.tier === "ai"
        ? "border-foggy/20 bg-foggy/10 text-foggy"
        : "border-verdemar/20 bg-verdemar-soft text-verdemar";

  return (
    <motion.div
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      exit={{ y: -6 }}
      transition={{ duration: 0.35, ease }}
      className={`rounded-2xl border bg-white p-5 sm:p-8 lg:p-10 ${
        feature.tier === "core" ? "border-papaya/20" : "border-border"
      }`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border sm:h-12 sm:w-12 ${iconStyle}`}
        >
          <Icon size={22} strokeWidth={1.75} />
        </span>
        <div className="min-w-0">
          <FeatureTierBadge tier={feature.tier} />
          <h3 className="mt-2 font-display text-xl text-foggy sm:text-2xl lg:text-[1.65rem]">
            {feature.title}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-foggy sm:mt-5 sm:text-base">
        {feature.description}
      </p>

      <div className="mt-5 border-t border-border pt-5 sm:mt-6 sm:pt-6">
        <p className="text-sm font-semibold text-foggy">What it will do</p>
        <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
          {feature.details.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-relaxed text-foggy"
            >
              <span
                className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                  feature.tier === "core" ? "bg-papaya" : "bg-verdemar"
                }`}
              />
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
  const coreCount = FEATURES.filter((f) => f.tier === "core").length;

  return (
    <section id="features" className="overflow-x-clip bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything your maintenance team needs"
          highlight="maintenance"
          description="A connected toolkit for assets, work orders, maintenance, safety, approvals, reporting, and field work — with core modules highlighted from our product foundation."
          align="center"
          className="max-w-2xl"
        />

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-foggy">
          <span className="font-semibold text-papaya">{coreCount} core modules</span>{" "}
          from our product doc are highlighted — all your existing features remain,
          with multi-site tracking, document attachments, and AI added.
        </p>

        {/* Mobile: detail on top, swipeable feature chips below */}
        <div className="mt-10 lg:hidden">
          <AnimatePresence mode="wait">
            <FeatureDetail key={activeFeature.title} feature={activeFeature} />
          </AnimatePresence>

          <div className="-mx-5 mt-4 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-2">
              {FEATURES.map((feature, index) => (
                <FeatureChip
                  key={feature.title}
                  feature={feature}
                  isActive={activeIndex === index}
                  onSelect={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: sidebar tabs + sticky detail */}
        <div className="mt-12 hidden gap-8 lg:grid lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-start">
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
            initial={{ y: 20, opacity: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -30px 0px" }}
            transition={{ duration: 0.6, ease }}
            className="sticky top-[calc(var(--nav-height)+1rem)]"
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
