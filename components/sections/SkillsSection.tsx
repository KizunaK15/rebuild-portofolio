import { Cpu, Activity, Wifi, Code, Brain, type LucideProps } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/data/skills";
import type { SkillCategory } from "@/lib/types";

// ─── Icon map ────────────────────────────────────────────────────
type IconComponent = React.ComponentType<LucideProps>;

const ICON_MAP: Record<string, IconComponent> = {
  Cpu,
  Activity,
  Wifi,
  Code,
  Brain,
};

// ─── Card ─────────────────────────────────────────────────────────

function SkillCard({ category }: { category: SkillCategory }) {
  const Icon = ICON_MAP[category.icon];

  return (
    <div
      className={[
        "glass-card p-6 group",
        "border border-[var(--color-border-glass)]",
        "transition-all duration-[175ms]",
        "hover:border-[var(--color-border-accent)] hover:shadow-[var(--shadow-glow)]",
        "focus-within:border-[var(--color-border-accent)]",
      ].join(" ")}
    >
      {/* Category header */}
      <div className="flex items-center gap-2 mb-4">
        {Icon && (
          <Icon
            size={18}
            aria-hidden="true"
            className="text-[var(--color-accent)] shrink-0"
          />
        )}
        <span className="font-semibold text-sm text-[var(--color-text-primary)]">
          {category.label}
        </span>
      </div>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={[
              "text-xs px-2 py-1 rounded",
              "text-[var(--color-text-secondary)]",
              "bg-[var(--color-bg-elevated)]",
            ].join(" ")}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────

export function SkillsSection() {
  return (
    <div
      aria-label="Technical skills"
      className="py-16 px-4"
    >
      {/* Section heading */}
      <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8 text-center">
        Skills
      </h2>

      {/* Responsive grid: 1 col → 2–3 col → 5 col */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-[1280px] mx-auto">
        {SKILL_CATEGORIES.map((category) => (
          <SkillCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
