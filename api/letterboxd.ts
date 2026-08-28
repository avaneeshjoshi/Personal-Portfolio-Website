import { errorResponse, HttpError, json } from "./_lib/http.js";
import type { LetterboxdFilm, LetterboxdResponse } from "../src/lib/letterboxd/types";

const USERNAME = "avxneeshjoshi";
/** Six most recent logs; older ones rotate out as new films are logged. */
const MAX_FILMS = 6;

const tag = (block: string, name: string): string | null => {
  const m = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`));
  return m ? m[1].trim() : null;
};

export function parseFeed(xml: string): LetterboxdFilm[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  const films: LetterboxdFilm[] = [];
  for (const item of items) {
    const title = tag(item, "letterboxd:filmTitle");
    if (!title) continue; // list entries / reviews without a film are skipped
    const year = tag(item, "letterboxd:filmYear");
    const rating = tag(item, "letterboxd:memberRating");
    const poster = item.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? null;
    films.push({
      id: tag(item, "guid") ?? `${title}-${year}`,
      title,
      year: year ? Number(year) : null,
      rating: rating ? Number(rating) : null,
      liked: tag(item, "letterboxd:memberLike") === "Yes",
      rewatch: tag(item, "letterboxd:rewatch") === "Yes",
      watchedDate: tag(item, "letterboxd:watchedDate"),
      poster,
      url: tag(item, "link") ?? `https://letterboxd.com/${USERNAME}/`,
    });
  }
  return films
    .sort((a, b) => (b.watchedDate ?? "").localeCompare(a.watchedDate ?? ""))
    .slice(0, MAX_FILMS);
}

export async function GET(): Promise<Response> {
  try {
    const profileUrl = `https://letterboxd.com/${USERNAME}/`;
    const res = await fetch(`${profileUrl}rss/`, {
      headers: { "User-Agent": "avaneeshjoshi-portfolio", Accept: "application/rss+xml, application/xml" },
    });
    if (!res.ok) throw new HttpError(502, `Letterboxd responded ${res.status}`);
    const body: LetterboxdResponse = {
      username: USERNAME,
      profileUrl,
      films: parseFeed(await res.text()),
      generatedAt: new Date().toISOString(),
    };
    return json(body, 200, "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
  } catch (err) {
    return errorResponse(err);
  }
}
