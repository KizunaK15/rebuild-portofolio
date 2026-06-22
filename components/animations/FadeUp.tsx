"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { fadeUp } from "./motionVariants";

interface FadeUpProps {
  children: React.ReactNode;
  /** Additional Tailwind / CSS classes on the wrapper element. */
  className?: string;
  /** Delay in seconds before the animation starts. */
  delay?: number;
}

/**
 * FadeUp — wraps children in a fade-up entrance animation.
 *
 * - Uses `whileInView` so the animation triggers when the element
 *   scrolls into the viewport (once only).
 * - Calls `useReducedMotion()` and skips all animation when the OS
 *   `prefers-reduced-motion: reduce` media query is active.
 *
 * WCAG 2.1 SC 2.3.3 — Animation from Interactions (AAA aware)
 * Req 3.8, 7.6
 */
export function FadeUp({ children, className, delay }: FadeUpProps) {
  const prefersReduced = useReducedMotion();

  // When reduced motion is preferred, render children immediately
  // with no animation wrapper overhead.
  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const variantWithDelay = delay
    ? {
        ...fadeUp,
        visible: {
          ...fadeUp.visible,
          transition: {
            ...(typeof fadeUp.visible === "object" &&
            "transition" in fadeUp.visible
              ? fadeUp.visible.transition
              : {}),
            delay,
          },
        },
      }
    : fadeUp;

  return (
    <motion.div
      className={className}
      variants={variantWithDelay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}
