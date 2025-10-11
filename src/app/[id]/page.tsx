"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function FilmePage({ params }: { params: { id: string } }) {
  const { id } = params;

  const movie = {
    id,
    title: "A Jornada do Herói",
    year: "2023",
    genres: "Aventura, Fantasia",
    duration: "2h 15min",
    poster: "",
    backdrop: "",
    rating: 4.5,
    reviews: 1250,
  };

  return (
    <main className="flex-1">
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src={movie.backdrop}
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
                src={movie.poster}
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
                <span>{movie.year}</span>
                <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                <span>{movie.genres}</span>
                <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                <span>{movie.duration}</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-base leading-relaxed">
              Em um mundo de fantasia, um jovem camponês embarca em uma jornada
              épica para salvar seu reino de uma força maligna. Ele deve
              enfrentar desafios, fazer aliados e descobrir seu verdadeiro
              potencial para cumprir seu destino.
            </p>
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
                  <p>{movie.genres}</p>
                </div>
                <div className="flex">
                  <p className="w-28 flex-shrink-0 text-slate-500 dark:text-slate-400">
                    Ano
                  </p>
                  <p>{movie.year}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Avaliações
              </h3>
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <p className="text-5xl font-bold text-slate-900 dark:text-white">
                    {movie.rating}
                  </p>
                  <div className="flex text-primary">
                    <Star
                      fill="oklch(76.9% 0.188 70.08)"
                      color="oklch(76.9% 0.188 70.08)"
                    />
                    <Star
                      fill="oklch(76.9% 0.188 70.08)"
                      color="oklch(76.9% 0.188 70.08)"
                    />
                    <Star
                      fill="oklch(76.9% 0.188 70.08)"
                      color="oklch(76.9% 0.188 70.08)"
                    />

                    <Star
                      fill="oklch(76.9% 0.188 70.08)"
                      color="oklch(76.9% 0.188 70.08)"
                    />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {movie.reviews} reviews
                  </p>
                </div>
                <div className="flex-1 space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <p className="text-slate-500 dark:text-slate-400">5</p>
                    <div className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: "40%" }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-slate-500 dark:text-slate-400">4</p>
                    <div className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: "30%" }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-slate-500 dark:text-slate-400">3</p>
                    <div className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: "15%" }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-slate-500 dark:text-slate-400">2</p>
                    <div className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: "10%" }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-slate-500 dark:text-slate-400">1</p>
                    <div className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: "5%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
