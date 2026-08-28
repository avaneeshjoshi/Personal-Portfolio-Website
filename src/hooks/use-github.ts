import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGithubEvents, fetchGithubStats } from "@/lib/github/client";
import type { RepoStats } from "@/lib/github/types";
import { projects, projectRepoNames, type ProjectEntry } from "@/data/projects";

const HOUR = 60 * 60 * 1000;

export const githubKeys = {
  stats: (repos: string[]) => ["github", "stats", [...repos].sort()] as const,
  events: ["github", "events"] as const,
};

export function useGithubStats() {
  return useQuery({
    queryKey: githubKeys.stats(projectRepoNames),
    queryFn: () => fetchGithubStats(projectRepoNames),
    staleTime: HOUR,
    gcTime: 24 * HOUR,
    retry: 1,
    refetchOnWindowFocus: false,
  });
}

export interface ProjectView extends ProjectEntry {
  index: number;
  title: string;
  description: string;
  /** Where the card links: the write-up page when one exists, else the repo/homepage. */
  href: string;
  /** True when `href` is an in-app route (/work/:slug). */
  internal: boolean;
  repoUrl: string;
  stats: RepoStats | null;
}

/**
 * Static curated project list merged with live GitHub stats.
 * Renders immediately from the static data; stats fill in when loaded.
 */
export function useProjects(opts?: { featuredOnly?: boolean; workPath?: string }) {
  const query = useGithubStats();
  const featuredOnly = opts?.featuredOnly ?? false;
  const workPath = opts?.workPath ?? "/work";

  const list = useMemo<ProjectView[]>(
    () =>
      projects
        .filter((p) => !featuredOnly || p.featured)
        .map((p, i) => {
          const stats = query.data?.repos[p.repo] ?? null;
          const repoUrl = stats?.url ?? `https://github.com/${p.repo}`;
          const internal = Boolean(p.writeup && p.slug);
          return {
            ...p,
            index: i + 1,
            title: p.title ?? p.repo.split("/")[1],
            description: p.description ?? stats?.description ?? "",
            href: internal ? `${workPath}/${p.slug}` : (p.href ?? repoUrl),
            internal,
            repoUrl,
            stats,
          };
        }),
    [query.data, featuredOnly, workPath],
  );

  return {
    projects: list,
    user: query.data?.user ?? null,
    isLoading: query.isPending,
    error: query.error,
  };
}

export function useGithubEvents() {
  return useQuery({
    queryKey: githubKeys.events,
    queryFn: fetchGithubEvents,
    staleTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
}
