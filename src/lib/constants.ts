export const NAV_LINKS = [
  { label: "Why MantroOps", href: "#why-mantroops" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Timeline", href: "#timeline" },
  { label: "FAQ", href: "#faq" },
] as const;

export const FEATURES = [
  {
    title: "Asset tracking",
    description:
      "Equipment history, locations, and documents in one place — always accessible to your team.",
    icon: "layers" as const,
    details: [
      "Register equipment with serial numbers and site locations",
      "View complete maintenance history per asset",
      "Attach manuals, photos, and compliance documents",
      "Track assets across multiple facilities",
    ],
  },
  {
    title: "Work orders",
    description:
      "Create, assign, and close work orders from the office or directly from site.",
    icon: "clipboard" as const,
    details: [
      "Create and assign tasks to technicians instantly",
      "Your firm's pre-job safety checklists before work begins",
      "Track status from open to in progress to closed",
      "Add notes, photos, and parts used on site",
      "Managers get real-time visibility on every job",
    ],
  },
  {
    title: "Maintenance",
    description:
      "Plan, schedule, and track maintenance across your assets — whatever type the job requires.",
    icon: "calendar" as const,
    details: [
      "Preventive — scheduled upkeep to avoid breakdowns",
      "Corrective — repairs after equipment failure, including urgent jobs",
      "Predictive — work triggered by usage or condition",
      "Safety steps from your procedures, tied to each maintenance type",
    ],
  },
  {
    title: "Safety & permits",
    description:
      "Every engineering firm has its own safety procedures. MantroOps lets you configure and follow yours — not a generic one-size-fits-all checklist.",
    icon: "shield-check" as const,
    details: [
      "Configure your firm's own safety checklists and permit rules",
      "Link lockout/tagout (LOTO) steps to assets the way your team works",
      "Apply your permit-to-work process for high-risk maintenance jobs",
      "Capture hazard notes and PPE requirements your procedures define",
    ],
  },
  {
    title: "Approvals",
    description:
      "Clear approval workflows with a full audit trail for accountability.",
    icon: "check-circle" as const,
    details: [
      "Define who approves what — by role or site",
      "Full audit trail of every decision",
      "Pending items surfaced for managers",
      "Accountability built into every workflow",
    ],
  },
  {
    title: "Reporting",
    description:
      "Compliance-ready records and exportable reports when you need them.",
    icon: "bar-chart" as const,
    details: [
      "Export records for audits and compliance",
      "Summary views across assets and sites",
      "Track completed vs overdue work over time",
      "Reports ready when clients or regulators ask",
    ],
  },
  {
    title: "Offline-first",
    description:
      "Keep working without signal. Changes sync automatically when you reconnect.",
    icon: "wifi-off" as const,
    details: [
      "Complete work orders without internet",
      "Capture photos and notes offline",
      "Changes queue and sync when connected",
      "Built for sites with unreliable connectivity",
    ],
  },
] as const;

export const PAIN_POINTS = [
  {
    title: "Connectivity drops",
    description:
      "Cloud-only tools stop working on remote sites in Obuasi, Takoradi, and Tema. Your team reverts to paper and chat.",
    icon: "wifi-off" as const,
  },
  {
    title: "Complex interfaces",
    description:
      "Field technicians carry basic Android phones. Overcomplicated software gets abandoned before it delivers value.",
    icon: "smartphone" as const,
  },
  {
    title: "The WhatsApp loop",
    description:
      "Approvals and job updates happen on chat — leaving no proper audit trail for regulators like the EPA or GNPC.",
    icon: "message-circle" as const,
  },
  {
    title: "Currency and logistics",
    description:
      "Global tools charge in USD and ignore local parts procurement in Ghana Cedis and local vendor tracking.",
    icon: "coins" as const,
  },
] as const;

export const COMPARISON_ROWS = [
  {
    factor: "Connectivity",
    global: "No or limited offline capability",
    mantro: "Full offline-first capability",
  },
  {
    factor: "Alerts",
    global: "Email or app notifications only",
    mantro: "Built-in WhatsApp and SMS alerts",
  },
  {
    factor: "Procurement",
    global: "USD only, no local vendor tracking",
    mantro: "GHS pricing and local suppliers",
  },
  {
    factor: "Compliance",
    global: "No local regulatory framework",
    mantro: "One-tap EPA and GNPC reporting",
  },
  {
    factor: "Pricing and setup",
    global: "High USD subscription; months to onboard",
    mantro: "Affordable GHS pricing; onboard in days",
  },
] as const;

export const STEPS = [
  {
    step: "01",
    phase: "Office",
    title: "Configure your firm",
    description:
      "Register assets, set up teams, and define your firm's safety procedures and permit rules.",
  },
  {
    step: "02",
    phase: "Office",
    title: "Plan and schedule",
    description:
      "Create maintenance schedules and work orders — preventive, corrective, or predictive.",
  },
  {
    step: "03",
    phase: "Office",
    title: "Assign to the field",
    description:
      "Send jobs to technicians with asset history, safety checklists, and clear instructions.",
  },
  {
    step: "04",
    phase: "Field",
    title: "Work on site",
    description:
      "Technicians execute tasks on mobile — online or offline — with notes, photos, and parts logged.",
  },
  {
    step: "05",
    phase: "Office",
    title: "Review and approve",
    description:
      "Managers sign off completed work with a full audit trail — no lost WhatsApp threads.",
  },
  {
    step: "06",
    phase: "Office",
    title: "Report and repeat",
    description:
      "Export compliance records, update asset history, and feed insights into the next cycle.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "When will MantroOps be available?",
    answer:
      "Development begins in July 2026. We are aiming for a launch in 2027, God willing.",
  },
  {
    question: "What is MantroOps?",
    answer:
      "MantroOps is a maintenance and operations platform designed for engineering firms in Ghana. It brings assets, work orders, maintenance, approvals, and reporting into one simple system.",
  },
  {
    question: "Will it work offline?",
    answer:
      "Yes. Offline capability is a core part of the design. Your team can keep working on site and sync when connectivity returns.",
  },
  {
    question: "Does MantroOps cover safety?",
    answer:
      "Yes. Every engineering company follows its own safety procedures. MantroOps lets you configure and embed your firm's checklists, LOTO steps, permits, and hazard requirements into work orders and maintenance — without replacing them with a generic template.",
  },
  {
    question: "Can I sign up now?",
    answer:
      "Not yet. This page is our first step. We will share updates when we are ready to open access.",
  },
  {
    question: "Who is it for?",
    answer:
      "Engineering firms, maintenance managers, and field technicians in Ghana who need a system that fits how maintenance work actually happens.",
  },
] as const;

export const TIMELINE = [
  {
    label: "Now",
    title: "Planning and design",
    description: "Defining the product, brand, and experience.",
    status: "active" as const,
  },
  {
    label: "July 2026",
    title: "Development begins",
    description: "Building the core platform with field teams in mind.",
    status: "upcoming" as const,
  },
  {
    label: "2027",
    title: "Launch",
    description: "Releasing MantroOps to engineering firms across Ghana, God willing.",
    status: "future" as const,
  },
] as const;
