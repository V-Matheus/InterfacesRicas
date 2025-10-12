import { Movie } from "@/interfaces/Movie";
import { getFilmeById } from "@/services/filmes";
import Link from "next/link";

export default async function FilmePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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

  return <Movie movie={movie} />;
}
