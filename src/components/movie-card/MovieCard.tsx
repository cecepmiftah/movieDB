import { Movie } from "@/type/type";
import Image from "next/image";

export const MovieCard = ({
  id,
  title,
  popularity,
  original_name,
  overview,
  poster_path,
  vote_average,
  vote_count,
}: Movie) => {
  return (
    <div className="w-72 h-[512px] flex items-center bg-[#20283E] bg-opacity-30 backdrop-filter backdrop-blur-md rounded-lg">
      <div className="mx-auto">
        <div className="flex flex-col justify-center items-center gap-3 p-2">
          <div className="relative w-60 h-[400px]">
            {poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                fill
                className="object-cover rounded-lg"
              />
            ) : (
              <p className="mt-24 text-center text-lg font-semibold">
                Sorry Image Not Found😟
              </p>
            )}
            <div className="absolute flex items-center gap-1 top-2 left-2 py-3 px-2 rounded-lg bg-black bg-opacity-50 backdrop-filter backdrop-blur-md">
              <Image
                src={"/assets/star.svg"}
                alt="star icon"
                width={18}
                height={18}
              />
              <p className="text-[#FFAD49]">{vote_average?.toFixed(1)}</p>
            </div>
          </div>
          <h1 className="self-start px-1 py-2 text-lg font-semibold text-gray-100">
            {title ? title : original_name}
          </h1>
        </div>
      </div>
    </div>
  );
};
