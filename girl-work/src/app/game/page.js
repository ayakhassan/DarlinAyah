"use client";
import { useState, useEffect, useRef } from "react";

export default function GamePage() {
  return <GamePageContent />;
}

function GamePageContent() {
  const [symbols, setSymbols] = useState([]);
  const [score, setScore] = useState(0);
  const [showSurprise, setShowSurprise] = useState(false);

  const [bounds, setBounds] = useState({ width: 800, height: 600 });
  const animationRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setBounds({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    const newSymbols = [];
    for (let i = 0; i < 15; i++) {
      newSymbols.push(createRandomSymbol(bounds.width, bounds.height));
    }
    setSymbols(newSymbols);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function animate() {
      setSymbols((prev) =>
        prev.map((symbol) => {
          let { x, y, dx, dy, size } = symbol;
          x += dx;
          y += dy;

          if (x < 0 || x + size > bounds.width) dx = -dx;
          if (y < 0 || y + size > bounds.height) dy = -dy;

          return { ...symbol, x, y, dx, dy };
        })
      );
      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [bounds]);

  useEffect(() => {
    if (score === 15) setShowSurprise(true);
  }, [score]);

  function handleSymbolClick(index) {
    setSymbols((prev) => prev.filter((_, i) => i !== index));
    setScore((prev) => prev + 1);
  }

  return (
    <main
      className="
        w-screen h-screen 
        bg-pink-100 
        overflow-hidden 
        relative 
        flex flex-col
      "
    >
      {/* Fixed Scoreboard Box at the Top */}
      <div className="grid place-items-center h-screen bg-white p-4 rounded-xl border-4 border-pink-300 shadow-lg text-center z-10">
        <h1 className="text-3xl text-pink-600 mb-2">Collect the Hook &apos;Ems!</h1>
        <div className="text-xl text-pink-600">Score: {score}</div>
      </div>

      {/* Floating Hook 'Em Emojis */}
      {symbols.map((symbol, index) => (
        <button
          key={symbol.id}
          onClick={() => handleSymbolClick(index)}
          style={{
            position: "absolute",
            left: symbol.x,
            top: symbol.y,
            fontSize: "2rem",
            cursor: "pointer",
          }}
        >
          🤘
        </button>
      ))}

      {/* Surprise Popup (Centered in the Middle) */}
      {showSurprise && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl text-center border-4 border-pink-300 max-w-sm w-full mx-4">
            <img
              src="/surprise.png"
              alt="Surprise!"
              className="max-w-full mx-auto mb-4"
            />
            <p className="text-pink-600 text-xl font-bold">
              You collected all the Hook &apos;Ems!
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

/**
 * Create one random Hook 'Em object
 * @param {number} maxWidth - Maximum width (bounds)
 * @param {number} maxHeight - Maximum height (bounds)
 */
function createRandomSymbol(maxWidth, maxHeight) {
  const size = 40; // Emoji size
  const x = Math.random() * (maxWidth - size);
  const y = Math.random() * (maxHeight - size);
  const dx = (Math.random() * 1 + 1) * (Math.random() > 0.5 ? 1 : -1);
  const dy = (Math.random() * 1 + 1) * (Math.random() > 0.5 ? 1 : -1);

  return {
    id: crypto.randomUUID?.() || String(Math.random()),
    x,
    y,
    dx,
    dy,
    size,
  };
}
