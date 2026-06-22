import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { prettyPrintFrontmatter } from "@/lib/prettyPrinter";

describe("prettyPrintFrontmatter", () => {
  it("always wraps output in --- markers", () => {
    fc.assert(
      fc.property(
        fc.record({ key: fc.string({ minLength: 1, maxLength: 20 }) }),
        (obj) => {
          const output = prettyPrintFrontmatter(obj);
          expect(output.startsWith("---")).toBe(true);
          expect(output.trimEnd().endsWith("---")).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("includes all keys from the input object", () => {
    fc.assert(
      fc.property(
        fc.record({
          title: fc.string({ minLength: 1, maxLength: 50 }),
          published: fc.boolean().map(String),
        }),
        (obj) => {
          const output = prettyPrintFrontmatter(obj);
          expect(output).toContain("title:");
          expect(output).toContain("published:");
        }
      ),
      { numRuns: 100 }
    );
  });

  it("formats arrays as YAML sequences", () => {
    const output = prettyPrintFrontmatter({ tags: ["a", "b", "c"] });
    expect(output).toContain("  - a");
    expect(output).toContain("  - b");
    expect(output).toContain("  - c");
  });
});
