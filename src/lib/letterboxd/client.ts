import type { LetterboxdResponse } from "./types";

export async function fetchLetterboxd(): Promise<LetterboxdResponse> {
  const res = await fetch("/api/letterboxd", { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`/api/letterboxd → ${res.status}`);
  return res.json();
}
