import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import SectionHeader from "../SectionHeader";
import { useGithubEvents } from "@/hooks/use-github";
import { useTheme } from "@/theme/ThemeProvider";
import { GITHUB_USERNAME } from "@/data/projects";

/** Light: classic GitHub greens. Dark: GitHub's dark-mode greens. */
export const CALENDAR_THEME = {
  light: ["#ebedf0", "#b6d7ff", "#6fb0ff", "#2b84e6", "#0b4f9c"],
  dark: ["#1f1f1f", "#0b2f5c", "#0f4f95", "#2a7fd6", "#62b0ff"],
};

interface GithubSectionProps {
  /** Render the recent activity feed under the calendar (default true). */
  showFeed?: boolean;
  /** Smaller squares so a full year fits a ~720px column without scrolling. */
  compact?: boolean;
}

const GithubSection: React.FC<GithubSectionProps> = ({ showFeed = true, compact = false }) => {
  const { resolvedTheme } = useTheme();
  const { data, isPending } = useGithubEvents();
  const events = data?.events ?? [];

  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa-brands fa-github"></i>}
        title="Github Activity"
        linkText="Follow"
        linkHref={`https://github.com/${GITHUB_USERNAME}`}
      />

      <div
        className={`mt-6 p-4 rounded-xl border border-border bg-card/50 shadow-sm github-calendar-wrapper ${
          compact ? "overflow-x-hidden flex justify-center !px-3" : "overflow-hidden"
        }`}
      >
        <GitHubCalendar
          username={GITHUB_USERNAME}
          theme={CALENDAR_THEME}
          colorScheme={resolvedTheme}
          blockSize={compact ? 10 : 12}
          blockMargin={compact ? 2.5 : 4}
          fontSize={compact ? 12 : 12}
        />
      </div>

      {showFeed && (
        <>
      <div className="mt-10 mb-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">Recent Activity Feed</div>

      <div className="writing space-y-8">
        {isPending ? (
          <div className="bio animate-pulse">Syncing with GitHub...</div>
        ) : events.length > 0 ? (
          events.map((event) => {
            const repoName = event.repo.split("/")[1];
            return (
              <div key={event.id} className="post group">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <i className={`fa ${event.type === "CreateEvent" ? "fa-code-fork" : "fa-code"} text-[10px] opacity-40`}></i>
                    {event.isPublic ? (
                      <a
                        href={`https://github.com/${event.repo}`}
                        target="_blank"
                        rel="noreferrer"
                        className="link font-bold text-sm"
                      >
                        {repoName}
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-muted-foreground/60 flex items-center gap-1.5">
                        <i className="fa fa-lock text-[10px]"></i> Private Project
                      </span>
                    )}
                  </div>
                  <time className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                    {new Date(event.createdAt).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                  </time>
                </div>
                <p className="markdown text-xs opacity-80">{event.summary}</p>
              </div>
            );
          })
        ) : (
          <p className="bio italic text-sm text-muted-foreground">No activity detected in the last 30 days.</p>
        )}
      </div>
        </>
      )}
    </section>
  );
};

export default GithubSection;
