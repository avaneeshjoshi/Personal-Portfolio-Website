import SubSection from "./SubSection";
import { gallery } from "@/data/gallery";
import { v3Content } from "../content";

const GalleryReel = () => {
  const items = gallery;
  // ~10s per image keeps the pace readable regardless of count.
  const duration = `${Math.max(30, items.length * 10)}s`;

  return (
    <SubSection title="Art & Photos">
      <p className="bio mb-4">{v3Content.gallery}</p>
      {items.length === 0 ? (
        <p className="bio italic text-sm">
          Reel coming soon.
          {import.meta.env.DEV && (
            <span className="block not-italic text-xs text-ink-muted mt-1">
              (dev) drop images into <code>public/gallery/</code> and list them in <code>src/data/gallery.ts</code>.
            </span>
          )}
        </p>
      ) : (
        <div className="v3-reel" style={{ "--v3-reel-duration": duration } as React.CSSProperties}>
          <div className="v3-reel-track">
            {[...items, ...items].map((item, i) => (
              <figure
                key={`${item.src}-${i}`}
                className="relative group flex-none"
                aria-hidden={i >= items.length}
                tabIndex={i < items.length ? 0 : -1}
              >
                <img
                  src={item.src}
                  alt={item.caption ?? ""}
                  loading="lazy"
                  className="h-40 w-auto rounded-lg card-image !w-auto !h-40"
                />
                {item.caption && (
                  <figcaption className="absolute inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-black/70 to-transparent px-2 pb-1.5 pt-6 text-[11px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}
    </SubSection>
  );
};

export default GalleryReel;
