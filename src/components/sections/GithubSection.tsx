import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";

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

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        const headers: HeadersInit = {};
        
        if (token) {
          headers.Authorization = `token ${token}`;
        }

        // BACK TO USER-SPECIFIC ENDPOINT: This is best for a personal portfolio
        const response = await fetch(
          `https://api.github.com/users/${username}/events?per_page=50`, 
          { headers }
        );
        
        if (!response.ok) throw new Error(`Status: ${response.status}`);

        const data: GithubEvent[] = await response.json();

        // 1. Check if your commit is older than 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const filteredEvents = data
          .filter((event) => {
            const eventDate = new Date(event.created_at);
            const isRecent = eventDate > thirtyDaysAgo;
            const isCorrectType = event.type === "PushEvent" || event.type === "CreateEvent";
            
            // LOGIC FIX: If you want to see that ONE commit regardless of date, 
            // remove "isRecent" from this return statement temporarily to test.
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

      <div className="writing mt-6 space-y-8">
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
