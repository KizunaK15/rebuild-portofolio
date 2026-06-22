import { ContactForm } from "@/components/contact/ContactForm";

export function ContactSection() {
  return (
    <div
      aria-labelledby="contact-heading"
      className="py-[var(--spacing-section-y)] px-4"
    >
      <div className="mx-auto max-w-[var(--spacing-container-max)]">
        <div className="max-w-xl mx-auto">
          <h2
            id="contact-heading"
            className="text-[length:var(--font-size-display-md)] font-bold tracking-tight mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Get in Touch
          </h2>
          <p
            className="mb-8 text-[length:var(--font-size-body-lg)]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Have a project in mind or just want to say hi? Drop me a message.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}