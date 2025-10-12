import { MoviesList } from "@/interfaces/MoviesList";
import { getAllFilmes } from "@/services/filmes";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query = "" } = await searchParams;
  const { movies, error } = await getAllFilmes({ query });

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
        <MoviesList initialMovies={movies} query={query} />
      </section>
    </main>
  );
}
