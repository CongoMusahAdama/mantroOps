import PptxGenJS from "pptxgenjs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const ASSETS = path.join(ROOT, "docs", "presentation-assets");
const OUT = path.join(ROOT, "docs", "mantroOps-Project-Kickoff-Presentation.pptx");

const C = {
  papaya: "F1583B",
  foggy: "4F4E4F",
  verdemar: "00A691",
  white: "FFFFFF",
  surface: "F5F5F5",
  foggyLight: "8A898A",
};

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_16x9";
pptx.author = "mantroOps Product & Tech";
pptx.title = "mantroOps — Project Kickoff";
pptx.subject = "Internal Team Pitch & Kickoff Framework";

function img(name) {
  return path.join(ASSETS, name);
}

function addBrandBar(slide, y = 0) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y,
    w: 10,
    h: 0.12,
    fill: { color: C.verdemar },
    line: { color: C.verdemar },
  });
}

function addFooter(slide, label) {
  slide.addText("mantroOps  ·  Project Kickoff  ·  June 2025", {
    x: 0.5,
    y: 5.15,
    w: 6,
    h: 0.3,
    fontSize: 8,
    color: C.foggyLight,
    fontFace: "Arial",
  });
  if (label) {
    slide.addText(label, {
      x: 8.5,
      y: 5.15,
      w: 1,
      h: 0.3,
      fontSize: 8,
      color: C.foggyLight,
      align: "right",
      fontFace: "Arial",
    });
  }
}

function addTitle(slide, title, subtitle, opts = {}) {
  slide.addText(title, {
    x: opts.x ?? 0.55,
    y: opts.y ?? 0.45,
    w: opts.w ?? 5.5,
    h: 0.7,
    fontSize: 28,
    bold: true,
    color: C.foggy,
    fontFace: "Arial",
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: opts.x ?? 0.55,
      y: (opts.y ?? 0.45) + 0.75,
      w: opts.w ?? 5.8,
      h: 0.55,
      fontSize: 13,
      color: C.foggyLight,
      fontFace: "Arial",
      italic: true,
    });
  }
}

function addBullets(slide, items, opts = {}) {
  const rows = items.map((t) => ({
    text: t,
    options: {
      fontSize: opts.fontSize ?? 12,
      color: C.foggy,
      fontFace: "Arial",
      bullet: { code: "2022" },
      paraSpaceAfter: 8,
      breakLine: true,
    },
  }));
  slide.addText(rows, {
    x: opts.x ?? 0.55,
    y: opts.y ?? 1.55,
    w: opts.w ?? 5.5,
    h: opts.h ?? 3.2,
    valign: "top",
  });
}

function addNotes(slide, text) {
  slide.addNotes(text);
}

// ── Slide 1: Core Mission ──────────────────────────────────────────
{
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  addBrandBar(slide);

  slide.addImage({
    path: img("hero-engineering.jpg"),
    x: 5.2,
    y: 0,
    w: 4.8,
    h: 5.625,
    sizing: { type: "cover", w: 4.8, h: 5.625 },
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 4.6,
    y: 0,
    w: 0.8,
    h: 5.625,
    fill: { color: C.white, transparency: 0 },
    line: { color: C.white, transparency: 100 },
  });

  slide.addImage({
    path: path.join(ROOT, "public", "logo.png"),
    x: 0.55,
    y: 0.55,
    w: 2.4,
    h: 0.55,
    sizing: { type: "contain", w: 2.4, h: 0.55 },
  });

  slide.addText("Introducing mantroOps", {
    x: 0.55,
    y: 1.35,
    w: 4.5,
    h: 0.5,
    fontSize: 22,
    bold: true,
    color: C.foggy,
    fontFace: "Arial",
  });

  slide.addText(
    "The first maintenance platform built for how African engineering teams actually work.",
    {
      x: 0.55,
      y: 1.95,
      w: 4.4,
      h: 1.1,
      fontSize: 15,
      color: C.foggy,
      fontFace: "Arial",
    }
  );

  slide.addShape(pptx.ShapeType.rect, {
    x: 0.55,
    y: 3.25,
    w: 1.2,
    h: 0.04,
    fill: { color: C.papaya },
    line: { color: C.papaya },
  });

  slide.addText("PROJECT KICKOFF  ·  JUNE 2025", {
    x: 0.55,
    y: 3.5,
    w: 4,
    h: 0.35,
    fontSize: 10,
    bold: true,
    color: C.verdemar,
    fontFace: "Arial",
    charSpacing: 2,
  });

  slide.addText(
    "We aren't building another generic CMMS. We are building for the operational realities of African engineering teams.",
    {
      x: 0.55,
      y: 3.9,
      w: 4.4,
      h: 0.8,
      fontSize: 11,
      color: C.foggyLight,
      fontFace: "Arial",
    }
  );

  addFooter(slide, "01");
  addNotes(
    slide,
    'Team, today I\'m introducing mantroOps. We aren\'t trying to build another generic CMMS. Global tools already solve this problem on paper. The real gap is fit—those tools weren\'t built for the operational realities of African engineering teams. We are changing that.'
  );
}

