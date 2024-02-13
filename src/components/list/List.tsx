import { Search } from "../search/Search";
import { Category } from "../category/Category";
import { MovieCard } from "../movie-card/MovieCard";
import { Movie, MovieData } from "@/type/type";
import Link from "next/link";

export const List = ({ data, title, category }: MovieData) => {
  return (
    <div className="mt-10 max-w-[1366px] text-gray-300">
      <div className="max-w-[50%]">
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
      <div className="mt-6 grid grid-cols-4 gap-6">
        {data.results.map((item: Movie) => {
          return (
            <Link href={`detail/${category}/${item.id}`} key={item.id}>
              <MovieCard {...item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
