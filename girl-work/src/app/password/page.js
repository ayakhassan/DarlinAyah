"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PasswordPage() {
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const router = useRouter();

  // Password verification logic
  const checkPassword = () => {
    const correctPassword = "heydarlin"; // Set your password here

    if (passwordInput === correctPassword) {
      router.push("/about"); // Redirect to the main profile page (about page)
    } else {
      setErrorMessage(true); // Show error message
    }
  };

  return (
    <main
      className="min-h-screen bg-pink-200 flex items-center justify-center p-6"
      style={{
        fontFamily: "'Tangerine', cursive", // Font styling to match your design
      }}
    >
      <div className="bg-white p-8 border-4 border-pink-300 rounded-lg shadow-lg max-w-sm w-full">
        {/* Diary Cover Heading */}
        <h1 className="text-5xl text-pink-600 font-bold text-center mb-4">
          Ayah&apos;s Space˚ʚ♡ɞ˚
        </h1>

        {/* Prompt Text */}
        <p className="text-pink-500 text-lg text-center mb-6">
          Enter the password to unlock:
        </p>

        {/* Password Input */}
        <input
          type="password"
          id="passwordInput"
          placeholder="🔒 Enter password"
          className="border-2 border-pink-300 w-full p-3 rounded-lg focus:outline-none focus:border-pink-500 text-lg mb-4"
          value={passwordInput}
          onChange={(e) => {
            setPasswordInput(e.target.value);
            setErrorMessage(false); // Hide error message on input change
          }}
        />

        {/* Unlock Button */}
        <button
          onClick={checkPassword}
          className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition w-full text-lg"
        >
          Unlock
        </button>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-center mt-4 font-bold">
            Try Again Girly!
          </p>
        )}
      </div>
    </main>
  );
}
