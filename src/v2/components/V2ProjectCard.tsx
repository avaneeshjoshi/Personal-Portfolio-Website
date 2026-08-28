import { Link } from "react-router-dom";
import { CATEGORY_META } from "@/data/projects";
import type { ProjectView } from "@/hooks/use-github";

interface Props {
  project: ProjectView;
}

const nf = new Intl.NumberFormat("en-US");

const V2ProjectCard = ({ project }: Props) => {
  const { stats } = project;
  const category = project.category ? CATEGORY_META[project.category] : null;
  const languages = stats?.languages.length
    ? stats.languages.map((l) => l.name)
    : stats?.primaryLanguage
      ? [stats.primaryLanguage.name]
      : [];
  const year = project.year ?? (stats ? new Date(stats.createdAt).getFullYear() : undefined);
  const isActive = stats ? Date.now() - new Date(stats.pushedAt).getTime() < 90 * 24 * 3600 * 1000 : false;

  const metrics: { label: string; value: string | number }[] = [...(project.metrics ?? [])];
  if (stats) {
    metrics.push({ label: stats.stars === 1 ? "star" : "stars", value: nf.format(stats.stars) });
    if (stats.forks > 0) metrics.push({ label: stats.forks === 1 ? "fork" : "forks", value: nf.format(stats.forks) });
  }

  const className = "v2-card flex flex-col no-underline";
  const style = { borderTopColor: category?.color ?? "var(--v2-hairline)" };
  const body = (
    <>
      <div className="v2-card-media aspect-[16/10] overflow-hidden flex items-center justify-center">
        {project.image ? (
          <img src={project.image} alt="" className="w-full h-full object-contain p-8" loading="lazy" />
        ) : (
          <span className="italic text-5xl select-none">No. {String(project.index).padStart(2, "0")}</span>
        )}
      </div>

      <div className="px-4 pt-4 pb-4 flex flex-col gap-3 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="v2-card-title text-xl leading-tight transition-colors">{project.title}</h3>
          {year && (
            <span className="mono text-v2-muted whitespace-nowrap">
              {year}
              {isActive ? " —" : ""}
            </span>
          )}
        </div>

        <p className="text-v2-muted leading-snug line-clamp-2">{project.description}</p>
        {project.note && <p className="italic text-[15px] leading-snug text-v2-muted/90">{project.note}</p>}

        <p className="mono text-v2-muted flex items-center gap-2 min-h-[1rem]">
          {category && (
            <>
              <span className="inline-block w-1.5 h-1.5" style={{ backgroundColor: category.color }} aria-hidden="true" />
              <span>{category.label}</span>
            </>
          )}
          {category && languages.length > 0 && <span aria-hidden="true">·</span>}
          {languages.length > 0 && <span className="truncate">{languages.join(", ")}</span>}
        </p>

        <div className="mt-auto pt-3 border-t border-v2-hairline flex flex-wrap gap-x-4 gap-y-1 min-h-[1.5rem]">
          {metrics.map((m) => (
            <span key={m.label} className="mono text-v2-muted">
              <b className="text-v2-fg font-semibold">{m.value}</b> {m.label}
            </span>
          ))}
          {project.internal && <span className="mono text-v2-muted ml-auto">read →</span>}
        </div>
      </div>
    </>
  );

  return project.internal ? (
    <Link to={project.href} className={className} style={style}>
      {body}
    </Link>
  ) : (
    <a href={project.href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      {body}
    </a>
  );
};

export default V2ProjectCard;
