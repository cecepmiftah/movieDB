import { Movie } from "@/type/type";
import Image from "next/image";

export const Detail = ({
  id,
  title,
  popularity,
  original_name,
  overview,
  poster_path,
  backdrop_path,
  vote_average,
  release_date,
  genres,
  episode_run_time,
  status,
}: Movie) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div>
        <div className="relative w-[1200px] h-[80vh] aspect-auto">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={title}
            fill
            className="w-full object-cover rounded-3xl"
            quality={80}
          />
          <div className="absolute -bottom-16 left-[90px] flex flex-col justify-center px-6 w-96 h-28 backdrop-blur-sm bg-[#20283E]/80 rounded-2xl">
            <p className="text-sm py-3">Movie / TV Show</p>
            <h1 className="text-2xl font-bold">
              {title ? title : original_name}
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center my-20">
          <div className="w-1/2">
            <div className="relative mx-auto w-96 h-[600px]">
              {poster_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-6">
            <h1 className="text-3xl font-bold">
              {title ? title : original_name}
            </h1>
            <p className="text-base text-gray-400 leading-9">{overview}</p>
            <div className="flex items-center w-16 gap-1 py-3 px-2 rounded-lg bg-black bg-opacity-50 backdrop-filter backdrop-blur-md">
              <Image
                src={"/assets/star.svg"}
                alt="star icon"
                width={18}
                height={18}
              />
              <p className="text-[#FFAD49]">{vote_average?.toFixed(1)}</p>
            </div>
            <div>
              <p className="text-base leading-9 text-gray-400">Type</p>
              <p className="text-base leading-9">
                {episode_run_time ? "TV Show" : "Movie"}
              </p>
            </div>
            <div>
              <p className="text-base leading-9 text-gray-400">Release Date:</p>
              <p className="text-base leading-9">{release_date}</p>
            </div>
            <div>
              <p className="text-base leading-9 text-gray-400">Genres:</p>
              <div className="flex gap-6">
                {genres?.map((genre) => (
                  <p className="text-base leading-9" key={genre.id}>
                    {genre.name}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-base leading-9 text-gray-400">Status:</p>
              <p className="text-base leading-9">{status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