// ── Slide 2: Who We Are Building For ─────────────────────────────
{
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  addBrandBar(slide);
  addTitle(slide, "Who We Are Building For", "The Opportunity & Market Gap");

  addBullets(slide, [
    "Target Market: Mid-size and smaller Ghanaian engineering contractors, service companies, fabricators, and builders managing expensive, critical equipment daily.",
    "Status Quo: Large multinationals use SAP or IBM Maximo. Local firms use spreadsheets — or nothing at all.",
    "Opportunity: Give local firms an accessible, affordable platform built for their specific engineering context.",
  ]);

  slide.addImage({
    path: img("ghana-workers.jpg"),
    x: 6.1,
    y: 0.55,
    w: 3.35,
    h: 4.35,
    rounding: true,
    sizing: { type: "cover", w: 3.35, h: 4.35 },
  });

  addFooter(slide, "02");
  addNotes(
    slide,
    "Engineering firms in Ghana—across construction, mining, oil & gas, and utilities—are managing millions of dollars in equipment. Right now, if you aren't a massive multinational with an enterprise budget, you are stuck using spreadsheets. That is our market."
  );
}

// ── Slide 3: Why Global Software Fails ───────────────────────────
{
  const slide = pptx.addSlide();
  slide.background = { color: C.surface };
  addBrandBar(slide);
  addTitle(slide, "Why Global Software Fails in Ghana", "The Real Problems on the Ground");

  const problems = [
    ["Connectivity Drops", "Cloud-only tools become useless offline on remote sites like Obuasi or Takoradi."],
    ["Complex Interfaces", "Field technicians carry basic Android phones; complex UIs get abandoned immediately."],
    ["The WhatsApp Loop", "Approvals happen on chat — no audit trail for EPA or GNPC compliance."],
    ["Currency & Logistics", "USD pricing ($50–$200/user/mo) with no GHS procurement or local vendor tracking."],
  ];

  problems.forEach(([title, body], i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.55 + col * 4.7;
    const y = 1.55 + row * 1.75;

    slide.addShape(pptx.ShapeType.roundRect, {
      x,
      y,
      w: 4.35,
      h: 1.55,
      fill: { color: C.white },
      line: { color: "E8E8E8", pt: 1 },
      rectRadius: 0.08,
    });
    slide.addShape(pptx.ShapeType.rect, {
      x,
      y,
      w: 0.08,
      h: 1.55,
      fill: { color: C.papaya },
      line: { color: C.papaya },
    });
    slide.addText(title, {
      x: x + 0.25,
      y: y + 0.15,
      w: 3.9,
      h: 0.35,
      fontSize: 13,
      bold: true,
      color: C.foggy,
      fontFace: "Arial",
    });
    slide.addText(body, {
      x: x + 0.25,
      y: y + 0.5,
      w: 3.9,
      h: 0.9,
      fontSize: 11,
      color: C.foggyLight,
      fontFace: "Arial",
    });
  });

  slide.addImage({
    path: img("mining-site.jpg"),
    x: 7.2,
    y: 4.35,
    w: 2.25,
    h: 0.65,
    sizing: { type: "cover", w: 2.25, h: 0.65 },
  });

  addFooter(slide, "03");
  addNotes(
    slide,
    "The issue isn't that software doesn't exist; it's that it doesn't get used. When a technician's internet drops in Tema, Takoradi, or Obuasi, global cloud tools break down. They revert to WhatsApp, and management loses all visibility and compliance data."
  );
}

