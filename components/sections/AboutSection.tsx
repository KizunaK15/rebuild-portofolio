import fs from "fs";
import path from "path";
import Image from "next/image";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { FadeUp } from "@/components/animations/FadeUp";
import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { ImageCaption } from "@/components/mdx/ImageCaption";

const mdxComponents = { Callout, CodeBlock, ImageCaption };

/**
 * AboutSection — async server component.
 *
 * Reads content/about.mdx at runtime (gray-matter + compileMDX).
 * Modifying about.mdx updates the rendered output without touching this file.
 *
 * Layout:
 *  ≥ 1280px  — prose left | photo right (min-w-[200px])
 *  < 1280px  — prose only, stacked
 */
export async function AboutSection() {
  const filePath = path.join(process.cwd(), "content", "about.mdx");
  let mdxContent = "_About content coming soon._";

  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { content } = matter(raw);
    if (content.trim()) mdxContent = content;
  }

  const { content: prose } = await compileMDX({
    source: mdxContent,
    components: mdxComponents,
    options: { parseFrontmatter: false },
  });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Two-column at ≥1280px */}
        <div className="flex flex-col xl:flex-row xl:gap-16 xl:items-start">

          {/* Prose */}
          <FadeUp className="flex-1 min-w-0">
            {/* Visually hidden heading keeps document outline intact */}
            <h2
              id="about-heading"
              className="sr-only"
            >
              About
            </h2>
            <div
              className="prose max-w-none leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {prose}
            </div>
          </FadeUp>

          {/* Photo — desktop only, ≥ 200px width */}
          <div className="hidden xl:flex xl:flex-col xl:items-center xl:shrink-0 xl:min-w-[200px]">
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: "var(--color-border)",
                boxShadow: "var(--shadow-elevated)",
              }}
            >
              <Image
                src="/images/prima-profile.jpg"
                alt="Prima Aji Setyawan"
                width={280}
                height={280}
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
