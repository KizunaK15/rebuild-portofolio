import Link from "next/link";
import { getAllBlogPosts } from "@/lib/mdx";

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
}

/**
 * BlogSection — async server component.
 *
 * Shows up to 3 most-recent published posts.
 * Empty state: exactly "Articles coming soon — check back shortly." (Req 13.8)
 */
export async function BlogSection() {
  const allPosts = await getAllBlogPosts();
  const posts = allPosts.slice(0, 3);

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1280px]">
        <h2
          id="blog-heading"
          className="text-2xl font-bold mb-2"
          style={{ color: "var(--color-text-primary)" }}
        >
          Latest Articles
        </h2>

        {posts.length === 0 ? (
          <p className="mt-6 text-sm" style={{ color: "var(--color-text-secondary)" }}>
            Articles coming soon — check back shortly.
          </p>
        ) : (
          <ul className="mt-8 flex flex-col gap-4" role="list">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="rounded-xl border p-5 transition-shadow"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-bg-elevated)",
                }}
              >
                {/* Title */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="block text-base font-semibold transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {post.title}
                </Link>

                {/* Meta */}
                <div
                  className="mt-1.5 flex flex-wrap items-center gap-2 text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTimeMinutes} min read</span>
                  <span aria-hidden="true">·</span>
                  {/* Category chip — Req 13.3 */}
                  <span
                    className="rounded-full px-2 py-0.5 border"
                    style={{
                      borderColor: "var(--color-border-accent)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                {post.description && (
                  <p
                    className="mt-2 text-sm leading-relaxed line-clamp-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {post.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
