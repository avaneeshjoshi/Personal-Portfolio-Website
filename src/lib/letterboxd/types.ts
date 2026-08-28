export interface LetterboxdFilm {
  id: string;
  title: string;
  year: number | null;
  /** 0.5–5 in half steps, or null if unrated. */
  rating: number | null;
  liked: boolean;
  rewatch: boolean;
  /** ISO date (YYYY-MM-DD) the film was watched. */
  watchedDate: string | null;
  poster: string | null;
  url: string;
}

export interface LetterboxdResponse {
  username: string;
  profileUrl: string;
  films: LetterboxdFilm[];
  generatedAt: string;
}
