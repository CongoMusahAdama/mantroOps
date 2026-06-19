"use client";

import { CircledWord } from "@/components/ui/CircledWord";
import { FadeIn } from "@/components/motion/FadeIn";
import { MaintenanceSchedulePreview } from "@/components/sections/MaintenanceSchedulePreview";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border pt-[calc(var(--nav-height)+env(safe-area-inset-top,0px)+1.5rem)] pb-12 sm:pb-16 md:pb-24">
      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16 xl:px-12">
        <div className="max-w-xl lg:pt-4">
          <FadeIn delay={0.05}>
            <h1 className="font-display text-[2.1rem] leading-[1.1] font-medium tracking-tight text-foggy sm:text-[2.35rem] sm:leading-[1.08] md:text-5xl lg:text-[3.15rem]">
              <CircledWord size="lg" animateOnMount delay={0.45}>
                Maintenance
              </CircledWord>{" "}
              that works where your team works.
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-foggy sm:mt-5 sm:text-base lg:text-[1.05rem]">
              The first maintenance platform built for how African engineering teams
              actually work — assets, work orders, maintenance, safety, approvals,
              and reporting in one system that works online and offline.
            </p>
          </FadeIn>

          <FadeIn delay={0.28}>
            <p className="mt-5 border-l-2 border-papaya/40 pl-4 text-sm leading-relaxed text-foggy sm:mt-6">
              Building for teams who keep things running.
              <span className="mt-1 block font-medium text-foggy">
                Development begins July 2026 · Launch planned for 2027, God willing.
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={0.36}>
            <ul className="mt-6 flex flex-col gap-2 text-sm text-foggy sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-papaya" />
                Built for field teams
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-verdemar" />
                Works offline
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foggy/40" />
                Safety and compliance built in
              </li>
            </ul>
          </FadeIn>
        </div>

        <MaintenanceSchedulePreview />
      </div>
    </section>
  );
}
