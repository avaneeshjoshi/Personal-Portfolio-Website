interface CompanyCardProps {
  logo: string;
  company: string;
  description: string;
  href: string;
}

const CompanyCard = ({ logo, company, description, href }: CompanyCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="content-card no-underline group"
    >
      <img src={logo} alt={company} className="card-image" />
      <div className="flex-1 min-w-0">
        <h3 className="card-title">{company}</h3>
        <p className="card-description line-clamp-2">{description}</p>
      </div>
    </a>
  );
};

export default CompanyCard;
