import { formatDistanceToNowStrict } from "date-fns";
import type { ProjectView } from "@/hooks/use-github";

const V2Footer = ({ projects }: { projects: ProjectView[] }) => {
  const latest = projects
    .map((p) => p.stats?.pushedAt)
    .filter((d): d is string => Boolean(d))
    .sort()
    .at(-1);

  return (
    <footer className="mt-24 py-8 border-t border-v2-hairline flex flex-wrap justify-between gap-4 mono text-v2-muted">
      <span>{latest ? `last push ${formatDistanceToNowStrict(new Date(latest), { addSuffix: true })}` : " "}</span>
      <span>© {new Date().getFullYear()} Avaneesh Joshi</span>
    </footer>
  );
};

export default V2Footer;
