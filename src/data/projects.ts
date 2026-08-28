export type ProjectCategory = "ml" | "agents" | "systems" | "web" | "tools";

export interface ProjectMetric {
  label: string;
  value: string | number;
}

export interface WriteupImage {
  src: string;
  caption?: string;
}

export interface WriteupSection {
  /** Small mono label, e.g. "WHY" or "WHAT IT DOES". */
  label: string;
  paragraphs?: string[];
  /** Rendered as an em-dash list. */
  bullets?: string[];
  images?: WriteupImage[];
}

/** Long-form case study rendered at /work/:slug. Projects without one link straight to the repo. */
export interface ProjectWriteup {
  /** Opening block under the NOTES rule. */
  notes: string[];
  sections: WriteupSection[];
}

export interface ProjectEntry {
  /** URL slug for the write-up page. Required when `writeup` is set. */
  slug?: string;
  /** One-line lowercase tagline shown on the write-up page. */
  tagline?: string;
  /** Tech stack tags shown on the write-up page. */
  stack?: string[];
  /** Mono date range shown on the write-up page, e.g. "08.2026 — present". */
  period?: string;
  writeup?: ProjectWriteup;
  /** "owner/name" — the GitHub repo that live stats are pulled from. */
  repo: string;
  /** Display title override (defaults to the repo name). */
  title?: string;
  /** Description override (defaults to the GitHub description). */
  description?: string;
  /** Short first-person "why I built it" note, shown on the /v2 card. */
  note?: string;
  /** Optional thumbnail; cards fall back to a numbered placeholder. */
  image?: string;
  category?: ProjectCategory;
  year?: number;
  /** Hand-written highlight numbers, e.g. { label: "typed tools", value: 16 }. */
  metrics?: ProjectMetric[];
  /** Link override (defaults to the repo URL). */
  href?: string;
  /** Shown in the compact Projects section on "/". The /v2 page shows all. */
  featured?: boolean;
}

export const CATEGORY_META: Record<ProjectCategory, { label: string; color: string }> = {
  ml: { label: "ML", color: "#d4744f" },
  agents: { label: "agents", color: "#7a9e7e" },
  systems: { label: "systems", color: "#6f8fbf" },
  web: { label: "web", color: "#c9a227" },
  tools: { label: "tools", color: "#a08bb5" },
};

export const GITHUB_USERNAME = "avaneeshjoshi";

