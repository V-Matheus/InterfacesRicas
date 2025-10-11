import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const movies = [
    {
      id: "a-jornada",
      title: "A Jornada",
      year: "2022",
      poster: "",
    },
    {
      id: "segredo-da-floresta",
      title: "O Segredo da Floresta",
      year: "2021",
      poster: "",
    },
    {
      id: "alem-do-horizonte",
      title: "Além do Horizonte",
      year: "2023",
      poster: "",
    },
  ];

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <InputGroup>
            <InputGroupInput placeholder="Buscar filme pelo título" />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">X results</InputGroupAddon>
          </InputGroup>

          <div className="flex flex-wrap gap-3">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Gênero" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Terror</SelectItem>
                <SelectItem value="dark">Suspense</SelectItem>
                <SelectItem value="system">Ficção</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Classificação" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Terror</SelectItem>
                <SelectItem value="dark">Suspense</SelectItem>
                <SelectItem value="system">Ficção</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {movies.map((movie) => (
            <Link
              href={`/${movie.id}`}
              key={movie.id}
              className="cursor-pointer group flex flex-col gap-2"
              aria-labelledby={`movie-${movie.id}-title`}
            >
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={movie.poster}
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
                  {movie.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
