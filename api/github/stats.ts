import { errorResponse, fetchStats, json, parseRepoParam } from "../_lib/github.js";

export async function GET(request: Request): Promise<Response> {
  try {
    const repos = parseRepoParam(new URL(request.url).searchParams.get("repos"));
    const body = await fetchStats(repos);
    return json(body, 200, "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
  } catch (err) {
    return errorResponse(err);
  }
}
