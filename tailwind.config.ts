/**
 * tailwind.config.ts
 *
 * NOTE: This project uses Tailwind CSS v4 which reads configuration
 * primarily from globals.css via @theme and CSS custom properties.
 * This file exists for IDE tooling support and documents the design
 * token system. The authoritative source of truth is globals.css.
 */
import type { Config } from "tailwindcss";

const config: Config = {
  // In Tailwind v4, darkMode is handled via [data-theme] attribute
  // configured directly in CSS using selector strategy.
  darkMode: ["selector", '[data-theme="dark"]'],

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{mdx,md}",
  ],

  theme: {
    extend: {
      fontFamily: {
        // Matches @theme --font-sans and --font-mono in globals.css
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "monospace"],
      },

      fontSize: {
        // Typography scale — mirrors globals.css @theme tokens
        "display-xl": ["3.5rem",  { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display-lg": ["2.5rem",  { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2rem",    { lineHeight: "1.2" }],
        "body-lg":    ["1.125rem",{ lineHeight: "1.75" }],
        "body-md":    ["1rem",    { lineHeight: "1.75" }],
        "body-sm":    ["0.875rem",{ lineHeight: "1.6" }],
        "label-sm":   ["0.75rem", { lineHeight: "1",   letterSpacing: "0.05em" }],
        "code":       ["0.875rem",{ lineHeight: "1.7" }],
      },

      spacing: {
        // Layout spacing tokens
        "section-y":    "6rem",    // vertical section padding (desktop)
        "section-y-sm": "4rem",    // vertical section padding (mobile)
        "card-p":       "1.5rem",  // card internal padding
      },

      maxWidth: {
        container: "1280px", // max-w-container
      },

      colors: {
        // All colors reference CSS custom properties defined in :root
        // This enables automatic dark/light mode switching via [data-theme]
        "bg-primary":   "var(--color-bg-primary)",
        "bg-secondary": "var(--color-bg-secondary)",
        "bg-elevated":  "var(--color-bg-elevated)",
        "bg-glass":     "var(--color-bg-glass)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary":"var(--color-text-secondary)",
        "text-muted":   "var(--color-text-muted)",
        accent:         "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-muted": "var(--color-accent-muted)",
        success:        "var(--color-success)",
        error:          "var(--color-error)",
        warning:        "var(--color-warning)",
        // Timeline type colors
        "type-education":    "var(--color-type-education)",
        "type-competition":  "var(--color-type-competition)",
        "type-project":      "var(--color-type-project)",
        "type-certification":"var(--color-type-certification)",
      },

      boxShadow: {
        card:     "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
        glow:     "var(--shadow-glow)",
      },

      borderRadius: {
        DEFAULT: "var(--radius)",
      },

      backdropBlur: {
        glass: "12px",
      },
    },
  },

  plugins: [],
};

export default config;
