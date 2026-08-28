import { errorResponse, fetchEvents, json } from "../_lib/github";

export async function GET(): Promise<Response> {
  try {
    const { events, working } = await fetchEvents();
    return json({ events, working, generatedAt: new Date().toISOString() }, 200, "public, max-age=0, s-maxage=600, stale-while-revalidate=3600");
  } catch (err) {
    return errorResponse(err);
  }
}
