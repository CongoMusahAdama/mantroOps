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
    tier: "core" as const,
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
    title: "P&IDs & engineering drawings",
    tier: "phase2" as const,
    description:
      "Link piping and instrumentation diagrams and engineering drawings to assets and work orders — so your team has the right reference on site.",
    icon: "drafting-compass" as const,
    details: [
      "Attach P&IDs, schematics, and layout drawings to equipment records",
      "Open the relevant diagram from a work order before work begins",
      "View drawings on mobile — including offline in the field",
      "Keep document versions tied to assets for audits and handovers",
    ],
  },
  {
    title: "Work orders",
    tier: "core" as const,
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
    tier: "core" as const,
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
    tier: "industry" as const,
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
    tier: "core" as const,
    description:
      "Route requests through trackable approval chains with a full audit trail.",
    icon: "check-circle" as const,
    details: [
      "Define who approves what — by role or site",
      "Full audit trail of every decision",
      "Pending items surfaced for managers",
      "No more lost WhatsApp threads for sign-offs",
    ],
  },
  {
    title: "Reporting",
    tier: "core" as const,
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
    title: "Multi-site tracking",
    tier: "core" as const,
    description:
      "Manage assets and teams across multiple sites, branches, and field locations.",
    icon: "map-pin" as const,
    details: [
      "Organise equipment by site, branch, or project",
      "Assign technicians to the right location",
      "Compare maintenance activity across sites",
      "Built for firms spread across Tema, Takoradi, Obuasi, and beyond",
    ],
  },
  {
    title: "Document attachments",
    tier: "core" as const,
    description:
      "Store manuals, photos, and compliance files against assets and work orders.",
    icon: "file-stack" as const,
    details: [
      "Attach manuals, photos, and compliance documents to equipment",
      "Keep files linked to assets and maintenance history",
      "Open documents from a work order before work begins",
      "View files on mobile — including offline in the field",
    ],
  },
  {
    title: "Offline-first",
    tier: "platform" as const,
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
  {
    title: "Predictive maintenance AI",
    tier: "ai" as const,
    description:
      "Learns from your maintenance data to predict failures before they happen — and tells your team exactly what to do.",
    icon: "sparkles" as const,
    details: [
      "Predictive — spots patterns in logs and warns before a breakdown",
      "Prescriptive — recommends the exact action and when to take it",
      "Alerts on the manager dashboard and technician mobile app",
      "Gets smarter over time — trained on your equipment in Ghanaian conditions",
    ],
  },
] as const;

export const FEATURE_TIER_LABELS = {
  core: "Core module",
  platform: "Platform capability",
  industry: "Industry module",
  phase2: "Phase 2",
  ai: "AI — Phase 3",
} as const;

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
    factor: "Scope",
    others: "Many modules — IoT, fleet, LMS, AI dashboards, and more",
    mantro: "One focused loop: assets, work orders, maintenance, safety, approvals",
  },
  {
    factor: "Connectivity",
    others: "Cloud-first; offline often a paid add-on or limited",
    mantro: "Offline-first from day one — work on site, sync when connected",
  },
  {
    factor: "Field experience",
    others: "Office-configured systems with a mobile app attached",
    mantro: "Built for technicians on basic phones — simple enough to use daily",
  },
  {
    factor: "Engineering drawings",
    others: "Generic document storage, if supported at all",
    mantro: "P&IDs and drawings linked to assets and work orders on site",
  },
  {
    factor: "Alerts",
    others: "Email or in-app notifications only",
    mantro: "WhatsApp and SMS alerts where your team already works",
  },
  {
    factor: "Procurement",
    others: "USD pricing; no local vendor or parts tracking",
    mantro: "GHS pricing and local supplier tracking",
  },
  {
    factor: "Compliance",
    others: "Generic templates; no local regulatory framework",
    mantro: "Structured for EPA, GNPC, and your firm's own safety rules",
  },
  {
    factor: "Pricing and setup",
    others: "Per-user USD subscriptions; weeks or months to onboard",
    mantro: "Affordable for mid-size firms; onboard in days, not months",
  },
] as const;

export const MARKET_APPROACHES = [
  {
    label: "Global CMMS platforms",
    summary: "Broad feature sets, USD pricing, and AI-heavy dashboards built for large Western operations.",
    mantro: "We keep the maintenance essentials and cut what mid-size Ghanaian firms never use.",
  },
  {
    label: "Enterprise asset management",
    summary: "Full lifecycle programs with consultants, integrations, and long rollouts.",
    mantro: "We skip the enterprise overhead — register assets, assign work, and go.",
  },
  {
    label: "Industrial plant suites",
    summary: "Deep manufacturing modules — downtime monitors, quality, lab, and SHEQ in one heavy system.",
    mantro: "We focus on engineering contractors and field service teams, not full factory control rooms.",
  },
  {
    label: "Simple facility tools",
    summary: "Easy QR ticketing for buildings, schools, and estates — light on industrial work.",
    mantro: "We match that simplicity, but for plant equipment, P&IDs, permits, and compliance.",
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
