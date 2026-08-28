import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projectBySlug } from "@/data/projects";
import { useProjects } from "@/hooks/use-github";

const Label = ({ children }: { children: string }) => (
  <h2 className="mono uppercase tracking-[0.18em] text-[10px] text-v2-muted mb-3">{children}</h2>
);

const V2Work = () => {
  const { slug = "" } = useParams();
  const entry = projectBySlug(slug);
  const { projects } = useProjects({ workPath: "/v2/work" });
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (entry) document.title = `${entry.title ?? slug} — Avaneesh Joshi`;
    return () => {
      document.title = "Avaneesh Joshi";
    };
  }, [entry, slug]);

  if (!entry || !project) return <Navigate to="/v2" replace />;

  const { writeup } = entry;
  const stack = entry.stack ?? project.stats?.languages.map((l) => l.name) ?? [];
  const period = entry.period ?? (entry.year ? String(entry.year) : "");

  return (
    <article className="pt-10 md:pt-14 max-w-[880px]">
      <header>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <h1 className="text-5xl md:text-6xl leading-none tracking-tight">{project.title}</h1>
          {period && <span className="mono text-v2-muted md:pb-2">{period}</span>}
        </div>
        {entry.tagline && <p className="text-xl text-v2-muted mt-5">{entry.tagline}</p>}
        {stack.length > 0 && (
          <ul className="mono text-v2-muted flex flex-wrap gap-x-4 gap-y-1 mt-6">
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="mono v2-link inline-flex items-center gap-1 hover:text-v2-accent">
            repository <ArrowUpRight className="w-3 h-3" />
          </a>
          {project.stats && (
            <span className="mono text-v2-muted">
              {project.stats.stars} {project.stats.stars === 1 ? "star" : "stars"}
              {project.stats.forks > 0 ? ` · ${project.stats.forks} forks` : ""}
            </span>
          )}
        </p>
      </header>

      <section className="mt-12">
        <div className="flex items-center gap-4 mb-5">
          <span className="mono uppercase tracking-[0.18em] text-[10px] text-v2-muted">Notes</span>
          <span className="flex-1 h-px bg-v2-hairline" aria-hidden="true" />
        </div>
        <div className="space-y-4 text-lg leading-relaxed">
          {writeup.notes.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </section>

      {writeup.sections.map((section) => (
        <section key={section.label} className="mt-10">
          <Label>{section.label}</Label>
          {section.paragraphs && (
            <div className="space-y-4 text-lg leading-relaxed">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          )}
          {section.bullets && (
            <ul className="space-y-3 text-lg leading-relaxed">
              {section.bullets.map((b) => (
                <li key={b.slice(0, 32)} className="flex gap-3">
                  <span className="text-v2-muted select-none" aria-hidden="true">
                    —
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {section.images && (
            <div className="space-y-8 mt-6">
              {section.images.map((img) => (
                <figure key={img.src}>
                  <img src={img.src} alt={img.caption ?? ""} className="w-full border border-v2-hairline" loading="lazy" />
                  {img.caption && <figcaption className="mono text-v2-muted mt-2">{img.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}
        </section>
      ))}

      <p className="mt-16 pt-8 border-t border-v2-hairline">
        <Link to="/v2#projects" className="mono v2-link text-v2-muted hover:text-v2-fg">
          ← index
        </Link>
      </p>
    </article>
  );
};

export default V2Work;
