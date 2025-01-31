import { useState, useEffect } from 'react';

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
        top: Math.random() * 80 + 10,
        left: Math.random() * 80 + 10,
      });
    }
    setSymbols(newSymbols);
  };

  const handleSymbolClick = (id) => {
    setSymbols(symbols.filter(s => s.id !== id));
    setScore(score + 1);
    
    if (score + 1 >= 15) {
      setShowSurprise(true);
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 p-8 relative">
      <h1 className="text-3xl text-pink-600 text-center mb-8">Collect the Hook 'Ems! 🤘</h1>
      <div className="text-2xl text-pink-600 text-center mb-8">Score: {score}</div>

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
            src="surprise-image.jpg" 
            className="max-w-md rounded-lg shadow-2xl border-4 border-white"
            alt="Surprise!"
          />
        </div>
      )}
    </div>
  );
}