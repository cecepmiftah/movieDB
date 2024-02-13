"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Movies", href: "/" },
  { name: "TV Show", href: "/tvshow" },
];

export const Category = () => {
  const pathname = usePathname();

  return (
    <div className="max-w-72 bg-black bg-opacity-30 backdrop-filter backdrop-blur-md p-2 rounded">
      <div className="flex items-center gap-4 text-sm">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`py-2 px-8 rounded ${
              pathname === link.href && "bg-[#7B6EF6]"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
