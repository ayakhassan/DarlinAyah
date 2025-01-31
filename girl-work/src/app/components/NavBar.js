"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-pink-500 p-4 flex justify-center gap-6">
      <Link
        href="/about"
        className={`
          text-white hover:text-pink-200 text-xl
          ${pathname === "/about" ? "underline" : ""}
        `}
      >
        About Me
      </Link>
      <Link
        href="/game"
        className={`
          text-white hover:text-pink-200 text-xl
          ${pathname === "/game" ? "underline" : ""}
        `}
      >
        Bevo Game
      </Link>
    </nav>
  );
}
