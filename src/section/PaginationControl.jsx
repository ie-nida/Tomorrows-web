import React from 'react';

const PaginationControl = ({ currentPage, totalPages, onPageChange }) => {
  
  const getPageNumbers = () => {
    const pages = [];
    
    pages.push(1); 
    
    const rangeStart = Math.max(2, currentPage - 1);
    const rangeEnd = Math.min(totalPages - 1, currentPage + 1);
    
    if (rangeStart > 2) {
      pages.push('ellipsis1');
    }
    
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }
    
    if (rangeEnd < totalPages - 1) {
      pages.push('ellipsis2');
    }
    
    if (totalPages > 1) {
      pages.push(totalPages); 
    }
    
    return pages;
  };
  
  return (
    <div className="flex justify-center flex-wrap gap-2 text-sm my-6">
      <button
        className="bg-[#77487d] hover:bg-[#8d5894] px-3 py-1 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : currentPage)}
        disabled={currentPage === 1}
      >
        <span className="transform translate-y-[-1px] mr-1">‹</span> Prev
      </button>
    
      {getPageNumbers().map((page, index) =>
        page === 'ellipsis1' || page === 'ellipsis2' ? (
          <span key={`ellipsis-${index}`} className="px-2 py-1 text-gray-400">
            …
          </span>
        ) : (
          <button
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 ${
              currentPage === page
                ? 'bg-[#9e4670] text-white font-bold scale-110 shadow-lg shadow-pink-900/40'
                : 'bg-[#7d2a6c] hover:bg-[#894a6c]'
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}
    
      <button
        className="bg-[#77487d] hover:bg-[#8d5894] px-3 py-1 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        onClick={() => onPageChange(currentPage < totalPages ? currentPage + 1 : currentPage)}
        disabled={currentPage === totalPages}
      >
        Next <span className="transform translate-y-[-1px] ml-1">›</span>
      </button>
    </div>
  );
};

export default PaginationControl;
