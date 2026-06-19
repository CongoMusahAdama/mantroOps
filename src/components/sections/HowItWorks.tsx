"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { STEPS } from "@/lib/constants";

function StepDot({
  step,
  phase,
  isLast,
}: {
  step: string;
  phase: (typeof STEPS)[number]["phase"];
  isLast: boolean;
}) {
  const isField = phase === "Field";

  return (
    <span
      className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
        isLast
          ? "bg-verdemar text-white"
          : isField
            ? "bg-verdemar-soft text-verdemar ring-2 ring-verdemar/25"
            : "bg-papaya-soft text-papaya ring-2 ring-papaya/20"
      }`}
    >
      {isLast ? "↺" : step}
    </span>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="How maintenance work flows through your team"
          highlight="flows"
          description="A simple loop — plan in the office, work on site, approve, and repeat."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="relative mx-auto mt-12 max-w-xl sm:mt-14">
          <div
            aria-hidden="true"
            className="absolute top-4 bottom-4 left-4 w-px bg-border"
          />

          <StaggerContainer className="space-y-0">
            {STEPS.map((step, index) => {
              const prevPhase = index > 0 ? STEPS[index - 1].phase : null;
              const showPhaseLabel = prevPhase !== step.phase;

              return (
                <StaggerItem key={step.step} delay={index * 0.06}>
                  {showPhaseLabel && (
                    <p className="mb-4 pl-12 text-xs font-semibold uppercase tracking-[0.12em] text-foggy/60">
                      {step.phase === "Field" ? "In the field" : "In the office"}
                    </p>
                  )}

                  <div
                    className={`relative flex gap-4 ${index < STEPS.length - 1 ? "pb-8 sm:pb-9" : ""}`}
                  >
                    <StepDot
                      step={step.step}
                      phase={step.phase}
                      isLast={index === STEPS.length - 1}
                    />

                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="font-display text-lg text-foggy sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-foggy/80">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        <FadeIn className="mt-10 text-center">
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-foggy sm:text-base">
            Managers plan and oversee on the web. Technicians work offline on site.
            Every step feeds the next.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
