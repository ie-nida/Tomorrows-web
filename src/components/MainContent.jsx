import React from 'react';
import { AlertTriangle, Star } from 'lucide-react';
import TaikoImage from './TaikoImage';


const MainContent = ({ isLoading, currentLanguage }) => {
 
  const contentByLanguage = {
    en: {
      heading: "osu!taiko",
      introduction: {
        title: "Introduction",
        content: "osu!taiko is a game mode that simulates playing a Taiko drum, a traditional Japanese percussion instrument. Players hit notes along with the rhythm of the music by using the assigned keyboard keys or by clicking with the mouse. The gameplay is inspired by Taiko no Tatsujin, a popular arcade rhythm game."
      },
      songSelection: {
        title: "Song Selection",
        content: "In the song selection screen, players can browse and select from thousands of beatmaps. Songs are organized by categories, difficulty, and can be filtered by various criteria. Players can also use the search function to find specific songs or create collections of their favorite maps.",
        features: [
          "Search and filter beatmaps",
          "Preview songs before playing",
          "Sort by difficulty, length, or BPM",
          "Create and manage collections",
          "Download new beatmaps directly from the game"
        ]
      },
      playStyles: {
        title: "Play Styles",
        content: "There are several common play styles in osu!taiko:",
        styles: [
          {
            name: "Keyboard Only",
            description: "Using keyboard keys exclusively (most common method)"
          },
          {
            name: "Mouse Only",
            description: "Using left and right mouse buttons"
          },
          {
            name: "Mixed Style",
            description: "Combination of keyboard and mouse inputs"
          },
          {
            name: "Drum Controller",
            description: "Using a physical Taiko drum controller for authentic gameplay"
          }
        ]
      },
      controls: {
        title: "Controls",
        content: "osu!taiko can be played using various control schemes:",
        defaultControls: {
          title: "Default Controls",
          keys: [
            { action: "Don (Red Notes)", keys: "X or C (Left mouse click)" },
            { action: "Kat (Blue Notes)", keys: "Z or V (Right mouse click)" },
            { action: "Big Don", keys: "C + X simultaneously" },
            { action: "Big Kat", keys: "Z + V simultaneously" }
          ]
        },
        customization: "Players can customize their key bindings in the options menu to match their preferred play style."
      },
      basics: {
        title: "Gameplay Basics",
        content: "In osu!taiko, notes move from right to left along a horizontal line, and the player must hit them when they reach the judgment line (blue bar in the center). There are two main types of notes:",
        notes: {
          don: "Don (red notes): Hit with the center of the drum",
          kat: "Kat (blue notes): Hit with the rim of the drum"
        }
      },
      scoring: {
        title: "Scoring System",
        content: "The scoring system in osu!taiko is based on accuracy and combo:",
        points: {
          great: "Great (良) - 300 points: Perfect timing",
          good: "Good (可) - 100 points: Slightly off timing",
          miss: "Miss (不可) - 0 points: Completely missed or wrong type of hit"
        },
        combo: "A combo multiplier increases as you hit consecutive notes correctly. Missed notes reset your combo."
      },
      difficulty: {
        title: "Difficulty Levels",
        content: "Maps in osu!taiko are categorized into different difficulty levels:",
        levels: [
          { 
            name: "Easy", 
            stars: 1, 
            description: "Simple patterns, slower rhythm",
            starElement: <Star size={16} className="text-[#88FF88]" />
          },
          { 
            name: "Normal", 
            stars: 2, 
            description: "Basic patterns, moderate speed",
            starElement: (
              <>
                <Star size={16} className="text-[#FFFF88]" />
                <Star size={16} className="text-[#FFFF88]" />
              </>
            )
          },
          { 
            name: "Hard", 
            stars: 3, 
            description: "Complex patterns, faster rhythm",
            starElement: (
              <>
                <Star size={16} className="text-[#FF8888]" />
                <Star size={16} className="text-[#FF8888]" />
                <Star size={16} className="text-[#FF8888]" />
              </>
            )
          },
          { 
            name: "Expert", 
            stars: 4, 
            description: "Intense patterns, high speed",
            starElement: (
              <>
                <Star size={16} className="text-[#FF88FF]" />
                <Star size={16} className="text-[#FF88FF]" />
                <Star size={16} className="text-[#FF88FF]" />
                <Star size={16} className="text-[#FF88FF]" />
              </>
            )
          },
          { 
            name: "Inner/Ura Oni", 
            stars: 5, 
            description: "Extremely challenging patterns, very high speed",
            starElement: (
              <div className="flex">
                <Star size={16} className="text-[#8888FF]" />
                <Star size={16} className="text-[#8888FF]" />
                <Star size={16} className="text-[#8888FF]" />
                <Star size={16} className="text-[#8888FF]" />
                <Star size={16} className="text-[#8888FF]" />
              </div>
            )
          }
        ]
      },
      skinning: {
        title: "Skinning in osu!taiko",
        content: "Skinning allows players to customize the visual appearance of osu!taiko to their preferences. Players can modify various elements of the game interface, note appearance, animations, and sound effects.",
        elements: {
          title: "Customizable Elements",
          items: [
            { name: "Don/Kat Notes", description: "Change the appearance of red and blue notes" },
            { name: "Hit Explosions", description: "Custom animations when hitting notes" },
            { name: "Judgment Line", description: "Modify the appearance of the center line" },
            { name: "Hit Sounds", description: "Replace the default drum sounds with custom sounds" },
            { name: "Background", description: "Customize the playfield background" },
            { name: "Drum Animation", description: "Change how the taiko drum looks and animates" }
          ]
        },
        howTo: {
          title: "How to Apply Skins",
          steps: [
            "Download a skin or create your own",
            "Place skin files in the 'Skins' folder in your osu! directory",
            "Select the skin in Options > Skin",
            "Enable skin's sound effects in Options > Audio"
          ]
        },
        community: "The osu! community is known for creating and sharing a wide variety of creative skins. Many players enjoy modifying existing skins or creating their own to match their personal aesthetic preferences or to improve gameplay visibility."
      },
      mapping: {
        title: "osu!taiko Mapping",
        content: "Creating beatmaps for osu!taiko involves placing notes to match the rhythm and feel of the music. Mappers need to consider various aspects such as note density, patterns, and the overall flow of the map to create an enjoyable gameplay experience."
      },
      conversion: {
        title: "osu! Conversion Notes",
        content: "Standard osu! beatmaps can be automatically converted to osu!taiko format. However, there are some important considerations:",
        points: [
          "Slider patterns may not translate perfectly to drum hits",
          "Some complex patterns might become oversimplified",
          "Difficulty ratings may not accurately reflect taiko gameplay",
          "Native taiko maps generally provide a better playing experience"
        ]
      },
      trivia: {
        title: "Trivia",
        gameplay: {
          title: "Gameplay Trivia",
          facts: [
            "The drum animation was inspired by Taiko no Tatsujin arcade machines",
            "Early versions of osu!taiko had different note colors",
            "The highest possible combo depends on the map length",
            "Some players can achieve over 99% accuracy on expert maps"
          ]
        }
      },
      history: {
        title: "History",
        content: "osu!taiko was added to osu! in July 2008 as the second game mode after the standard osu! mode. It was inspired by Taiko no Tatsujin, a popular arcade and console rhythm game developed by Namco."
      }
    }
  };

  const content = contentByLanguage[currentLanguage] || contentByLanguage.en;

  return (
    <main className="flex-1 overflow-y-auto bg-[#222] p-4">
      <div className="container mx-auto max-w-4xl">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-400">Translating content...</p>
          </div>
        ) : (
          <div className="fade-in">
            {/* Main heading */}
            <h1 className="text-4xl font-bold mb-8 pb-4 border-b border-[#3a3a3a] text-yellow-400">
              {content.heading}
            </h1>

            {/* Main game image */}
            <div className="mb-8 rounded-md overflow-hidden">
              <TaikoImage 
                src="./taiko.gif" 
                alt="osu!taiko gameplay"
                className="w-full h-auto rounded-md"
              />
            </div>

            {/* Introduction */}
            <section className="mb-8">
              <h2 id="introduction" className="text-2xl font-bold mb-4 text-pink-400">{content.introduction.title}</h2>
              <p className="text-gray-300 leading-relaxed">{content.introduction.content}</p>
            </section>

            {/* Song Selection */}
            <section className="mb-8">
              <h2 id="song-selection" className="text-2xl font-bold mb-4 text-pink-400">{content.songSelection.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.songSelection.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {content.songSelection.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* Play Styles */}
            <section className="mb-8">
              <h2 id="play-styles" className="text-2xl font-bold mb-4 text-pink-400">{content.playStyles.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.playStyles.content}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.playStyles.styles.map((style, index) => (
                  <div key={index} className="bg-[#2a2a2a] p-4 rounded-md">
                    <h3 className="text-yellow-400 font-medium mb-2">{style.name}</h3>
                    <p className="text-gray-300">{style.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Controls */}
            <section className="mb-8">
              <h2 id="controls" className="text-2xl font-bold mb-4 text-pink-400">{content.controls.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.controls.content}</p>
              <div className="bg-[#2a2a2a] p-4 rounded-md mb-4">
                <h3 className="text-yellow-400 font-medium mb-3">{content.controls.defaultControls.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.controls.defaultControls.keys.map((key, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-gray-300">{key.action}:</span>
                      <span className="text-pink-400 font-medium">{key.keys}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 italic">{content.controls.customization}</p>
            </section>

            {/* Gameplay Basics */}
            
            <section className="mb-8">
              <h2 id="gameplay-basics" className="text-2xl font-bold mb-4 text-pink-400">{content.basics.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.basics.content}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <TaikoImage 
                  src="./basics.png" 
                  alt="Don and Kat notes" 
                  className="rounded-md"
                />
                <TaikoImage 
                  src="./basic.gif" 
                  alt="Taiko gameplay example" 
                  className="rounded-md"
                />
              </div>
            </section>

            {/* Scoring System */}
            <section className="mb-8">
              <h2 id="scoring" className="text-2xl font-bold mb-4 text-pink-400">{content.scoring.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.scoring.content}</p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                <li><span className="text-green-400 font-medium">{content.scoring.points.great}</span></li>
                <li><span className="text-yellow-400 font-medium">{content.scoring.points.good}</span></li>
                <li><span className="text-red-400 font-medium">{content.scoring.points.miss}</span></li>
              </ul>
              <p className="text-gray-300 leading-relaxed">{content.scoring.combo}</p>
            </section>

            {/* Difficulty Levels */}
            <section className="mb-8">
              <h2 id="difficulty" className="text-2xl font-bold mb-4 text-pink-400">{content.difficulty.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.difficulty.content}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {content.difficulty.levels.map((level, index) => (
                  <div key={index} className="bg-[#2a2a2a] p-4 rounded-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-yellow-400 font-bold">{level.name}</span>
                      <div className="flex">{level.starElement}</div>
                    </div>
                    <p className="text-gray-300 text-sm">{level.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Skinning */}
            <section className="mb-8">
              <h2 id="skinning" className="text-2xl font-bold mb-4 text-pink-400">{content.skinning.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.skinning.content}</p>

              <div className="bg-[#2a2a2a] p-4 rounded-md mb-6">
                <h3 className="text-yellow-400 font-medium mb-3">{content.skinning.elements.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.skinning.elements.items.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-pink-400 font-medium">{item.name}</span>
                      <span className="text-gray-300 text-sm">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#2a2a2a] p-4 rounded-md mb-6">
                <h3 className="text-yellow-400 font-medium mb-3">{content.skinning.howTo.title}</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  {content.skinning.howTo.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <p className="text-gray-300 leading-relaxed">{content.skinning.community}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-[#2a2a2a] p-4 rounded-md">
                  <TaikoImage 
                    src="./default.jpg" 
                    alt="Default osu!taiko skin" 
                    className="rounded-md mb-2"
                  />
                  <p className="text-center text-sm text-gray-400">Default skin</p>
                </div>
                <div className="bg-[#2a2a2a] p-4 rounded-md">
                  <TaikoImage 
                    src="./custom.jpg" 
                    alt="Custom osu!taiko skin" 
                    className="rounded-md mb-2"
                  />
                  <p className="text-center text-sm text-gray-400">Custom skin example</p>
                </div>
              </div>
            </section>

            {/* Mapping */}
            <section className="mb-8">
              <h2 id="mapping" className="text-2xl font-bold mb-4 text-pink-400">{content.mapping.title}</h2>
              <p className="text-gray-300 leading-relaxed">{content.mapping.content}</p>
            </section>

            {/* Conversion Notes */}
            <section className="mb-8">
              <h2 id="conversion-notes" className="text-2xl font-bold mb-4 text-pink-400">{content.conversion.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.conversion.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {content.conversion.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </section>

            {/* Trivia - Gameplay */}
            <section className="mb-8">
              <h2 id="trivia-gameplay" className="text-2xl font-bold mb-4 text-pink-400">{content.trivia.gameplay.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {content.trivia.gameplay.facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </section>

            {/* History */}
            <section className="mb-8">
              <h2 id="history" className="text-2xl font-bold mb-4 text-pink-400">{content.history.title}</h2>
              <p className="text-gray-300 leading-relaxed">{content.history.content}</p>
              <div className="mt-6">
                <div className="rounded-md overflow-hidden mx-auto max-w-lg">
                  <video 
                    className="w-full h-auto" 
                    controls
                    muted
                    poster="./history.jpg"
                  >
                    <source src="./History.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-center text-sm text-gray-400 mt-2">History of Osu! taiko </p>
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;