import React from 'react';

const LeaderboardHeader = () => {
  // Desktop view
  const desktopHeader = (
    <div className="hidden md:grid grid-cols-[2rem_minmax(8rem,1fr)_4.5rem_5rem_6rem_4.5rem_2rem_2rem_2rem] lg:grid-cols-[2.5rem_minmax(10rem,1fr)_5.5rem_7rem_9rem_6rem_2.5rem_2.5rem_2.5rem] text-xs text-gray-300 font-semibold px-4 lg:px-6 py-2 gap-1">
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
  );

  // Mobile view
  const mobileHeader = (
    <div className="md:hidden flex justify-between items-center text-xs text-gray-300 font-semibold px-4 py-2">
      <div>Rank / Player</div>
      <div>Performance</div>
    </div>
  );

  return (
    <>
      {desktopHeader}
      {mobileHeader}
    </>
  );
};

export default LeaderboardHeader;