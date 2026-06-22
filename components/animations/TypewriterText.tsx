"use client";

import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"

interface TypewriterTextProps {
  /** List of role strings to cycle through. */
  roles: readonly string[];
  /** Additional CSS classes on the wrapper element. */
  className?: string;
}

const CHAR_INTERVAL_MS = 80;   // ≤ 100ms per character — Req 7.7
const ROLE_PAUSE_MS   = 2500;  // pause per role — within 2000–3000ms — Req 7.7
const ERASE_INTERVAL_MS = 40;  // erase faster than type for better UX

type Phase = "typing" | "pausing" | "erasing";

/**
 * TypewriterText — cycles through an array of role strings using
 * a character-by-character typewriter effect.
 *
 * Accessibility:
 * - When `prefers-reduced-motion: reduce` is active, renders the
 *   roles as static comma-separated text with no animation.
 * - Uses `aria-live="polite"` so screen readers announce changes
 *   without interrupting the user.
 *
 * No Babel CDN or runtime JS compilation used. — Req 7.7
 */
export function TypewriterText({ roles, className }: TypewriterTextProps) {
  const prefersReduced = useReducedMotion();

  const [roleIndex, setRoleIndex]   = useState(0);
  const [displayed, setDisplayed]   = useState("");
  const [phase, setPhase]           = useState<Phase>("typing");

  // All hooks must be called unconditionally before any early return.
  useEffect(() => {
    // Bail out — no timer needed in static / reduced-motion mode.
    if (prefersReduced || roles.length === 0) return;

    const currentRole = roles[roleIndex % roles.length];

    if (phase === "typing") {
      if (displayed.length < currentRole.length) {
        const t = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, CHAR_INTERVAL_MS);
        return () => clearTimeout(t);
      }
      // Fully typed — pause before erasing
      const t = setTimeout(() => setPhase("erasing"), ROLE_PAUSE_MS);
      return () => clearTimeout(t);
    }

    if (phase === "erasing") {
      if (displayed.length > 0) {
        const t = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
        }, ERASE_INTERVAL_MS);
        return () => clearTimeout(t);
      }
      // Fully erased — defer state update to next tick so no synchronous
      // setState fires inside the effect body (react-hooks/set-state-in-effect).
      const t = setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setPhase("typing");
      }, 0);
      return () => clearTimeout(t);
    }
  }, [displayed, phase, roleIndex, roles, prefersReduced]);

  // Static fallback rendered after all hooks — Rules of Hooks satisfied.
  if (prefersReduced || roles.length === 0) {
    return (
      <span className={className} aria-label={roles.join(", ")}>
        {roles[0] ?? ""}
      </span>
    );
  }

  return (
    <span
      className={className}
      aria-live="polite"
      aria-atomic="true"
      // Provide full accessible label to screen readers without interrupting
      aria-label={roles[roleIndex % roles.length]}
    >
      {displayed}
      {/* Blinking cursor */}
      <span aria-hidden="true" className="animate-pulse">
        |
      </span>
    </span>
  );
}