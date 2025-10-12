interface Genre {
  id: number;
  name: string;
}

export interface MovieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
}

export interface MoviesListProps {
  page: number;
  results: MovieProps[];
  total_pages: number;
  total_results: number;
}
