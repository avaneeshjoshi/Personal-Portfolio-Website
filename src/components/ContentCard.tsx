interface ContentCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

const ContentCard = ({ image, title, description, href }: ContentCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="content-card no-underline group"
    >
      <img src={image} alt={title} className="card-image" />
      <div className="flex-1 min-w-0">
        <h3 className="card-title">{title}</h3>
        <p className="card-description line-clamp-2">{description}</p>
      </div>
    </a>
  );
};

export default ContentCard;
