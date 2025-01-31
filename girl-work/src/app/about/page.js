"use client";

import AuthGuard from "../components/AuthGuard"; // <-- Check the correct path!

export default function AboutPage() {
  return (
    <AuthGuard>
      <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl p-8 text-center border-4 border-pink-300 rounded-lg bg-white shadow-xl">
          <h1 className="text-4xl text-pink-600 font-bold mb-4">
            My Sparkly Profile
          </h1>
          <p className="text-pink-500 mb-6">
            Welcome to my super-pink About Me page! I love unicorns, sparkles, 
            and everything dreamy. Enjoy exploring my space!
          </p>

          {/* Button to Bevo Game */}
          <a
            href="/game"
            className="bg-pink-500 text-white px-6 py-2 rounded-full
                       hover:bg-pink-600 transition inline-block"
          >
            Go to Bevo Game
          </a>
        </div>
      </main>
    </AuthGuard>
  );
}
