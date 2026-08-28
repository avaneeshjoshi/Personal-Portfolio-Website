import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projectBySlug } from "@/data/projects";
import { useProjects } from "@/hooks/use-github";

const V3Work = () => {
  const { slug = "" } = useParams();
  const entry = projectBySlug(slug);
  const { projects } = useProjects({ workPath: "/work" });
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (entry) document.title = `${entry.title ?? slug} — Avaneesh Joshi`;
  }, [entry, slug]);

  if (!entry || !project) return <Navigate to="/projects" replace />;

  const { writeup } = entry;
  const stack = entry.stack ?? project.stats?.languages.map((l) => l.name) ?? [];
  const period = entry.period ?? (entry.year ? String(entry.year) : "");

  return (
    <article>
      <Link to="/projects" className="link text-sm">
        ← Projects
      </Link>

      <header className="mt-6 mb-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h1 className="text-2xl font-bold text-ink">{project.title}</h1>
          {period && <span className="text-[10px] uppercase tracking-widest font-semibold text-ink-muted">{period}</span>}
        </div>
        {entry.tagline && <p className="bio mt-1">{entry.tagline}</p>}
        {stack.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {stack.map((s) => (
              <li key={s} className="text-[11px] text-ink-secondary bg-muted rounded-md px-2 py-0.5">
                {s}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 flex flex-wrap items-center gap-4 text-sm">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
            Repository <ArrowUpRight className="w-3 h-3" />
          </a>
          {project.stats && (
            <span className="text-xs text-ink-muted">
              <i className="fa-solid fa-star text-[9px]"></i> {project.stats.stars}
              {project.stats.forks > 0 && (
                <>
                  {" · "}
                  <i className="fa-solid fa-code-fork text-[9px]"></i> {project.stats.forks}
                </>
              )}
            </span>
          )}
        </p>
      </header>

      <section className="mb-8">
        <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 mb-2">Notes</div>
        <div className="space-y-3">
          {writeup.notes.map((p) => (
            <p key={p.slice(0, 32)} className="markdown text-sm">
              {p}
            </p>
          ))}
        </div>
      </section>

      {writeup.sections.map((section) => (
        <section key={section.label} className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 mb-2">{section.label}</div>
          {section.paragraphs && (
            <div className="space-y-3">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 32)} className="markdown text-sm">
                  {p}
                </p>
              ))}
            </div>
          )}
          {section.bullets && (
            <ul className="space-y-2">
              {section.bullets.map((b) => (
                <li key={b.slice(0, 32)} className="markdown text-sm flex gap-2">
                  <span className="text-ink-muted select-none" aria-hidden="true">
                    —
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {section.images && (
            <div className="space-y-6 mt-4">
              {section.images.map((img) => (
                <figure key={img.src}>
                  <img src={img.src} alt={img.caption ?? ""} className="w-full rounded-lg card-image !w-full !h-auto" loading="lazy" />
                  {img.caption && <figcaption className="text-xs text-ink-muted mt-2">{img.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}
        </section>
      ))}
    </article>
  );
};

export default V3Work;
