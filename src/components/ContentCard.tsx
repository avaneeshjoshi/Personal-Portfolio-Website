import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface ContentCardProps {
  image?: string;
  title: string;
  description: string;
  href: string;
  /** When true, `href` is an in-app route and opens in the same tab. */
  internal?: boolean;
  /** Optional metadata line rendered under the description (e.g. stars · language). */
  meta?: ReactNode;
}

const FALLBACK_IMAGE = "/placeholder.svg";

const ContentCard = ({ image, title, description, href, internal, meta }: ContentCardProps) => {
  const [src, setSrc] = useState(image || FALLBACK_IMAGE);
  const className = "content-card no-underline group";
  const body = (
    <>
      <img src={src} alt={title} className="card-image" onError={() => setSrc(FALLBACK_IMAGE)} />
      <div className="flex-1 min-w-0">
        <h3 className="card-title">{title}</h3>
        <p className="card-description line-clamp-2">{description}</p>
        {meta && <div className="card-meta">{meta}</div>}
      </div>
    </>
  );
  return internal ? (
    <Link to={href} className={className}>
      {body}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  );
};

export default ContentCard;
