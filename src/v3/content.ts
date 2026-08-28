export const v3Content = {
  nav: [
    { label: "about", to: "/", end: true },
    { label: "activity", to: "/activity" },
    { label: "projects", to: "/projects" },
  ],
  /** Short display names for repos that aren't in projects.ts. */
  repoAliases: {
    "avaneeshjoshi/Personal-Portfolio-Website": "Portfolio",
  } as Record<string, string>,
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/avaneesh-joshi", icon: "fa-brands fa-linkedin-in" },
    { label: "X", href: "https://x.com/avxneeshjoshi", icon: "fa-brands fa-x-twitter" },
    { label: "GitHub", href: "https://github.com/avaneeshjoshi", icon: "fa-brands fa-github" },
    { label: "Instagram", href: "https://www.instagram.com/stackitwithavi/", icon: "fa-brands fa-instagram" },
    { label: "Email", href: "mailto:avaneeshjoshi@berkeley.edu", icon: "fa fa-envelope" },
  ],
  resumeHref: "https://drive.google.com/file/d/1An1p1pKQ5ShJUZsqd7Th4c8PUOY7Qzcu/view?usp=sharing",
  letterboxdUrl: "https://letterboxd.com/avxneeshjoshi/",

  header: {
    name: "Avaneesh Joshi",
    location: "Berkeley, CA",
    taglinePrefix: "I build ",
    taglineEmphasis: ["applied ML systems", "evaluation-driven agents"],
    captions: ["Applied Math · DS", "Cal '28"],
  },
  timeZone: "America/Los_Angeles",

  // ---- Activity ----
  activityLocation: "Berkeley · San Francisco",
  activityIntro:
    "Applied math and data science at UC Berkeley. I work on applied ML systems and the evaluation layers around them. Almost everything I build ends up circling the same question, which is how you tell whether a model is actually right.",

  // ---- Off the screen — edit freely ----
  offScreenIntro: "The parts of the week that don't produce commits.",
  movies:
    "I love movies. If I'm exhausted or burnt out, you'll find me on the couch with one. Whatever I watch gets logged on Letterboxd; the most recent ones show up here.",
  games:
    "I play games for the worlds — places built well enough that I can disappear into them for a while. SOMA stuck with me for a different reason: it asks what identity even is once you can copy a mind. If a copy made from the same snapshot of you meets a bad end, was that you? What I've been playing lately is below.",
  books:
    "Fiction first, and mostly the kind that leaves a question behind: existentialism, cosmic horror, anything philosophical enough that the plot is really a pretext. Chambers and Lovecraft are the comfort reads. In between I read nonfiction too — self-help, and the occasional AI/ML or software engineering book.",
  badminton:
    "I played badminton competitively for years and still get on court whenever I can. It's the one place where thinking faster doesn't help; you just have to have done the reps.",
  gallery:
    "I paint in acrylics and digital, and I go on late-night drives where I stop to film whatever catches my eye. Here's some of my work, on a loop.",
  travel: "Everywhere I've been so far. Drag the globe around; the pins are the places.",
} as const;
