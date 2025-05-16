import React from 'react';
import { Disc } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <Disc size={60} className="text-pink-500 mb-6 animate-pulse" />
      <h2 className="text-2xl font-bold mb-3">No live streams right now</h2>
      <p className="text-gray-400 max-w-md mb-6">
        There are currently no OSU content creators streaming on Twitch. 
        Check back later or refresh to see if anyone has gone live!
      </p>
      <div className="bg-gray-800 rounded-lg p-4 max-w-md text-left">
        <h3 className="font-semibold text-pink-400 mb-2">Did you know?</h3>
        <p className="text-gray-300 text-sm">
          OSU (Osu!) is a rhythm game with a vibrant community of players and content creators.
          Streams frequently feature gameplay, tournaments, and mapping sessions.
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
