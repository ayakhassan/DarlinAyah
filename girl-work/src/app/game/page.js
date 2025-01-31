"use client";

import { useState, useEffect } from "react";
import AuthGuard from "../components/AuthGuard";

export default function HookEmGame() {
  const [score, setScore] = useState(0);
  const [symbols, setSymbols] = useState([]);
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => {
    generateSymbols();
  }, []);

  const generateSymbols = () => {
    const newSymbols = [];
    for (let i = 0; i < 15; i++) {
      newSymbols.push({
        id: i,
        top: Math.random() * 80 + 10, // random 10%–90%
        left: Math.random() * 80 + 10,
      });
    }
    setSymbols(newSymbols);
  };

  const handleSymbolClick = (id) => {
    setSymbols((prev) => prev.filter((s) => s.id !== id));
    setScore((prev) => {
      const newScore = prev + 1;
      if (newScore === 15) {
        setShowSurprise(true);
      }
      return newScore;
    });
  };

  return (
    <AuthGuard>
      <main className="min-h-screen bg-pink-100 p-8 relative overflow-hidden">
        <h1 className="text-3xl text-pink-600 text-center mb-8">
          Collect the Hook &apos;Ems! 🤘
        </h1>
        <div className="text-2xl text-pink-600 text-center mb-8">
          Score: {score}
        </div>

        {symbols.map((symbol) => (
          <button
            key={symbol.id}
            onClick={() => handleSymbolClick(symbol.id)}
            className="absolute text-4xl animate-bounce"
            style={{ top: `${symbol.top}%`, left: `${symbol.left}%` }}
          >
            🤘
          </button>
        ))}

        {showSurprise && (
          <div className="fixed inset-0 bg-pink-200 flex items-center justify-center">
            <img
              src="/surprise.png"
              className="max-w-md rounded-lg shadow-2xl border-4 border-white"
              alt="Surprise!"
            />
          </div>
        )}
      </main>
    </AuthGuard>
  );
}
