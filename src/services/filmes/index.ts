import type { MovieProps, MoviesListProps } from "@/types/Movies";
import { api } from "../api";

export async function getAllFilmes(
  query?: string,
): Promise<
  { error: null; movies: MoviesListProps } | { error: unknown; movies: null }
> {
  try {
    const url =
      query && query.trim() !== ""
        ? `/search/movie?query=${encodeURIComponent(query.trim())}`
        : "/movie/top_rated?language=en-US&page=1";

    const movies = await api<MoviesListProps>(url);

    return {
      error: null,
      movies,
    };
  } catch (error: unknown) {
    return {
      error,
      movies: null,
    };
  }
}

export async function getFilmeById(id: string): Promise<
  | {
      error: null;
      movie: MovieProps;
    }
  | {
      error: unknown;
      movie: null;
    }
> {
  try {
    const movie = await api<MovieProps>(`/movie/${id}?language=en-US`);
    return {
      error: null,
      movie,
    };
  } catch (error: unknown) {
    return {
      error,
      movie: null,
    };
  }
}
