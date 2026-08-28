import SectionHeader from "../SectionHeader";
import CompanyCard from "../CompanyCard";
import { education, LINKEDIN_URL } from "@/data/experience";

const EducationSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa fa-graduation-cap" style={{ fontSize: "10px" }}></i>}
        title="Education"
        linkText="LinkedIn"
        linkHref={LINKEDIN_URL}
      />
      <div className="card-grid">
        {education.map((item) => (
          <div key={item.company} className="col-span-full">
            <CompanyCard
              logo={item.logo}
              company={item.company}
              description="Bachelors in Data Science [DE: Machine Learning], and Applied Mathematics. Expected Graduation: 2028."
              href={item.href}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
