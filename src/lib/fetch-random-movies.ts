import { MovieData } from "@/types";

export async function fetchRandomMovies(): Promise<MovieData[]> {
  const url = "https://onebite-cinema-api-three.vercel.app//movie/random";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