export const projects: ProjectEntry[] = [
  {
    repo: "avaneeshjoshi/mac-dynamic-island",
    title: "Dynamic Island for Mac",
    description:
      "A notch-style Dynamic Island for macOS: now-playing at a glance, instant completion alerts for Claude Code and Codex tasks, and a live calendar you can schedule from without leaving the notch",
    note:
      "I was bored and wanted a way to see what was playing on my Mac. Then I kept kicking off a Claude Code or Codex task, going on a tangent, and forgetting it was running in the background. Now the island tells me the moment it finishes, surfaces calendar events as they come up, and lets me drop a new one in right there instead of opening Calendar.",
    category: "tools",
    year: 2026,
    metrics: [
      { label: "agents watched", value: 2 },
      { label: "calendar", value: "in-notch" },
      { label: "tangents forgotten", value: 0 },
    ],
    featured: true,
  },
  {
    repo: "avaneeshjoshi/agent-measurement-harness",
    slug: "caliper",
    title: "Caliper",
    tagline: "measurement and routing layer for coding agents",
    stack: ["Python", "Claude Code", "Cursor", "Codex", "Git", "SQLite"],
    period: "08.2026 — present",
    writeup: {
      notes: [
        "Companies are spending heavily on Claude Code, Cursor, and Codex, and nobody can tell them whether that money produced anything that mattered. The tools that exist measure spend without measuring outcome, and the vendors cannot credibly grade themselves. Caliper is an independent layer that reads the logs those agents already write and answers three questions no vendor dashboard can: what are agents actually used for, is automatic model routing making good calls, and what did the spend deliver.",
      ],
      sections: [
        {
          label: "Glass box by default",
          paragraphs: [
            "Caliper never reads prompts or code. It extracts session metadata, token counts, model identity, and Git history, and drops content at the extraction boundary. Every classification rule, rubric, and routing recommendation is versioned, documented, and logged with its rationale. Reporting is team-level and above; there are no individual rankings, ever.",
          ],
        },
        {
          label: "What it produces",
          bullets: [
            "A task taxonomy and the real usage distribution across teams, tools, and models.",
            "Quality-per-tier curves: per task class, how quality holds as the model tier drops, and whether attaching a skill lets a class run a tier cheaper at held quality.",
            "Value traceability: the chain from agent session → commit/PR → ticket → deployment → outcome, so durable code that nobody needed still counts as waste.",
            "A routing policy the data justifies, applied through the harnesses' own config rather than a proxy in the request path.",
          ],
        },
        {
          label: "Controlled replay",
          paragraphs: [
            "The other half is running the same real tasks across model tiers under identical conditions to find where quality actually drops, rather than where a vendor says it doesn't. The first artifact came from 30 bug fixes mined from Apache commons-lang, replayed blind across three Claude tiers. The mid tier matched the frontier model at 72% lower billed spend.",
            "Then I reran it with repeats and the gap I thought I'd found disappeared entirely. That is the thesis in one result: single-run comparisons manufacture differences that aren't there, and almost everyone publishing these numbers runs them once.",
          ],
        },
        {
          label: "Shipping it",
          paragraphs: [
            "Today it installs with pipx, walks through a trust screen, backfills local agent logs, classifies traffic without reading its content, and writes a self-contained HTML report. caliper serve opens the same numbers live and read-only on localhost. Everything it produces lives in ~/.caliper and nothing leaves the machine.",
          ],
        },
      ],
    },
    description:
      "Measurement and routing layer for coding agents — task taxonomy, quality-per-tier curves, and value traceability from session to shipped outcome",
    category: "agents",
    year: 2026,
    metrics: [
      { label: "harnesses", value: 3 },
      { label: "model tiers replayed", value: 3 },
      { label: "lower spend, mid tier", value: "72%" },
    ],
    featured: true,
  },
  {
    repo: "avaneeshjoshi/Balatro-RL",
    slug: "balatro-rl",
    title: "Balatro-RL",
    tagline: "live-game card-play agent for Balatro",
    stack: ["Python", "Lua", "Gymnasium", "PyTorch", "Lovely Injector", "Love2D"],
    period: "2026 — present",
    writeup: {
      notes: [
        "Balatro is a poker roguelike where every hand is a small optimization problem under hidden information. This project builds and evaluates agents that play the actual game, not a simulator: Lua injected into the Love2D engine reads the real state, and a Python planner decides what to play or discard each turn.",
      ],
      sections: [
        {
          label: "Scope",
          paragraphs: [
            "The agent only handles in-blind card decisions: which cards to play or discard to hit the chip target in small, big, and boss blinds. Shop purchases, jokers, tarots, packs, and blind skipping are out of scope on purpose. Master the round first; deck building is a different problem.",
          ],
        },
        {
          label: "The bridge",
          bullets: [
            "A Lua mod loaded through Lovely Injector hooks Game:update and watches money, chips, hands and discards remaining, and the cards in hand.",
            "State is snapshotted only on meaningful events (entering hand selection, a hand played, a discard, a hand-size change), so the agent never sees redundant frames.",
            "Commands flow back through a JSON file: an action (play or discard) and 1-based card indices. The bridge highlights the cards, calls the game's own play/discard functions, then deletes the file so nothing runs twice.",
          ],
        },
        {
          label: "The policy",
          paragraphs: [
            "Visible state becomes versioned feature vectors and planner states. A behavioral-cloning policy and a fixed-vocabulary supervised policy propose candidate actions; a deterministic Balatro scoring engine reranks the legal plays exactly, and a legality mask keeps the planner from ever proposing a move the game would reject. The current checkpoint is an imitation baseline; the Gymnasium environment exists so PPO fine-tuning is the next stage rather than a rewrite.",
          ],
        },
        {
          label: "BalatroBench",
          paragraphs: [
            "The data pipeline turns logged runs into a benchmark: the same blinds, the same hands, replayed against any policy so improvements are measured on identical situations instead of on luck of the draw.",
          ],
        },
      ],
    },
    description:
      "Live-game Balatro agent with a Lua/Python bridge, Gymnasium env, BalatroBench pipeline, and masked planner",
    image: "https://cdn2.steamgriddb.com/icon/066e25a0712b306a9b95230f6ec4a051.ico",
    category: "ml",
    year: 2026,
    metrics: [
      { label: "gymnasium env", value: 1 },
      { label: "masked planner", value: "legal" },
    ],
    featured: true,
  },
  {
    repo: "avaneeshjoshi/Axlerate",
    slug: "axlerate",
    title: "Axlerate",
    tagline: "math workspace where the Lean 4 compiler is the oracle",
    stack: ["TypeScript", "Python", "Lean 4", "Mathlib", "Graph RAG"],
    period: "12.2025 — present",
    writeup: {
      notes: [
        "Ask a language model to prove something and it will, fluently, whether or not the proof is right. Axlerate makes the Lean 4 compiler the judge instead: natural-language questions become machine-verified proofs, and hard theorems become claim graphs that get proved node by node.",
      ],
      sections: [
        {
          label: "Why",
          paragraphs: [
            "The interesting part of a model's answer was never the answer. It was whatever sits downstream and can tell you the answer is wrong. For mathematics that checker already exists and is unforgiving, so the workspace is built around it rather than around the model.",
          ],
        },
        {
          label: "How it works",
          bullets: [
            "A question is decomposed into a graph of claims; each node is a lemma small enough to formalize on its own.",
            "Graph RAG retrieves the relevant Mathlib results and prior nodes as context, so the model writes against the library instead of hallucinating names.",
            "Every candidate proof is compiled. Failures feed the error back into the next attempt; only compiled nodes are marked done, and the theorem is done only when the whole graph is.",
          ],
        },
      ],
    },
    description: "Unified math/ML workspace with context-aware logic retrieval via Graph RAG",
    image:
      "https://fmanavehsizxybddlxtr.supabase.co/storage/v1/object/sign/Axlerate/Group%208.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTc3ZjM5NS02NTdlLTQyMTMtOWQ4NS0zMTgyNWJlYzJlMzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBeGxlcmF0ZS9Hcm91cCA4LnBuZyIsImlhdCI6MTc2NjQ5MTczMCwiZXhwIjoxODkyNjM1NzMwfQ.DHWdPH0idNlC4bJXA2lDMCMRko8aurg-n_waP5MM-3M",
    category: "agents",
    year: 2025,
    metrics: [{ label: "graph rag", value: "retrieval" }],
    featured: true,
  },
  {
    repo: "avaneeshjoshi/PocketHost",
    title: "Host AI",
    description:
      "Restaurant table management system using YOLOv8 and GPT-4V with real-time floor plan processing via Flask.",
    image:
      "https://w7.pngwing.com/pngs/904/441/png-transparent-computer-icons-waiter-meal-waiter-service-public-relations-logo.png",
    category: "ml",
    year: 2024,
    metrics: [
      { label: "vision model", value: "YOLOv8" },
      { label: "floor plans", value: "live" },
    ],
    featured: true,
  },
  {
    repo: "avaneeshjoshi/Forage-New",
    title: "Forage",
    description:
      "Crop recommendation platform using XGBoost with climate and botanical analysis via Flask-PostgreSQL",
    image: "https://www.iconpacks.net/icons/2/free-tree-icon-1578-thumb.png",
    category: "web",
    year: 2024,
    metrics: [{ label: "model", value: "XGBoost" }],
    featured: true,
  },
];

export const projectRepoNames = projects.map((p) => p.repo);

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug && p.writeup);
