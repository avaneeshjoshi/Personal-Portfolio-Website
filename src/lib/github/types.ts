/** Shared response types for the /api/github/* serverless functions. */

export interface RepoLanguage {
  name: string;
  color: string | null;
  percent: number;
}

export interface RepoStats {
  fullName: string;
  name: string;
  url: string;
  description: string | null;
  homepage: string | null;
  stars: number;
  forks: number;
  primaryLanguage: { name: string; color: string | null } | null;
  /** Top languages by bytes, descending. */
  languages: RepoLanguage[];
  pushedAt: string;
  createdAt: string;
  archived: boolean;
  topics: string[];
}

export interface UserStats {
  login: string;
  name: string | null;
  avatarUrl: string;
  publicRepos: number;
  followers: number;
  totalStars: number;
  /** Commits in the trailing 12 months (public + private). */
  commitsLastYear: number;
  /** All contributions in the trailing 12 months (calendar total). */
  contributionsLastYear: number;
  /** Days in the last year with at least one contribution. */
  activeDays: number;
  longestStreak: { days: number; from: string; to: string } | null;
  bestDay: { date: string; count: number } | null;
}

export interface GithubStatsResponse {
  user: UserStats;
  /** Keyed by "owner/name". `null` when the repo is missing or private. */
  repos: Record<string, RepoStats | null>;
  generatedAt: string;
}

export interface GithubEventItem {
  id: string;
  type: "PushEvent" | "CreateEvent";
  isPublic: boolean;
  createdAt: string;
  /** "owner/name" */
  repo: string;
  summary: string;
  /** First commit message of a push, truncated. */
  message: string | null;
}

/** Latest push per repo — "working on right now". */
export interface WorkingOnItem {
  repo: string;
  isPublic: boolean;
  message: string | null;
  pushedAt: string;
}

export interface GithubEventsResponse {
  events: GithubEventItem[];
  working: WorkingOnItem[];
  generatedAt: string;
}
