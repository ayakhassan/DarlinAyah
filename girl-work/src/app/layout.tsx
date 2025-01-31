import "./globals.css";
import NavBar from "./components/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Girly MySpace",
  description: "A super-pink Next.js site!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-pink-100 text-pink-800 antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
