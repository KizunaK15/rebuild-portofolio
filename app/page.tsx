import type { Metadata } from "next";
import { NavTop } from "@/components/layout/NavTop";
import { NavBottom } from "@/components/layout/NavBottom";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Prima Aji Setyawan",
  description:
    "Embedded Systems Engineer, IoT Engineer, and AI-Augmented Developer portfolio.",
};

/**
 * Home — React Server Component.
 *
 * Assembles all homepage sections in order. Each <section> provides the id
 * used by NavTop / NavBottom scroll-spy and anchor links.
 *
 * Note: several section components (AboutSection, SkillsSection,
 * ExperienceSection, BlogSection) manage their own background and padding
 * internally, so the outer <section> here acts purely as a scroll anchor.
 * Components that don't manage their own spacing receive py-16 padding here.
 */
export default function Home() {
  return (
    <>
      <NavTop />

      <main id="main-content">
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section
          id="home"
          className="py-16 px-4 sm:px-6 lg:px-8"
          aria-label="Hero introduction"
        >
          <div className="mx-auto max-w-[1280px]">
            <HeroSection />
          </div>
        </section>

        {/* ── About — component manages its own bg & padding ────── */}
        <section id="about" aria-label="About">
          <AboutSection />
        </section>

        {/* ── Skills — component manages its own padding ─────────── */}
        <section id="skills" aria-label="Skills">
          <SkillsSection />
        </section>

        {/* ── Projects ──────────────────────────────────────────── */}
        <section
          id="projects"
          className="py-16 px-4 sm:px-6 lg:px-8"
          aria-label="Projects"
        >
          <div className="mx-auto max-w-[1280px]">
            <ProjectsSection />
          </div>
        </section>

        {/* ── Achievements ──────────────────────────────────────── */}
        <section
          id="achievements"
          className="py-16 px-4 sm:px-6 lg:px-8"
          aria-label="Achievements"
        >
          <div className="mx-auto max-w-[1280px]">
            <AchievementsSection />
          </div>
        </section>

        {/* ── Experience — component manages its own bg & padding ── */}
        <section id="experience" aria-label="Experience">
          <ExperienceSection />
        </section>

        {/* ── Blog — component manages its own bg & padding ────── */}
        <section id="blog" aria-label="Blog">
          <BlogSection />
        </section>

        {/* ── Contact ──────────────────────────────────────────── */}
        <section
          id="contact"
          className="py-16 px-4 sm:px-6 lg:px-8"
          aria-label="Contact"
        >
          <div className="mx-auto max-w-[1280px]">
            <ContactSection />
          </div>
        </section>
      </main>

      <Footer />
      <NavBottom />
    </>
  );
}
