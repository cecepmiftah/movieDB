"use client";

export default function NavLink({
  link,
  color,
}: {
  link: string;
  color?: string;
}) {
  return <p className={`text-gray-200 ${color}`}>{link}</p>;
}
