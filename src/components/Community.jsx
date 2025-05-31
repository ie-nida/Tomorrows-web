import React from 'react';
import { Loader } from 'lucide-react';
import StreamsContainer from './StreamsContainer';
import Header from './Header';
import { TwitchProvider } from '../context/TwitchContext';
import NavBar from '../pages/Navbar';
import Footer from './Footer';

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
        <Footer />
      </div>
    </TwitchProvider>
  );
};

export default Community;