// ── Slide 4: Solution ──────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  addBrandBar(slide);
  addTitle(slide, "How mantroOps Solves It", "One Product, Two Experiences");

  slide.addText("Adoption-Driven Design", {
    x: 0.55,
    y: 1.35,
    w: 8.5,
    h: 0.35,
    fontSize: 13,
    bold: true,
    color: C.verdemar,
    fontFace: "Arial",
  });
  slide.addText(
    "A responsive system where the software adapts to the firm — not the other way around.",
    {
      x: 0.55,
      y: 1.7,
      w: 8.5,
      h: 0.4,
      fontSize: 11,
      color: C.foggyLight,
      fontFace: "Arial",
    }
  );

  // Desktop card
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.55,
    y: 2.25,
    w: 4.2,
    h: 2.55,
    fill: { color: C.surface },
    line: { color: "E0E0E0", pt: 1 },
    rectRadius: 0.1,
  });
  slide.addText("Desktop Dashboard", {
    x: 0.8,
    y: 2.45,
    w: 3.7,
    h: 0.4,
    fontSize: 16,
    bold: true,
    color: C.foggy,
    fontFace: "Arial",
  });
  slide.addText(
    "Built for managers and supervisors — full asset setup, configuration, and compliance reporting.",
    {
      x: 0.8,
      y: 2.95,
      w: 3.6,
      h: 1.5,
      fontSize: 12,
      color: C.foggy,
      fontFace: "Arial",
      bullet: { code: "2022" },
    }
  );
  slide.addImage({
    path: img("team-meeting.jpg"),
    x: 0.8,
    y: 3.85,
    w: 3.6,
    h: 0.75,
    sizing: { type: "cover", w: 3.6, h: 0.75 },
  });

  // Mobile card
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 5.25,
    y: 2.25,
    w: 4.2,
    h: 2.55,
    fill: { color: C.verdemar },
    line: { color: C.verdemar },
    rectRadius: 0.1,
  });
  slide.addText("Field-Ready Mobile", {
    x: 5.5,
    y: 2.45,
    w: 3.7,
    h: 0.4,
    fontSize: 16,
    bold: true,
    color: C.white,
    fontFace: "Arial",
  });
  slide.addText(
    "Simple app for technicians — scan QR codes, receive work orders, and log jobs offline with automatic sync.",
    {
      x: 5.5,
      y: 2.95,
      w: 3.6,
      h: 1.5,
      fontSize: 12,
      color: C.white,
      fontFace: "Arial",
      bullet: { code: "2022" },
    }
  );
  slide.addImage({
    path: img("mobile-field.jpg"),
    x: 5.5,
    y: 3.85,
    w: 3.6,
    h: 0.75,
    sizing: { type: "cover", w: 3.6, h: 0.75 },
  });

  addFooter(slide, "04");
  addNotes(
    slide,
    "mantroOps bridges the gap between the office and the field. Managers get a powerful desktop dashboard for tracking and reporting, while technicians get an incredibly simple mobile experience that works seamlessly offline and syncs automatically later."
  );
}

// ── Slide 5: Where We Win ──────────────────────────────────────────
{
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  addBrandBar(slide);
  addTitle(slide, "Where We Win", "Feature Comparison Matrix");

  const tableData = [
    [
      { text: "Factor", options: { bold: true, color: C.white, fill: { color: C.foggy } } },
      { text: "Global / Regional Tools", options: { bold: true, color: C.white, fill: { color: C.foggy } } },
      { text: "mantroOps", options: { bold: true, color: C.white, fill: { color: C.papaya } } },
    ],
    [
      "Connectivity",
      "No / limited offline capability",
      { text: "Full offline-first capability", options: { bold: true, color: C.verdemar } },
    ],
    [
      "Alerts & Reminders",
      "Email or app notifications only",
      { text: "Built-in WhatsApp & SMS alerts", options: { bold: true, color: C.verdemar } },
    ],
    [
      "Procurement",
      "USD only, no local vendor tracking",
      { text: "GHS + local suppliers", options: { bold: true, color: C.verdemar } },
    ],
    [
      "Compliance",
      "No local regulatory framework",
      { text: "One-tap EPA & GNPC reporting", options: { bold: true, color: C.verdemar } },
    ],
    [
      "Pricing & Setup",
      "High USD subscription; months to onboard",
      { text: "Affordable GHS pricing; onboard in days", options: { bold: true, color: C.verdemar } },
    ],
  ];

  slide.addTable(tableData, {
    x: 0.55,
    y: 1.45,
    w: 8.9,
    h: 3.5,
    fontSize: 11,
    fontFace: "Arial",
    color: C.foggy,
    border: { type: "solid", color: "E0E0E0", pt: 0.5 },
    colW: [1.8, 3.3, 3.8],
    rowH: 0.52,
    autoPage: false,
    valign: "middle",
  });

  addFooter(slide, "05");
  addNotes(
    slide,
    "Our competitive advantage isn't just a list of features—it's pure adoption. We win because we meet teams where they already are: on WhatsApp, using local vendors in Kumasi or Takoradi, and paying in Cedis."
  );
}

