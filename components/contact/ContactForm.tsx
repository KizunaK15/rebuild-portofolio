"use client";

import { useState } from "react";
import type { ContactFormErrors, ContactFormStatus } from "@/lib/types";
import { validateContactForm } from "@/lib/contactValidator";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [apiError, setApiError] = useState<string>("");

  const isSubmitting = status === "submitting";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Client-side validation
    const validationErrors = validateContactForm({ name, email, message });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setApiError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        // Reset after 5 seconds
        setTimeout(() => {
          setName("");
          setEmail("");
          setMessage("");
          setStatus("idle");
        }, 5000);
      } else {
        const data = await res.json().catch(() => ({}));
        setApiError(
          data?.error ?? "Something went wrong. Please try again later."
        );
        setStatus("error");
      }
    } catch {
      setApiError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        aria-live="polite"
        style={{ color: "var(--color-success)" }}
        className="text-sm py-4"
      >
        Message sent! I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-4"
    >
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="contact-name"
          className="text-sm font-medium"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          aria-describedby="contact-name-error"
          aria-invalid={!!errors.name}
          disabled={isSubmitting}
          className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus-visible:ring-2 disabled:opacity-50"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-bg-elevated)",
            color: "var(--color-text-primary)",
          }}
        />
        <span
          id="contact-name-error"
          role="alert"
          aria-live="polite"
          className="text-xs min-h-[1rem]"
          style={{ color: "var(--color-error)" }}
        >
          {errors.name ?? ""}
        </span>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="contact-email"
          className="text-sm font-medium"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          aria-describedby="contact-email-error"
          aria-invalid={!!errors.email}
          disabled={isSubmitting}
          className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus-visible:ring-2 disabled:opacity-50"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-bg-elevated)",
            color: "var(--color-text-primary)",
          }}
        />
        <span
          id="contact-email-error"
          role="alert"
          aria-live="polite"
          className="text-xs min-h-[1rem]"
          style={{ color: "var(--color-error)" }}
        >
          {errors.email ?? ""}
        </span>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          aria-describedby="contact-message-error"
          aria-invalid={!!errors.message}
          disabled={isSubmitting}
          className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus-visible:ring-2 disabled:opacity-50 resize-vertical"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-bg-elevated)",
            color: "var(--color-text-primary)",
          }}
        />
        <span
          id="contact-message-error"
          role="alert"
          aria-live="polite"
          className="text-xs min-h-[1rem]"
          style={{ color: "var(--color-error)" }}
        >
          {errors.message ?? ""}
        </span>
      </div>

      {/* API-level error */}
      {status === "error" && apiError && (
        <p
          role="alert"
          aria-live="polite"
          className="text-sm"
          style={{ color: "var(--color-error)" }}
        >
          {apiError}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        aria-disabled={isSubmitting}
        disabled={isSubmitting}
        className="self-start rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
