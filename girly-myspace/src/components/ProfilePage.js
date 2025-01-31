import { useState, useEffect } from 'react';

export default function ProfilePage() {
  const [showAboutMe, setShowAboutMe] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !showAboutMe) {
        setShowAboutMe(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAboutMe]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
          <img 
            src="profile-pic.png" 
            className="w-32 h-32 rounded-full mx-auto border-4 border-pink-300"
            alt="Profile"
          />
          <h1 className="text-4xl text-center text-pink-600 mt-4 font-cursive">~*~ Angelica ~*~</h1>
        </div>

        {/* About Me Popup */}
        {showAboutMe && (
          <div className="fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-xl animate-bounce">
            <h2 className="text-2xl text-pink-500 mb-2">About Me 💖</h2>
            <p className="text-pink-600">
              Luv 2 hang with my BFFs, take cute selfies, and watch rom-coms! 
              Add me as your friend!! XOXO
            </p>
          </div>
        )}

        {/* MySpace-style Sections */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl text-pink-500 mb-4">My Interests 🌸</h2>
            <ul className="list-disc list-inside text-pink-600">
              <li>Sparkly things</li>
              <li>Unicorns & Rainbows</li>
              <li>Pink everything!!!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}