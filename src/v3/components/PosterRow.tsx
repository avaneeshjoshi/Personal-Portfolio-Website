import { useState } from "react";

export interface PosterItem {
  id: string;
  title: string;
  /** Second line in the hover overlay: author, studio, year · rating… */
  subtitle?: string;
  image: string | null;
  href?: string;
}

const Poster = ({ item }: { item: PosterItem }) => {
  const [broken, setBroken] = useState(false);
  const showImage = item.image && !broken;
  const inner = (
    <>
      {showImage ? (
        <img src={item.image!} alt={item.title} loading="lazy" className="w-full h-full object-cover" onError={() => setBroken(true)} />
      ) : (
        <div className="w-full h-full flex items-end p-2 text-[11px] leading-tight text-ink-secondary">{item.title}</div>
      )}
      <span className="v3-poster-overlay" aria-hidden="true">
        <span className="v3-poster-title">{item.title}</span>
        {item.subtitle && <span className="v3-poster-sub">{item.subtitle}</span>}
      </span>
    </>
  );
  const className = "v3-poster relative w-20 sm:w-24 aspect-[2/3] rounded-lg overflow-hidden card-image !w-20 sm:!w-24 !h-auto bg-muted block";
  const label = item.subtitle ? `${item.title} — ${item.subtitle}` : item.title;
  return item.href ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className} aria-label={label}>
      {inner}
    </a>
  ) : (
    <div className={className} tabIndex={0} aria-label={label}>
      {inner}
    </div>
  );
};

const PosterRow = ({ items }: { items: PosterItem[] }) => (
  <div className="v3-poster-row">
    {items.map((item) => (
      <Poster key={item.id} item={item} />
    ))}
  </div>
);

export default PosterRow;
