import { FilmeList } from "@/types/Filme";
import { api } from "../api";

export async function getAllFilmes(): Promise<
  { error: null; movies: FilmeList } | { error: unknown; movies: null }
> {
  try {
    const resposne = api<FilmeList>("/movie/top_rated?language=en-US&page=1");
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
