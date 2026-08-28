import { formatDistanceToNowStrict } from "date-fns";
import SectionHeader from "@/components/SectionHeader";
import { Link } from "react-router-dom";
import { useGithubEvents } from "@/hooks/use-github";
import { projects } from "@/data/projects";
import { v3Content } from "../content";

const WorkingOnNow = () => {
  const { data, isPending } = useGithubEvents();
  const items = data?.working ?? [];

  return (
    <section className="mb-12">
      <SectionHeader icon={<i className="fa-solid fa-code-branch" style={{ fontSize: "10px" }}></i>} title="Working on right now" />
      {isPending ? (
        <div className="bio animate-pulse">Syncing with GitHub...</div>
      ) : items.length === 0 ? (
        <p className="bio italic text-sm">Quiet month on GitHub.</p>
      ) : (
        <ul className="space-y-3">
          {items.map((w) => {
            const project = projects.find((p) => p.repo === w.repo);
            const name = project?.title ?? v3Content.repoAliases[w.repo] ?? w.repo.split("/")[1];
            const nameClass = "link font-semibold text-sm max-w-[14rem] break-words";
            return (
              <li key={w.repo} className="grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[auto_minmax(0,1fr)_auto] gap-x-4 gap-y-0.5 items-baseline">
                <span className="min-w-0">
                  {project?.writeup && project.slug ? (
                    <Link to={`/work/${project.slug}`} className={nameClass}>
                      {name}
                    </Link>
                  ) : w.isPublic ? (
                    <a href={`https://github.com/${w.repo}`} target="_blank" rel="noopener noreferrer" className={nameClass}>
                      {name}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-muted-foreground/60 inline-flex items-center gap-1.5">
                      <i className="fa fa-lock text-[10px]"></i> Private project
                    </span>
                  )}
                </span>
                <span className="markdown text-xs truncate col-span-2 sm:col-span-1 order-last sm:order-none">
                  {w.message ?? "Pushed commits"}
                </span>
                <time className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold whitespace-nowrap">
                  {formatDistanceToNowStrict(new Date(w.pushedAt), { addSuffix: true })}
                </time>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default WorkingOnNow;
