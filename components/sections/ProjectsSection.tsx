import { PROJECTS } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

/**
 * ProjectsSection — server component.
 *
 * Renders 6 project cards in a responsive grid:
 *  - 1 column  at ≤ 767px  (mobile)
 *  - 2 columns at 768–1279px (tablet)
 *  - 3 columns at ≥ 1280px   (desktop)
 *
 * Req 6.5, 10.1
 */
export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section heading */}
        <h2
          id="projects-heading"
          className="text-2xl font-bold mb-2"
          style={{ color: "var(--color-text-primary)" }}
        >
          Projects
        </h2>
        <p
          className="text-sm mb-10"
          style={{ color: "var(--color-text-secondary)" }}
        >
          A selection of embedded systems, IoT, and AI-integrated builds.
        </p>

        {/* Responsive grid — Req 6.5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
