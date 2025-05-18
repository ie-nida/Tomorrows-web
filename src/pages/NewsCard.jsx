import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const NewsCard = ({ post, showDateFormatted = false }) => {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl p-[2px] bg-gradient-to-r from-pink-800 to-[rgb(113,34,68)] shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-pink-800/50 transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="rounded-2xl bg-[#250e29] backdrop-blur-sm border-[#3d3d5c] overflow-hidden flex flex-col group h-full">
        <div className="w-full h-40 relative overflow-hidden flex items-center justify-center bg-gray-500 text-sm text-gray-400">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
          ) : (
            <div className="text-center text-gray-400">No image</div>
          )}
        </div>
        <div className="p-3 flex flex-col justify-between flex-1">
          <h3 className="text-lg font-semibold mb-1 text-white">{post.title}</h3>
          <p className="text-sm text-gray-400 mb-1">by {post.author}</p>
          <p className="text-xs text-gray-500 mt-auto">
            {showDateFormatted
              ? typeof post.date === 'string'
                ? post.date
                : formatDistanceToNow(post.date, { addSuffix: true })
              : typeof post.date === 'string'
              ? post.date
              : formatDistanceToNow(post.date, { addSuffix: true })}
          </p>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;