import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";

interface GithubCommit {
  message: string;
  sha: string;
}

interface GithubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: {
    name: string;
  };
  payload: {
    commits?: GithubCommit[];
  };
}

const GithubSection: React.FC = () => {
  const [events, setEvents] = useState<GithubEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const username = "avaneeshjoshi"; // Change this to your username

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/events/public`)
      .then((res) => res.json())
      .then((data: GithubEvent[]) => {
        // Filter for PushEvents (actual commits) and limit to 4
        const pushEvents = data
          .filter((event) => event.type === "PushEvent")
          .slice(0, 4);
        setEvents(pushEvents);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching GitHub data:", err);
        setLoading(false);
      });
  }, [username]);

  return (
    <section className="mb-12">
      <SectionHeader
        /* Using fa fa-github to match your Font Awesome 4.7.0 file */
        icon={<i className="fa fa-github"></i>}
        title="GitHub"
        linkText="Profile"
        linkHref={`https://github.com/${username}`}
      />

      <div className="writing mt-4">
        {loading ? (
          <p className="bio">Loading recent commits...</p>
        ) : events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="post mb-6">
              <div className="flex items-center justify-between">
                {/* The 'link' class triggers the blue "bloop" background 
                  and the animated underline from your index.css 
                */}
                <a
                  href={`https://github.com/${event.repo.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="link font-bold"
                >
                  {event.repo.name.split("/")[1]}
                </a>
                
                {/* Metadata date styled to match the site's typography */}
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                  {new Date(event.created_at).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>

              {/* The commit message styled with your .markdown class */}
              <p className="markdown mt-1">
                {event.payload.commits && event.payload.commits[0]
                  ? event.payload.commits[0].message
                  : "Updated repository"}
              </p>
            </div>
          ))
        ) : (
          <p className="bio">No recent public commits found.</p>
        )}
      </div>
    </section>
  );
};

export default GithubSection;
