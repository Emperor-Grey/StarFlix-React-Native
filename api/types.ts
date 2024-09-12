// The types for a movie
export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
}

// The types for a list of movies
export interface MovieListResponse {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

// The types for TMDB API responses
export interface TMDBApiResponse {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

// Movie details
export interface MovieDetails extends Movie {
  budget: number;
  revenue: number;
  genres: Genre[];
  runtime: number;
  tagline: string;
}

// the types for a genre
export interface Genre {
  id: number;
  name: string;
}

// The types for configuration
export interface Config {
  TMDB_API_KEY: string | undefined;
  BASE_URL: string | undefined;
  IMAGE_BASE_URL: string | undefined;
}
