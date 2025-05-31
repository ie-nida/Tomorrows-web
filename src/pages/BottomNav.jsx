import React from 'react';
import { Home, Download, Trophy, Users, HelpCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const NavItem = ({ icon, label, to, isActive }) => {
  return (
    <a 
      href={to}
      className={`flex flex-col items-center justify-center px-2 py-2 transition-all duration-300 relative ${
        isActive 
          ? 'text-white scale-105' 
          : 'text-gray-200 hover:text-white hover:scale-105'
      }`}
    >
      {/* Animated background circle for active state */}
      {isActive && (
        <div className="absolute inset-0 
                       opacity-90 animate-pulse-slow -z-10"></div>
      )}
      
      {/* Icon container with circle background */}
      <div className={`relative flex items-center justify-center w-10 h-10 mb-1 rounded-full 
                      transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-pink-900 to-purple-900 shadow-lg shadow-pink-500/30' 
                          : 'bg-gray-800 hover:bg-gray-700'
                      }`}>
        {icon}
      </div>
      
      {/* Label with animation */}
      <span className={`text-xs font-medium transition-all duration-300 ${
        isActive ? 'font-bold' : ''
      }`}>{label}</span>
    </a>
  );
};

const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navItems = [
    { 
      icon: <Home className="w-5 h-5" />, 
      label: 'Home', 
      to: '/lobby' 
    },
    { 
      icon: <Download className="w-5 h-5" />, 
      label: 'Play', 
      to: '/download' 
    },
    { 
      icon: <Trophy className="w-5 h-5" />, 
      label: 'Leaderboard', 
      to: '/OsuDailyLeaderboard' 
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      label: 'Community', 
      to: '/communitylive' 
    },
    { 
      icon: <HelpCircle className="w-5 h-5" />, 
      label: 'Help', 
      to: '/help' 
    }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-lg shadow-lg z-50
                    border-t border-pink-500/20">
      <div className="flex justify-between items-center px-1 py-2 max-w-md mx-auto">
        {navItems.map((item, index) => (
          <NavItem 
            key={index}
            icon={item.icon}
            label={item.label}
            to={item.to}
            isActive={currentPath === item.to}
          />
        ))}
      </div>
    </div>
  );
};

export default BottomNav;