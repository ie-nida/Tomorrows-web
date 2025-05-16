import React from 'react';
import { Loader } from 'lucide-react';
import StreamCard from './StreamCard';
import { useTwitch } from '../context/TwitchContext';
import EmptyState from './EmptyState';

const StreamsContainer = () => {
  const { streams, isLoading, error } = useTwitch();

  if (isLoading && streams.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader size={40} className="text-pink-500 animate-spin mb-4" />
        <p className="text-gray-300">Loading streams...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-red-400">
        <p className="text-xl font-bold mb-2">Oops! Something went wrong</p>
        <p>{error}</p>
      </div>
    );
  }

  if (streams.length === 0) {
    return <EmptyState />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {streams.map((stream) => (
          <div
            key={stream.id}
            className="border border-gray-400 rounded-lg p-2 bg-gray-900"
          >
            <StreamCard stream={stream} />
          </div>
        ))}
      </div>

      {isLoading && streams.length > 0 && (
        <div className="flex justify-center mt-8">
          <Loader size={24} className="text-pink-500 animate-spin" />
        </div>
      )}
    </div>
  );
};

export default StreamsContainer;
