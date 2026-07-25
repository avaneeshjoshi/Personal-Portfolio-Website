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
      <div className="text-sm text-muted-foreground space-y-3">
        <p>
          I'm a junior at{" "}
          <a href="https://www.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="link">
            UC Berkeley
          </a>{" "}
          studying{" "}
          <a href="https://math.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="link">
            Applied Mathematics
          </a>{" "}
          and{" "}
          <a href="https://data.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="link">
            Data Science
          </a>{" "}
          with a minor in{" "}
          <a href="https://eecs.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="link">
            Computer Science
          </a>
          . I work on applied ML systems: vision-language pipelines, OCR and retrieval, and evaluation-driven architectures where the goal is knowing whether the model is actually right, not just whether it runs.
        </p>
        <p>
          I'm building{" "}
          <a href="https://useecho.work" target="_blank" rel="noopener noreferrer" className="link">
            Echo
          </a>
          . Hiring is breaking in a specific way: applying became free, so everyone applies everywhere, and recruiters responded by trusting applications less.{" "}
          <span className="font-medium text-foreground">More effort in, less signal out, worse outcomes on both sides.</span>{" "}
          The fix isn't a better cannon, it's proving fit before the application is ever sent. Echo polls company job boards directly, scores how well you actually match each new posting, and shows the evidence behind every score. I validated it against my own application history first, where it cleanly separated the roles that called me back from the ones that rejected me, and it now surfaces fresh postings hours after they go live. What I'm working toward is the thing that doesn't exist yet:{" "}
          <span className="font-medium text-foreground">an application channel recruiters actually trust</span>
          , because fit was verified before anyone hit send.
        </p>
        <p>
          I'm also an{" "}
          <a href="https://www.intel.com/" target="_blank" rel="noopener noreferrer" className="link">
            Intel
          </a>{" "}
          ASIC Design, AI & Automation Engineer Intern, where I build agents that automate PDK validation for external foundry customers. Before Echo I built{" "}
          <a href="https://github.com/avaneeshjoshi/Balatro-RL" target="_blank" rel="noopener noreferrer" className="link">
            Balatro-RL
          </a>
          , a{" "}
          <a href="https://openai.com/research/openai-baselines-ppo" target="_blank" rel="noopener noreferrer" className="link">
            PPO
          </a>{" "}
          agent that learns to play the roguelike{" "}
          <a href="https://store.steampowered.com/app/2379780/Balatro/" target="_blank" rel="noopener noreferrer" className="link">
            Balatro
          </a>
          .
        </p>
        <p>
          Beyond ML, I'm drawn to financial markets, mathematics, and video games. I love work that keeps me up at night and makes my brain feel alive. I also paint (acrylics and digital), cook (I take my time but always make sure I serve perfection), play badminton (formerly competitive), and go on nightly drives where I get out and record things around me for filmmaking.
        </p>
        <p>
          I'm a creative personality at heart who found a home in machine learning. San Francisco has become the center of my work and community, and I'm excited to keep building here.
        </p>
        <p>
          Email me at{" "}
          <a href="mailto:avaneesh@useecho.work" className="link">
            avaneesh [at] useecho.work
          </a>{" "}
          if you want to reach out about Echo, ML engineering, research, or anything interesting.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;