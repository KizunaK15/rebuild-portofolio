"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_LINKS = [
  { id: "about",        label: "About" },
  { id: "skills",       label: "Skills" },
  { id: "projects",     label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "experience",   label: "Experience" },
  { id: "blog",         label: "Blog" },
  { id: "contact",      label: "Contact" },
] as const;

const SECTION_IDS = ["home", ...NAV_LINKS.map((l) => l.id)];

/**
 * NavTop — sticky top navigation bar for desktop (≥ 768px).
 *
 * Hidden at viewport < 768px via `hidden md:flex`. — Req 6.2
 * Active section link is visually highlighted. — Req 5.7
 * All anchor links are keyboard Tab accessible. — Req 3.3
 * Theme toggle button has visible focus indicator. — Req 3.4
 * No neon colors. — Req 5.2
 */
export function NavTop() {
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <header
      className={[
        // Hidden on mobile, flex on ≥ md
        "hidden md:flex",
        // Sticky positioning
        "sticky top-0 z-50 w-full",
        // Glassmorphism background
        "glass-card rounded-none",
        "border-b border-[var(--color-border-glass)]",
        // Remove card border-radius for full-width header
      ].join(" ")}
      style={{ borderRadius: 0 }}
    >
      <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Primary desktop navigation"
        >
          {/* Brand / Logo */}
          <Link
            href="#home"
            aria-label="Prima Aji Setyawan — go to top"
            className={[
              "font-semibold text-sm tracking-tight",
              "text-[var(--color-text-primary)]",
              "hover:text-[var(--color-accent)] transition-colors duration-150",
              "focus-visible:outline-2 focus-visible:outline-offset-2",
              "focus-visible:outline-[var(--color-accent)] rounded-sm",
            ].join(" ")}
          >
            Prima Aji
          </Link>

          {/* Section links */}
          <ul className="flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={[
                      "relative px-3 py-1.5 text-sm rounded-md",
                      "transition-colors duration-150",
                      "focus-visible:outline-2 focus-visible:outline-offset-2",
                      "focus-visible:outline-[var(--color-accent)]",
                      isActive
                        ? "text-[var(--color-accent)] font-medium"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
                    ].join(" ")}
                  >
                    {label}
                    {/* Active underline indicator */}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[var(--color-accent)]"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Theme toggle button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className={[
              "flex items-center justify-center w-9 h-9 rounded-md",
              "text-[var(--color-text-secondary)]",
              "hover:text-[var(--color-text-primary)]",
              "hover:bg-[var(--color-bg-elevated)]",
              "transition-colors duration-150",
              // Visible focus ring — Req 3.4
              "focus-visible:outline-2 focus-visible:outline-offset-2",
              "focus-visible:outline-[var(--color-accent)]",
            ].join(" ")}
          >
            {theme === "dark" ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
