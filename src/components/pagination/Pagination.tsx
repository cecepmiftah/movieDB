"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    console.log(`${pathname}?${params.toString()}`);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-6 my-6 text-gray-300">
      <button
        onClick={(e) => createPageURL(currentPage - 1)}
        disabled={currentPage <= 1}
        className="disabled:cursor-not-allowed disabled:text-gray-600"
      >
        Prev
      </button>
      <p>{currentPage}</p>
      <p>of</p>
      <p>{totalPages}</p>
      <button
        onClick={(e) => createPageURL(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="disabled:cursor-not-allowed disabled:text-gray-600"
      >
        Next
      </button>
    </div>
  );
};
