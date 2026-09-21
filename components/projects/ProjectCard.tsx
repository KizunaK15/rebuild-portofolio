"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { cardHover } from "@/components/animations/motionVariants";
import type { ProjectSummary } from "@/lib/types";

type ProjectCardProps = ProjectSummary;

/**
 * ProjectCard — glassmorphism card linking to /projects/[slug].
 *
 * - Optional badge for award-winning projects (Req 10.3)
 * - Problem statement ≤ 30 words (Req 10.6)
 * - Primary hardware chip tag (Req 10.6)
 * - Result highlight ≤ 20 words (Req 10.6)
 * - cardHover scale 1.02, 200ms (Req 5.7)
 * - Keyboard focus ring via Link (Req 3.3, 3.4)
 * - No image rendered here — cards stay uniform height (Req 6.5)
 *
 * NOTE: imageUrl is part of the type but intentionally not rendered
 * in the summary card — it's used in the ProjectDetail page instead.
 */
export function ProjectCard({
  slug,
  title,
  problemStatement,
  primaryHardware,
  resultHighlight,
  badgeLabel,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      aria-label={`View project: ${title}`}
      className={[
        "block h-full",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[var(--color-accent)]",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-[var(--color-bg-primary)]",
        "rounded-[var(--radius)]",
      ].join(" ")}
    >
      <motion.div
        className="glass-card p-6 h-full flex flex-col gap-3"
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        // Keep explicit cursor so it works even when framer disables animations
        style={{ boxShadow: "var(--shadow-card)", cursor: "pointer" }}
      >
        {/* ── Badge (award-winning projects only) ── */}
        {badgeLabel && (
          <div
            role="img"
            aria-label={`Award: ${badgeLabel}`}
            className="flex items-center gap-1.5 self-start rounded-full px-3 py-1 text-xs font-medium"
            style={{
              backgroundColor: "rgba(99, 102, 241, 0.15)",
              color: "var(--color-accent)",
              border: "1px solid rgba(99, 102, 241, 0.30)",
            }}
          >
            <Award size={12} aria-hidden="true" />
            {badgeLabel}
          </div>
        )}

        {/* ── Title ── */}
        <h3
          className="font-semibold text-base leading-snug"
          style={{ color: "var(--color-text-primary)" }}
        >
          {title}
        </h3>

        {/* ── Problem statement (≤ 30 words, line-clamp for safety) ── */}
        <p
          className="text-sm line-clamp-3 leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {problemStatement}
        </p>

        {/* ── Spacer — pushes meta to card bottom for uniform grid look ── */}
        <div className="flex-1" />

        {/* ── Primary hardware chip ── */}
        <span
          className="self-start text-xs rounded-md px-2.5 py-1 font-mono"
          style={{
            backgroundColor: "var(--color-bg-elevated)",
            color: "var(--color-text-secondary)",
            border: "1px solid var(--color-border)",
          }}
        >
          {primaryHardware}
        </span>

        {/* ── Result highlight (≤ 20 words) ── */}
        <p
          className="text-sm italic leading-snug"
          style={{ color: "var(--color-text-muted)" }}
        >
          {resultHighlight}
        </p>
      </motion.div>
    </Link>
  );
}
