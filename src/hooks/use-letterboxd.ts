import { useQuery } from "@tanstack/react-query";
import { fetchLetterboxd } from "@/lib/letterboxd/client";

export function useLetterboxd() {
  return useQuery({
    queryKey: ["letterboxd"],
    queryFn: fetchLetterboxd,
    staleTime: 60 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
}
