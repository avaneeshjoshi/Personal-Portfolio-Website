import type { UserStats } from "@/lib/github/types";

interface Props {
  user: UserStats | null;
  projectCount: number;
  isLoading: boolean;
}

const nf = new Intl.NumberFormat("en-US");

const V2Stats = ({ user, projectCount, isLoading }: Props) => {
  const show = (n: number | undefined) => (n === undefined ? (isLoading ? "…" : "—") : nf.format(n));

  const cells = [
    { value: show(user?.commitsLastYear), label: "commits, last 12 months", href: "https://github.com/avaneeshjoshi" },
    { value: nf.format(projectCount), label: "projects shipped", href: "#projects" },
    { value: show(user?.publicRepos), label: "public repositories", href: "https://github.com/avaneeshjoshi?tab=repositories" },
    { value: show(user?.totalStars), label: "stars earned", href: "https://github.com/avaneeshjoshi?tab=repositories&sort=stargazers" },
  ];

  return (
    <section aria-label="Stats" className="mt-14 md:mt-20 border-y border-v2-hairline">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {cells.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            className={`block py-6 md:py-7 px-1 md:px-5 group ${i > 0 ? "md:border-l md:border-v2-hairline" : ""} ${
              i % 2 === 1 ? "border-l border-v2-hairline md:border-l" : ""
            } ${i >= 2 ? "border-t border-v2-hairline md:border-t-0" : ""}`}
            {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <div className="mono stat-number mb-3 group-hover:text-v2-accent transition-colors">
              {c.value}
            </div>
            <div className="mono text-v2-muted text-[11px]">{c.label}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default V2Stats;
