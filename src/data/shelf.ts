/**
 * Games and books, maintained by hand.
 * Games: give a Steam app id (from the store URL) and the cover is pulled from Steam's CDN;
 * for non-Steam games set `cover` to any image URL. Books: give an ISBN-13 for an Open Library cover,
 * or set `cover` directly.
 */

export type ShelfStatus = "playing" | "reading" | "finished" | "shelved";

export interface GameEntry {
  title: string;
  studio?: string;
  steamAppId?: number;
  cover?: string;
  note?: string;
  status?: ShelfStatus;
  href?: string;
}

export interface BookEntry {
  title: string;
  author: string;
  isbn?: string;
  /** Open Library cover id (from openlibrary.org search `cover_i`). */
  coverId?: number;
  cover?: string;
  note?: string;
  status?: ShelfStatus;
  href?: string;
}

export const games: GameEntry[] = [
  {
    title: "Elden Ring",
    studio: "FromSoftware",
    steamAppId: 1245620,
    status: "finished",
  },
  {
    title: "Hades",
    studio: "Supergiant Games",
    steamAppId: 1145360,
    status: "finished",
  },
  {
    title: "Hollow Knight: Silksong",
    studio: "Team Cherry",
    steamAppId: 1030300,
    status: "playing",
  },
  {
    title: "Mario Kart World",
    studio: "Nintendo",
    cover: "/covers/mario-kart-world.png",
    href: "https://www.nintendo.com/us/store/products/mario-kart-world-switch-2/",
    status: "playing",
  },
  {
    title: "ONTOS",
    studio: "Frictional Games",
    cover: "/covers/ontos.jpg",
    href: "https://store.steampowered.com/app/2924520/ONTOS/",
    status: "playing",
  },
  {
    title: "SOMA",
    studio: "Frictional Games",
    steamAppId: 282140,
    status: "finished",
  },
];

export const books: BookEntry[] = [
  {
    title: "AI Engineering",
    author: "Chip Huyen",
    isbn: "9781098166304",
    status: "reading",
    note: "Building applications with foundation models: prompting, RAG, fine-tuning, evaluation.",
  },
  {
    title: "At the Mountains of Madness",
    author: "H. P. Lovecraft",
    coverId: 6610039,
    status: "finished",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "9780735211292",
    status: "finished",
  },
  {
    title: "The King in Yellow",
    author: "Robert W. Chambers",
    coverId: 4245882,
    status: "finished",
    note: "Have you found the Yellow Sign?",
  },
];

export const gameCover = (g: GameEntry): string | null =>
  g.cover ?? (g.steamAppId ? `https://cdn.cloudflare.steamstatic.com/steam/apps/${g.steamAppId}/library_600x900.jpg` : null);

export const gameHref = (g: GameEntry): string | undefined =>
  g.href ?? (g.steamAppId ? `https://store.steampowered.com/app/${g.steamAppId}/` : undefined);

export const bookCover = (b: BookEntry): string | null =>
  b.cover ??
  (b.coverId ? `https://covers.openlibrary.org/b/id/${b.coverId}-L.jpg` : null) ??
  (b.isbn ? `https://covers.openlibrary.org/b/isbn/${b.isbn}-L.jpg` : null);

export const bookHref = (b: BookEntry): string | undefined =>
  b.href ??
  (b.isbn ? `https://openlibrary.org/isbn/${b.isbn}` : `https://openlibrary.org/search?q=${encodeURIComponent(b.title)}`);
