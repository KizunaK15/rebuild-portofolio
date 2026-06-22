import { FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * Footer — semantic site footer.
 *
 * Contains:
 * - Copyright notice
 * - GitHub and LinkedIn icon links
 * - "Built with Next.js" tag
 *
 * All external links use target="_blank" rel="noopener noreferrer".
 * Text contrast meets 4.5:1 in both dark and light mode. — Req 3.2
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Copyright */}
          <p className="text-sm text-[var(--color-text-secondary)] text-center sm:text-left">
            © {year} Prima Aji Setyawan
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/KizunaK15"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile of Prima Aji Setyawan"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm"
            >
              <FaGithub size={18} aria-hidden="true" />
            </a>

            <a
              href="https://linkedin.com/in/primaajisetyawan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile of Prima Aji Setyawan"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm"
            >
              <FaLinkedin size={18} aria-hidden="true" />
            </a>
          </div>

          {/* Built with */}
          <p className="text-xs text-[var(--color-text-muted)] text-center sm:text-right">
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] underline underline-offset-2 transition-colors duration-150"
            >
              Next.js
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}