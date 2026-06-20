import {
  Coins,
  MessageCircle,
  Smartphone,
  WifiOff,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { PAIN_POINTS } from "@/lib/constants";

const ICONS: Record<(typeof PAIN_POINTS)[number]["icon"], LucideIcon> = {
  "wifi-off": WifiOff,
  smartphone: Smartphone,
  "message-circle": MessageCircle,
  coins: Coins,
};

export function WhyMantroOps() {
  return (
    <section id="why-mantroops" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The gap we are closing"
          title="Why global software fails in Ghana"
          highlight="Ghana"
          description="The issue is not that software does not exist — it is that it does not get used. MantroOps is being built for mid-size Ghanaian contractors, service firms, and fabricators who manage critical equipment every day."
        />

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2">
          {PAIN_POINTS.map((point, index) => {
            const Icon = ICONS[point.icon];
            return (
              <StaggerItem key={point.title} delay={index * 0.06}>
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-papaya/20 bg-papaya-soft text-papaya">
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-foggy">{point.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foggy">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
