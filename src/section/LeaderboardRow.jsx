import React from 'react';
import CountryFlag from './CountryFlag';
import PlayerAvatar from './PlayerAvatar';
import PerformanceIndicator from './PerformanceIndicator';

const LeaderboardRow = ({ player, isExpanded, toggleExpand }) => {
  const isTopRanked = player.rank <= 3;

  const getRankStyles = () => {
    if (player.rank === 1) return 'text-yellow-300 drop-shadow-[0_0_3px_#fde047]';
    if (player.rank === 2) return 'text-slate-300 drop-shadow-[0_0_3px_#cbd5e1]';
    if (player.rank === 3) return 'text-amber-600 drop-shadow-[0_0_3px_#d97706]';
    return 'text-white';
  };

  // Desktop view
  const desktopRow = (
    <div 
      className={`
        hidden md:grid
        bg-gradient-to-r from-[#781d665d] to-[#5c125c5d]
        hover:from-[#8a2675] hover:to-[#6c156c]
        transition-all duration-300 rounded-md px-4 lg:px-6 py-[6px]
        grid-cols-[2rem_minmax(8rem,1fr)_4.5rem_5rem_6rem_4.5rem_2rem_2rem_2rem] lg:grid-cols-[2.5rem_minmax(10rem,1fr)_5.5rem_7rem_9rem_6rem_2.5rem_2.5rem_2.5rem] 
        items-center gap-1
        ${isTopRanked ? 'shadow-lg shadow-pink-900/30 border border-pink-800/30' : ''}
      `}
    >
      <div className={`font-bold text-sm ${getRankStyles()}`}>#{player.rank}</div>

      <div className="flex items-center space-x-2 min-w-0">
        <CountryFlag countryCode={player.countryCode} />
        <PlayerAvatar 
          username={player.username} 
          avatarUrl={player.avatarUrl} 
          rank={player.rank} 
        />
        <span className="truncate ml-1 font-medium">{player.username}</span>
      </div>

      <PerformanceIndicator value={player.accuracy} type="accuracy" />
      <div className="text-center text-gray-200 text-xs lg:text-sm">{player.playCount.toLocaleString()}</div>
      <div className="text-center text-gray-200 text-xs lg:text-sm">{player.rankedScore.toLocaleString()}</div>
      <PerformanceIndicator value={player.performance} type="performance" />
      <div className="text-center text-gray-200">{player.ss}</div>
      <div className="text-center text-gray-200">{player.s}</div>
      <div className="text-center text-gray-200">{player.a}</div>
    </div>
  );

  // Mobile view - collapsed
  const mobileRowCollapsed = (
    <div
      className={`
        md:hidden
        bg-gradient-to-r from-[#781d665d] to-[#5c125c5d]
        hover:from-[#8a2675] hover:to-[#6c156c]
        transition-all duration-300 rounded-md px-4 py-2
        grid grid-cols-[2rem_1fr_auto] items-center gap-2
        ${isTopRanked ? 'shadow-lg shadow-pink-900/30 border border-pink-800/30' : ''}
        cursor-pointer
      `}
      onClick={toggleExpand}
    >
      <div className={`font-bold text-sm ${getRankStyles()}`}>#{player.rank}</div>
      
      <div className="flex items-center space-x-2 min-w-0 overflow-hidden">
        <CountryFlag countryCode={player.countryCode} />
        <PlayerAvatar 
          username={player.username} 
          avatarUrl={player.avatarUrl} 
          rank={player.rank} 
        />
        <span className="truncate ml-1 font-medium">{player.username}</span>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="text-right">
          <span className="text-xs text-pink-200">pp</span>
          <div className="font-semibold drop-shadow-[0_0_8px_#f5b7fb]">{player.performance.toLocaleString()}</div>
        </div>
        <div className="transform transition-transform duration-300">
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg\" className="h-5 w-5\" viewBox="0 0 20 20\" fill="currentColor">
              <path fillRule="evenodd\" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z\" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );

  // Mobile view - expanded
  const mobileRowExpanded = (
    <div
      className={`
        md:hidden
        bg-[#3a1a3a] rounded-b-md px-4 py-3 mt-[-4px]
        grid grid-cols-2 gap-y-2 gap-x-4
        ${isExpanded ? "block" : "hidden"}
        animate-fadeIn
      `}
    >
      <div className="flex flex-col">
        <span className="text-xs text-gray-400">Accuracy</span>
        <PerformanceIndicator value={player.accuracy} type="accuracy" />
      </div>
      
      <div className="flex flex-col">
        <span className="text-xs text-gray-400">Play Count</span>
        <div className="text-gray-200">{player.playCount.toLocaleString()}</div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-xs text-gray-400">Ranked Score</span>
        <div className="text-gray-200">{player.rankedScore.toLocaleString()}</div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-xs text-gray-400">Grades</span>
        <div className="flex space-x-3 text-gray-200">
          <div>SS: {player.ss}</div>
          <div>S: {player.s}</div>
          <div>A: {player.a}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="transition-all duration-300">
      {desktopRow}
      {mobileRowCollapsed}
      {mobileRowExpanded}
    </div>
  );
};

export default LeaderboardRow;