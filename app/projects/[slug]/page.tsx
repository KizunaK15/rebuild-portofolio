import { getProject, getAllProjects } from '@/lib/mdx';
import ProjectDetail from '@/components/projects/ProjectDetail';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project: { slug: string }) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: 'Not Found' };
  return { 
    title: project.frontmatter.title, 
    description: project.frontmatter.problemStatement 
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return notFound();
  return <ProjectDetail project={project} />;
}