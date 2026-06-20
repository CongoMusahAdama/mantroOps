import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

const SUCCESS_FACTORS = [
  {
    title: "Simple enough for the field",
    description:
      "Technicians have to use it every day on site. If the mobile app is slow or complicated, nothing else matters.",
  },
  {
    title: "Real adoption, not shelfware",
    description:
      "Success means engineering firms using MantroOps daily on real jobs — not signing up and forgetting it.",
  },
  {
    title: "Pricing that fits Ghana",
    description:
      "Affordable in GHS, practical to onboard, and worth it for mid-size firms without enterprise budgets.",
  },
] as const;

export function SuccessSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What success looks like"
          title="The idea is solid — execution is what matters"
          highlight="execution"
          description="MantroOps addresses a real gap. These are the things we are building toward from day one."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <StaggerContainer className="mt-12 grid gap-4 md:grid-cols-3">
          {SUCCESS_FACTORS.map((item, index) => (
            <StaggerItem key={item.title} delay={index * 0.08}>
              <Card className="h-full">
                <h3 className="font-display text-lg text-foggy sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foggy">
                  {item.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
