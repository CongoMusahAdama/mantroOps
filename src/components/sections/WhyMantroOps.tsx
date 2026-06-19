import {
  Coins,
  MessageCircle,
  Smartphone,
  WifiOff,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { COMPARISON_ROWS, PAIN_POINTS } from "@/lib/constants";

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

        <FadeIn className="mt-14">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-papaya">
                Where we win
              </p>
              <h3 className="mt-2 font-display text-2xl text-foggy sm:text-3xl">
                Built for adoption, not shelfware
              </h3>
            </div>
            <p className="max-w-sm text-sm text-foggy">
              We meet teams where they already are — on WhatsApp, with local vendors,
              and paying in Cedis.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-white">
            <div className="hidden grid-cols-[1.1fr_1.4fr_1.4fr] border-b border-border bg-surface text-xs font-semibold uppercase tracking-wide text-foggy sm:grid">
              <div className="px-5 py-3">Factor</div>
              <div className="border-l border-border px-5 py-3">Global tools</div>
              <div className="border-l border-border bg-papaya-soft px-5 py-3 text-papaya">
                mantroOps
              </div>
            </div>

            <div className="divide-y divide-border">
              {COMPARISON_ROWS.map((row) => (
                <div
                  key={row.factor}
                  className="grid gap-3 p-5 sm:grid-cols-[1.1fr_1.4fr_1.4fr] sm:gap-0 sm:p-0"
                >
                  <p className="text-sm font-semibold text-foggy sm:px-5 sm:py-4">
                    {row.factor}
                  </p>
                  <p className="text-sm leading-relaxed text-foggy sm:border-l sm:border-border sm:px-5 sm:py-4">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-foggy/50 sm:hidden">
                      Global tools
                    </span>
                    {row.global}
                  </p>
                  <p className="rounded-xl border border-verdemar/20 bg-verdemar-soft px-4 py-3 text-sm font-medium leading-relaxed text-verdemar sm:rounded-none sm:border-0 sm:px-5 sm:py-4">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-verdemar/70 sm:hidden">
                      mantroOps
                    </span>
                    {row.mantro}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
