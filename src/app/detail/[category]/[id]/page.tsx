import { Detail } from "@/components/detail/Detail";
import { Metadata } from "next";

type Props = {
  id: number;
  category: string;
};

export async function generateMetadata({
  params,
}: {
  params: { id: number; category: string };
}): Promise<Metadata> {
  // fetch data
  const data = await getData({ id: params.id, category: params.category });

  return {
    title: data.title ? data.title : data.original_name,

    description: data.overview,
  };
}

async function getData({ id, category }: Props) {
  const url = `https://api.themoviedb.org/3/${category}/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.KEY}`,
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async ({
  params,
}: {
  params: { id: number; category: string };
}) => {
  const data = await getData({ id: params.id, category: params.category });

  return (
    <div className="max-w-[1366px] text-gray-300">
      <Detail {...data} />
    </div>
  );
};

export default page;
