import SectionHeader from "../SectionHeader";

const GithubSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa-brands fa-github"></i>}
        title="GitHub"
        linkText="Profile"
        linkHref="https://github.com/deedy"
      />
      <p className="text-sm text-muted-foreground">
        Explore my open-source projects, experiments, and contributions on GitHub.
      </p>
    </section>
  );
};

export default GithubSection;

