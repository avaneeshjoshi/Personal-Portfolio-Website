import SectionHeader from "../SectionHeader";
import CompanyCard from "../CompanyCard";

const educationItems = [
  {
    logo: "https://brand.berkeley.edu/wp-content/uploads/2024/08/cal-script-thumbnail-2048x1311.png",
    company: "University of California, Berkeley",
    description: "Bachelors in Data Science [DE: Machine Learning], and Applied Mathematics. Expected Graduation: 2028.",
    href: "https://www.berkeley.edu/",
  },
];

const EducationSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa fa-graduation-cap" style={{ fontSize: '10px' }}></i>}
        title="Education"
        linkText="LinkedIn"
        linkHref="https://www.linkedin.com/in/avaneesh-joshi/"
      />
      <div className="card-grid">
        {educationItems.map((item) => (
          /* This wrapper ensures only education spans both columns */
          <div key={item.company} className="col-span-full">
            <CompanyCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
