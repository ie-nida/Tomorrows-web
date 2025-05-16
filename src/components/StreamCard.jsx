import React from 'react';
import { Eye, ExternalLink } from 'lucide-react';

const StreamCard = ({ stream }) => {
  const thumbnailUrl = stream.thumbnail_url
    .replace('{width}', '440')
    .replace('{height}', '248');

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.03] hover:shadow-pink-500/20">
      <div className="relative">
        <img 
          src={thumbnailUrl} 
          alt={`${stream.user_name}'s stream`} 
          className="w-full object-cover aspect-video"
        />
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md flex items-center">
          <Eye size={14} className="mr-1" />
          <span>{stream.viewer_count.toLocaleString()}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <div className="flex items-center">
            <img 
              src={
                stream.profile_image_url || 
                `https://placehold.co/40x40/6441a5/ffffff?text=${stream.user_name.charAt(0)}`
              } 
              alt={stream.user_name}
              className="w-10 h-10 rounded-full mr-3 border-2 border-pink-500"
            />
            <div className="overflow-hidden">
              <h3 className="font-bold text-white text-md truncate">{stream.user_name}</h3>
              <p className="text-sm text-gray-300 truncate">{stream.game_name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-lg mb-2 line-clamp-2 h-14">{stream.title}</h4>
        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-400">
            {new Date(stream.started_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
          <a 
            href={`https://twitch.tv/${stream.user_login}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 flex items-center text-sm font-medium"
          >
            Watch <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StreamCard;
