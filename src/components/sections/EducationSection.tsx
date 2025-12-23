import SectionHeader from "../SectionHeader";
import CompanyCard from "../CompanyCard";

const educationItems = [
  {
    logo: "https://debarghyadas.com/img/landing/work/cornell.webp",
    company: "University of California, Berkeley",
    description: "Top 10% of class. Bachelors and masters in Computer Science in 3.5yrs. Published research in robotics and linguistics.",
    href: "https://www.berkeley.edu/",
  },
];

const EducationSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa fa-graduation-cap" style={{ fontSize: '10px' }}></i>}
        title="Education"
        linkText="View all"
        linkHref="https://www.linkedin.com/in/avaneesh-joshi/"
      />
      <div className="card-grid">
        {educationItems.map((item) => (
          <CompanyCard key={item.company} {...item} />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