// ── Slide 6: Lean Team ─────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  slide.background = { color: C.surface };
  addBrandBar(slide);
  addTitle(slide, "Small Team, Fast Execution", "Our Lean Execution Team");

  const roles = [
    ["Product & Tech Lead (CEO)", "Builds the MVP, owns product vision, and handles critical tech decisions."],
    ["Sales & BD", "Leverages local engineering connections to open doors and close pilot clients."],
    ["UI/UX Designer", "Clean, intuitive interfaces that work on lower-end Android phones in the field."],
    ["Operations & Growth", "Manages onboarding, client communication, and ensures smooth delivery."],
  ];

  roles.forEach(([role, desc], i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.55 + col * 4.7;
    const y = 1.55 + row * 1.85;

    slide.addShape(pptx.ShapeType.roundRect, {
      x,
      y,
      w: 4.35,
      h: 1.65,
      fill: { color: C.white },
      line: { color: "E0E0E0", pt: 1 },
      rectRadius: 0.08,
    });
    slide.addText(role, {
      x: x + 0.2,
      y: y + 0.2,
      w: 3.95,
      h: 0.4,
      fontSize: 13,
      bold: true,
      color: C.papaya,
      fontFace: "Arial",
    });
    slide.addText(desc, {
      x: x + 0.2,
      y: y + 0.65,
      w: 3.95,
      h: 0.85,
      fontSize: 11,
      color: C.foggy,
      fontFace: "Arial",
    });
  });

  slide.addImage({
    path: img("field-worker.jpg"),
    x: 6.5,
    y: 0.12,
    w: 3,
    h: 1.2,
    sizing: { type: "cover", w: 3, h: 1.2 },
  });

  addFooter(slide, "06");
  addNotes(
    slide,
    "We are a focused 4-person team built to move fast without unnecessary overhead. The tech lead builds, the designer makes it look simple enough to easily sell, sales gets us in front of the right clients, and operations makes sure nothing falls through the cracks."
  );
}

// ── Slide 7: 90-Day Roadmap ────────────────────────────────────────
{
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  addBrandBar(slide);
  addTitle(slide, "Roadmap to Our First Pilot", "The First 90 Days");

  const phases = [
    ["Days 1–30", "Foundation", "Build core MVP (Asset Register, Work Orders, PM Reminders). Sales initiates conversations with 5 engineering firms."],
    ["Days 31–60", "Demo Ready", "Polish UI, add full offline support and QR scanning. Run live demos with warm contacts."],
    ["Days 61–90", "First Pilot", "Onboard and deeply support our first paying or committed pilot client to document real results."],
  ];

  phases.forEach(([period, phase, desc], i) => {
    const y = 1.5 + i * 1.25;

    slide.addShape(pptx.ShapeType.ellipse, {
      x: 0.65,
      y: y + 0.1,
      w: 0.45,
      h: 0.45,
      fill: { color: i === 0 ? C.papaya : i === 1 ? C.verdemar : C.foggy },
      line: { color: i === 0 ? C.papaya : i === 1 ? C.verdemar : C.foggy },
    });
    if (i < 2) {
      slide.addShape(pptx.ShapeType.line, {
        x: 0.87,
        y: y + 0.55,
        w: 0,
        h: 0.7,
        line: { color: "D0D0D0", width: 2 },
      });
    }

    slide.addText(period, {
      x: 1.35,
      y: y,
      w: 1.5,
      h: 0.3,
      fontSize: 10,
      bold: true,
      color: C.verdemar,
      fontFace: "Arial",
    });
    slide.addText(phase, {
      x: 1.35,
      y: y + 0.28,
      w: 7.5,
      h: 0.35,
      fontSize: 15,
      bold: true,
      color: C.foggy,
      fontFace: "Arial",
    });
    slide.addText(desc, {
      x: 1.35,
      y: y + 0.62,
      w: 7.5,
      h: 0.55,
      fontSize: 11,
      color: C.foggyLight,
      fontFace: "Arial",
    });
  });

  slide.addImage({
    path: img("industrial-plant.jpg"),
    x: 7.0,
    y: 1.5,
    w: 2.45,
    h: 3.2,
    rounding: true,
    sizing: { type: "cover", w: 2.45, h: 3.2 },
  });

  addFooter(slide, "07");
  addNotes(
    slide,
    "Our target for the next 90 days is hyper-focused: get a demoable MVP ready and land our very first pilot client. We are not building everything at once; we are focusing on traction."
  );
}

