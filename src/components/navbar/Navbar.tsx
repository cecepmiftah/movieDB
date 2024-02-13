import Link from "next/link";
import NavLink from "./link/NavLink";

const links = [
  { name: "Movies", href: "/" },
  { name: "TV Show", href: "/tvshow" },
  { name: "Suggest Me", href: "/suggest" },
];

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center h-20">
        <h1 className="text-gray-200 text-xl font-bold">MovieDB</h1>
        <div className="flex gap-8">
          {links.map((link) => (
            <Link href={link.href} key={link.name}>
              <NavLink link={link.name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
