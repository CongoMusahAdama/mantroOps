"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { TIMELINE } from "@/lib/constants";

function TimelineDot({ status }: { status: (typeof TIMELINE)[number]["status"] }) {
  if (status === "active") {
    return (
      <motion.span
        className="relative flex h-3.5 w-3.5 items-center justify-center"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="absolute h-full w-full rounded-full bg-papaya/25" />
        <span className="relative h-2.5 w-2.5 rounded-full bg-papaya" />
      </motion.span>
    );
  }

  if (status === "upcoming") {
    return <span className="h-3 w-3 rounded-full border-2 border-papaya bg-white" />;
  }

  return <span className="h-3 w-3 rounded-full border-2 border-border bg-white" />;
}

export function Timeline() {
  return (
    <section id="timeline" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 xl:px-12">
        <SectionHeading
          eyebrow="Our journey"
          title="Building carefully, launching with purpose"
          highlight="purpose"
          description="We are taking our time to build it right — simple, reliable, and ready for the field."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="relative mx-auto mt-14 max-w-2xl">
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-px bg-border"
          />

          <StaggerContainer>
            {TIMELINE.map((item, index) => (
              <StaggerItem key={item.label} delay={index * 0.1}>
                <div className="relative flex gap-5 pb-10 last:pb-0">
                  <div className="relative z-10 mt-0.5 flex w-4 shrink-0 justify-center">
                    <TimelineDot status={item.status} />
                  </div>
                  <div className="min-w-0 flex-1 rounded-2xl border border-border bg-white px-5 py-4">
                    <p className="text-sm font-semibold text-papaya">{item.label}</p>
                    <h3 className="mt-1 font-display text-xl text-foggy">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-foggy">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <FadeIn className="mt-10 text-center">
          <p className="text-base text-foggy">
            We are building MantroOps for teams who deserve software that
            actually fits how they work.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
