/**
 * AboutSection — server component.
 *
 * Reads content/about.mdx at server runtime via gray-matter + compileMDX,
 * then renders a two-column layout (prose + photo) on wide screens.
 *
 * Layout:
 *  ≥ 1280px  — two columns: prose left, photo right (min-w-[200px])
 *  < 1280px  — single column, prose only stacked
 */

import fs from "fs";
import path from "path";
import Image from "next/image";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { FadeUp } from "@/components/animations/FadeUp";
import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { ImageCaption } from "@/components/mdx/ImageCaption";

/** Custom MDX component map passed to compileMDX. */
const mdxComponents = { Callout, CodeBlock, ImageCaption };

export async function AboutSection() {
  // Read the MDX file at server runtime (not a static import)
  const filePath = path.join(process.cwd(), "content", "about.mdx");

  let content = "";
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { content: body } = matter(raw);
    content = body;
  }

  // Compile MDX to a React component
  const { content: prose } = await compileMDX({
    source: content || "_About content coming soon._",
    components: mdxComponents,
    options: { parseFrontmatter: false },
  });

  return (
    <div
      aria-label="About Prima"
      className="py-24 px-4 bg-[var(--color-bg-secondary)]"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Two-column at ≥1280px, single column below */}
        <div className="flex flex-col xl:flex-row xl:gap-16 xl:items-start">

          {/* ── Prose column ── */}
          <FadeUp className="flex-1 min-w-0">
            <div className="prose prose-invert max-w-none text-[var(--color-text-secondary)] leading-relaxed">
              {prose}
            </div>
          </FadeUp>

          {/* ── Photo column — visible only at ≥1280px ── */}
          <div className="hidden xl:flex xl:flex-col xl:items-center xl:shrink-0 xl:min-w-[200px]">
            <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-elevated)]">
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
    </div>
  );
}
