import type { Variants, Transition } from "framer-motion";

// ─── Shared transition presets ────────────────────────────────────

const easeOut: Transition = { ease: "easeOut" };

// ─── Fade-up entrance (sections, cards) ──────────────────────────

/**
 * fadeUp — entrance animation: slides up 20px while fading in.
 * Used with FadeUp wrapper component and whileInView.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ...easeOut },
  },
};

// ─── Stagger container ────────────────────────────────────────────

/**
 * staggerContainer — parent variant that staggers children by 0.1s.
 * Apply to the wrapper element, use fadeUp on each child.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// ─── Card hover ───────────────────────────────────────────────────

/**
 * cardHover — subtle scale-up on hover for project/achievement cards.
 * Scale 1.02 = 2% growth, within 300ms as required.
 */
export const cardHover: Variants = {
  rest: { scale: 1, transition: { duration: 0.2, ...easeOut } },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ...easeOut }, // ≤ 300ms ✓
  },
};

// ─── Skill card hover ────────────────────────────────────────────

/**
 * skillCardHover — border/shadow change for skill category cards.
 * Duration 150–200ms as required by Req 9.7.
 */
export const skillCardHover: Variants = {
  rest: {
    boxShadow: "var(--shadow-card)",
    borderColor: "rgba(255, 255, 255, 0.12)",
    transition: { duration: 0.175, ...easeOut },
  },
  hover: {
    boxShadow: "var(--shadow-glow)",
    borderColor: "rgba(99, 102, 241, 0.4)",
    transition: { duration: 0.175, ...easeOut }, // 175ms — within 150–200ms ✓
  },
};
