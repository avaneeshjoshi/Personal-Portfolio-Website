import SectionHeader from "../SectionHeader";

const InvestingSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa-solid fa-user"></i>}
        title="About Me"
        linkText="Resume"
        linkHref="https://drive.google.com/file/d/1m3yaj3J1i1jz8Rvz5YloPzSGvMADxwfT/view?usp=sharing"
      />
      <div className="text-sm text-muted-foreground space-y-3">
        <p>
          I'm a sophomore at{" "}
          <a href="https://www.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="link">
            UC Berkeley
          </a>{" "}
          studying{" "}
          <a href="https://data.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="link">
            Data Science
          </a>{" "}
          and{" "}
          <a href="https://math.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="link">
            Applied Mathematics
          </a>{" "}
          with a minor in{" "}
          <a href="https://eecs.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="link">
            Computer Science
          </a>
          . I specialize in computer vision and natural language processing, with experience building vision-language model pipelines, OCR optimization systems, and hybrid NLP architectures. I'm also interested in retrieval-augmented systems, reinforcement learning, and diffusion models, particularly where these intersect with alignment and model assessment.
        </p>
        <p>
          Currently, I'm building{" "}
          <a href="https://github.com/avaneeshjoshi/Balatro-RL" target="_blank" rel="noopener noreferrer" className="link">
            Balatro-RL
          </a>
          , a reinforcement learning agent that utilizes{" "}
          <a href="https://openai.com/research/openai-baselines-ppo" target="_blank" rel="noopener noreferrer" className="link">
            Proximal Policy Optimization
          </a>{" "}
          to play the critically acclaimed roguelike{" "}
          <a href="https://store.steampowered.com/app/2379780/Balatro/" target="_blank" rel="noopener noreferrer" className="link">
            Balatro
          </a>
          .
        </p>
        <p>
          Beyond ML, I'm drawn to financial markets, mathematics, and video games. I love work that keeps me up at night and makes my brain feel alive. I also paint (acrylics and digital), cook (I take my time but always make sure I serve perfection), play badminton (formerly competitive), and like going on nightly drives where I get out and record things around me for filmmaking.
        </p>
        <p>
          I'm a creative personality at heart who found a home in machine learning. San Francisco has become the center of my work and community, and I'm excited to keep building here.
        </p>
        <p>
          Email me at{" "}
          <a href="mailto:avaneeshjoshi@berkeley.edu" className="link">
            avaneeshjoshi [at] berkeley.edu
          </a>{" "}
          if you want to reach out about opportunities in ML engineering, research, or anything interesting.
        </p>
      </div>
    </section>
  );
};

export default InvestingSection;
