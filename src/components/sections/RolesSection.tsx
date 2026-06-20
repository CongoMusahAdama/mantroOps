import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { SectionPhoto } from "@/components/ui/SectionPhoto";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { Laptop, Smartphone } from "lucide-react";

const ROLES = [
  {
    role: "For managers",
    image: "/images/manager-office.png",
    imageAlt: "Engineering manager reviewing maintenance operations on a laptop",
    items: [
      "Web dashboard on office laptops for setup, oversight, and reporting",
      "Full visibility across assets and work orders",
      "Approval workflows with clear accountability",
      "Maintenance oversight across all job types",
      "Oversight of your firm's safety and permit requirements",
      "Compliance-ready reports and exports",
    ],
  },
  {
    role: "For technicians",
    image: "/images/field-technician-site.png",
    imageAlt: "Field technician working at an industrial site with mobile tools",
    items: [
      "Offline mobile app for assigned phones and tablets on site",
      "Simple task list — what to do, where, and when",
      "Mobile-friendly interface built for field use",
      "Follow your firm's safety checklists and hazard notes on site",
      "Quick updates without paperwork",
    ],
  },
] as const;

export function RolesSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="For your team"
          title="Built for managers and technicians alike"
          highlight="technicians"
          description="Web for managers in the office. Mobile offline for technicians on site. One system — two experiences."
          align="center"
          className="max-w-2xl"
        />

        <StaggerContainer className="mt-12 grid gap-5 lg:grid-cols-2">
          {ROLES.map((group, index) => (
            <StaggerItem key={group.role} delay={index * 0.08}>
              <Card className="h-full overflow-hidden p-0">
                <SectionPhoto
                  src={group.image}
                  alt={group.imageAlt}
                  aspect="video"
                  flush
                  direction={index === 0 ? "right" : "left"}
                />
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-xl text-foggy sm:text-2xl">{group.role}</h3>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-foggy"
                      >
                        <span className="mt-2 h-1 w-4 shrink-0 rounded-full bg-papaya/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-10">
          <div className="rounded-2xl border border-border bg-white px-6 py-6 sm:px-8 sm:py-7">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-papaya">
              Dedicated work devices
            </p>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-foggy">
              Firms can configure assigned laptops and phones to run MantroOps as
              their primary work tool — a focused web dashboard for managers and an
              offline mobile app for technicians. Each device becomes a work terminal
              for your team, not a general-purpose machine.
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              <div className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-foggy">
                <Laptop size={16} className="shrink-0 text-verdemar" strokeWidth={1.75} />
                Manager laptops — web dashboard
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-foggy">
                <Smartphone size={16} className="shrink-0 text-verdemar" strokeWidth={1.75} />
                Field phones — offline mobile app
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
