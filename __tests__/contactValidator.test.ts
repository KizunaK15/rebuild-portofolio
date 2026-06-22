import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { validateName, validateEmail, validateMessage, validateContactForm } from "@/lib/contactValidator";

describe("validateName", () => {
  it("accepts any 1–100 char string with at least one non-whitespace", () => {
    fc.assert(
      fc.property(
        fc.stringOf(fc.char(), { minLength: 1, maxLength: 100 })
          .filter(s => s.trim().length > 0),
        (name) => {
          const result = validateName(name);
          expect(result.valid).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("rejects empty or whitespace-only names", () => {
    fc.assert(
      fc.property(
        fc.stringOf(fc.constant(" "), { minLength: 0, maxLength: 10 }),
        (name) => {
          const result = validateName(name);
          expect(result.valid).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("rejects names over 100 characters", () => {
    fc.assert(
      fc.property(
        fc.stringOf(fc.char(), { minLength: 101, maxLength: 200 }),
        (name) => {
          const result = validateName(name);
          expect(result.valid).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe("validateEmail", () => {
  it("accepts valid email patterns", () => {
    fc.assert(
      fc.property(
        fc.emailAddress(),
        (email) => {
          const result = validateEmail(email);
          expect(result.valid).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("rejects strings without @ symbol", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 50 }).filter(s => !s.includes("@")),
        (email) => {
          const result = validateEmail(email);
          expect(result.valid).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe("validateMessage", () => {
  it("accepts messages 1–1000 chars", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 1000 }).filter(s => s.trim().length > 0),
        (msg) => {
          const result = validateMessage(msg);
          expect(result.valid).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("rejects messages over 1000 chars", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1001, maxLength: 2000 }),
        (msg) => {
          const result = validateMessage(msg);
          expect(result.valid).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});
