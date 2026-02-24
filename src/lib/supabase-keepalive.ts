/**
 * Pings Supabase REST API so the project is not considered inactive (avoids pause on free tier).
 * Call once on app load; only runs when VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.
 */
export function pingSupabase(): void {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
  if (!url || !key) return;

  const endpoint = `${url.replace(/\/$/, "")}/rest/v1/_keepalive?select=id&limit=1`;
  fetch(endpoint, {
    method: "GET",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      Accept: "application/json",
    },
  }).catch(() => {
    // Ignore errors (e.g. offline); keep-alive is best-effort
  });
}
