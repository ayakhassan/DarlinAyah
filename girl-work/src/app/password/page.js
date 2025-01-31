"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: correct password = "girly123"
    if (password.toLowerCase() === "HeyDarlin") {
      localStorage.setItem("site_unlocked", "true");
      router.push("/"); // redirect to homepage
    } else {
      setError("Wrong password! Try 'girly123'");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-pink-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg text-center"
      >
        <h1 className="text-3xl text-pink-500 mb-4">✨ Welcome Princess! ✨</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-pink-300 p-2 rounded mb-4 outline-none"
          placeholder="Enter magic password..."
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button
          type="submit"
          className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
        >
          Enter My World
        </button>
      </form>
    </main>
  );
}
