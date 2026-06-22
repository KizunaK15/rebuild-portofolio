import { getBlogPost, getAllBlogPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post: { slug: string }) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: 'Not Found' };
  return { 
    title: post.frontmatter.title, 
    description: post.frontmatter.description 
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return notFound();
  
  return (
    <article className="mx-auto max-w-3xl py-12 px-4 sm:px-6">
      <header className="mb-8 border-b border-slate-800 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-100 mb-4">{post.frontmatter.title}</h1>
        <div className="flex gap-4 text-sm text-slate-400">
          <span>{post.frontmatter.datePublished}</span>
          <span>·</span>
          <span>{post.frontmatter.readingTimeMinutes} min read</span>
          <span>·</span>
          <span className="text-emerald-400">{post.frontmatter.category}</span>
        </div>
      </header>
      <div className="prose prose-invert prose-slate max-w-none">
        {post.source.content}
      </div>
    </article>
  );
}