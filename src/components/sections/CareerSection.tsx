import SectionHeader from "../SectionHeader";
import CareerCard from "../CareerCard";

const careerItems = [
  {
    logo: "https://fmanavehsizxybddlxtr.supabase.co/storage/v1/object/sign/Portfolio/dasion_logo.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTc3ZjM5NS02NTdlLTQyMTMtOWQ4NS0zMTgyNWJlYzJlMzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8vZGFzaW9uX2xvZ28uanBlZyIsImlhdCI6MTc2Nzg4NTQxMywiZXhwIjoxODk0MDI5NDEzfQ.o6E7hanHozkXVUKCAhhLuZcOmyu2pE55qZk5dghiwCg",
    company: "Dasion",
    title: "Machine Learning Engineering Intern",
    description: "End-to-end vision agent workflows with image parsing, matrix encoding, and real-time monitoring",
    href: "https://www.data-to-decision.com/",
    startDate: "Sep 2025",
  },
  {
    logo: "https://fmanavehsizxybddlxtr.supabase.co/storage/v1/object/sign/Portfolio/nyris_logo.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTc3ZjM5NS02NTdlLTQyMTMtOWQ4NS0zMTgyNWJlYzJlMzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8vbnlyaXNfbG9nby5qcGVnIiwiaWF0IjoxNzY3ODg1NDc0LCJleHAiOjE4OTQwMjk0NzR9.APo0IEWo7NHrBE9lxisBheuKJB36O3PZGNOA_fp3zUU",
    company: "nyris GmbH",
    title: "Machine Learning Engineering Intern",
    description: "Large-scale prompt benchmarking and OCR evaluation pipelines for enterprise image-search",
    href: "https://www.nyris.io/",
    startDate: "May 2025",
    endDate: "Aug 2025",
  },
  {
    logo: "https://fmanavehsizxybddlxtr.supabase.co/storage/v1/object/sign/Portfolio/revolaai_logo.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTc3ZjM5NS02NTdlLTQyMTMtOWQ4NS0zMTgyNWJlYzJlMzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8vcmV2b2xhYWlfbG9nby5qcGVnIiwiaWF0IjoxNzY3ODg1NDk2LCJleHAiOjE4OTQwMjk0OTZ9.tZm61DgyK5O4QmK8tAGeyUfY8_PGc_K55oEBNmQ6Y9M",
    company: "Revola AI",
    title: "Software Engineering Intern",
    description: "OAuth scheduling and session-verification pipelines for AI-driven product demos across Zoom/Google Meets",
    href: "https://www.revola.ai/",
    startDate: "Jan 2025",
    endDate: "Apr 2025",
  },
  {
    logo: "https://fmanavehsizxybddlxtr.supabase.co/storage/v1/object/sign/Portfolio/bitwise_logo.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTc3ZjM5NS02NTdlLTQyMTMtOWQ4NS0zMTgyNWJlYzJlMzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8vYml0d2lzZV9sb2dvLmpwZWciLCJpYXQiOjE3NjgzMjI4MDksImV4cCI6MTg5NDQ2NjgwOX0.K5tAB5bAm_ZR1tO_2bu_lwvkLVSypi2hmOfWhHn0txo",
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
