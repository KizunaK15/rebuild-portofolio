/**
 * lib/mdx.ts — MDX parsing utilities for the Prima portfolio.
 *
 * Uses `gray-matter` for frontmatter parsing and `next-mdx-remote/rsc`
 * `compileMDX` for App Router compatible MDX compilation.
 *
 * - Never throws on malformed frontmatter; applies safe defaults instead.
 * - Blog posts are filtered to `published: true` and sorted by datePublished desc.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import type { CompileMDXResult } from "next-mdx-remote/rsc";
import type {
  BlogFrontmatter,
  BlogPostSummary,
  ProjectFrontmatter,
  ProjectSummary,
} from "@/lib/types";
import { calculateReadingTime, countWords } from "@/lib/readingTime";
import { ImageCaption } from "@/components/mdx/ImageCaption";

const mdxComponents = {
  ImageCaption,
};

// ─── Directory constants ─────────────────────────────────────────

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

// ─── Frontmatter parsers ──────────────────────────────────────────

/**
 * Parse and normalise blog frontmatter, applying safe defaults for
 * any missing or malformed fields.
 */
function parseBlogFrontmatter(
  data: Record<string, unknown>,
  filename: string
): BlogFrontmatter {
  const stem = path.basename(filename, ".mdx");

  const title =
    typeof data.title === "string" && data.title.trim() ? data.title.trim() : stem;

  const slug =
    typeof data.slug === "string" && data.slug.trim() ? data.slug.trim() : stem;

  const datePublished =
    typeof data.datePublished === "string" ? data.datePublished : "";

  const dateModified =
    typeof data.dateModified === "string" ? data.dateModified : "";

  // Must exactly match BlogFrontmatter["category"] union in types.ts
  const validCategories = [
    "Embedded Systems",
    "IoT",
    "AI Integration",
    "Control System",
  ] as const;
  type ValidCategory = (typeof validCategories)[number];
  const category: BlogFrontmatter["category"] = validCategories.includes(
    data.category as ValidCategory
  )
    ? (data.category as BlogFrontmatter["category"])
    : "Embedded Systems";

  const description =
    typeof data.description === "string" ? data.description : "";

  const tags = Array.isArray(data.tags)
    ? data.tags.filter((t): t is string => typeof t === "string")
    : [];

  const published = data.published === true;

  return {
    title,
    slug,
    datePublished,
    dateModified,
    category,
    description,
    tags,
    published,
  };
}

/**
 * Parse and normalise project frontmatter, applying safe defaults.
 */
function parseProjectFrontmatter(
  data: Record<string, unknown>,
  filename: string
): ProjectFrontmatter {
  const stem = path.basename(filename, ".mdx");

  const title =
    typeof data.title === "string" && data.title.trim() ? data.title.trim() : stem;

  const slug =
    typeof data.slug === "string" && data.slug.trim() ? data.slug.trim() : stem;

  const problemStatement =
    typeof data.problemStatement === "string" ? data.problemStatement : "";

  const approach = typeof data.approach === "string" ? data.approach : "";

  const architectureSummary =
    typeof data.architectureSummary === "string" ? data.architectureSummary : "";

  const hardwareUsed = Array.isArray(data.hardwareUsed)
    ? data.hardwareUsed.filter((h): h is string => typeof h === "string")
    : [];

  const softwareStack = Array.isArray(data.softwareStack)
    ? data.softwareStack.filter((s): s is string => typeof s === "string")
    : [];

  // Field is `measurableResult` (singular) — matches ProjectFrontmatter in types.ts
  const measurableResult = Array.isArray(data.measurableResult)
    ? data.measurableResult.filter((r): r is string => typeof r === "string")
    : [];

  const lessonsLearned = Array.isArray(data.lessonsLearned)
    ? data.lessonsLearned.filter((l): l is string => typeof l === "string")
    : [];

  const primaryHardware =
    typeof data.primaryHardware === "string" ? data.primaryHardware : "";

  const resultHighlight =
    typeof data.resultHighlight === "string" ? data.resultHighlight : "";

  const badgeLabel =
    typeof data.badgeLabel === "string" ? data.badgeLabel : undefined;

  // Fall back to empty string — ProjectFrontmatter.imageUrl is required (string, not optional)
  const imageUrl =
    typeof data.imageUrl === "string" ? data.imageUrl : "";

  const dateCreated =
    typeof data.dateCreated === "string" ? data.dateCreated : "";

  return {
    title,
    slug,
    problemStatement,
    approach,
    architectureSummary,
    hardwareUsed,
    softwareStack,
    measurableResult,
    lessonsLearned,
    primaryHardware,
    resultHighlight,
    badgeLabel,
    imageUrl,
    dateCreated,
  };
}

