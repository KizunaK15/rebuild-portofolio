import { PROJECTS } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

/**
 * ProjectsSection — server component that renders the projects grid.
 * Grid is responsive: 1 col → 2 col (md) → 3 col (xl).
 */
export function ProjectsSection() {
  return (
    <div
      aria-label="Projects"
      className="w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}
