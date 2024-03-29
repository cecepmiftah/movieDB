import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Shape } from "@/components/shape/Shape";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieDB",
  description: "Search anything about movies and TV Shows you want to know",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#120F31]`}>
        <div className="max-w-[1266px] 2xl:max-w-[1366px] mx-auto">
          <Navbar />
          <div className="absolute top-11 right-11 -z-10">
            <Shape />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
