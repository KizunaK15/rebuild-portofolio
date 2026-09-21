"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { cardHover } from "@/components/animations/motionVariants";
import type { ProjectSummary } from "@/lib/types";

type ProjectCardProps = ProjectSummary;

/**
 * ProjectCard — glassmorphism card dengan gambar opsional.
 *
 * - Jika imageUrl tersedia: tampilkan gambar di bagian atas card (aspect-video)
 * - Badge award hanya muncul jika badgeLabel ada
 * - Hover: scale 1.02, shadow glow, 200ms
 * - Keyboard accessible via parent Link dengan focus ring
 */
export function ProjectCard({
  slug,
  title,
  problemStatement,
  primaryHardware,
  resultHighlight,
  badgeLabel,
  imageUrl,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      aria-label={`Lihat proyek: ${title}`}
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
        className="glass-card h-full flex flex-col overflow-hidden"
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        style={{ boxShadow: "var(--shadow-card)", cursor: "pointer" }}
      >
        {/* ── Gambar proyek (jika tersedia) ── */}
        {imageUrl && (
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={imageUrl}
              alt={`${title} — project photo`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
            {/* Gradient overlay bawah agar teks tidak clash dengan gambar */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,15,30,0.6) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
            {/* Badge di atas gambar jika ada */}
            {badgeLabel && (
              <div
                className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(99, 102, 241, 0.85)",
                  color: "#ffffff",
                  border: "1px solid rgba(99, 102, 241, 0.50)",
                }}
              >
                <Award size={11} aria-hidden="true" />
                {badgeLabel}
              </div>
            )}
          </div>
        )}

        {/* ── Konten card ── */}
        <div className="flex flex-col gap-3 p-5 flex-1">
          {/* Badge — tampil di sini jika TIDAK ada gambar */}
          {badgeLabel && !imageUrl && (
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

          {/* Judul */}
          <h3
            className="font-semibold text-base leading-snug"
            style={{ color: "var(--color-text-primary)" }}
          >
            {title}
          </h3>

          {/* Problem statement */}
          <p
            className="text-sm line-clamp-3 leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {problemStatement}
          </p>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Hardware chip */}
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

          {/* Result highlight */}
          <p
            className="text-sm italic leading-snug"
            style={{ color: "var(--color-text-muted)" }}
          >
            {resultHighlight}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
