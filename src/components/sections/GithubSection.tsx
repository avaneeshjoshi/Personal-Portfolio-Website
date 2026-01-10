import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";
// 1. Import the Calendar component
import { GitHubCalendar } from 'react-github-calendar';

interface GithubEvent {
  id: string;
  type: string;
  public: boolean;
  created_at: string;
  repo: { name: string };
  payload: { 
    size?: number;
    ref_type?: string;
    ref?: string;
  };
}

const GithubSection: React.FC = () => {
  const [events, setEvents] = useState<GithubEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const username = "avaneeshjoshi";

  // 2. Define the GitHub dark theme colors
  // Custom color ramp from light gray to vibrant green
  const githubTheme = {
    dark: [
      '#ebedf0', // Level 0: Your light gray (Base/Empty)
      '#c6e48b', // Level 1
      '#7bc96f', // Level 2
      '#239a3b', // Level 3
      '#196127'  // Level 4
    ],
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  };

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        const headers: HeadersInit = {};
        
        if (token) {
          headers.Authorization = `token ${token}`;
        }

        const response = await fetch(
          `https://api.github.com/users/${username}/events?per_page=50`, 
          { headers }
        );
        
        if (!response.ok) throw new Error(`Status: ${response.status}`);

        const data: GithubEvent[] = await response.json();

        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const filteredEvents = data
          .filter((event) => {
            const eventDate = new Date(event.created_at);
            const isRecent = eventDate > thirtyDaysAgo;
            const isCorrectType = event.type === "PushEvent" || event.type === "CreateEvent";
            return isRecent && isCorrectType;
          })
          .slice(0, 5);

        setEvents(filteredEvents);
      } catch (err) {
        console.error("GitHub Tracker Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [username]);

  const getEventActivity = (event: GithubEvent) => {
    const isPrivate = !event.public;
    const repoContext = isPrivate ? "an internal repository" : "main";

    if (event.type === "PushEvent") {
      const count = event.payload.size || 1;
      return `Pushed ${count} ${count === 1 ? 'commit' : 'commits'} to ${repoContext}`;
    }

    if (event.type === "CreateEvent") {
      if (event.payload.ref_type === "repository") {
        return `Initialized a new ${isPrivate ? "private " : ""}repository`;
      }
      return `Created branch "${event.payload.ref}" in ${repoContext}`;
    }
    return "Updated repository";
  };

  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa-brands fa-github"></i>}
        title="Github Activity"
        linkText="Follow"
        linkHref={`https://github.com/${username}`}
      />

      {/* 3. The Contribution Graph Wrapper */}
      <div className="mt-6 p-4 rounded-xl border border-border bg-card/50 overflow-hidden shadow-sm github-calendar-wrapper">
        <GitHubCalendar 
          username={username}
          theme={githubTheme}
          colorScheme="dark"
          blockSize={12}
          blockMargin={4}
          fontSize={12}
        />
      </div>

      {/* Divider / Label */}
      <div className="mt-10 mb-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">
        Recent Activity Feed
      </div>

      <div className="writing space-y-8">
        {loading ? (
          <div className="bio animate-pulse">Syncing with GitHub...</div>
        ) : events.length > 0 ? (
          events.map((event) => {
            const isPrivate = !event.public;
            const repoName = event.repo.name.split("/")[1];

            return (
              <div key={event.id} className="post group">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <i className={`fa ${event.type === 'CreateEvent' ? 'fa-code-fork' : 'fa-code'} text-[10px] opacity-40`}></i>
                    {isPrivate ? (
                      <span className="text-sm font-bold text-muted-foreground/60 flex items-center gap-1.5">
                        <i className="fa fa-lock text-[10px]"></i> Private Project
                      </span>
                    ) : (
                      <a href={`https://github.com/${event.repo.name}`} target="_blank" rel="noreferrer" className="link font-bold text-sm">
                        {repoName}
                      </a>
                    )}
                  </div>
                  <time className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                    {new Date(event.created_at).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                  </time>
                </div>
                <p className="markdown text-xs opacity-80">{getEventActivity(event)}</p>
              </div>
            );
          })
        ) : (
          <p className="bio italic text-sm text-muted-foreground">
            No activity detected in the last 30 days.
          </p>
        )}
      </div>
    </section>
  );
};

export default GithubSection;
