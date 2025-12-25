import SectionHeader from "../SectionHeader";
import ContentCard from "../ContentCard";

const projectItems = [
  {
    image: "https://cdn2.steamgriddb.com/icon/066e25a0712b306a9b95230f6ec4a051.ico",
    title: "Balatro-RL",
    description: "RLHF agent for Balatro using PPO, with real-time state extraction via LÖVE2D engine",
    href: "https://github.com/avaneeshjoshi/Balatro-RL",
  },
  {
    image: "https://fmanavehsizxybddlxtr.supabase.co/storage/v1/object/sign/Axlerate/Group%208.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTc3ZjM5NS02NTdlLTQyMTMtOWQ4NS0zMTgyNWJlYzJlMzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBeGxlcmF0ZS9Hcm91cCA4LnBuZyIsImlhdCI6MTc2NjQ5MTczMCwiZXhwIjoxODkyNjM1NzMwfQ.DHWdPH0idNlC4bJXA2lDMCMRko8aurg-n_waP5MM-3M",
    title: "Axlerate",
    description: "Unified math/ML workspace with context-aware logic retrieval via Graph RAG",
    href: "https://github.com/avaneeshjoshi/Axlerate",
  },
  {
    image: "https://w7.pngwing.com/pngs/904/441/png-transparent-computer-icons-waiter-meal-waiter-service-public-relations-logo.png",
    title: "Host AI",
    description: "Restaurant table management system using YOLOv8 and GPT-4V with real-time floor plan processing via Flask.",
    href: "https://github.com/avaneeshjoshi/PocketHost",
  },
  {
    image: "https://www.iconpacks.net/icons/2/free-tree-icon-1578-thumb.png",
    title: "Forage",
    description: "Crop recommendation platform using XGBoost with climate and botanical analysis via Flask-PostgreSQL",
    href: "https://github.com/avaneeshjoshi/Forage-New",
  },
];

const ProjectsSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa fa-code" style={{ fontSize: '10px' }}></i>}
        title="Projects"
        linkText="Github"
        linkHref="https://github.com/avaneeshjoshi"
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
