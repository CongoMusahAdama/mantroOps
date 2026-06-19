"use client";

import { CircledWord } from "@/components/ui/CircledWord";
import { FadeIn } from "@/components/motion/FadeIn";
import { MaintenanceSchedulePreview } from "@/components/sections/MaintenanceSchedulePreview";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border pt-[11.5rem] pb-16 sm:pt-[12rem] sm:pb-24">
      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16 xl:px-12">
        <div className="max-w-xl lg:pt-4">
          <FadeIn delay={0.05}>
            <h1 className="font-display text-[2.35rem] leading-[1.08] font-medium tracking-tight text-foggy sm:text-5xl lg:text-[3.15rem]">
              <CircledWord size="lg" animateOnMount delay={0.45}>
                Maintenance
              </CircledWord>{" "}
              that works where your team works.
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-foggy sm:text-[1.05rem]">
              The first maintenance platform built for how African engineering teams
              actually work — assets, work orders, maintenance, safety, approvals,
              and reporting in one system that works online and offline.
            </p>
          </FadeIn>

          <FadeIn delay={0.28}>
            <p className="mt-6 border-l-2 border-papaya/40 pl-4 text-sm leading-relaxed text-foggy">
              Building for teams who keep things running.
              <span className="mt-1 block font-medium text-foggy">
                Development begins July 2026 · Launch planned for 2027, God willing.
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={0.36}>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foggy">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-papaya" />
                Built for field teams
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-verdemar" />
                Works offline
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-foggy/40" />
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
