/**
 * SkipLink — accessibility skip-navigation component.
 *
 * Rendered as the very first focusable element on every page.
 * Visually hidden until focused via Tab key, then becomes visible
 * with sufficient contrast so keyboard users can skip directly to
 * the main content area (#main-content).
 *
 * WCAG 2.1 SC 2.4.1 — Bypass Blocks (Level A)
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className={[
        // Hidden by default — taken out of flow but accessible to screen readers
        "sr-only",
        // Become fully visible on focus (keyboard Tab)
        "focus:not-sr-only",
        "focus:fixed",
        "focus:top-4",
        "focus:left-4",
        "focus:z-[9999]",
        // Visual styling when focused
        "focus:inline-flex",
        "focus:items-center",
        "focus:gap-2",
        "focus:px-4",
        "focus:py-2",
        "focus:rounded-md",
        // High-contrast background + text (≥ 4.5:1 in both modes)
        "focus:bg-[var(--color-accent)]",
        "focus:text-white",
        "focus:font-medium",
        "focus:text-sm",
        // Clear focus ring
        "focus:outline-2",
        "focus:outline-offset-2",
        "focus:outline-white",
        // Smooth appearance
        "transition-all",
        "duration-150",
      ].join(" ")}
    >
      Skip to main content
    </a>
  );
}
