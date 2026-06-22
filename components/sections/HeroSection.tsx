import Image from "next/image";
import Link from "next/link";
import { Award, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FadeUp } from "@/components/animations/FadeUp";
import { TypewriterText } from "@/components/animations/TypewriterText";

// ─── Static hero data ─────────────────────────────────────────────

const HERO = {
  fullName: "Prima Aji Setyawan",
  headline:
    "Embedded Systems Engineer · IoT Engineer · AI-Augmented Developer",
  summary:
    "I design systems that bridge hardware and intelligence — from microcontroller firmware to cloud-connected IoT pipelines. My work focuses on solving real engineering problems with reliable, maintainable solutions.",
  roles: [
    "Embedded Systems Engineer",
    "IoT Engineer",
    "AI-Augmented Developer",
  ],
  badgeLabel: "Silver Medal · IIIEX 2025",
  photoUrl: "/images/prima-profile.jpg",
  photoAlt: "Prima Aji Setyawan — professional photo",
  githubUrl: "https://github.com/KizunaK15",
  linkedinUrl: "https://linkedin.com/in/primaajisetyawan",
  resumeUrl: "/resume.pdf",
} as const;

/**
 * HeroSection — server component (FadeUp / TypewriterText handle their own
 * "use client" boundary internally).
 *
 * Layout:
 *  - Mobile  : single column — badge → photo → name → roles → headline
 *              → summary → CTAs → socials
 *  - Desktop (≥ lg): two-column flex — content left, photo right
 */
export function HeroSection() {
  return (
    <div
      aria-label="Hero — introduction"
      className="w-full"
    >
      <FadeUp>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          {/* ── LEFT / TOP content column ─────────────────────────── */}
          <div className="flex flex-col gap-5 lg:max-w-xl">

            {/* Badge — visible on mobile above photo, on desktop above name */}
            <div
              className="flex items-center gap-2 self-start rounded-full px-3 py-1.5 text-xs font-medium"
              style={{
                backgroundColor: "rgba(99, 102, 241, 0.15)",
                color: "var(--color-accent)",
                border: "1px solid rgba(99, 102, 241, 0.30)",
              }}
              aria-label={`Award: ${HERO.badgeLabel}`}
            >
              <Award size={14} aria-hidden="true" />
              {HERO.badgeLabel}
            </div>

            {/* Profile photo — shown here on mobile (order matters in single-col) */}
            <div className="lg:hidden flex justify-center">
              <Image
                src={HERO.photoUrl}
                alt={HERO.photoAlt}
                width={240}
                height={240}
                priority
                className="rounded-full object-cover"
                style={{
                  border: "2px solid var(--color-border-glass)",
                  boxShadow: "var(--shadow-glow)",
                }}
              />
            </div>

            {/* Full name */}
            <h1
              className="text-4xl xl:text-5xl font-bold leading-tight tracking-tight"
              style={{ color: "var(--color-text-primary)" }}
            >
              {HERO.fullName}
            </h1>

            {/* Typewriter roles — aria-label & live region are handled inside TypewriterText */}
            <div style={{ color: "var(--color-accent)" }}>
              <TypewriterText
                roles={HERO.roles}
                className="text-xl font-medium"
              />
            </div>

            {/* Headline */}
            <p
              className="text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {HERO.headline}
            </p>

            {/* Summary */}
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {HERO.summary}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              {/* Primary CTA — scroll to contact */}
              <Link
                href="#contact"
                aria-label="Get in touch — scroll to contact section"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "#ffffff",
                }}
              >
                Get in Touch
              </Link>

              {/* Secondary CTA — download resume */}
              <a
                href={HERO.resumeUrl}
                download
                aria-label="Download resume as PDF"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  color: "var(--color-text-primary)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <Download size={15} aria-hidden="true" />
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href={HERO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in new tab)"
                className="transition-opacity duration-200 hover:opacity-75"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <FaGithub size={22} aria-hidden="true" />
              </a>
              <a
                href={HERO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in new tab)"
                className="transition-opacity duration-200 hover:opacity-75"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <FaLinkedin size={22} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* ── RIGHT / BOTTOM photo column — desktop only ────────── */}
          <div className="hidden lg:flex justify-center lg:justify-end flex-shrink-0">
            <Image
              src={HERO.photoUrl}
              alt={HERO.photoAlt}
              width={240}
              height={240}
              priority
              className="rounded-full object-cover"
              style={{
                border: "2px solid var(--color-border-glass)",
                boxShadow: "var(--shadow-glow)",
              }}
            />
          </div>

        </div>
      </FadeUp>
    </div>
  );
}