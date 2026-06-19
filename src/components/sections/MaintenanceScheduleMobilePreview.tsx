"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronDown, Tag, WifiOff } from "lucide-react";
import { FadeInMedia } from "@/components/motion/FadeIn";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Badge } from "@/components/ui/Badge";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[8px] font-semibold uppercase tracking-wide text-foggy/55">
        {label}
      </p>
      <div className="mt-0.5 rounded border border-border bg-white px-2 py-1.5 text-[9px] text-foggy">
        {value}
      </div>
    </div>
  );
}

type MaintenanceScheduleMobilePreviewProps = {
  showOffline?: boolean;
  direction?: "up" | "down" | "left" | "right" | "none";
};

export function MaintenanceScheduleMobilePreview({
  showOffline = true,
  direction = "left",
}: MaintenanceScheduleMobilePreviewProps) {
  return (
    <FadeInMedia direction={direction} delay={0.08} className="w-full max-w-[19rem]">
      <PhoneFrame
        status={
          showOffline ? (
            <motion.div
              animate={{ opacity: [1, 0.55, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Badge variant="light" className="gap-1 px-2 py-0.5 text-[8px]">
                <WifiOff size={9} />
                Offline
              </Badge>
            </motion.div>
          ) : undefined
        }
      >
        <div className="bg-foggy px-3 py-2">
          <p className="text-[10px] font-semibold text-white">New Maintenance Schedule</p>
        </div>

        <div className="flex gap-1 overflow-x-auto border-b border-border bg-white px-2 py-1.5">
          {["Asset", "Schedule", "Cost"].map((tab) => (
            <span
              key={tab}
              className={`shrink-0 rounded-full border px-2 py-0.5 text-[8px] font-semibold ${
                tab === "Asset"
                  ? "border-verdemar bg-verdemar-soft text-verdemar"
                  : "border-border bg-surface text-foggy"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="space-y-2.5 p-2.5">
          <div>
            <div className="flex items-center gap-1 border-b border-verdemar/25 pb-1">
              <Tag size={10} className="text-papaya" />
              <p className="text-[8px] font-bold uppercase tracking-wide text-papaya">
                Asset Information
              </p>
            </div>
            <div className="mt-2 space-y-1.5">
              <Field label="Asset Name" value="Cooling Tower — Level 4" />
              <Field label="Asset Location" value="East Wing, Plant B" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1 border-b border-verdemar/25 pb-1">
              <Calendar size={10} className="text-papaya" />
              <p className="text-[8px] font-bold uppercase tracking-wide text-papaya">
                Maintenance Schedule
              </p>
            </div>
            <div className="mt-2 space-y-1.5">
              <Field label="Maintenance Type" value="Select type" />
              <Field label="Next Maintenance Date" value="24/06/2026" />
              <Field label="Status" value="Scheduled" />
            </div>
          </div>

          <div className="rounded border border-dashed border-verdemar/30 bg-verdemar-soft px-2 py-1 text-center">
            <p className="text-[7px] text-verdemar">Scroll for cost &amp; remarks</p>
            <ChevronDown size={10} className="mx-auto mt-0.5 text-verdemar" />
          </div>
        </div>

        {showOffline && (
          <motion.div
            className="mx-2.5 mb-2.5 flex items-center gap-1.5 rounded-lg border border-verdemar/20 bg-verdemar-soft px-2.5 py-2"
            initial={{ y: 6 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-verdemar" />
            <p className="text-[8px] font-medium leading-snug text-verdemar">
              Saved locally — will sync when online
            </p>
          </motion.div>
        )}
      </PhoneFrame>
    </FadeInMedia>
  );
}
