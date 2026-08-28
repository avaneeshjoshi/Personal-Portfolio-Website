import SectionHeader from "../SectionHeader";
import CareerCard from "../CareerCard";
import { career, formatYm, LINKEDIN_URL } from "@/data/experience";

const CareerSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa fa-briefcase" style={{ fontSize: "10px" }}></i>}
        title="Career"
        linkText="LinkedIn"
        linkHref={LINKEDIN_URL}
      />
      <div className="card-grid">
        {career.map((item) => (
          <div key={item.company} className="col-span-full">
            <CareerCard
              logo={item.logo}
              company={item.company}
              title={item.role}
              description={item.summary}
              href={item.href}
              startDate={formatYm(item.start)}
              endDate={item.end ? formatYm(item.end) : undefined}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
