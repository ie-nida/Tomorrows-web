import React, { useState } from 'react';
import { leaderboardData } from '../data/leaderboardData';
import NavBar from "../pages/Navbar";
import CountryFlag from './CountryFlag';
import PlayerAvatar from './PlayerAvatar';
import PerformanceIndicator from './PerformanceIndicator';
import PaginationControl from './PaginationControl';  // Assuming PaginationControl is imported

const OsuDailyLeaderboard = () => {
  const rowsPerPage = 14;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = leaderboardData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(leaderboardData.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#340a34] via-[#2e0a2a] to-[#4a0f40] text-white font-mono">
      <NavBar />

      <div className="max-w-6xl mx-auto py-10 px-4 pt-28 md:pt-32">
        {/* Added margin-top to the title container */}
        <div className="flex items-center justify-center mb-8 mt-12">
          <h1 className="text-6xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-600 via-gray-300 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] animate-[pulse_3s_ease-in-out_infinite,bounceSlow_3s_ease-in-out_infinite]">
            Osu! Global Leaderboard
          </h1>
        </div>

        <div className="bg-[#471847] rounded-2xl shadow-lg p-6 border border-solid border-[#b542b5]">
          {/* Pagination Control */}
          <PaginationControl currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

          {/* Column Labels */}
          <div className="grid grid-cols-[2.5rem_25rem_5.5rem_7rem_9rem_6rem_2.5rem_2.5rem_2.5rem] text-xs text-gray-300 font-semibold px-6 py-2">
            <div>#</div>
            <div className="text-left">User</div>
            <div className="text-center">Accuracy</div>
            <div className="text-center">Play Count</div>
            <div className="text-center">Ranked Score</div>
            <div className="text-center">Performance</div>
            <div className="text-center">SS</div>
            <div className="text-center">S</div>
            <div className="text-center">A</div>
          </div>

          {/* Leaderboard Rows */}
          <div className="space-y-[6px] text-xs">
            {currentRows.map((p) => (
              <div
                key={p.rank}
                className="bg-[#781d665d] hover:bg-[#523252] transition duration-300 rounded-md px-6 py-[6px] grid grid-cols-[2.5rem_25rem_5.5rem_7rem_9rem_6rem_2.5rem_2.5rem_2.5rem] items-center"
              >
                {/* Rank */}
                <div className={`font-bold text-sm ${getRankStyles(p.rank)}`}>#{p.rank}</div>

                {/* User and Country Flag */}
                <div className="flex items-center space-x-2">
                  <CountryFlag countryCode={p.countryCode} />
                  <PlayerAvatar username={p.username} avatarUrl={p.avatarUrl} rank={p.rank} />
                  <span className="truncate">{p.username}</span>
                </div>

                {/* Accuracy */}
                <PerformanceIndicator value={p.accuracy} type="accuracy" />

                {/* Play Count */}
                <div className="text-center">{p.playCount.toLocaleString()}</div>

                {/* Ranked Score */}
                <div className="text-center">{p.rankedScore.toLocaleString()}</div>

                {/* Performance */}
                <PerformanceIndicator value={p.performance} type="performance" />

                {/* SS, S, A */}
                <div className="text-right">{p.ss}</div>
                <div className="text-right">{p.s}</div>
                <div className="text-right">{p.a}</div>
              </div>
            ))}
          </div>

          {/* Pagination Bottom */}
          <PaginationControl currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

const getRankStyles = (rank) => {
  if (rank === 1) return 'text-yellow-300 drop-shadow-[0_0_3px_#fde047]';
  if (rank === 2) return 'text-slate-300 drop-shadow-[0_0_3px_#cbd5e1]';
  if (rank === 3) return 'text-amber-600 drop-shadow-[0_0_3px_#d97706]';
  return 'text-white';
};

export default OsuDailyLeaderboard;

