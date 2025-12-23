import SectionHeader from "../SectionHeader";
import CompanyCard from "../CompanyCard";

const careerItems = [
  {
    logo: "https://debarghyadas.com/img/landing/work/menlo.webp",
    company: "Menlo Ventures",
    description: "Venture investing in AI and Infra in Seed to Series B with Tim Tully, Joff, Kraning, Murphy and more.",
    href: "https://menlovc.com/team/deedy-das/",
  },
  {
    logo: "https://debarghyadas.com/img/landing/work/glean.webp",
    company: "Glean",
    description: "Founding team with Arvind Jain. Started Glean Assistant. Backed by Kleiner, Sequoia and more. $7B valuation.",
    href: "https://aibusiness.com/responsible-ai/operationalizing-generative-ai-for-the-enterprise",
  },
  {
    logo: "https://debarghyadas.com/img/landing/work/google.webp",
    company: "Google",
    description: "Google Search — query understanding and sports search. Search for [cricket] to see it. NYC, Tel Aviv and Bangalore.",
    href: "https://www.sportingnews.com/in/cricket/news/2-chance-victory-google%E2%80%99s-win-predictor-feature-glenn-maxwell-mumbai-blitzkrieg/6206018c80722fae9629f240",
  },
  {
    logo: "https://debarghyadas.com/img/landing/work/meta.webp",
    company: "Facebook",
    description: "Search and machine learning in New York.",
    href: "https://facebook.com/",
  },
  {
    logo: "https://debarghyadas.com/img/landing/work/kp.webp",
    company: "Kleiner Perkins [Part-time]",
    description: "Reviewed 1000s of KP Fellowship Engineering and Product applications.",
    href: "https://www.kleinerperkins.com/",
  },
  {
    logo: "https://debarghyadas.com/img/landing/work/iitb.webp",
    company: "IIT Bombay [Part-time]",
    description: "Guest lecturer for several courses here and other US and Indian colleges.",
    href: "https://www.iitb.ac.in/",
  },
];

const CareerSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa fa-briefcase" style={{ fontSize: '10px' }}></i>}
        title="Career"
        linkText="View all"
        linkHref="https://www.linkedin.com/in/debarghyadas/"
      />
      <div className="card-grid">
        {careerItems.map((item) => (
          <CompanyCard key={item.company} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
