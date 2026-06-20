"use client";

import { FadeInMedia } from "@/components/motion/FadeIn";
import {
  Bell,
  Calendar,
  Check,
  ChevronDown,
  HelpCircle,
  Save,
  Tag,
  X,
} from "lucide-react";

function Field({
  label,
  value,
  placeholder,
  wide,
}: {
  label: string;
  value?: string;
  placeholder?: string;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "col-span-full" : undefined}>
      <p className="text-[9px] font-semibold uppercase tracking-wide text-foggy/55">
        {label}
      </p>
      <div className="mt-1 flex h-7 items-center rounded border border-border bg-white px-2 text-[10px] text-foggy">
        <span className={value ? "text-foggy" : "text-foggy/45"}>
          {value || placeholder}
        </span>
      </div>
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-1.5 border-b border-verdemar/25 pb-1.5">
      <Icon size={12} className="text-papaya" />
      <p className="text-[10px] font-bold uppercase tracking-wide text-papaya">
        {children}
      </p>
    </div>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
    <span
      className={`relative inline-flex h-4 w-7 shrink-0 rounded-full transition-colors ${
        on ? "bg-papaya" : "bg-border"
      }`}
    >
      <span
        className={`absolute top-0.5 h-3 w-3 rounded-full bg-white shadow-sm transition-[left] ${
          on ? "left-3.5" : "left-0.5"
        }`}
      />
    </span>
  );
}

export function MaintenanceSchedulePreview() {
  return (
    <FadeInMedia
      direction="right"
      delay={0.1}
      className="w-full min-w-0 max-w-2xl lg:ml-auto"
    >
      <div className="overflow-hidden rounded-xl border border-border bg-white shadow-[0_24px_64px_-24px_rgba(79,78,79,0.2)]">
        {/* Title bar */}
        <div className="flex items-center justify-between bg-foggy px-3 py-2 sm:px-4">
          <p className="text-[11px] font-semibold text-white sm:text-xs">
            New Maintenance Schedule
          </p>
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-1 rounded bg-papaya px-2 py-0.5 text-[9px] font-semibold text-white sm:inline-flex">
              <HelpCircle size={10} />
              Help
            </span>
            <X size={14} className="text-white/80" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 border-b border-border bg-white px-2 py-2 sm:px-3">
          {["Asset", "Schedule", "Cost", "Remarks", "History"].map((tab) => (
            <span
              key={tab}
              className={`rounded-full border px-2.5 py-0.5 text-[9px] font-semibold sm:text-[10px] ${
                tab === "Asset"
                  ? "border-verdemar bg-verdemar-soft text-verdemar"
                  : "border-border bg-surface text-foggy"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_9.5rem]">
          {/* Main form */}
          <div className="space-y-3 p-2.5 sm:p-3">
            <div>
              <SectionTitle icon={Tag}>Asset Information</SectionTitle>
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                <Field label="Asset No." placeholder="..." />
                <Field label="Asset Name" placeholder="Auto-filled from asset lookup" />
                <Field label="Asset Category" placeholder="Auto-filled from asset lookup" />
                <Field label="Branch Name" placeholder="Auto-filled from asset lookup" />
                <Field label="Department" placeholder="Auto-filled from asset lookup" />
                <Field label="Asset Location" placeholder="Auto-filled from asset lookup" />
              </div>
            </div>

            <div>
              <SectionTitle icon={Calendar}>Maintenance Schedule</SectionTitle>
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                <Field label="Schedule Ref. No." value="Auto-generated" />
                <Field label="Maintenance Type" placeholder="Select type" />
                <Field label="Schedule Frequency" placeholder="Select frequency" />
                <Field label="Last Maintenance Date" placeholder="dd/mm/yyyy" />
                <Field label="Next Maintenance Date" placeholder="dd/mm/yyyy" />
                <Field label="Status" value="Scheduled" />
                <Field label="Service Provider" placeholder="..." />
                <Field label="Contact / Phone" placeholder="Auto-filled" />
                <Field label="Priority" placeholder="Select priority" />
                <Field
                  label="Maintenance Description"
                  placeholder="Enter maintenance description..."
                  wide
                />
              </div>
            </div>

            <div className="rounded border border-dashed border-verdemar/30 bg-verdemar-soft px-2 py-1.5 text-center">
              <p className="text-[9px] text-verdemar">
                Scroll down for Cost Information, Remarks &amp; History
              </p>
              <ChevronDown size={12} className="mx-auto mt-0.5 text-verdemar" />
            </div>
          </div>

          {/* Sidebar — desktop only to keep mobile hero compact */}
          <div className="hidden space-y-3 border-t border-border bg-surface p-2.5 lg:block lg:border-t-0 lg:border-l lg:p-3">
            <div>
              <SectionTitle icon={Bell}>Notification Settings</SectionTitle>
              <p className="mt-2 text-[9px] font-semibold uppercase tracking-wide text-foggy/55">
                Timing
              </p>
              <div className="mt-1 space-y-1">
                {["7 days before", "14 days before", "30 days before"].map((opt, i) => (
                  <label key={opt} className="flex items-center gap-1.5 text-[9px] text-foggy">
                    <span
                      className={`h-2.5 w-2.5 rounded-full border ${
                        i === 0 ? "border-papaya bg-papaya" : "border-border"
                      }`}
                    />
                    {opt}
                  </label>
                ))}
              </div>

              <p className="mt-2 text-[9px] font-semibold uppercase tracking-wide text-foggy/55">
                Notify Via
              </p>
              <div className="mt-1 space-y-1.5">
                {[
                  { label: "System Notification", on: true },
                  { label: "SMS Alert", on: true },
                  { label: "Email Alert", on: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded border border-border bg-white px-1.5 py-1"
                  >
                    <span className="text-[8px] leading-tight text-foggy">{item.label}</span>
                    <Toggle on={item.on} />
                  </div>
                ))}
              </div>

              <p className="mt-2 text-[9px] font-semibold uppercase tracking-wide text-foggy/55">
                Notify Who
              </p>
              <div className="mt-1 grid grid-cols-1 gap-1">
                {["Branch Manager", "Asset Custodian", "Department Head"].map((role, i) => (
                  <label key={role} className="flex items-center gap-1.5 text-[8px] text-foggy">
                    <span
                      className={`flex h-2.5 w-2.5 items-center justify-center rounded border ${
                        i < 2 ? "border-verdemar bg-verdemar" : "border-border bg-white"
                      }`}
                    >
                      {i < 2 ? <Check size={7} className="text-white" strokeWidth={3} /> : null}
                    </span>
                    {role}
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded border border-border bg-white p-2">
              <p className="text-[8px] font-bold uppercase tracking-wide text-foggy">
                Upcoming &amp; Overdue Alerts
              </p>
              <p className="mt-2 text-center text-[8px] text-foggy/55">
                No upcoming or overdue alerts
              </p>
              <p className="mt-1.5 text-[8px] font-medium text-papaya">
                View all maintenance alerts →
              </p>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-end gap-2 border-t border-border bg-surface px-3 py-2">
          <span className="inline-flex items-center gap-1 rounded bg-papaya px-3 py-1 text-[9px] font-semibold text-white">
            <Save size={10} />
            Save Schedule
          </span>
          <span className="rounded bg-foggy px-3 py-1 text-[9px] font-semibold text-white">
            Reset
          </span>
          <span className="rounded bg-foggy px-3 py-1 text-[9px] font-semibold text-white">
            Close
          </span>
        </div>
      </div>
    </FadeInMedia>
  );
}
