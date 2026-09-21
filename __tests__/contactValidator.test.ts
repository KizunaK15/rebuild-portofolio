import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { validateName, validateEmail, validateMessage } from "@/lib/contactValidator";

describe("validateName", () => {
  it("accepts any 1-100 char string with at least one non-whitespace", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 100 }).filter((s: string) => s.trim().length > 0),
        (name: string) => {
          const result = validateName(name);
          expect(result.valid).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("rejects empty string", () => {
    const result = validateName("");
    expect(result.valid).toBe(false);
  });

  it("rejects whitespace-only name", () => {
    const result = validateName("   ");
    expect(result.valid).toBe(false);
  });

  it("rejects names over 100 characters", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 101, maxLength: 200 }),
        (name: string) => {
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
        (email: string) => {
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
        fc.string({ minLength: 1, maxLength: 50 }).filter((s: string) => !s.includes("@")),
        (email: string) => {
          const result = validateEmail(email);
          expect(result.valid).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe("validateMessage", () => {
  it("accepts messages 1-1000 chars with content", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 1000 }).filter((s: string) => s.trim().length > 0),
        (msg: string) => {
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
        (msg: string) => {
          const result = validateMessage(msg);
          expect(result.valid).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});