// ── Slide 8: GTM ───────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  addBrandBar(slide);
  addTitle(slide, "Relationship-Driven Growth", "Go-To-Market Strategy");

  const phases = [
    ["Phase 1", "Warm Outreach", "Use existing industry relationships for 30-minute problem-validation chats — not cold sales pitches."],
    ["Phase 2", "Pilot Program", "Onboard 2–3 firms on a free or discounted 3-month pilot to document downtime reduction and cost savings."],
    ["Phase 3", "Convert & Refer", "Convert pilots to paying customers. Leverage Ghana Institution of Engineers for visibility."],
  ];

  phases.forEach(([phase, title, desc], i) => {
    const y = 1.5 + i * 1.2;
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.55,
      y,
      w: 5.8,
      h: 1.0,
      fill: { color: C.surface },
      line: { color: "E0E0E0", pt: 1 },
      rectRadius: 0.06,
    });
    slide.addText(phase, {
      x: 0.75,
      y: y + 0.12,
      w: 1.0,
      h: 0.3,
      fontSize: 9,
      bold: true,
      color: C.papaya,
      fontFace: "Arial",
    });
    slide.addText(title, {
      x: 1.85,
      y: y + 0.1,
      w: 4.2,
      h: 0.35,
      fontSize: 14,
      bold: true,
      color: C.foggy,
      fontFace: "Arial",
    });
    slide.addText(desc, {
      x: 1.85,
      y: y + 0.45,
      w: 4.3,
      h: 0.5,
      fontSize: 10,
      color: C.foggyLight,
      fontFace: "Arial",
    });
  });

  slide.addImage({
    path: img("ghana-workers.jpg"),
    x: 6.6,
    y: 1.2,
    w: 2.85,
    h: 3.6,
    rounding: true,
    sizing: { type: "cover", w: 2.85, h: 3.6 },
  });

  addFooter(slide, "08");
  addNotes(
    slide,
    "The honest reality is that our first 3 clients won't come from digital marketing or a website. They will come from us picking up the phone and calling people we already know in the industry. Trust and warm introductions close deals in Ghana."
  );
}

