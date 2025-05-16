import React from 'react';
import { CircleOff, RefreshCw } from 'lucide-react';
import { useTwitch } from '../context/TwitchContext';

const Header = () => {
  const { isLoading, refreshStreams, streamsCount, error } = useTwitch();

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col items-center text-center mt-30">
        {/* Centered Title */}
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-900  to-indigo-900 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] animate-[pulse_3s_ease-in-out_infinite,bounceSlow_3s_ease-in-out_infinite] mb-10">
          Osu! Community Streams
        </h1>

        {/* Centered Row: Status + Refresh Button */}
        <div className="flex items-center justify-center space-x-4">
          {error ? (
            <div className="flex items-center text-red-500">
              <CircleOff size={18} className="mr-2" />
              <span>Connection error</span>
            </div>
          ) : (
            <div className="text-gray-300">
              {streamsCount > 0 ? (
                <span>
                  <span className="text-pink-900 font-bold">{streamsCount}</span> live now
                </span>
              ) : (
                <span>No live streams</span>
              )}
            </div>
          )}

          <button
            onClick={refreshStreams}
            disabled={isLoading}
            className="bg-gradient-to-r from-pink-900  to-indigo-950 hover:bg-pink-700 text-white py-2 px-4 rounded-md transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} size={18} />
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

