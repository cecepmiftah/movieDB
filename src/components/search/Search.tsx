"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

export const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  return (
    <div className="max-w-96 py-2 px-4 mt-6 flex items-center gap-4 border border-gray-500 rounded">
      <Image
        src={"/assets/Left Icon.svg"}
        alt="search icon"
        width={24}
        height={24}
      />
      <input
        type="text"
        placeholder={`Search ${placeholder}`}
        className="py-2 pl-2 pr-24 bg-transparent outline-none"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        ref={inputRef}
      />
    </div>
  );
};
