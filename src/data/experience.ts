/**
 * Work + education history, newest first. Source of truth for the Career/Education
 * sections on /classic and the timeline on /activity. Dates are "YYYY-MM"; `end: null` = present.
 */
export type ExperienceKind = "internship" | "contract" | "research" | "education";

export interface ExperienceEntry {
  company: string;
  role: string;
  kind: ExperienceKind;
  start: string;
  end: string | null;
  location: string;
  summary: string;
  href: string;
  logo: string;
}

export const LINKEDIN_URL = "https://www.linkedin.com/in/avaneesh-joshi/";

export const experience: ExperienceEntry[] = [
  {
    company: "Intel",
    role: "ASIC Design, AI & Automation Engineer Intern",
    kind: "internship",
    start: "2026-05",
    end: null,
    location: "Santa Clara, CA · on-site",
    summary:
      "Engineering AI agents that automate PDK validation suites — block-level APR runs, DRC/LVS checks, and regression tests — and generate APR tech files in Cadence and Synopsys formats for external PDK customers.",
    href: "https://www.intel.com/",
    logo:
      "https://fmanavehsizxybddlxtr.supabase.co/storage/v1/object/sign/Portfolio/intel_corporation_logo.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTc3ZjM5NS02NTdlLTQyMTMtOWQ4NS0zMTgyNWJlYzJlMzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8vaW50ZWxfY29ycG9yYXRpb25fbG9nby5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4Mzk5MTQ1NCwiZXhwIjoyMDk5MzUxNDU0fQ.oi76s0uSGu8QxlaDDikUPITTrXU6MmIwIim9lW9VGz8",
  },
  {
    company: "webAI",
    role: "AI Engineer Intern",
    kind: "research",
    start: "2026-02",
    end: "2026-05",
    location: "San Francisco, CA",
    summary:
      "Researching hierarchical coupled oscillatory neural networks (ONNs) and SLM quantization for on-device AI at Intelligence Labs, inside webAI's $2.5B platform for local, private AI. Advised by Dr. P. J. Maykish.",
    href: "https://www.webai.com/",
    logo:
      "https://fmanavehsizxybddlxtr.supabase.co/storage/v1/object/sign/Portfolio/webai_logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTc3ZjM5NS02NTdlLTQyMTMtOWQ4NS0zMTgyNWJlYzJlMzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8vd2ViYWlfbG9nby5wbmciLCJpYXQiOjE3Njk2MzI4MDQsImV4cCI6MTk1ODg0ODgwNH0.ofDLR9jV53-P85hc70v9bbRDiAQfUoZXtGJz4_2ojM0",
  },
  {
    company: "LG Electronics",
    role: "Software Developer",
    kind: "contract",
    start: "2026-01",
    end: "2026-05",
    location: "LG NOVA",
    summary:
      "AI/ML for Venture Ops at LG NOVA, a $100M+ venture studio and global CVC — GraphRAG systems for deal flow (through UC Berkeley Open Project, a tech consulting org).",
    href: "https://www.lgnova.com/",
    logo:
      "https://fmanavehsizxybddlxtr.supabase.co/storage/v1/object/sign/Portfolio/lg_nova_logo.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTc3ZjM5NS02NTdlLTQyMTMtOWQ4NS0zMTgyNWJlYzJlMzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8vbGdfbm92YV9sb2dvLmpwZWciLCJpYXQiOjE3NzE5MjY0OTMsImV4cCI6MTg5ODA3MDQ5M30.cF7K7M5nL-DbWFt3HE6ImQIh_Y_wsxSFPvwK5Y9cwwU",
  },
  {
    company: "Dasion",
    role: "Machine Learning Engineer Intern",
    kind: "internship",
    start: "2025-09",
    end: "2025-12",
    location: "San Francisco, CA",
    summary:
      "Shipped an AI table-management platform to 3 restaurants: YOLOv8 + GPT-4V parse raw floor plans into seating maps (73% precision), an owner dashboard edits them, and GPT-4V guest self-seating cut wait times 37%.",
    href: "https://www.data-to-decision.com/",
    logo:
      "https://fmanavehsizxybddlxtr.supabase.co/storage/v1/object/sign/Portfolio/dasion_logo.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTc3ZjM5NS02NTdlLTQyMTMtOWQ4NS0zMTgyNWJlYzJlMzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8vZGFzaW9uX2xvZ28uanBlZyIsImlhdCI6MTc2Nzg4NTQxMywiZXhwIjoxODk0MDI5NDEzfQ.o6E7hanHozkXVUKCAhhLuZcOmyu2pE55qZk5dghiwCg",
  },
  {
    company: "nyris GmbH",
    role: "Machine Learning Engineer Intern",
    kind: "internship",
    start: "2025-05",
    end: "2025-08",
    location: "Berlin, Germany",
    summary: "Series B; large-scale VLM prompt benchmarking and OCR evaluation pipelines for enterprise image search.",
    href: "https://www.nyris.io/",
    logo:
      "https://fmanavehsizxybddlxtr.supabase.co/storage/v1/object/sign/Portfolio/nyris_logo.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTc3ZjM5NS02NTdlLTQyMTMtOWQ4NS0zMTgyNWJlYzJlMzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8vbnlyaXNfbG9nby5qcGVnIiwiaWF0IjoxNzY3ODg1NDc0LCJleHAiOjE4OTQwMjk0NzR9.APo0IEWo7NHrBE9lxisBheuKJB36O3PZGNOA_fp3zUU",
  },
  {
    company: "Revola AI",
    role: "Software Engineer Intern",
    kind: "internship",
    start: "2025-01",
    end: "2025-04",
    location: "San Francisco, CA",
    summary: "OAuth2 + JWT for AI agent automation and meeting integration — scheduling and session-verification pipelines across Zoom and Google Meet.",
    href: "https://www.revola.ai/",
    logo:
      "https://fmanavehsizxybddlxtr.supabase.co/storage/v1/object/sign/Portfolio/revolaai_logo.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTc3ZjM5NS02NTdlLTQyMTMtOWQ4NS0zMTgyNWJlYzJlMzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8vcmV2b2xhYWlfbG9nby5qcGVnIiwiaWF0IjoxNzY3ODg1NDk2LCJleHAiOjE4OTQwMjk0OTZ9.tZm61DgyK5O4QmK8tAGeyUfY8_PGc_K55oEBNmQ6Y9M",
  },
  {
    company: "bitWise Academy",
    role: "Machine Learning Engineer Intern",
    kind: "internship",
    start: "2024-05",
    end: "2024-08",
    location: "San Francisco, CA",
    summary: "BERT-NLP + HMM for adaptive quiz optimization; motion + content GAN research for interactive educational simulations.",
    href: "https://bitwiseacademy.com/",
    logo:
      "https://fmanavehsizxybddlxtr.supabase.co/storage/v1/object/sign/Portfolio/bitwise_logo.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTc3ZjM5NS02NTdlLTQyMTMtOWQ4NS0zMTgyNWJlYzJlMzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8vYml0d2lzZV9sb2dvLmpwZWciLCJpYXQiOjE3NjgzMjI4MDksImV4cCI6MTg5NDQ2NjgwOX0.K5tAB5bAm_ZR1tO_2bu_lwvkLVSypi2hmOfWhHn0txo",
  },
  {
    company: "UC Berkeley",
    role: "B.A. Data Science (ML) & Applied Math, CS minor",
    kind: "education",
    start: "2024-08",
    end: "2028-05",
    location: "Berkeley, CA",
    summary: "University of California, Berkeley · expected graduation 2028.",
    href: "https://www.berkeley.edu/",
    logo:
      "https://brand.berkeley.edu/wp-content/uploads/2024/08/cal-script-thumbnail-2048x1311.png",
  },
];

export const career = experience.filter((e) => e.kind !== "education");
export const education = experience.filter((e) => e.kind === "education");

/** "2026-05" → "May 2026" */
export const formatYm = (ym: string) =>
  new Date(`${ym}-01T12:00:00`).toLocaleDateString("en-US", { month: "short", year: "numeric" });
