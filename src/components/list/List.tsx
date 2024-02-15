import { Search } from "../search/Search";
import { Category } from "../category/Category";
import { MovieCard } from "../movie-card/MovieCard";
import { Movie, MovieData } from "@/type/type";
import Link from "next/link";

export const List = ({ data, title, category }: MovieData) => {
  return (
    <div className="mt-10 sm:mx-6 lg:mx-0 max-w-[1366px] text-gray-300">
      <div className="sm:max-w-[50%] mx-auto text-center sm:mx-0 sm:text-start">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-base leading-6 mt-6">
          List of movies and TV Shows, I, Pramod Poudel have watched till date.
          Explore what I have watched and also feel free to make a suggestion
        </p>
      </div>
      <div>
        <Search placeholder={category} />
      </div>
      <div className="mt-6">
        <Category />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-6">
        {data.results.map((item: Movie) => (
          <Link
            href={`detail/${category}/${item.id}`}
            key={item.id}
            className="mx-auto"
          >
            <MovieCard {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
};
