// app/components/NavBar.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-pink-500 p-4 flex justify-center space-x-6">
      <Link
        href="/"
        className={`text-white hover:text-pink-200 text-xl ${
          pathname === "/" ? "underline" : ""
        }`}
      >
        My Profile
      </Link>
      <Link
        href="/game"
        className={`text-white hover:text-pink-200 text-xl ${
          pathname === "/game" ? "underline" : ""
        }`}
      >
        Play Game
      </Link>
      <Link
        href="/password"
        className="text-white hover:text-pink-200 text-xl"
      >
        Password Gate
      </Link>
    </nav>
  );
}