// ── Slide 9: Brand ─────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  slide.background = { color: C.foggy };
  addBrandBar(slide);

  slide.addText("Design Guidelines & Visual Intent", {
    x: 0.55,
    y: 0.45,
    w: 8,
    h: 0.55,
    fontSize: 28,
    bold: true,
    color: C.white,
    fontFace: "Arial",
  });
  slide.addText("Product Brand & Identity", {
    x: 0.55,
    y: 1.0,
    w: 8,
    h: 0.35,
    fontSize: 13,
    color: "CCCCCC",
    fontFace: "Arial",
    italic: true,
  });

  const swatches = [
    [C.papaya, "Big Smile Papaya", "#F1583B", "Logos, primary buttons, key CTAs"],
    [C.foggy, "Foggy Day Gray", "#4F4E4F", "Body text and secondary UI elements"],
    [C.verdemar, "Verdemar Seguro", "#00A691", "Synced, approved, and online states"],
    [C.white, "White", "#FFFFFF", "Backgrounds, cards, generous breathing room"],
  ];

  swatches.forEach(([hex, name, code, use], i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.55 + col * 4.7;
    const y = 1.55 + row * 1.85;

    slide.addShape(pptx.ShapeType.roundRect, {
      x,
      y,
      w: 4.35,
      h: 1.55,
      fill: { color: "3A3A3A" },
      line: { color: "555555", pt: 1 },
      rectRadius: 0.08,
    });
    slide.addShape(pptx.ShapeType.roundRect, {
      x: x + 0.2,
      y: y + 0.25,
      w: 0.7,
      h: 1.05,
      fill: { color: hex },
      line: { color: hex },
      rectRadius: 0.06,
    });
    slide.addText(name, {
      x: x + 1.1,
      y: y + 0.3,
      w: 3.1,
      h: 0.35,
      fontSize: 14,
      bold: true,
      color: C.white,
      fontFace: "Arial",
    });
    slide.addText(code, {
      x: x + 1.1,
      y: y + 0.65,
      w: 3.1,
      h: 0.25,
      fontSize: 11,
      color: C.papaya,
      fontFace: "Arial",
    });
    slide.addText(use, {
      x: x + 1.1,
      y: y + 0.95,
      w: 3.1,
      h: 0.45,
      fontSize: 10,
      color: "BBBBBB",
      fontFace: "Arial",
    });
  });

  slide.addText(
    "Crisp and premium — yet clean enough for lower-end Android phones in the field.",
    {
      x: 0.55,
      y: 4.55,
      w: 8.5,
      h: 0.4,
      fontSize: 11,
      color: "AAAAAA",
      fontFace: "Arial",
      italic: true,
    }
  );

  addFooter(slide, "09");
  addNotes(
    slide,
    "Our UI/UX needs to look crisp and feel premium, yet clean enough to operate smoothly on lower-end Android phones in the field. We'll use Papaya orange for primary interactions and Verdemar teal for clear visual feedback when data syncs or a work order is approved."
  );
}

// ── Slide 10: Next Steps ───────────────────────────────────────────
{
  const slide = pptx.addSlide();
  slide.background = { color: C.white };
  addBrandBar(slide);

  slide.addImage({
    path: img("hero-engineering.jpg"),
    x: 0,
    y: 0,
    w: 10,
    h: 5.625,
    sizing: { type: "cover", w: 10, h: 5.625 },
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 5.625,
    fill: { color: C.foggy, transparency: 25 },
    line: { transparency: 100 },
  });

  slide.addText("Immediate Actions", {
    x: 0.55,
    y: 0.55,
    w: 8,
    h: 0.6,
    fontSize: 30,
    bold: true,
    color: C.white,
    fontFace: "Arial",
  });

  const actions = [
    "Confirm final team responsibilities and workflow.",
    "Begin problem-validation calls with 5 to 10 engineering firms.",
    "Kick off our first tech build sprint for the core MVP.",
    "Identify and list top early pilot partners in Accra, Tema, and Takoradi.",
  ];

  actions.forEach((action, i) => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.55,
      y: 1.45 + i * 0.85,
      w: 5.5,
      h: 0.7,
      fill: { color: C.white, transparency: 10 },
      line: { color: C.white, transparency: 40, pt: 1 },
      rectRadius: 0.06,
    });
    slide.addText(String(i + 1), {
      x: 0.75,
      y: 1.58 + i * 0.85,
      w: 0.4,
      h: 0.4,
      fontSize: 14,
      bold: true,
      color: C.papaya,
      fontFace: "Arial",
      align: "center",
    });
    slide.addText(action, {
      x: 1.25,
      y: 1.58 + i * 0.85,
      w: 4.6,
      h: 0.5,
      fontSize: 12,
      color: C.white,
      fontFace: "Arial",
      valign: "middle",
    });
  });

  slide.addText("Let's build this.", {
    x: 0.55,
    y: 4.75,
    w: 5,
    h: 0.45,
    fontSize: 20,
    bold: true,
    color: C.papaya,
    fontFace: "Arial",
  });

  addFooter(slide, "10");
  addNotes(
    slide,
    "Let's align on our roles today so we can kick off the first engineering sprint and start talking to our core contacts to validate these specific field pain points. Let's build this."
  );
}

await pptx.writeFile({ fileName: OUT });
console.log(`Presentation saved: ${OUT}`);
