import React from 'react';
import { Loader } from 'lucide-react';
import StreamsContainer from './StreamsContainer';
import Header from './Header';
import { TwitchProvider } from '../context/TwitchContext';
import NavBar from '../pages/Navbar';

const Community = () => {
  return (
    <TwitchProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#000000] via-gray-900 to-gray-900  text-white">
        {/* NavBar at the top */}
       <NavBar />
        <Header />
        <main className="container mx-auto px-4 py-8">
          <StreamsContainer />
        </main>
        <footer className="bg-gray-800 py-4 text-center text-gray-400 text-sm">
          <p>© 2025 OSU Community Streams • Not affiliated with osu! or Twitch</p>
        </footer>
      </div>
    </TwitchProvider>
  );
};

export default Community;
