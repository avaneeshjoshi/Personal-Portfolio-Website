import SectionHeader from "../SectionHeader";
import CareerCard from "../CareerCard";

const careerItems = [
  {
    logo: "https://media.licdn.com/dms/image/v2/C560BAQE4zbXNr2R6ng/company-logo_200_200/company-logo_200_200/0/1635873578811/dasion_logo?e=1767830400&v=beta&t=ZCG8DEkObjiU9b1G6VX1SRnTARyWq8I7DPx5Xz_qQrA",
    company: "Dasion",
    title: "Machine Learning Engineering Intern",
    description: "End-to-end vision agent workflows with image parsing, matrix encoding, and real-time monitoring",
    href: "https://www.data-to-decision.com/",
    startDate: "Sep 2025",
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGyQ7lqORVCaw/company-logo_200_200/company-logo_200_200/0/1630507101690/nyris_logo?e=1767830400&v=beta&t=-dD4hUtL5KNTjQLM5dcgZVNdIL8jnQ6fThw9oZ2AUn8",
    company: "nyris GmbH",
    title: "Machine Learning Engineering Intern",
    description: "Large-scale prompt benchmarking and OCR evaluation pipelines for enterprise image-search",
    href: "https://www.nyris.io/",
    startDate: "May 2025",
    endDate: "Aug 2025",
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQG753JpYrclFA/company-logo_200_200/B4DZUwHEj5GkAI-/0/1740268915628/revolaai_logo?e=1767830400&v=beta&t=qr6Aj4DC9APnK0xsH_BQN0HjaSbAEAoUJ0yIDVmib6w",
    company: "Revola AI",
    title: "Software Engineering Intern",
    description: "OAuth scheduling and session-verification pipelines for AI-driven product demos across Zoom/Google Meets",
    href: "https://www.revola.ai/",
    startDate: "Jan 2025",
    endDate: "Apr 2025",
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFDQdep839VZg/company-logo_200_200/company-logo_200_200/0/1631304863996?e=1767830400&v=beta&t=XLb7y-upM_TKaRlibgiaLobMyGmzhic8D-q-Gx55p4U",
    company: "bitWise Academy",
    title: "Machine Learning Engineering Intern",
    description: "BERT-NLP + HMM for adaptive quiz optimization; motion+content GAN research for interactive educational sims",
    href: "https://bitwiseacademy.com/",
    startDate: "May 2024",
    endDate: "Aug 2024",
  },
];

const CareerSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa fa-briefcase" style={{ fontSize: '10px' }}></i>}
        title="Career"
        linkText="LinkedIn"
        linkHref="https://www.linkedin.com/in/avaneesh-joshi/"
      />
      <div className="card-grid">
        {careerItems.map((item) => (
          /* This wrapper ensures each career entry spans both columns */
          <div key={item.company} className="col-span-full">
            <CareerCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
