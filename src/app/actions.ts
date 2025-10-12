"use server";

import { getAllFilmes } from "@/services/filmes";
import type { MovieProps } from "@/types/Movies";

export async function loadMoreMovies(query: string, page: number): Promise<MovieProps[]> {
  const { movies, error } = await getAllFilmes({ query, page });

  if (error || !movies) {
    return []; 
  }

  return movies.results;
}