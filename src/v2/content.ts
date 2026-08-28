export const v2Content = {
  name: "Avaneesh Joshi",
  location: "Berkeley, CA",
  timeZone: "America/Los_Angeles",
  taglinePrefix: "I build ",
  taglineEmphasis: ["applied ML systems", "evaluation-driven agents"],
  bio: [
    "The research half is knowing whether a model is actually right, not just whether it runs. Vision-language pipelines, OCR and retrieval, and evaluation architectures that measure outcome instead of vibes.",
    "The engineering half is shipping it. I'm building Caliper, a measurement layer for AI coding agents, and I intern at Intel building agents that automate PDK validation. Before that: WebAI, Dasion, Nyris, Revola AI.",
  ],
  photo: "/profile.jpg",
  photoCaptions: ["Applied Math · Data Science", "UC Berkeley · SF"],
  nav: [
    { label: "about", href: "/v2#about" },
    { label: "projects", href: "/v2#projects" },
    { label: "github", href: "https://github.com/avaneeshjoshi", external: true },
    {
      label: "resume",
      href: "https://drive.google.com/file/d/1An1p1pKQ5ShJUZsqd7Th4c8PUOY7Qzcu/view?usp=sharing",
      external: true,
    },
    { label: "classic", href: "/" },
  ],
  socials: [
    { label: "github", href: "https://github.com/avaneeshjoshi", icon: "github" },
    { label: "linkedin", href: "https://linkedin.com/in/avaneesh-joshi", icon: "linkedin" },
    { label: "x", href: "https://x.com/avxneeshjoshi", icon: "x" },
    { label: "email", href: "mailto:avaneeshjoshi@berkeley.edu", icon: "mail" },
    {
      label: "resume",
      href: "https://drive.google.com/file/d/1An1p1pKQ5ShJUZsqd7Th4c8PUOY7Qzcu/view?usp=sharing",
      icon: "file",
    },
  ],
  socialsNote: "x is where the daily stuff goes, mostly whatever I am building that week",
  projectsIntro: "Newest first. Live numbers come straight from GitHub; the rest I wrote by hand.",
} as const;

export type SocialIcon = (typeof v2Content.socials)[number]["icon"];
