"use client";
import Image from "next/image";
import Link from "next/link";

import { SearchInput } from "@/components/SearchInput";
import { useEffect, useRef, useState } from "react";
import { MovieProps, MoviesListProps } from "@/types/Movies";
import Loading from "@/components/Loading";
import { useInView } from "react-intersection-observer";
import { loadMoreMovies } from "@/app/actions";

export function MoviesList({
  initialMovies,
  query,
}: {
  initialMovies: MoviesListProps;
  query: string;
}) {
  const [movies, setMovies] = useState<MovieProps[]>(
    initialMovies?.results || [],
  );
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(
    (initialMovies?.results?.length || 0) > 0,
  );
  const [isLoading, setIsLoading] = useState(false);

  const isInitialRender = useRef(true);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    setMovies(initialMovies?.results || []);
    setPage(2);
    setHasMore((initialMovies?.results?.length || 0) > 0);
  }, [initialMovies]);

  useEffect(() => {
    if (inView && !isLoading && hasMore) {
      setIsLoading(true);
      loadMoreMovies(query, page).then((newMovies) => {
        if (newMovies.length > 0) {
          setMovies((prev) => [...prev, ...newMovies]);
          setPage((prev) => prev + 1);
        } else {
          setHasMore(false);
        }
        setIsLoading(false);
      });
    }
  }, [inView, isLoading, hasMore, page, query]);

  return (
    <>
      <SearchInput totalResults={initialMovies?.total_results || 0} />

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

      <div ref={ref} className="col-span-full mt-10 flex justify-center h-10">
        {hasMore && isLoading && <Loading />}
        {!hasMore && movies.length > 0 && (
          <p className="text-center text-sm text-muted-foreground">
            Fim dos resultados.
          </p>
        )}
      </div>
    </>
  );
}
