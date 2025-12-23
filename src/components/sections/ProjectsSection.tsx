import SectionHeader from "../SectionHeader";
import ContentCard from "../ContentCard";

const projectItems = [
  {
    image: "https://debarghyadas.com/img/landing/proj/cv.webp",
    title: "Deedy Resumé",
    description: "Open-source two column minimalist resume template in Latex with ~5000 Github stars and 100k uses on Overleaf.",
    href: "https://github.com/deedy/Deedy-Resume",
  },
  {
    image: "https://debarghyadas.com/img/landing/proj/wordle.webp",
    title: "Wordle Solver",
    description: "Built a solver for Wordle that boasts 100% accuracy and an average attempts of 3.65 on all 2300 candidate words.",
    href: "https://github.com/deedy/wordle-solver",
  },
  {
    image: "https://debarghyadas.com/img/landing/proj/iit.webp",
    title: "IIT Alumni Tracker",
    description: "Tracking outcomes for the top 250 JEE rankers from 2009-2016, the premier engineering college in India.",
    href: "https://indianexpress.com/article/education/about-half-of-iitians-end-up-in-the-us-prefer-working-with-google-amazon-jee-advanced-2023-jeemain-8668863/",
  },
  {
    image: "https://debarghyadas.com/img/landing/proj/ivy.webp",
    title: "Grad School Admission Stats",
    description: "Mining 372k datapoints from GradCafe to understand grad school admission stats by GPA and GRE.",
    href: "https://debarghyadas.com/writes/the-grad-school-statistics-we-never-had/",
  },
  {
    image: "https://debarghyadas.com/img/landing/proj/bollywood.webp",
    title: "Bollywood Playlist",
    description: "A playlist maintained over a decade with over 1500 songs and 7500 likes on Spotify.",
    href: "https://open.spotify.com/playlist/4jlbTgG7gqClTD2MjpUDqI",
  },
  {
    image: "https://debarghyadas.com/img/landing/proj/cricket.webp",
    title: "Fantasy Cricket Trading",
    description: "Using binary integer programming and financial risk models to achieve top 2000 out of 400k in the IPL 2014.",
    href: "https://debarghyadas.com/files/IPLpaper.pdf",
  },
];

const ProjectsSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa fa-code" style={{ fontSize: '10px' }}></i>}
        title="Projects"
        linkText="Github"
        linkHref="https://github.com/deedy"
      />
      <div className="card-grid">
        {projectItems.map((item) => (
          <ContentCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
