"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    // Example correct password
    if (password.toLowerCase() === "heydarlin") {
      // Mark site as unlocked in localStorage
      localStorage.setItem("site_unlocked", "true");
      // Then go to the About Me page
      router.push("/about");
    } else {
      alert("Wrong password. Try again!");
    }
  }

  return (
    <main className="min-h-screen bg-pink-200 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 border-4 border-pink-300 rounded-xl shadow-xl text-center max-w-sm w-full"
      >
        <h1 className="text-3xl font-bold text-pink-600 mb-4">Enter Password</h1>
        <input
          type="password"
          className="border-2 border-pink-300 p-2 rounded w-full mb-4
                     focus:outline-none focus:border-pink-500"
          placeholder="Magic Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-pink-500 text-white px-6 py-2 rounded-full
                     hover:bg-pink-600 transition"
        >
          Unlock
        </button>
      </form>
    </main>
  );
}
