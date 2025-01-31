// app/layout.js
import "./globals.css";
import React from "react"; // for JSX if you're not using the new JSX transform

export const metadata = {
  title: "Girly MySpace",
  description: "A super-pink Next.js site!",
};

// Layout: wraps every page in your app folder
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-pink-100 text-pink-800 antialiased">
        {/* Optional NavBar if you want it globally */}
        {/* <NavBar /> */}

        {children}
      </body>
    </html>
  );
}
