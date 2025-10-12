import Image from "next/image";
import { getFilmeById } from "@/services/filmes";
import Link from "next/link";

export default async function FilmePage({ 
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const { error, movie } = await getFilmeById(id);

  if (error || !movie) {
    return (
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="text-center">
          <p className="text-lg font-semibold">Erro ao carregar filme.</p>
          <p className="text-sm text-muted-foreground">
            Tente novamente mais tarde.
          </p>
          <Link href="/" className="underline ml-1">
            Voltar para a lista de filmes
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
          alt={`${movie.title} backdrop`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto -mt-24 md:-mt-32 relative z-10">
          <div className="md:flex md:items-end md:gap-8">
            <div className="flex-shrink-0 w-48 h-72 md:w-60 md:h-80 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                alt={`${movie.title} Poster`}
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-6 md:pt-0">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
                {movie.title}
              </h1>
              <div className="mt-2 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span>{movie.release_date}</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-base leading-relaxed">{movie.overview}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Detalhes
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex">
                  <p className="w-28 flex-shrink-0 text-slate-500 dark:text-slate-400">
                    Diretor
                  </p>
                  <p>Ricardo Almeida</p>
                </div>
                <div className="flex">
                  <p className="w-28 flex-shrink-0 text-slate-500 dark:text-slate-400">
                    Elenco
                  </p>
                  <p>Isabela Souza, Lucas Martins, Sofia Mendes</p>
                </div>
                <div className="flex">
                  <p className="w-28 flex-shrink-0 text-slate-500 dark:text-slate-400">
                    Gênero
                  </p>
                  {movie.genres.map((genre) => (
                    <span key={genre.id} className="mr-2">
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
