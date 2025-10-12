import type { MovieProps, MoviesListProps } from "@/types/Movies";
import { api } from "../api";

export async function getAllFilmes(): Promise<
  { error: null; movies: MoviesListProps } | { error: unknown; movies: null }
> {
  try {
    const resposne = api<MoviesListProps>(
      "/movie/top_rated?language=en-US&page=1",
    );
    const movies = await resposne;
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
    const resposne = api<MovieProps>(`/movie/${id}?language=en-US`);
    const movie = await resposne;
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
