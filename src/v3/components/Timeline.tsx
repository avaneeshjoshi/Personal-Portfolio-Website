import { Fragment } from "react";
import SectionHeader from "@/components/SectionHeader";
import { experience, formatYm, LINKEDIN_URL, type ExperienceEntry } from "@/data/experience";

const KIND_LABEL: Record<ExperienceEntry["kind"], string> = {
  internship: "internship",
  contract: "contract",
  research: "research",
  education: "education",
};

const dateRange = (e: ExperienceEntry) => `${formatYm(e.start)} → ${e.end ? formatYm(e.end) : "now"}`;

const Card = ({ e, side }: { e: ExperienceEntry; side: "left" | "right" }) => (
  <div className={`v3-tl-card group flex gap-2.5 ${side === "left" ? "sm:flex-row-reverse sm:text-right" : ""}`}>
    <a href={e.href} target="_blank" rel="noopener noreferrer" className="flex-none" aria-label={e.company}>
      <img src={e.logo} alt="" className="card-image !w-8 !h-8 rounded-lg" loading="lazy" />
    </a>
    <div className="min-w-0 flex-1">
      <div className={`flex items-center gap-2 ${side === "left" ? "sm:justify-end" : ""}`}>
        <a href={e.href} target="_blank" rel="noopener noreferrer" className="card-title link">
          {e.company}
        </a>
        <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-muted text-ink-muted">
          {KIND_LABEL[e.kind]}
        </span>
      </div>
      <div className="text-[13px] text-ink mt-1 leading-snug">{e.role}</div>
      <div className="font-mono text-[10px] text-ink-muted mt-0.5">{e.location}</div>
      <p className="card-description">{e.summary}</p>
    </div>
  </div>
);

const Timeline = () => {
  const rows: JSX.Element[] = [];
  experience.forEach((e, i) => {
    const year = e.start.slice(0, 4);
    const nextYear = experience[i + 1]?.start.slice(0, 4);
    const side: "left" | "right" = i % 2 === 0 ? "left" : "right";
    rows.push(
      <Fragment key={e.company + e.start}>
        <div className={`v3-tl-row ${side === "left" ? "is-left" : "is-right"}`}>
          <div className="v3-tl-cell v3-tl-card-cell">
            <Card e={e} side={side} />
          </div>
          <div className="v3-tl-node" aria-hidden="true">
            <span className={`v3-tl-dot ${e.end ? "" : "is-current"}`} />
          </div>
          <div className="v3-tl-cell v3-tl-date-cell">
            <time className="font-mono text-[11px] text-ink-secondary whitespace-nowrap">{dateRange(e)}</time>
          </div>
        </div>
      </Fragment>,
    );
    // Year label closes its group: it sits under the last entry of that year.
    if (year !== nextYear) {
      rows.push(
        <div key={`y-${year}`} className="v3-tl-year">
          <span>{year}</span>
        </div>,
      );
    }
  });

  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa fa-briefcase" style={{ fontSize: "10px" }}></i>}
        title="Where I've worked"
        linkText="LinkedIn"
        linkHref={LINKEDIN_URL}
      />
      <div className="v3-tl">{rows}</div>
    </section>
  );
};

export default Timeline;
