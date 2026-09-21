import {
  GraduationCap,
  Trophy,
  Cpu,
  Award,
  Activity,
  Thermometer,
  type LucideIcon,
} from "lucide-react";
import type { TimelineEntryType, TimelineEntry } from "@/lib/types";
import { EXPERIENCE } from "@/lib/data/experience";

// ─── Type metadata ────────────────────────────────────────────────

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

// ─── Icon resolver ────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap,
  Trophy,
  Cpu,
  Award,
  Activity,
  Thermometer,
};

const TYPE_DEFAULT_ICON: Record<TimelineEntryType, LucideIcon> = {
  Education: GraduationCap,
  Competition: Trophy,
  Project: Cpu,
  Certification: Award,
};

function resolveIcon(entry: TimelineEntry): LucideIcon {
  if (entry.icon && ICON_MAP[entry.icon]) return ICON_MAP[entry.icon];
  return TYPE_DEFAULT_ICON[entry.type];
}

// ─── Sub-components ───────────────────────────────────────────────

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
  const Icon = resolveIcon(entry);
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
      <Icon size={18} strokeWidth={1.75} />
    </div>
  );
}

function TimelineItem({ entry, isLast }: { entry: TimelineEntry; isLast: boolean }) {
  return (
    <li className="relative flex gap-4">
      {/* Vertical connector — hidden on last item */}
      {!isLast && (
        <div
          className="absolute left-5 top-10 bottom-0 w-px"
          style={{ backgroundColor: "var(--color-border)" }}
          aria-hidden="true"
        />
      )}

      <TimelineIconBubble entry={entry} />

      <div
        className="flex-1 pb-8 glass-card p-4"
        style={{ border: "1px solid var(--color-border-glass)" }}
      >
        {/* Top row: badge + date */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <TypeBadge type={entry.type} />
          <time className="text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
            {entry.dateRange}
          </time>
        </div>

        <h3 className="font-semibold text-base leading-snug" style={{ color: "var(--color-text-primary)" }}>
          {entry.title}
        </h3>

        <p className="text-sm mt-0.5" style={{ color: "var(--color-text-secondary)" }}>
          {entry.subtitle}
        </p>

        {entry.description && (
          <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            {entry.description}
          </p>
        )}
      </div>
    </li>
  );
}

// ─── ExperienceSection ────────────────────────────────────────────

/**
 * ExperienceSection — server component, vertical timeline.
 *
 * - id="experience" owned by page.tsx outer <section>; this component
 *   supplies its own heading and semantic <ol>.
 * - Four entry types: Education (blue), Competition (amber),
 *   Project (emerald), Certification (violet).
 */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div className="mx-auto max-w-[1280px]">
        <h2
          id="experience-heading"
          className="text-2xl font-bold mb-2"
          style={{ color: "var(--color-text-primary)" }}
        >
          Experience
        </h2>
        <p className="text-sm mb-10" style={{ color: "var(--color-text-secondary)" }}>
          Education, competitions, projects, and certifications — latest first.
        </p>

        <ol aria-label="Experience timeline entries" className="flex flex-col">
          {EXPERIENCE.map((entry, idx) => (
            <TimelineItem
              key={`${entry.type}-${entry.title}-${entry.dateRange}`}
              entry={entry}
              isLast={idx === EXPERIENCE.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
