import { formatDistanceToNowStrict } from "date-fns";
import SubSection from "./SubSection";
import { useLetterboxd } from "@/hooks/use-letterboxd";
import { v3Content } from "../content";
import PosterRow, { type PosterItem } from "./PosterRow";

const stars = (r: number) => "★".repeat(Math.floor(r)) + (r % 1 ? "½" : "");

const MoviesSection = () => {
  const { data, isPending, error } = useLetterboxd();
  const films = data?.films ?? [];

  const items: PosterItem[] = films.map((f) => {
    const parts = [
      f.year ? String(f.year) : null,
      f.rating ? stars(f.rating) : f.liked ? "♥" : null,
      !f.rating && f.watchedDate ? formatDistanceToNowStrict(new Date(f.watchedDate), { addSuffix: true }) : null,
    ].filter(Boolean);
    return { id: f.id, title: f.title, subtitle: parts.join(" · ") || undefined, image: f.poster, href: f.url };
  });

  return (
    <SubSection title="Movies" linkText="Letterboxd" linkHref={v3Content.letterboxdUrl}>
      <p className="bio mb-4">{v3Content.movies}</p>
      {isPending ? (
        <div className="v3-poster-row">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-24 sm:w-28 aspect-[2/3] rounded-lg bg-muted animate-pulse" />
          ))}
        </div>
      ) : items.length > 0 ? (
        <PosterRow items={items} />
      ) : (
        <p className="bio italic text-sm">
          {error ? "Couldn't reach Letterboxd right now." : "Nothing logged yet —"}{" "}
          <a href={v3Content.letterboxdUrl} target="_blank" rel="noopener noreferrer" className="link">
            follow along on Letterboxd
          </a>
          .
        </p>
      )}
    </SubSection>
  );
};

export default MoviesSection;
