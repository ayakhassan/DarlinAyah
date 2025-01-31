"use client"; 
// We need client-side logic to track scrolling & show about me

import { useState, useEffect } from "react";
import AuthGuard from "./components/AuthGuard";

export default function HomePage() {
  const [showAboutMe, setShowAboutMe] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !showAboutMe) {
        setShowAboutMe(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAboutMe]);

  return (
    <AuthGuard>
      <main className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 p-8">
        <div className="max-w-2xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-lg p-6 shadow-lg mb-8 text-center">
            {/* <img
              src="/profile-pic.png"
              className="w-32 h-32 rounded-full mx-auto border-4 border-pink-300"
              alt="Profile"
            /> */}
            <h1 className="text-4xl text-pink-600 mt-4 font-cursive">
              ~*~ Angelica ~*~
            </h1>
          </div>

          {/* Scroll-triggered "About Me" popup */}
          {showAboutMe && (
            <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-xl border border-pink-200">
              <h2 className="text-2xl text-pink-500 mb-2">About Me 💖</h2>
              <p className="text-pink-600 max-w-xs">
                Luv 2 hang with my BFFs, take cute selfies, and watch rom-coms!
                Add me as your friend!! XOXO
              </p>
            </div>
          )}

          {/* MySpace-style Interests Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl text-pink-500 mb-4">My Interests 🌸</h2>
            <ul className="list-disc list-inside text-pink-600 space-y-1">
              <li>Sparkly things</li>
              <li>Unicorns &amp; Rainbows</li>
              <li>Pink everything!!!</li>
            </ul>
          </div>
        </div>
      </main>
    </AuthGuard>
  );
}
