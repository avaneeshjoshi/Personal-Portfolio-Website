import { format } from "date-fns";
import SectionHeader from "@/components/SectionHeader";
import { useGithubStats } from "@/hooks/use-github";
import { projects } from "@/data/projects";

const nf = new Intl.NumberFormat("en-US");
const day = (iso: string) => format(new Date(`${iso}T12:00:00`), "MMM d").toLowerCase();

const ThisYear = () => {
  const { data, isPending } = useGithubStats();
  const u = data?.user;
  const show = (n?: number) => (n === undefined ? (isPending ? "…" : "—") : nf.format(n));

  const tiles: { value: string; label: string; sub: string }[] = [
    { value: show(u?.commitsLastYear), label: "commits", sub: "last 12 months" },
    { value: show(u?.activeDays), label: "days on the board", sub: "of 365" },
    {
      value: show(u?.longestStreak?.days),
      label: "day streak",
      sub: u?.longestStreak ? `${day(u.longestStreak.from)} – ${day(u.longestStreak.to)}` : "—",
    },
    { value: show(u?.bestDay?.count), label: "best day", sub: u?.bestDay ? day(u.bestDay.date) : "—" },
    { value: nf.format(projects.length), label: "projects shipped", sub: "curated" },
    { value: show(u?.publicRepos), label: "public repos", sub: "on github" },
  ];

  return (
    <section className="mb-12">
      <SectionHeader icon={<i className="fa-solid fa-chart-simple" style={{ fontSize: "10px" }}></i>} title="This year" />
      <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-fr gap-3">
        {tiles.map((t) => (
          <div key={t.label} className="h-full flex flex-col rounded-xl border border-border bg-card/50 px-4 py-4">
            <div className="text-2xl font-bold text-ink tabular-nums leading-none">{t.value}</div>
            <div className="text-xs text-ink-secondary mt-2">{t.label}</div>
            <div className="text-[10px] text-ink-muted mt-0.5">{t.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThisYear;
