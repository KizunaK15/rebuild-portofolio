import { ProjectFrontmatter } from '@/lib/types';
import { ReactNode } from 'react';

interface ProjectDetailProps {
  project: {
    frontmatter: ProjectFrontmatter;
    source: {
      content: ReactNode;
    };
  };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { frontmatter, source } = project;

  return (
    <article className="mx-auto max-w-4xl py-12 px-4 sm:px-6">
      <header className="mb-10">
        {frontmatter.badgeLabel && (
          <span className="mb-4 inline-block rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400">
            {frontmatter.badgeLabel}
          </span>
        )}
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-100">{frontmatter.title}</h1>
        <p className="mb-6 text-xl text-slate-400">{frontmatter.problemStatement}</p>
        
        <div className="mb-8 flex flex-wrap gap-2">
          {frontmatter.hardwareUsed?.map((hw: string) => (
            <span key={hw} className="rounded bg-slate-800 px-2 py-1 font-mono text-xs text-slate-300">
              {hw}
            </span>
          ))}
          {frontmatter.softwareStack?.map((sw: string) => (
            <span key={sw} className="rounded bg-indigo-900/50 px-2 py-1 font-mono text-xs text-indigo-300">
              {sw}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-slate prose-invert max-w-none">
        {source.content}
      </div>
    </article>
  );
}