import React from 'react';
import { Player } from '../data/leaderboardData';
import CountryFlag from './CountryFlag';
import PlayerAvatar from './PlayerAvatar';
import PerformanceIndicator from './PerformanceIndicator';

const LeaderboardRow = ({ player }) => {
  const isTopRanked = player.rank <= 3;

  const getRankStyles = () => {
    if (player.rank === 1) return 'text-yellow-300 drop-shadow-[0_0_3px_#fde047]';
    if (player.rank === 2) return 'text-slate-300 drop-shadow-[0_0_3px_#cbd5e1]';
    if (player.rank === 3) return 'text-amber-600 drop-shadow-[0_0_3px_#d97706]';
    return 'text-white';
  };

  return (
    <div
      className={`
        bg-gradient-to-r from-[#781d665d] to-[#5c125c5d] 
        hover:from-[#8a2675] hover:to-[#6c156c] 
        transition-all duration-300 rounded-md px-6 py-[6px] 
        grid grid-cols-[2.5rem_25rem_5.5rem_7rem_9rem_6rem_2.5rem_2.5rem_2.5rem] items-center
        ${isTopRanked ? 'shadow-lg shadow-pink-900/30 border border-pink-800/30' : ''}
      `}
    >
      <div className={`font-bold text-sm ${getRankStyles()}`}>{`#${player.rank}`}</div>

      <div className="flex items-center space-x-2">
        <CountryFlag countryCode={player.countryCode} />
        <PlayerAvatar 
          username={player.username} 
          avatarUrl={player.avatarUrl} 
          rank={player.rank} 
        />
        <span className="truncate ml-1 font-medium">{player.username}</span>
      </div>

      <PerformanceIndicator value={player.accuracy} type="accuracy" />
      <div className="text-center text-gray-200">{player.playCount.toLocaleString()}</div>
      <div className="text-center text-gray-200">{player.rankedScore.toLocaleString()}</div>
      <PerformanceIndicator value={player.performance} type="performance" />
      <div className="text-right text-gray-200">{player.ss}</div>
      <div className="text-right text-gray-200">{player.s}</div>
      <div className="text-right text-gray-200">{player.a}</div>
    </div>
  );
};

export default LeaderboardRow;
