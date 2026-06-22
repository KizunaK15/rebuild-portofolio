"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useActiveSection — tracks which section is currently visible in the viewport
 * using IntersectionObserver. Returns the id of the active section.
 *
 * @param sectionIds  Ordered list of section element ids to observe.
 * @param rootMargin  IntersectionObserver rootMargin (default: "-20% 0px -60% 0px"
 *                    so a section is "active" when it occupies the upper-middle band).
 */
export function useActiveSection(
  sectionIds: string[],
  rootMargin = "-20% 0px -60% 0px"
): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");
  // Keep a stable ref to sectionIds to avoid re-creating the observer on every render
  const idsRef = useRef(sectionIds);
  idsRef.current = sectionIds;

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry in document order
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length === 0) return;

        // Pick the one that appears earliest in the sectionIds order
        const ordered = idsRef.current.filter((id) =>
          intersecting.some((e) => e.target.id === id)
        );
        if (ordered.length > 0) {
          setActiveId(ordered[0]);
        }
      },
      { rootMargin }
    );

    // Observe all target sections that exist in the DOM
    const elements: Element[] = [];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    }

    return () => {
      for (const el of elements) {
        observer.unobserve(el);
      }
    };
    // rootMargin intentionally omitted from deps — changing it mid-render
    // is not a supported use-case for this hook.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return activeId;
}
