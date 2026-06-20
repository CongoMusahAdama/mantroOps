import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { COMPARISON_ROWS, MARKET_APPROACHES } from "@/lib/constants";

export function CompareSection() {
  return (
    <section id="how-we-compare" className="overflow-x-clip bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How we compare"
          title="Maintenance software exists — built to be used"
          highlight="used"
          description="Global CMMS, enterprise EAM, industrial suites, and facility tools all solve parts of the problem. We are not competing on module count — we are competing on daily adoption by Ghanaian engineering teams."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2">
          {MARKET_APPROACHES.map((item, index) => (
            <StaggerItem key={item.label} delay={index * 0.06}>
              <Card className="flex h-full flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-foggy/55">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foggy">{item.summary}</p>
                <p className="mt-4 border-t border-border pt-4 text-sm font-medium leading-relaxed text-verdemar">
                  {item.mantro}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-14">
          <div className="mb-6 text-center sm:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-papaya">
              Side by side
            </p>
            <h3 className="mt-2 font-display text-2xl text-foggy sm:text-3xl">
              Where MantroOps wins
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-foggy">
              No competitor names — just the patterns we see across the market and how
              we are designing differently.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-white">
            <div className="hidden grid-cols-[1fr_1.35fr_1.35fr] border-b border-border bg-surface text-xs font-semibold uppercase tracking-wide text-foggy sm:grid">
              <div className="px-5 py-3">Factor</div>
              <div className="border-l border-border px-5 py-3">Typical alternatives</div>
              <div className="border-l border-border bg-papaya-soft px-5 py-3 text-papaya">
                mantroOps
              </div>
            </div>

            <div className="divide-y divide-border">
              {COMPARISON_ROWS.map((row) => (
                <div
                  key={row.factor}
                  className="grid gap-3 p-5 sm:grid-cols-[1fr_1.35fr_1.35fr] sm:gap-0 sm:p-0"
                >
                  <p className="text-sm font-semibold text-foggy sm:px-5 sm:py-4">
                    {row.factor}
                  </p>
                  <p className="text-sm leading-relaxed text-foggy sm:border-l sm:border-border sm:px-5 sm:py-4">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-foggy/50 sm:hidden">
                      Typical alternatives
                    </span>
                    {row.others}
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

        <FadeIn className="mt-10">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-foggy sm:text-base">
            <span className="font-semibold text-foggy">The idea is proven.</span> Firms
            already pay for maintenance software. MantroOps wins by being the simplest
            system a technician on site will open every morning — without giving up
            what engineers need: drawings, permits, and a proper audit trail.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
