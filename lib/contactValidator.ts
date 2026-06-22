import type { ContactFormInput, ContactFormErrors } from "@/lib/types";

interface ValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Validates the contact form name field.
 * Rules: 1–100 characters, must contain at least one non-whitespace character.
 */
export function validateName(name: string): ValidationResult {
  if (!name || name.trim().length === 0) {
    return { valid: false, error: "Name is required." };
  }
  if (name.length > 100) {
    return { valid: false, error: "Name must be 100 characters or fewer." };
  }
  return { valid: true };
}

/**
 * Validates the contact form email field.
 * Rules: must match /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || email.trim().length === 0) {
    return { valid: false, error: "Email is required." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: "Please enter a valid email address." };
  }
  return { valid: true };
}

/**
 * Validates the contact form message field.
 * Rules: 1–1000 characters.
 */
export function validateMessage(message: string): ValidationResult {
  if (!message || message.trim().length === 0) {
    return { valid: false, error: "Message is required." };
  }
  if (message.length > 1000) {
    return { valid: false, error: "Message must be 1000 characters or fewer." };
  }
  return { valid: true };
}

/**
 * Validates all fields of the contact form.
 * Returns a ContactFormErrors object; fields without errors are omitted.
 */
export function validateContactForm(input: ContactFormInput): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const nameResult = validateName(input.name);
  if (!nameResult.valid) {
    errors.name = nameResult.error;
  }

  const emailResult = validateEmail(input.email);
  if (!emailResult.valid) {
    errors.email = emailResult.error;
  }

  const messageResult = validateMessage(input.message);
  if (!messageResult.valid) {
    errors.message = messageResult.error;
  }

  return errors;
}
