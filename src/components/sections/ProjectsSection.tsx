import { formatDistanceToNowStrict } from "date-fns";
import SectionHeader from "../SectionHeader";
import ContentCard from "../ContentCard";
import { useProjects } from "@/hooks/use-github";
import { GITHUB_USERNAME } from "@/data/projects";
import type { RepoStats } from "@/lib/github/types";

const RepoMeta = ({ stats }: { stats: RepoStats }) => (
  <>
    <span title="Stars">
      <i className="fa-solid fa-star text-[9px]"></i> {stats.stars}
    </span>
    {stats.forks > 0 && (
      <span title="Forks">
        <i className="fa-solid fa-code-fork text-[9px]"></i> {stats.forks}
      </span>
    )}
    {stats.primaryLanguage && (
      <span className="inline-flex items-center gap-1">
        <span
          className="inline-block w-2 h-2 rounded-full"
          style={{ backgroundColor: stats.primaryLanguage.color ?? "currentColor" }}
        />
        {stats.primaryLanguage.name}
      </span>
    )}
    <span>pushed {formatDistanceToNowStrict(new Date(stats.pushedAt), { addSuffix: true })}</span>
  </>
);

interface ProjectsSectionProps {
  /** Base path for write-up pages (default "/work"). */
  workPath?: string;
}

const ProjectsSection = ({ workPath }: ProjectsSectionProps = {}) => {
  const { projects } = useProjects({ featuredOnly: true, workPath });

  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa fa-code" style={{ fontSize: "10px" }}></i>}
        title="Projects"
        linkText="Github"
        linkHref={`https://github.com/${GITHUB_USERNAME}`}
      />
      <div className="card-grid">
        {projects.map((p) => (
          <ContentCard
            key={p.repo}
            image={p.image}
            title={p.title}
            description={p.description}
            href={p.href}
            internal={p.internal}
            meta={
              <>
                {p.stats && <RepoMeta stats={p.stats} />}
                {p.internal && <span>read more →</span>}
              </>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
