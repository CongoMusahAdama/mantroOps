import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { SectionPhoto } from "@/components/ui/SectionPhoto";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

const POINTS = [
  {
    title: "Built for Ghana",
    description:
      "Designed around the reality of maintenance work in Ghanaian engineering firms — not generic global software.",
  },
  {
    title: "Simple by design",
    description:
      "Managers and technicians get a clear system without the complexity that slows teams down.",
  },
  {
    title: "Field-ready",
    description:
      "Works on site, not only in the office. Your team stays productive wherever the work happens.",
  },
  {
    title: "Records that matter",
    description:
      "Approvals, history, and reporting structured for accountability and compliance.",
  },
] as const;

export function Vision() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why MantroOps"
          title="Software that fits how maintenance actually runs"
          highlight="maintenance"
          description="Instead of forcing teams into complicated tools, MantroOps gives managers and technicians a straightforward system for the work they do every day."
        />

        <SectionPhoto
          src="/images/engineers-collaborating.png"
          alt="Engineering team collaborating at an industrial maintenance site"
          aspect="wide"
          className="mt-10"
          direction="none"
        />

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2">
          {POINTS.map((point, index) => (
            <StaggerItem key={point.title} delay={index * 0.06}>
              <Card className="h-full">
                <h3 className="font-display text-xl text-foggy">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foggy">
                  {point.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-10">
          <div className="rounded-2xl border border-border bg-white px-6 py-5 sm:px-8">
            <p className="text-base leading-relaxed text-foggy">
              Global maintenance platforms often assume perfect connectivity,
              large IT teams, and workflows that do not match local operations.
              MantroOps is being built to close that gap — with clarity, speed,
              and respect for how your teams actually work.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
