import type {
  GithubEventItem,
  GithubStatsResponse,
  RepoLanguage,
  RepoStats,
  UserStats,
  WorkingOnItem,
} from "../../src/lib/github/types";

export const USERNAME = "avaneeshjoshi";
/** Always listed first in "Working on right now", regardless of the public events feed. */
const PINNED_WORKING = ["avaneeshjoshi/agent-measurement-harness", "avaneeshjoshi/agentic-robinhood"];
const USER_AGENT = "avaneeshjoshi-portfolio";
const REPO_RE = /^[\w.-]+\/[\w.-]+$/;
const MAX_REPOS = 20;

import { HttpError, json } from "./http.js";
export { HttpError, json, errorResponse } from "./http.js";

export function getToken(): string {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new HttpError(500, "GITHUB_TOKEN is not configured");
  return token;
}

export function parseRepoParam(value: string | null): string[] {
  if (!value) return [];
  const repos = value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (repos.length > MAX_REPOS) throw new HttpError(400, `At most ${MAX_REPOS} repos per request`);
  for (const r of repos) {
    if (!REPO_RE.test(r)) throw new HttpError(400, `Invalid repo "${r}" (expected owner/name)`);
  }
  return [...new Set(repos)].sort();
}

export async function ghGraphQL<T>(query: string, variables: Record<string, unknown>): Promise<{ data: T; errors?: { message: string; path?: (string | number)[] }[] }> {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${getToken()}`,
      "Content-Type": "application/json",
      "User-Agent": USER_AGENT,
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new HttpError(502, `GitHub GraphQL responded ${res.status}`);
  return res.json();
}

export async function ghRest<T>(path: string): Promise<T> {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Authorization: `bearer ${getToken()}`,
      Accept: "application/vnd.github+json",
      "User-Agent": USER_AGENT,
    },
  });
  if (!res.ok) throw new HttpError(502, `GitHub REST responded ${res.status}`);
  return res.json();
}

// ---------- stats ----------

const REPO_FRAGMENT = `
fragment RepoFields on Repository {
  nameWithOwner name url description homepageUrl
  stargazerCount forkCount pushedAt createdAt isArchived
  primaryLanguage { name color }
  languages(first: 3, orderBy: { field: SIZE, direction: DESC }) {
    totalSize
    edges { size node { name color } }
  }
  repositoryTopics(first: 6) { nodes { topic { name } } }
}`;

export function buildStatsQuery(repos: string[]): string {
  const repoFields = repos
    .map((full, i) => {
      const [owner, name] = full.split("/");
      return `r${i}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { ...RepoFields }`;
    })
    .join("\n  ");
  return `
query($login: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $login) {
    login name avatarUrl
    followers { totalCount }
    repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction: DESC }) {
      totalCount
      nodes { stargazerCount }
    }
    contributionsCollection(from: $from, to: $to) {
      totalCommitContributions
      restrictedContributionsCount
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount } }
      }
    }
  }
  ${repoFields}
}
${REPO_FRAGMENT}`;
}

interface RawRepo {
  nameWithOwner: string;
  name: string;
  url: string;
  description: string | null;
  homepageUrl: string | null;
  stargazerCount: number;
  forkCount: number;
  pushedAt: string;
  createdAt: string;
  isArchived: boolean;
  primaryLanguage: { name: string; color: string | null } | null;
  languages: { totalSize: number; edges: { size: number; node: { name: string; color: string | null } }[] };
  repositoryTopics: { nodes: { topic: { name: string } }[] };
}

interface RawUser {
  login: string;
  name: string | null;
  avatarUrl: string;
  followers: { totalCount: number };
  repositories: { totalCount: number; nodes: { stargazerCount: number }[] };
  contributionsCollection: {
    totalCommitContributions: number;
    restrictedContributionsCount: number;
    contributionCalendar: {
      totalContributions: number;
      weeks: { contributionDays: { date: string; contributionCount: number }[] }[];
    };
  };
}

function calendarStats(weeks: RawUser["contributionsCollection"]["contributionCalendar"]["weeks"]) {
  const days = weeks.flatMap((w) => w.contributionDays);
  let activeDays = 0;
  let best: UserStats["bestDay"] = null;
  let longest: UserStats["longestStreak"] = null;
  let run: { days: number; from: string; to: string } | null = null;
  for (const d of days) {
    if (d.contributionCount > 0) {
      activeDays++;
      if (!best || d.contributionCount > best.count) best = { date: d.date, count: d.contributionCount };
      run = run ? { days: run.days + 1, from: run.from, to: d.date } : { days: 1, from: d.date, to: d.date };
      if (!longest || run.days > longest.days) longest = { ...run };
    } else {
      run = null;
    }
  }
  return { activeDays, bestDay: best, longestStreak: longest };
}

function shapeRepo(r: RawRepo): RepoStats {
  const total = r.languages.totalSize || 1;
  const languages: RepoLanguage[] = r.languages.edges.map((e) => ({
    name: e.node.name,
    color: e.node.color,
    percent: Math.round((e.size / total) * 1000) / 10,
  }));
  return {
    fullName: r.nameWithOwner,
    name: r.name,
    url: r.url,
    description: r.description,
    homepage: r.homepageUrl || null,
    stars: r.stargazerCount,
    forks: r.forkCount,
    primaryLanguage: r.primaryLanguage,
    languages,
    pushedAt: r.pushedAt,
    createdAt: r.createdAt,
    archived: r.isArchived,
    topics: r.repositoryTopics.nodes.map((n) => n.topic.name),
  };
}

export async function fetchStats(repos: string[]): Promise<GithubStatsResponse> {
  const to = new Date();
  const from = new Date(to);
  from.setFullYear(from.getFullYear() - 1);

  const data = await ghGraphQL<Record<string, unknown> & { user: RawUser | null }>(buildStatsQuery(repos), {
    login: USERNAME,
    from: from.toISOString(),
    to: to.toISOString(),
  });

  const rawUser = data.data?.user;
  if (!rawUser) throw new HttpError(502, "GitHub user not found");

  const cc = rawUser.contributionsCollection;
  const user: UserStats = {
    login: rawUser.login,
    name: rawUser.name,
    avatarUrl: rawUser.avatarUrl,
    publicRepos: rawUser.repositories.totalCount,
    followers: rawUser.followers.totalCount,
    totalStars: rawUser.repositories.nodes.reduce((s, n) => s + n.stargazerCount, 0),
    commitsLastYear: cc.totalCommitContributions + cc.restrictedContributionsCount,
    contributionsLastYear: cc.contributionCalendar.totalContributions,
    ...calendarStats(cc.contributionCalendar.weeks),
  };

  const out: Record<string, RepoStats | null> = {};
  repos.forEach((full, i) => {
    const raw = data.data[`r${i}`] as RawRepo | null | undefined;
    out[full] = raw ? shapeRepo(raw) : null; // null = private/missing (GraphQL partial error)
  });

  return { user, repos: out, generatedAt: to.toISOString() };
}

// ---------- events ----------

interface RawEvent {
  id: string;
  type: string;
  public: boolean;
  created_at: string;
  repo: { name: string };
  payload: { size?: number; ref_type?: string; ref?: string; head?: string; commits?: { message: string }[] };
}

const firstLine = (msg: string | undefined, max = 80): string | null => {
  if (!msg) return null;
  const line = msg.split("\n")[0].trim();
  return line.length > max ? `${line.slice(0, max - 1)}…` : line;
};

function summarize(e: RawEvent): string {
  const repoContext = e.public ? "main" : "an internal repository";
  if (e.type === "PushEvent") {
    const count = e.payload.size || 1;
    return `Pushed ${count} ${count === 1 ? "commit" : "commits"} to ${repoContext}`;
  }
  if (e.payload.ref_type === "repository") {
    return `Initialized a new ${e.public ? "" : "private "}repository`;
  }
  return `Created branch "${e.payload.ref}" in ${repoContext}`;
}

export async function fetchEvents(): Promise<{ events: GithubEventItem[]; working: WorkingOnItem[] }> {
  const raw = await ghRest<RawEvent[]>(`/users/${USERNAME}/events?per_page=100`);
  const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
  const recent = raw.filter(
    (e) => (e.type === "PushEvent" || e.type === "CreateEvent") && new Date(e.created_at).getTime() > cutoff,
  );

  const events: GithubEventItem[] = recent.slice(0, 5).map((e) => ({
    id: e.id,
    type: e.type as GithubEventItem["type"],
    isPublic: e.public,
    createdAt: e.created_at,
    repo: e.repo.name,
    summary: summarize(e),
    message: firstLine(e.payload.commits?.at(-1)?.message),
  }));

  // Pinned repos first (latest commit straight from the repo), then recent public pushes.
  const pinned: WorkingOnItem[] = (
    await Promise.all(
      PINNED_WORKING.map(async (repo) => {
        try {
          const [c] = await ghRest<{ commit: { message: string; committer: { date: string } } }[]>(
            `/repos/${repo}/commits?per_page=1`,
          );
          if (!c) return null;
          return { repo, isPublic: true, message: firstLine(c.commit.message), pushedAt: c.commit.committer.date };
        } catch {
          return null;
        }
      }),
    )
  ).filter((w): w is WorkingOnItem => w !== null);

  const seen = new Set(PINNED_WORKING);
  const latest: RawEvent[] = [];
  for (const e of recent) {
    if (e.type !== "PushEvent" || !e.public || seen.has(e.repo.name)) continue;
    seen.add(e.repo.name);
    latest.push(e);
    if (pinned.length + latest.length >= 4) break;
  }

  const extra: WorkingOnItem[] = await Promise.all(
    latest.map(async (e) => {
      let message = firstLine(e.payload.commits?.at(-1)?.message);
      if (!message && e.payload.head) {
        try {
          const c = await ghRest<{ commit: { message: string } }>(`/repos/${e.repo.name}/commits/${e.payload.head}`);
          message = firstLine(c.commit.message);
        } catch {
          message = null;
        }
      }
      return { repo: e.repo.name, isPublic: e.public, message, pushedAt: e.created_at };
    }),
  );
  const working = [...pinned, ...extra];

  return { events, working };
}