// ─── File readers ─────────────────────────────────────────────────

/** Read and parse a single MDX file's frontmatter + raw content. */
function readMdxFile(filePath: string): {
  data: Record<string, unknown>;
  content: string;
  filename: string;
} {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { data: data as Record<string, unknown>, content, filename: path.basename(filePath) };
}

/** List all `.mdx` files in a directory (returns full paths). */
function listMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => path.join(dir, name));
}

// ─── Public API ───────────────────────────────────────────────────

/**
 * Return all published blog posts sorted by datePublished descending.
 */
export async function getAllBlogPosts(): Promise<BlogPostSummary[]> {
  const files = listMdxFiles(BLOG_DIR);

  const posts: BlogPostSummary[] = files.flatMap((filePath) => {
    try {
      const { data, content, filename } = readMdxFile(filePath);
      const frontmatter = parseBlogFrontmatter(data, filename);

      if (!frontmatter.published) return [];

      const wordCount = countWords(content);
      const readingTimeMinutes = calculateReadingTime(content);
      void wordCount; // used implicitly via calculateReadingTime

      return [
        {
          title: frontmatter.title,
          slug: frontmatter.slug,
          datePublished: frontmatter.datePublished,
          category: frontmatter.category,
          description: frontmatter.description,
          readingTimeMinutes,
        } satisfies BlogPostSummary,
      ];
    } catch {
      // Skip unreadable files silently
      return [];
    }
  });

  // Sort by datePublished descending (lexicographic on ISO 8601 is correct)
  return posts.sort((a, b) => b.datePublished.localeCompare(a.datePublished));
}

/**
 * Return a single blog post with compiled MDX content, or `null` if not found.
 */
export async function getBlogPost(
  slug: string
): Promise<{ frontmatter: BlogFrontmatter; source: CompileMDXResult } | null> {
  const files = listMdxFiles(BLOG_DIR);

  for (const filePath of files) {
    try {
      const { data, content, filename } = readMdxFile(filePath);
      const frontmatter = parseBlogFrontmatter(data, filename);

      if (frontmatter.slug !== slug) continue;

      const source = await compileMDX({
        source: content,
        options: { parseFrontmatter: false },
        components: mdxComponents,
      });

      return { frontmatter, source };
    } catch {
      continue;
    }
  }

  return null;
}

/**
 * Return all projects sorted by dateCreated descending.
 */
export async function getAllProjects(): Promise<ProjectSummary[]> {
  const files = listMdxFiles(PROJECTS_DIR);

  const projects: ProjectSummary[] = files.flatMap((filePath) => {
    try {
      const { data, filename } = readMdxFile(filePath);
      const frontmatter = parseProjectFrontmatter(data, filename);

      return [
        {
          slug: frontmatter.slug,
          title: frontmatter.title,
          problemStatement: frontmatter.problemStatement,
          primaryHardware: frontmatter.primaryHardware,
          resultHighlight: frontmatter.resultHighlight,
          badgeLabel: frontmatter.badgeLabel,
          imageUrl: frontmatter.imageUrl,
        } satisfies ProjectSummary,
      ];
    } catch {
      return [];
    }
  });

  return projects;
}

/**
 * Return a single project with compiled MDX content, or `null` if not found.
 */
export async function getProject(
  slug: string
): Promise<{ frontmatter: ProjectFrontmatter; source: CompileMDXResult } | null> {
  const files = listMdxFiles(PROJECTS_DIR);

  for (const filePath of files) {
    try {
      const { data, content, filename } = readMdxFile(filePath);
      const frontmatter = parseProjectFrontmatter(data, filename);

      if (frontmatter.slug !== slug) continue;

      const source = await compileMDX({
        source: content,
        options: { parseFrontmatter: false },
        components: mdxComponents,
      });

      return { frontmatter, source };
    } catch {
      continue;
    }
  }

  return null;
}