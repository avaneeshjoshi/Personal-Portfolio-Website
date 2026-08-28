import type { ProjectView } from "@/hooks/use-github";
import { v2Content } from "../content";
import V2ProjectCard from "./V2ProjectCard";

interface Props {
  projects: ProjectView[];
  error: unknown;
}

const V2Projects = ({ projects, error }: Props) => (
  <section id="projects" className="mt-20 md:mt-28 scroll-mt-24">
    <div className="flex items-baseline justify-between gap-4 mb-3">
      <h2 className="text-4xl md:text-5xl">Projects</h2>
      <span className="mono text-v2-muted">{String(projects.length).padStart(2, "0")} of them</span>
    </div>
    <p className="text-lg text-v2-muted mb-8 max-w-prose">{v2Content.projectsIntro}</p>
    {error ? (
      <p className="mono text-v2-muted mb-6">live GitHub stats unavailable right now — showing the curated list.</p>
    ) : null}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((p) => (
        <V2ProjectCard key={p.repo} project={p} />
      ))}
    </div>
  </section>
);

export default V2Projects;
