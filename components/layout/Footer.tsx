// Inline SVGs — eliminates react-icons dependency (not in package.json)
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

/**
 * Footer — semantic site footer.
 * All external links use target="_blank" rel="noopener noreferrer". (Req 7.5)
 * Text contrast meets 4.5:1 in both dark and light mode. (Req 3.2)
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t"
      style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-secondary)" }}
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">

          <p className="text-sm text-center sm:text-left" style={{ color: "var(--color-text-secondary)" }}>
            &copy; {year} Prima Aji Setyawan
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/KizunaK15"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile of Prima Aji Setyawan"
              className="transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm hover:opacity-75"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/primaajisetyawan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile of Prima Aji Setyawan"
              className="transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm hover:opacity-75"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <LinkedinIcon size={18} />
            </a>
          </div>

          <p className="text-xs text-center sm:text-right" style={{ color: "var(--color-text-muted)" }}>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors duration-150 hover:opacity-75"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Next.js
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}
