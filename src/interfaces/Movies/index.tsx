import { Suspense } from "react";
import Loading from "@/components/Loading";
import { MoviesList } from "./components/MoviesList";

export default async function Movies({ query }: { query: string }) {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
      <section className="flex flex-col gap-8">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Filmes
        </h1>
        <Suspense fallback={<Loading />}>
          <MoviesList query={query} />
        </Suspense>
      </section>
    </main>
  );
}
