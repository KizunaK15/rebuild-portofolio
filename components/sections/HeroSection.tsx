import Image from "next/image";
import Link from "next/link";
import { Award, Download } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { TypewriterText } from "@/components/animations/TypewriterText";

// Inline SVGs — avoids lucide version export naming issues
function GithubIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

function LinkedinIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

const HERO = {
  fullName: "Prima Aji Setyawan",
  headline: "Embedded Systems Engineer · IoT Engineer · AI-Augmented Developer",
  summary:
    "I design systems that bridge hardware and intelligence — from microcontroller firmware to cloud-connected IoT pipelines. My work focuses on solving real engineering problems with reliable, maintainable solutions.",
  roles: ["Embedded Systems Engineer", "IoT Engineer", "AI-Augmented Developer"],
  badgeLabel: "Silver Medal · IIIEX 2025",
  photoUrl: "/images/prima-profile.jpg",
  photoAlt: "Prima Aji Setyawan — professional photo",
  githubUrl: "https://github.com/KizunaK15",
  linkedinUrl: "https://linkedin.com/in/primaajisetyawan",
  resumeUrl: "/resume.pdf",
} as const;

export function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-name" className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* Content column */}
            <div className="flex flex-col gap-5 lg:max-w-xl">

              {/* Badge */}
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

              {/* Photo — mobile only */}
              <div className="lg:hidden flex justify-center">
                <Image
                  src={HERO.photoUrl}
                  alt={HERO.photoAlt}
                  width={240}
                  height={240}
                  priority
                  className="rounded-full object-cover"
                  style={{ border: "2px solid var(--color-border-glass)", boxShadow: "var(--shadow-glow)" }}
                />
              </div>

              <h1
                id="hero-name"
                className="text-4xl xl:text-5xl font-bold leading-tight tracking-tight"
                style={{ color: "var(--color-text-primary)" }}
              >
                {HERO.fullName}
              </h1>

              <div style={{ color: "var(--color-accent)" }}>
                <TypewriterText roles={HERO.roles} className="text-xl font-medium" />
              </div>

              <p className="text-lg" style={{ color: "var(--color-text-secondary)" }}>
                {HERO.headline}
              </p>

              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {HERO.summary}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="#contact"
                  aria-label="Get in touch — scroll to contact section"
                  className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200"
                  style={{ backgroundColor: "var(--color-accent)", color: "#ffffff" }}
                >
                  Get in Touch
                </Link>
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
                  <GithubIcon size={22} />
                </a>
                <a
                  href={HERO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in new tab)"
                  className="transition-opacity duration-200 hover:opacity-75"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <LinkedinIcon size={22} />
                </a>
              </div>
            </div>

            {/* Photo — desktop only */}
            <div className="hidden lg:flex justify-center lg:justify-end flex-shrink-0">
              <Image
                src={HERO.photoUrl}
                alt={HERO.photoAlt}
                width={240}
                height={240}
                priority
                className="rounded-full object-cover"
                style={{ border: "2px solid var(--color-border-glass)", boxShadow: "var(--shadow-glow)" }}
              />
            </div>

          </div>
        </FadeUp>
      </div>
    </section>
  );
}
