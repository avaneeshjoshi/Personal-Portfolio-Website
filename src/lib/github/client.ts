import type { GithubEventsResponse, GithubStatsResponse } from "./types";

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.json();
}

/** Repo list is sorted so the URL (and therefore the CDN cache key) is stable. */
export function fetchGithubStats(repos: string[]): Promise<GithubStatsResponse> {
  const q = [...repos].sort().join(",");
  return getJson(`/api/github/stats?repos=${encodeURIComponent(q)}`);
}

export function fetchGithubEvents(): Promise<GithubEventsResponse> {
  return getJson("/api/github/events");
}
