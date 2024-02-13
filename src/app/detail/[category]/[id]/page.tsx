import { Detail } from "@/components/detail/Detail";

async function getData({ id, category }: { id: number; category: string }) {
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
