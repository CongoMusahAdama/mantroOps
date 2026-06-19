"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { MaintenanceScheduleMobilePreview } from "@/components/sections/MaintenanceScheduleMobilePreview";

export function OfflineSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Offline-first"
              title="Maintenance does not stop when the network does"
              highlight="Maintenance"
              description="MantroOps is being designed so your technicians can keep working on site — capturing updates, completing checklists, and closing tasks without connectivity. Everything syncs when they are back online."
            />

            <FadeIn delay={0.15} className="mt-8 space-y-4">
              {[
                "Work continues without interruption on site",
                "Changes queue locally and sync automatically",
                "Managers see approved records once connected",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-foggy"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-verdemar" />
                  {item}
                </div>
              ))}
            </FadeIn>
          </div>

          <div className="flex justify-center lg:justify-end">
            <MaintenanceScheduleMobilePreview />
          </div>
        </div>
      </div>
    </section>
  );
}
