import { List } from "@/components/list/List";
import { Pagination } from "@/components/pagination/Pagination";
import { Metadata } from "next";
import { Suspense } from "react";

async function getData(query: string, page: number) {
  const urlGetAll = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`;

  const urlQuery = `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=${page}`;

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
  title: "TV Shows",
  description: "Search anything about TV Shows you want to know",
};

const page = async ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const data = await getData(query, currentPage);

  return (
    <>
      <Suspense key={query + currentPage} fallback={<p>Loading...</p>}>
        <List data={data} category={"tv"} title="TV Show List" />;
      </Suspense>
      <div className="flex justify-center">
        <Pagination totalPages={data.total_pages} />
      </div>
    </>
  );
};

export default page;
