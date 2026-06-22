"use client";

import Link from "next/link";
import { Home, User, Briefcase, FileText, Mail } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "home",    label: "Home",     Icon: Home },
  { id: "about",   label: "About",    Icon: User },
  { id: "projects",label: "Projects", Icon: Briefcase },
  { id: "blog",    label: "Blog",     Icon: FileText },
  { id: "contact", label: "Contact",  Icon: Mail },
] as const;

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

/**
 * NavBottom — fixed bottom navigation bar for mobile (< 768px).
 *
 * Hidden at viewport ≥ 768px via `md:hidden`. — Req 6.2
 * All 5 links are keyboard reachable. — Req 3.3
 * Each link has an aria-label. — Req 3.6
 * No horizontal overflow at 375px viewport. — Req 6.3
 */
export function NavBottom() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      aria-label="Mobile bottom navigation"
    >
      {/* Glassmorphism background */}
      <div
        className="glass-card rounded-none border-t border-[var(--color-border-glass)]"
        style={{ borderRadius: 0 }}
      >
        <ul
          className="flex items-stretch justify-around w-full max-w-[480px] mx-auto"
          role="list"
        >
          {NAV_ITEMS.map(({ id, label, Icon }) => {
            const isActive = activeId === id;
            return (
              <li key={id} className="flex-1">
                <Link
                  href={`#${id}`}
                  aria-label={`Navigate to ${label} section`}
                  aria-current={isActive ? "location" : undefined}
                  className={[
                    "flex flex-col items-center justify-center gap-1 py-3 px-2 w-full",
                    "text-[10px] font-medium leading-none",
                    "transition-colors duration-150",
                    "focus-visible:outline-2 focus-visible:outline-offset-2",
                    "focus-visible:outline-[var(--color-accent)]",
                    isActive
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]",
                  ].join(" ")}
                >
                  <Icon
                    size={20}
                    aria-hidden="true"
                    strokeWidth={isActive ? 2.5 : 1.75}
                  />
                  <span>{label}</span>
                  {/* Active indicator dot */}
                  {isActive && (
                    <span
                      className="absolute bottom-1 w-1 h-1 rounded-full bg-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
