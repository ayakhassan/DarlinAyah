import { useState } from 'react';
import PasswordGate from './components/PasswordGate';
import ProfilePage from './components/ProfilePage';
import HookEmGame from './components/HookEmGame';

export default function App() {
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [currentPage, setCurrentPage] = useState('profile');

  if (!passwordCorrect) {
    return <PasswordGate onCorrectPassword={() => setPasswordCorrect(true)} />;
  }

  return (
    <div>
      <nav className="bg-pink-500 p-4 flex justify-center space-x-6">
        <button
          onClick={() => setCurrentPage('profile')}
          className="text-white hover:text-pink-200 text-xl font-cursive"
        >
          My Profile
        </button>
        <button
          onClick={() => setCurrentPage('game')}
          className="text-white hover:text-pink-200 text-xl font-cursive"
        >
          Play Game
        </button>
      </nav>

      {currentPage === 'profile' ? <ProfilePage /> : <HookEmGame />}
    </div>
  );
}