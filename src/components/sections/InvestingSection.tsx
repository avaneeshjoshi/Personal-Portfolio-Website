import SectionHeader from "../SectionHeader";

const InvestingSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa-solid fa-user"></i>}
        title="About Me"
        linkText="Email"
        linkHref="mailto:avaneeshjoshi@berkeley.edu"
      />
      <div className="text-sm text-muted-foreground space-y-3">
        <p>
          I'm a Partner at{" "}
          <a href="https://menlovc.com/team/deedy-das/" className="link">Menlo Ventures</a> where I invest in AI, Saas and Infra startups in the seed, A and B stage. We invest out of our{" "}
          <a href="https://techcrunch.com/2023/11/16/menlo-ventures-closes-on-1-35b-in-new-capital-targets-investments-in-ai-startups/" className="link">
            $1.4B 16th fund
          </a>{" "}
          and manage $8B+ in assets. I work with{" "}
          <a href="https://www.anthropic.com/" className="link">Anthropic</a>,{" "}
          <a href="https://www.pinecone.io/" className="link">Pinecone</a> and{" "}
          <a href="https://www.suno.com/" className="link">Suno</a> and help run the $100M{" "}
          <a href="https://menlovc.com/anthology-fund/" className="link">Anthology Fund</a> with Anthropic.
        </p>
        <p>
          I've helped lead investments into{" "}
          <a href="https://www.globenewswire.com/news-release/2025/06/25/3105125/0/en/OpenRouter-raises-40-million-to-scale-up-multi-model-inference-for-enterprise.html" className="link">
            OpenRouter
          </a>
          , <a href="https://menlovc.com/perspective/leading-goodfires-50m-series-a-to-interpret-how-ai-models-think/" className="link">Goodfire</a>,{" "}
          <a href="https://techcrunch.com/2025/06/24/wispr-flow-raises-30m-from-menlo-ventures-for-its-ai-powered-dictation-app/" className="link">Wispr Flow</a> and{" "}
          <a href="https://techcrunch.com/2025/11/06/inception-raises-50-million-to-build-diffusion-models-for-code-and-text/" className="link">Inception Labs</a>.
          Angel investor in <a href="https://perplexity.ai/" className="link">Perplexity</a>,{" "}
          <a href="https://cartesia.ai/" className="link">Cartesia</a> and{" "}
          <a href="https://www.withfulcrum.com/" className="link">Fulcrum</a>.
        </p>
        <p>
          Email me at{" "}
          <a href="mailto:avaneeshjoshi@berkeley.edu" className="link">avaneeshjoshi [at] berkeley.edu</a> if you're a founder who wants to chat about fundraising or advice. Message me at{" "}
          <a href="https://superdm.com/deedy" className="link">superdm.com/deedy</a> for startup jobs, speaking engagements and anything else.
        </p>
      </div>
    </section>
  );
};

export default InvestingSection;
