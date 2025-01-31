// app/layout.js
import NavBar from "./components/NavBar";

export const metadata = {
    title: "Girly MySpace",
    description: "A super-pink MySpace-style site made with Next.js!",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          {/* Google Font: Dancing Script */}
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="font-cursive bg-pink-100 text-pink-800 min-h-screen">
          <NavBar />
          {children}
        </body>
      </html>
    );
  }
  