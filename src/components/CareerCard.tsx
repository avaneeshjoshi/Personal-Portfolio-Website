interface CareerCardProps {
  logo: string;
  company: string;
  title: string;
  description: string;
  href: string;
  startDate: string; // Format: "Month Year" e.g., "Jan 2024"
  endDate?: string; // Optional, if not provided, assume current
}

const CareerCard = ({ logo, company, title, description, href, startDate, endDate }: CareerCardProps) => {
  const dateRange = endDate ? `${startDate} - ${endDate}` : `${startDate} - Present`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="content-card no-underline group"
    >
      <img src={logo} alt={company} className="card-image" />
      <div className="flex-1 min-w-0 w-full">
        <div className="mb-1">
          <div className="flex items-center justify-between mb-0.5">
            <h3 className="card-title">{company}</h3>
            <time className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">{dateRange}</time>
          </div>
          <p className="text-xs text-muted-foreground">{title}</p>
        </div>
        <p className="card-description">{description}</p>
      </div>
    </a>
  );
};

export default CareerCard;

