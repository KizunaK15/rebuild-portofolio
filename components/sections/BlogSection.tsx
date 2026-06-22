/**
 * BlogSection — server async component.
 *
 * Fetches the three most recent published blog posts via getAllBlogPosts()
 * and renders them as preview cards. Falls back to a friendly message when
 * no posts are available yet.
 */

import Link from "next/link";
import { getAllBlogPosts } from "@/lib/mdx";

// ── Date formatter (no external library) ─────────────────────────

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

// ── Component ─────────────────────────────────────────────────────

export async function BlogSection() {
  const allPosts = await getAllBlogPosts();
  const posts = allPosts.slice(0, 3);

  return (
    <div
      aria-label="Latest articles"
      className="py-24 px-4 bg-[var(--color-bg-primary)]"
    >
      <div className="mx-auto max-w-[1280px]">

        {/* Section heading */}
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] mb-12">
          Latest Articles
        </h2>

        {posts.length === 0 ? (
          <p className="text-[var(--color-text-secondary)]">
            Articles coming soon — check back shortly.
          </p>
        ) : (
          <ul className="flex flex-col gap-6" role="list">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-shadow hover:shadow-[var(--shadow-elevated)]"
              >
                {/* Title link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="block text-xl font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
                >
                  {post.title}
                </Link>

                {/* Meta row */}
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-[var(--color-text-muted)]">
                  {/* Date */}
                  <time dateTime={post.datePublished}>
                    {formatDate(post.datePublished)}
                  </time>

                  <span aria-hidden="true">·</span>

                  {/* Reading time */}
                  <span>{post.readingTimeMinutes} min read</span>

                  <span aria-hidden="true">·</span>

                  {/* Category chip */}
                  <span
                    className="text-xs rounded-full px-2 py-0.5 border border-[var(--color-border-accent)] text-[var(--color-accent)]"
                  >
                    {post.category}
                  </span>
                </div>

                {/* Description */}
                {post.description && (
                  <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}

      </div>
    </div>
  );
}
