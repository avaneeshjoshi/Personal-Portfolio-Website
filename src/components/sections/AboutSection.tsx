import SectionHeader from "../SectionHeader";

const AboutSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa-solid fa-user"></i>}
        title="About Me"
        linkText="Resume"
        linkHref="https://drive.google.com/file/d/1An1p1pKQ5ShJUZsqd7Th4c8PUOY7Qzcu/view?usp=sharing"
      />
      <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
        <p>
          I'm a junior at{" "}
          <a href="https://www.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="link font-semibold">
            UC Berkeley
          </a>{" "}
          studying{" "}
          <a href="https://math.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="link font-semibold">
            Applied Mathematics
          </a>{" "}
          and{" "}
          <a href="https://data.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="link font-semibold">
            Data Science
          </a>{" "}
          with a minor in{" "}
          <a href="https://eecs.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="link font-semibold">
            Computer Science
          </a>
          . I work on applied ML systems: vision-language pipelines, OCR and retrieval, and{" "}
          <strong className="font-medium text-foreground">
            evaluation-driven architectures where the goal is knowing whether the model is actually right, not just whether it runs
          </strong>
          .
        </p>
        <p>
          I'm building{" "}
          <a href="https://caliper-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="link font-semibold">
            Caliper
          </a>
          , a{" "}
          <strong className="font-medium text-foreground">
            measurement layer for AI coding agents
          </strong>
          . Companies are spending heavily on Claude Code, Cursor, and Codex, and nobody can tell them whether that money produced anything that mattered. The tools that exist measure spend without measuring outcome, and the vendors cannot credibly grade themselves. Caliper reads the logs those agents already write, never touching prompts or code, and traces what happened afterward: whether the lines survived, whether someone quietly rewrote them within two weeks, whether the change got reverted, and eventually whether the ticket it closed ever shipped.{" "}
          <strong className="font-medium text-foreground">
            That last link is what turns cost into impact
          </strong>
          , because durable code that nobody needed is still waste. The other half is{" "}
          <strong className="font-medium text-foreground">
            controlled replay
          </strong>
          , running the same real tasks across model tiers under identical conditions to find where quality actually drops rather than where a vendor says it doesn't, which turns into a routing policy: which class of work runs on which model, applied through the tools' own config rather than a proxy in the request path. The first artifact came from 30 bug fixes mined from Apache commons-lang, replayed blind across three Claude tiers. The mid tier matched the frontier model at 72% lower billed spend, and when I reran it with repeats the gap I thought I'd found disappeared entirely. That is the thesis in one result:{" "}
          <strong className="font-medium text-foreground">
            single-run comparisons manufacture differences that aren't there
          </strong>
          , and almost everyone publishing these numbers runs them once.
        </p>
        <p>
          I'm also an{" "}
          <a href="https://www.intel.com/" target="_blank" rel="noopener noreferrer" className="link font-semibold">
            Intel
          </a>{" "}
          ASIC Design, AI & Automation Engineer Intern, where I build agents that automate PDK validation for external foundry customers. Before Caliper I built{" "}
          <a href="https://github.com/avaneeshjoshi/Balatro-RL" target="_blank" rel="noopener noreferrer" className="link font-semibold">
            Balatro-RL
          </a>
          , a live-game ML agent that reads visible{" "}
          <a href="https://store.steampowered.com/app/2379780/Balatro/" target="_blank" rel="noopener noreferrer" className="link font-semibold">
            Balatro
          </a>
          {" "}state through a Lua/Python bridge and executes moves in real time. I built its Gymnasium environment, BalatroBench data pipeline, behavioral-cloning policy, legality-masked planner, and deterministic poker-scoring engine.
        </p>
        <p>
          Outside of building, I'm drawn to financial markets, mathematics, and video games, the kind of problems that are still interesting at 2am. I also paint (acrylics and digital), cook (slowly, but I plate it like it matters), used to play badminton competitively, and go on late-night drives where I stop to film whatever catches my eye.
        </p>
        <p>
          I came to machine learning from an art background, and I still approach building the same way: obsessively, and caring how the thing feels, not just whether it works. San Francisco is where I've found the work and the people I want to be around, and I'm not planning to leave.
        </p>
    </div>
    </section>
  );
};

export default AboutSection;
