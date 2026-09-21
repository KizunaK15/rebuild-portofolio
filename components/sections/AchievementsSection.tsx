import Image from "next/image";
import { ACHIEVEMENTS } from "@/lib/data/achievements";
import type { Achievement } from "@/lib/types";



// ─── Card ─────────────────────────────────────────────────────────

function AchievementCard({ item }: { item: Achievement }) {
  return (
    <div className="glass-card overflow-hidden">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] bg-[var(--color-bg-elevated)]">
        <Image
          src={item.imageUrl}
          alt={item.imageAlt}
          width={item.width}
          height={item.height}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-1">
        <p
          className="text-xs uppercase tracking-wide"
          style={{ color: "var(--color-text-muted)" }}
        >
          {item.eventName} · {item.year}
        </p>
        <p className="font-bold text-base" style={{ color: "var(--color-text-primary)" }}>
          {item.achievement}
        </p>
        <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
          {item.projectName}
        </p>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────

/**
 * AchievementsSection — server component.
 *
 * Renders achievement cards in a 2-column grid (1-col on mobile).
 * Sorted by year descending (controlled by ACHIEVEMENTS data array).
 * Adding a new entry to achievements.ts renders it without touching this file.
 */
export function AchievementsSection() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1280px]">
        <h2
          id="achievements-heading"
          className="text-2xl font-bold mb-2"
          style={{ color: "var(--color-text-primary)" }}
        >
          Achievements
        </h2>
        <p className="text-sm mb-8" style={{ color: "var(--color-text-secondary)" }}>
          Recognition from national and international invention exhibitions.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl">
          {ACHIEVEMENTS.map((item) => (
            <AchievementCard key={`${item.eventName}-${item.year}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
