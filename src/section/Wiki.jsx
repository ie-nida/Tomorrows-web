import React from 'react';
import { ExternalLink, Mouse, Keyboard, MonitorPlay, Music, PaintBucket } from 'lucide-react';

const Wiki = ({ subsection, language }) => {
  // For demonstration, we'll use English content
  const content = {
    title: "osu! Wiki",
    introduction: {
      title: "Introduction",
      content: "Welcome to osu!, a free-to-play rhythm game developed by peppy with four game modes: osu!standard, a circle clicking game; osu!taiko, a drumming game; osu!catch, a fruit catching game; and osu!mania, a key smashing game."
    },
    gettingStarted: {
      title: "Getting Started with osu!",
      steps: [
        {
          title: "Download and Install",
          content: "Download the game from the official website and install it on your computer. osu! is available for Windows, macOS, and Linux."
        },
        {
          title: "Create an Account",
          content: "Sign up for an osu! account to access all features like online rankings, beatmap downloads, and community interaction."
        },
        {
          title: "Tutorial",
          content: "Complete the built-in tutorial to learn the basics of gameplay and controls."
        },
        {
          title: "Download Beatmaps",
          content: "Browse and download beatmaps (songs) to play from the in-game browser or the osu! website."
        }
      ]
    },
    gameplay: {
      title: "Gameplay Basics",
      content: "osu! is a rhythm game where you need to click, slide, or spin along with the beat of the music. The gameplay varies depending on the game mode you choose.",
      fundamentals: [
        {
          title: "Timing",
          content: "Hit notes exactly on the beat for maximum points"
        },
        {
          title: "Accuracy",
          content: "Your accuracy affects your score and ranking"
        },
        {
          title: "Combos",
          content: "Maintaining a combo by hitting consecutive notes boosts your score"
        },
        {
          title: "Health Bar",
          content: "Missing notes depletes your health bar - if it empties, you fail the map"
        }
      ],
      scoring: {
        title: "Scoring System",
        points: [
          { type: "300", description: "Perfect hit (100% accuracy)" },
          { type: "100", description: "Good hit (66% accuracy)" },
          { type: "50", description: "Okay hit (33% accuracy)" },
          { type: "Miss", description: "No points, combo reset" }
        ]
      }
    },
    gameModes: {
      title: "Game Modes",
      modes: [
        {
          name: "osu!standard",
          icon: <Mouse size={24} className="text-pink-400" />,
          description: "The original game mode. Click circles, follow sliders, and spin spinners in time with the music."
        },
        {
          name: "osu!taiko",
          icon: <Music size={24} className="text-pink-400" />,
          description: "Inspired by Taiko no Tatsujin, hit red and blue notes with the correct drum in time with the music."
        },
        {
          name: "osu!catch",
          icon: <MonitorPlay size={24} className="text-pink-400" />,
          description: "Move a character to catch falling fruits in time with the music."
        },
        {
          name: "osu!mania",
          icon: <Keyboard size={24} className="text-pink-400" />,
          description: "A vertically scrolling rhythm game similar to beatmania IIDX or Dance Dance Revolution."
        }
      ]
    },
    skinning: {
      title: "Skinning",
      content: "Personalize your osu! experience by customizing how the game looks and sounds.",
      elements: [
        "Hitcircles and approach circles",
        "Sliders and slider ticks",
        "Spinners",
        "Hit explosions",
        "Combo colors",
        "Cursor and cursor trail",
        "Menu elements",
        "Sound effects"
      ],
      resources: [
        { name: "osu! forums", url: "https://osu.ppy.sh/community/forums/15" },
        { name: "Skinning wiki", url: "https://osu.ppy.sh/wiki/en/Skinning" },
        { name: "osu!resources", url: "https://osuresources.com" }
      ]
    }
  };

  // Determine which subsection to show
  const renderSubsection = () => {
    switch (subsection) {
      case '-getting-started':
        return (
          <section className="mb-8">
            <h2 id="getting-started" className="text-2xl font-bold mb-4 text-pink-400">
              {content.gettingStarted.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {content.gettingStarted.steps.map((step, index) => (
                <div key={index} className="bg-[#2a2a2a] p-5 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-300">{step.content}</p>
                </div>
              ))}
            </div>
          </section>
        );
      case '-gameplay':
        return (
          <section className="mb-8">
            <h2 id="gameplay" className="text-2xl font-bold mb-4 text-pink-400">
              {content.gameplay.title}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {content.gameplay.content}
            </p>
            
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
              {content.gameplay.fundamentals[0].title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {content.gameplay.fundamentals.map((item, index) => (
                <div key={index} className="bg-[#2a2a2a] p-4 rounded-md">
                  <h4 className="text-lg font-medium text-pink-400 mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.content}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
              {content.gameplay.scoring.title}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr className="bg-[#2a2a2a]">
                    <th className="py-2 px-4 text-left text-yellow-400 border-b border-[#3a3a3a]">Hit Value</th>
                    <th className="py-2 px-4 text-left text-yellow-400 border-b border-[#3a3a3a]">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {content.gameplay.scoring.points.map((point, index) => (
                    <tr key={index} className="hover:bg-[#2a2a2a]">
                      <td className="py-2 px-4 border-b border-[#3a3a3a] text-pink-400 font-medium">{point.type}</td>
                      <td className="py-2 px-4 border-b border-[#3a3a3a] text-gray-300">{point.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      case '-game-modes':
        return (
          <section className="mb-8">
            <h2 id="game-modes" className="text-2xl font-bold mb-4 text-pink-400">
              {content.gameModes.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {content.gameModes.modes.map((mode, index) => (
                <div key={index} className="bg-[#2a2a2a] p-5 rounded-lg shadow-md">
                  <div className="flex items-center mb-3">
                    {mode.icon}
                    <h3 className="ml-2 text-xl font-semibold text-yellow-400">{mode.name}</h3>
                  </div>
                  <p className="text-gray-300">{mode.description}</p>
                </div>
              ))}
            </div>
          </section>
        );
      case '-skinning':
        return (
          <section className="mb-8">
            <h2 id="skinning" className="text-2xl font-bold mb-4 text-pink-400">
              {content.skinning.title}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {content.skinning.content}
            </p>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  Customizable Elements
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  {content.skinning.elements.map((element, index) => (
                    <li key={index}>{element}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  Skinning Resources
                </h3>
                <div className="bg-[#2a2a2a] p-4 rounded-md">
                  <ul className="space-y-3">
                    {content.skinning.resources.map((resource, index) => (
                      <li key={index}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-pink-400 hover:text-pink-300 transition-colors"
                        >
                          <PaintBucket size={18} className="mr-2" />
                          <span>{resource.name}</span>
                          <ExternalLink size={14} className="ml-2" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      default:
        return (
          <>
            <section className="mb-8">
              <h1 className="text-4xl font-bold mb-6 pb-2 border-b border-[#3a3a3a] text-pink-400">
                {content.title}
              </h1>
              <div className="mb-6">
                <img 
                  src="/api/placeholder/800/450"
                  alt="osu! gameplay" 
                  className="w-full h-auto rounded-md shadow-lg"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-pink-400">
                {content.introduction.title}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {content.introduction.content}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md transform transition-transform hover:scale-[1.02]">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">For New Players</h3>
                  <p className="text-gray-300 mb-4">
                    New to osu!? Check out our getting started guide to learn everything you need to know about the game.
                  </p>
                  <a 
                    href="#getting-started" 
                    className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Getting Started
                  </a>
                </div>
                <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md transform transition-transform hover:scale-[1.02]">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">Game Modes</h3>
                  <p className="text-gray-300 mb-4">
                    Explore the four different game modes in osu! and find the one that suits your style.
                  </p>
                  <a 
                    href="#game-modes" 
                    className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    View Game Modes
                  </a>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return renderSubsection();
};

export default Wiki;