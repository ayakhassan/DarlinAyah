import { useState } from 'react';

export default function PasswordGate({ onCorrectPassword }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === 'girly123') {
      onCorrectPassword();
    } else {
      setError('Wrong password! Try "girly123"');
    }
  };

  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl text-pink-500 mb-4 font-cursive">✨ Welcome Princess! ✨</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-pink-300 p-2 rounded mb-4"
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
    </div>
  );
}