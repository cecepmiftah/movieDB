type genresType = {
  id: number;
  name: string;
};

export type Movie = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  genres: genresType[];
  id: number;
  original_language?: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  episode_run_time?: string;
  status?: string;
};

export type MovieData = {
  data: {
    results: Movie[];
  };
  title: string;
  category: "movie" | "tv";
};
