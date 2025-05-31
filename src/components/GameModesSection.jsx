
import React from 'react';
import { Target, BarChart3, Layout, Music } from 'lucide-react';

const GameModeCard = ({ icon, name, description, difficulty, color, link, index }) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-xl p-6 transition-all duration-300 
      hover:scale-105 hover:shadow-[0_0_15px_rgba(139,0,78,0.5)] cursor-pointer
      bg-gradient-to-br from-gray-900 to-black border-l-4 ${color} transform hover:-translate-y-2`}
      style={{
        animationDelay: `${0.1 * index}s`,
        animation: 'fadeInUp 0.5s ease-out forwards'
      }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div 
          className={`p-3 rounded-full ${color.replace('border-', 'bg-')} bg-opacity-20 hover:bg-opacity-40 transition-all duration-200 hover:scale-110`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-black bg-opacity-50 text-white">
            {difficulty}
          </span>
        </div>
      </div>
      <p className="text-gray-300 text-sm">{description}</p>

      <div className="hover:scale-105 active:scale-95 transition-transform duration-200">
        <a
          href={link}
          className={`mt-4 inline-block px-4 py-2 rounded-md text-sm font-medium text-white 
            ${color.replace('border-', 'bg-')} hover:brightness-110 transition-all`}
        >
          Read More
        </a>
      </div>

      {/* Decorative elements with animation */}
      <div 
        className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white opacity-5 animate-pulse"
        style={{
          animationDelay: `${index * 0.2}s`,
          animationDuration: '3s'
        }}
      />
      <div 
        className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-white opacity-5 animate-pulse"
        style={{
          animationDelay: `${index * 0.3}s`,
          animationDuration: '4s'
        }}
      />
    </div>
  );
};

const GameModesSection = () => {
  const gameModes = [
    {
      icon: <Target size={24} className="text-pink-500" />,
      name: "osu! Standard",
      description: "Click the circles to the beat! The original osu! gameplay experience.",
      difficulty: "All Skill Levels",
      color: "border-pink-700",
      link: "/standard"
    },
    {
      icon: <Music size={24} className="text-blue-500" />,
      name: "osu! Taiko",
      description: "A drum rhythm game. Hit the drums with the right timing and color!",
      difficulty: "Beginner Friendly",
      color: "border-blue-700",
      link: "/taiko"
    },
    {
      icon: <BarChart3 size={24} className="text-red-700" />,
      name: "osu! Catch",
      description: "Catch the falling fruits to the rhythm of the music.",
      difficulty: "Easy to Learn",
      color: "border-red-400",
      link: "/catch"
    },
    {
      icon: <Layout size={24} className="text-purple-500" />,
      name: "osu! Mania",
      description: "A vertical scrolling rhythm game with multiple keys.",
      difficulty: "Advanced",
      color: "border-purple-700",
      link: "/mania"
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 5px 10px rgba(198,36,110,0.3);
          }
          50% {
            text-shadow: 0 5px 15px rgba(198,36,110,0.7);
          }
        }
        
        .title-glow {
          animation: textGlow 3s infinite;
        }
      `}</style>
      
      <section className="bg-gradient-to-b from-[#000000] to-[#240715] text-white min-h-screen w-full px-4 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="title-glow inline-block text-5xl font-extrabold bg-gradient-to-r from-[#9a094a] via-[#fbaad1] to-white bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(198,36,110,0.7)]">
              Game Modes
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Choose your rhythm challenge from four unique game modes, each offering a different way to experience the music.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameModes.map((mode, index) => (
              <GameModeCard 
                key={index}
                icon={mode.icon}
                name={mode.name}
                description={mode.description}
                difficulty={mode.difficulty}
                color={mode.color}
                link={mode.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GameModesSection;