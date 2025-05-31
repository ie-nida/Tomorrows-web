import React from 'react';

const PlayerAvatar = ({ username, avatarUrl, rank }) => {
  // Create a placeholder based on username if no avatar URL exists
  const getInitials = (name) => {
    return name.charAt(0).toUpperCase();
  };

  // Get a deterministic color based on the username
  const getColorClass = (username) => {
    const colors = [
      'bg-pink-700',
      'bg-purple-700',
      'bg-indigo-700',
      'bg-blue-700',
      'bg-emerald-700',
      'bg-orange-700',
      'bg-rose-700',
    ];

    const hash = username.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);

    return colors[hash % colors.length];
  };

  const isTopPlayer = rank <= 3;

  const rankGlow = () => {
    if (rank === 1) return 'ring-yellow-400 shadow-yellow-400/50';
    if (rank === 2) return 'ring-slate-300 shadow-slate-300/50';
    if (rank === 3) return 'ring-amber-700 shadow-amber-700/50';
    return 'ring-purple-600/30 shadow-purple-600/20';
  };

  return (
    <div className="relative flex-shrink-0">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={`${username}'s avatar`}
          className={`w-6 h-6 rounded-full object-cover ${isTopPlayer ? 'ring-2' : 'ring-1'} ${rankGlow()} shadow-lg`}
        />
      ) : (
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${getColorClass(username)} ${isTopPlayer ? 'ring-2' : 'ring-1'} ${rankGlow()} shadow-lg`}
        >
          {getInitials(username)}
        </div>
      )}
    </div>
  );
};

export default PlayerAvatar;