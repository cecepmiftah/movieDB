import { List } from "@/components/list/List";
import { Pagination } from "@/components/pagination/Pagination";
import { Skeletons } from "@/components/skeletons/Skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

async function getData(query: string, page: number) {
  const urlGetAll = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;

  const urlQuery = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;

  const url = query && page ? urlQuery : urlGetAll;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.KEY}`,
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata: Metadata = {
  title: "Movies",
  description: "Search anything about movies you want to know",
};

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const data = await getData(query, currentPage);

  return (
    <>
      <Suspense key={query + currentPage} fallback={<Skeletons />}>
        <List data={data} category="movie" title="Movies List" />
      </Suspense>
      <div className="flex justify-center">
        <Pagination totalPages={data.total_pages} />
      </div>
    </>
  );
}
