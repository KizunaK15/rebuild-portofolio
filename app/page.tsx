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
 * Home — React Server Component (no "use client").
 *
 * Each section component is self-contained: owns its id, heading,
 * background color, and padding. This page is a thin assembly shell.
 *
 * Section order (Req 15.1):
 *   Hero → About → Skills → Projects → Achievements → Experience → Blog → Contact
 */
export default function Home() {
  return (
    <>
      <NavTop />

      {/* SkipLink target (Req 3.7) */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />

        <AchievementsSection />

        <ExperienceSection />
        <BlogSection />

        {/* Contact — ContactSection owns its id="contact" internally */}
        <section
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
