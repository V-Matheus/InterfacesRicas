import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { getAllFilmes } from "@/services/filmes";

export default async function Home() {
  const { movies, error } = await getAllFilmes();

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
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
      <section className="flex flex-col gap-8">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Filmes
        </h1>
        <div className="flex flex-col gap-4">
          <InputGroup>
            <InputGroupInput placeholder="Buscar filme pelo título" />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              {movies?.total_results} results
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {movies?.results.map((movie) => (
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
      </section>
    </main>
  );
}
