/**
 * readingTime.ts — utilities for word counting and reading time estimation.
 *
 * Average adult reading speed: 200 wpm (conservative for technical content).
 */

const WORDS_PER_MINUTE = 200;

/**
 * Count the number of words in a raw markdown/MDX string.
 * Strips frontmatter, code fences, HTML tags, and markdown syntax before counting.
 */
export function countWords(content: string): number {
  let text = content;

  // Remove YAML frontmatter
  text = text.replace(/^---[\s\S]*?---\n?/, "");

  // Remove fenced code blocks (``` ... ```)
  text = text.replace(/```[\s\S]*?```/g, "");

  // Remove inline code (`...`)
  text = text.replace(/`[^`]*`/g, "");

  // Remove HTML tags
  text = text.replace(/<[^>]+>/g, "");

  // Remove markdown image/link syntax, keep alt/display text
  text = text.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1");
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");

  // Remove markdown headings, bold, italic markers
  text = text.replace(/#{1,6}\s+/g, "");
  text = text.replace(/[*_]{1,3}/g, "");

  // Collapse whitespace and count
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

/**
 * Calculate estimated reading time in minutes (minimum 1).
 */
export function calculateReadingTime(content: string): number {
  const words = countWords(content);
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
