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
      <div className="p-5 flex flex-col gap-1">
        <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wide">
          {item.eventName} · {item.year}
        </p>
        <p className="font-bold text-[var(--color-text-primary)] text-base">
          {item.achievement}
        </p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {item.projectName}
        </p>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────

export function AchievementsSection() {
  return (
    <div
      aria-label="Awards and achievements"
      className="py-16 px-4"
    >
      {/* Section heading */}
      <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8 text-center">
        Achievements
      </h2>

      {/* Grid: 1 col mobile, 2 col tablet+ */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-3xl mx-auto">
        {ACHIEVEMENTS.map((item) => (
          <AchievementCard key={`${item.eventName}-${item.year}`} item={item} />
        ))}
      </div>
    </div>
  );
}
