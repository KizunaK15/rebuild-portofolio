"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { cardHover } from "@/components/animations/motionVariants";
import type { ProjectSummary } from "@/lib/types";

type ProjectCardProps = ProjectSummary;

/**
 * ProjectCard — displays a project summary with hover animation.
 * Uses glassmorphism card style and links to the full project page.
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
      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-[var(--radius)]"
    >
      <motion.div
        className="glass-card p-6 h-full flex flex-col gap-3 cursor-pointer"
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {/* Silver Medal badge */}
        {badgeLabel && (
          <div
            className="flex items-center gap-1.5 self-start rounded-full px-3 py-1 text-xs font-medium"
            style={{
              backgroundColor: "rgba(99, 102, 241, 0.15)",
              color: "var(--color-accent)",
              border: "1px solid rgba(99, 102, 241, 0.30)",
            }}
            aria-label={`Award: ${badgeLabel}`}
          >
            <Award size={12} aria-hidden="true" />
            {badgeLabel}
          </div>
        )}

        {/* Title */}
        <h3
          className="font-semibold text-base leading-snug"
          style={{ color: "var(--color-text-primary)" }}
        >
          {title}
        </h3>

        {/* Problem statement */}
        <p
          className="text-sm line-clamp-3"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {problemStatement}
        </p>

        {/* Spacer pushes hardware + result to bottom */}
        <div className="flex-1" />

        {/* Primary hardware chip */}
        <span
          className="self-start text-xs rounded-md px-2.5 py-1 font-mono"
          style={{
            backgroundColor: "var(--color-bg-elevated)",
            color: "var(--color-text-secondary)",
            border: "1px solid var(--color-border)",
          }}
          aria-label={`Primary hardware: ${primaryHardware}`}
        >
          {primaryHardware}
        </span>

        {/* Result highlight */}
        <p
          className="text-sm italic"
          style={{ color: "var(--color-text-muted)" }}
        >
          {resultHighlight}
        </p>
      </motion.div>
    </Link>
  );
}
