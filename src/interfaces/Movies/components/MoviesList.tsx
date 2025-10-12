import Image from "next/image";
import Link from "next/link";

import { getAllFilmes } from "@/services/filmes";

import { SearchInput } from "@/components/SearchInput";

export async function MoviesList({ query }: { query: string }) {
  const { movies, error } = await getAllFilmes(query);

  if (error || !movies) {
    return (
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="text-center">
          <p className="text-lg font-semibold">Erro ao carregar filmes.</p>
          <p className="text-sm text-muted-foreground">
            Tente novamente mais tarde.
          </p>
        </div>
      </main>
    );
  }

  return (
    <>
      <SearchInput totalResults={movies.total_results} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies.results.map((movie) => (
          <Link
            href={`/${movie.id}`}
            key={movie.id}
            className="cursor-pointer group flex flex-col gap-2"
            aria-labelledby={`movie-${movie.id}-title`}
          >
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg">
              <Image
                src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                alt={`Poster do filme ${movie.title}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div>
              <h3
                id={`movie-${movie.id}-title`}
                className="text-base font-bold text-black dark:text-white truncate"
              >
                {movie.title}
              </h3>
              <p className="text-sm text-black/60 dark:text-white/60">
                {movie.release_date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
