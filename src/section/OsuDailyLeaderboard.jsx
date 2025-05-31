import React, { useState, useEffect } from 'react';
import { leaderboardData } from '../data/leaderboardData';
import NavBar from "../pages/Navbar";
import LeaderboardRow from './LeaderboardRow';
import LeaderboardHeader from './LeaderboardHeader';
import PaginationControl from './PaginationControl';
import Footer from '../components/Footer';

const OsuDailyLeaderboard = () => {
  const [rowsPerPage, setRowsPerPage] = useState(getRowsPerPageByScreenSize());
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRows, setExpandedRows] = useState({});
  
  // Adjust rows per page based on screen size
  useEffect(() => {
    function handleResize() {
      setRowsPerPage(getRowsPerPageByScreenSize());
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  function getRowsPerPageByScreenSize() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 8;  // Mobile
      if (window.innerWidth < 1024) return 10; // Tablet
      return 14; // Desktop
    }
    return 14; // Default
  }
  
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = leaderboardData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(leaderboardData.length / rowsPerPage);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setExpandedRows({}); // Reset expanded rows when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const toggleRowExpand = (rank) => {
    setExpandedRows(prev => ({
      ...prev,
      [rank]: !prev[rank]
    }));
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#340a34] via-[#2e0a2a] to-[#4a0f40] text-white font-sans">
      <NavBar />
      
      <div className="max-w-6xl mx-auto py-10 px-4 pt-24 md:pt-28">
        {/* Title with animation */}
        <div className="flex items-center justify-center mb-8 mt-4 md:mt-8">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-600 via-gray-300 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] animate-[pulse_3s_ease-in-out_infinite]">
            Osu! Global Leaderboard
          </h1>
        </div>
        
        {/* Main leaderboard container */}
        <div className="bg-[#471847] rounded-2xl shadow-lg p-4 md:p-6 border border-solid border-[#b542b5]">
          {/* Pagination Control - Top */}
          <PaginationControl 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
          
          {/* Column Headers */}
          <LeaderboardHeader />
          
          {/* Leaderboard Rows */}
          <div className="space-y-[6px] text-xs sm:text-sm">
            {currentRows.map((player) => (
              <LeaderboardRow 
                key={player.rank} 
                player={player} 
                isExpanded={!!expandedRows[player.rank]} 
                toggleExpand={() => toggleRowExpand(player.rank)}
              />
            ))}
          </div>
          
          {/* Pagination Control - Bottom */}
          <PaginationControl 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        </div>
      </div>
      
      <Footer />
    </div>

  );
};

export default OsuDailyLeaderboard;
