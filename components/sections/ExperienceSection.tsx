"use client";

import {
  GraduationCap,
  Trophy,
  Cpu,
  Award,
  Activity,
  Thermometer,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import type { TimelineEntryType, TimelineEntry } from "@/lib/types";
import { EXPERIENCE } from "@/lib/data/experience";

interface TypeMeta {
  color: string;
  bgColor: string;
  borderColor: string;
  label: string;
}

const TYPE_META: Record<TimelineEntryType, TypeMeta> = {
  Education: {
    color: "var(--color-type-education)",
    bgColor: "rgba(59, 130, 246, 0.12)",
    borderColor: "rgba(59, 130, 246, 0.30)",
    label: "Education",
  },
  Experience: {
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.12)",
    borderColor: "rgba(16, 185, 129, 0.3)",
    label: "Experience",
  },
  Competition: {
    color: "var(--color-type-competition)",
    bgColor: "rgba(245, 158, 11, 0.12)",
    borderColor: "rgba(245, 158, 11, 0.30)",
    label: "Competition",
  },
  Project: {
    color: "var(--color-type-project)",
    bgColor: "rgba(16, 185, 129, 0.12)",
    borderColor: "rgba(16, 185, 129, 0.30)",
    label: "Project",
  },
  Certification: {
    color: "var(--color-type-certification)",
    bgColor: "rgba(139, 92, 246, 0.12)",
    borderColor: "rgba(139, 92, 246, 0.30)",
    label: "Certification",
  },
};

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap,
  Trophy,
  Cpu,
  Award,
  Activity,
  Thermometer,
  Users,
};

const TYPE_DEFAULT_ICON: Record<TimelineEntryType, LucideIcon> = {
  Education: GraduationCap,
  Experience: Users,
  Competition: Trophy,
  Project: Cpu,
  Certification: Award,
};

function renderIcon(entry: TimelineEntry) {
  const IconComponent = (entry.icon && ICON_MAP[entry.icon]) 
    ? ICON_MAP[entry.icon] 
    : TYPE_DEFAULT_ICON[entry.type];

  return <IconComponent size={18} strokeWidth={1.75} />;
}

function TypeBadge({ type }: { type: TimelineEntryType }) {
  const meta = TYPE_META[type];
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase"
      style={{
        color: meta.color,
        backgroundColor: meta.bgColor,
        border: `1px solid ${meta.borderColor}`,
      }}
    >
      {meta.label}
    </span>
  );
}

function TimelineIconBubble({ entry }: { entry: TimelineEntry }) {
  const meta = TYPE_META[entry.type];

  return (
    <div
      className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 border"
      style={{
        color: meta.color,
        backgroundColor: meta.bgColor,
        borderColor: meta.borderColor,
      }}
      aria-hidden="true"
    >
      {renderIcon(entry)}
    </div>
  );
}

function TimelineItem({
  entry,
  isLast,
}: {
  entry: TimelineEntry;
  isLast: boolean;
}) {
  return (
    <motion.li 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex gap-4"
    >
      {!isLast && (
        <div
          className="absolute left-5 top-10 bottom-0 w-px"
          style={{ backgroundColor: "var(--color-border)" }}
          aria-hidden="true"
        />
      )}

      <TimelineIconBubble entry={entry} />

      <div
        className="flex-1 pb-8 glass-card p-4 rounded-xl"
        style={{ border: "1px solid var(--color-border-glass)" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <TypeBadge type={entry.type} />
          <time
            className="text-xs font-mono"
            style={{ color: "var(--color-text-muted)" }}
          >
            {entry.dateRange}
          </time>
        </div>

        <h3
          className="font-semibold text-base leading-snug"
          style={{ color: "var(--color-text-primary)" }}
        >
          {entry.title}
        </h3>

        <p
          className="text-sm mt-0.5"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {entry.subtitle}
        </p>

        {entry.description && (
          <p
            className="text-sm mt-2 leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            {entry.description}
          </p>
        )}
      </div>
    </motion.li>
  );
}

export function ExperienceSection() {
  return (
    <div
      aria-label="Experience timeline"
      className="py-[var(--spacing-section-y)] sm:py-[var(--spacing-section-y-sm)]"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div className="mx-auto max-w-[var(--spacing-container-max)] px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h2
            className="text-[var(--font-size-display-md)] font-bold tracking-tight"
            style={{ color: "var(--color-text-primary)" }}
          >
            Experience
          </h2>
          <p
            className="mt-2 text-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Education, competitions, projects, and certifications — sorted
            latest first.
          </p>
        </header>

        <ol aria-label="Timeline entries" className="flex flex-col gap-0">
          {EXPERIENCE.map((entry, idx) => (
            <TimelineItem
              key={`${entry.type}-${entry.title}-${entry.dateRange}`}
              entry={entry}
              isLast={idx === EXPERIENCE.length - 1}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}