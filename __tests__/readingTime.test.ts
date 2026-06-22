import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { countWords, calculateReadingTime } from "@/lib/readingTime";

describe("calculateReadingTime", () => {
  it("returns 0 for 0 words (empty string)", () => {
    expect(countWords("")).toBe(0);
  });

  it("always returns minimum 1 minute for non-empty content", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 10000 }).filter(s => s.trim().length > 0),
        (content) => {
          expect(calculateReadingTime(content)).toBeGreaterThanOrEqual(1);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("reading time increases with word count", () => {
    // More words → same or more time
    const short = "word ".repeat(50);
    const long = "word ".repeat(500);
    expect(calculateReadingTime(long)).toBeGreaterThanOrEqual(calculateReadingTime(short));
  });
});
