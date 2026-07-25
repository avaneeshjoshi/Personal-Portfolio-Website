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
          <a href="https://useecho.work" target="_blank" rel="noopener noreferrer" className="link font-semibold">
            Echo
          </a>
          , an{" "}
          <strong className="font-medium text-foreground">
            autonomous incident-response agent
          </strong>
          . When production breaks, Echo wakes up the moment an alert fires, gathers evidence across logs, metrics, traces, and recent deploys, reasons over it, and only makes claims it can ground in what actually happened.{" "}
          <strong className="font-medium text-foreground">
            The hard problem in this space isn't speed, it's trust
          </strong>
          : most tools confidently guess at root causes and send on-call engineers down the wrong path at 3am. So I'm building the one you can actually believe, on a foundation designed to{" "}
          <strong className="font-medium text-foreground">
            make autonomy measurable rather than vibe-based
          </strong>
          : a replayable incident engine, a breakable microservice sandbox, fault injection with recorded ground truth, and a scoring harness that grades every diagnosis against what really broke. What I'm building toward next is{" "}
          <strong className="font-medium text-foreground">
            multiplayer incident response
          </strong>
          , where engineers and agents share the same live room, compare hypotheses, and move from diagnosis to safe fixes together.
        </p>
        <p>
          I'm also an{" "}
          <a href="https://www.intel.com/" target="_blank" rel="noopener noreferrer" className="link font-semibold">
            Intel
          </a>{" "}
          ASIC Design, AI & Automation Engineer Intern, where I build agents that automate PDK validation for external foundry customers. Before Echo I built{" "}
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
