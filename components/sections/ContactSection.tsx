import { Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

// Inline SVGs — lucide-react export names vary by version
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

/**
 * ContactSection — contact links and form.
 *
 * Heading: exactly "Let''s build intelligent systems together." (Req 14.3)
 * id="contact" for CTA scroll target (Req 7.4)
 */
export function ContactSection() {
  return (
    <div id="contact" aria-labelledby="contact-heading" className="w-full">
      <div className="max-w-xl mx-auto">

        <h2
          id="contact-heading"
          className="text-2xl font-bold tracking-tight mb-3"
          style={{ color: "var(--color-text-primary)" }}
        >
          Let&apos;s build intelligent systems together.
        </h2>

        <div className="flex flex-wrap items-center gap-4 mb-10">
          <a
            href="mailto:setyawan.ajiprima@gmail.com"
            aria-label="Send email to Prima"
            className="flex items-center gap-2 text-sm transition-colors duration-150 hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <Mail size={16} aria-hidden="true" />
            setyawan.ajiprima@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/primaajisetyawan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="flex items-center gap-2 text-sm transition-colors duration-150 hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>

          <a
            href="https://github.com/KizunaK15"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="flex items-center gap-2 text-sm transition-colors duration-150 hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <GithubIcon size={16} />
            GitHub
          </a>

          <a
            href="https://wa.me/6285156789012"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp contact (opens in new tab)"
            className="flex items-center gap-2 text-sm transition-colors duration-150 hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <MessageCircle size={16} aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
