import { Cpu, Activity, Wifi, Code, Brain, type LucideProps } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/data/skills";
import type { SkillCategory } from "@/lib/types";

type IconComponent = React.ComponentType<LucideProps>;

const ICON_MAP: Record<string, IconComponent> = { Cpu, Activity, Wifi, Code, Brain };

// ─── SkillCard ────────────────────────────────────────────────────

function SkillCard({ category }: { category: SkillCategory }) {
  const Icon = ICON_MAP[category.icon];

  return (
    <div
      className={[
        "glass-card p-5",
        // Hover/focus-within: border + glow — 175ms (Req 9.7)
        "border border-[var(--color-border-glass)]",
        "transition-all duration-[175ms]",
        "hover:border-[var(--color-border-accent)] hover:shadow-[var(--shadow-glow)]",
        "focus-within:border-[var(--color-border-accent)] focus-within:shadow-[var(--shadow-glow)]",
      ].join(" ")}
    >
      {/* Header: icon + label */}
      <div className="flex items-center gap-2 mb-3">
        {Icon && (
          <Icon
            size={16}
            aria-hidden="true"
            className="shrink-0"
            style={{ color: "var(--color-accent)" }}
          />
        )}
        <span
          className="font-semibold text-sm leading-none"
          style={{ color: "var(--color-text-primary)" }}
        >
          {category.label}
        </span>
      </div>

      {/* Skill tags — flex-wrap, never overflow (Req 9.9) */}
      <div className="flex flex-wrap gap-1.5" role="list" aria-label={`${category.label} skills`}>
        {category.skills.map((skill) => (
          <span
            key={skill}
            role="listitem"
            className="text-xs px-2 py-0.5 rounded"
            style={{
              color: "var(--color-text-secondary)",
              backgroundColor: "var(--color-bg-elevated)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── SkillsSection ────────────────────────────────────────────────

/**
 * SkillsSection — server component.
 *
 * Five glassmorphism cards in a responsive grid:
 *  mobile  → 1 col
 *  tablet  → 2 col
 *  desktop → 5 col (one per category)
 *
 * No progress bars or percentage ratings. (Req 9.8)
 */
export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1280px]">
        <h2
          id="skills-heading"
          className="text-2xl font-bold mb-2"
          style={{ color: "var(--color-text-primary)" }}
        >
          Skills
        </h2>
        <p className="text-sm mb-8" style={{ color: "var(--color-text-secondary)" }}>
          A cross-domain toolkit spanning hardware, software, and AI.
        </p>

        {/* Grid — Req 6.6 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
