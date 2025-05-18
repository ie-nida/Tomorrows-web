import React from 'react';
import { Star } from 'lucide-react';
import ManiaImage from './ManiaImage';

const ManiaMainContent = ({ isLoading, currentLanguage }) => {
  // Content organized by language
  const contentByLanguage = {
    en: {
      heading: "osu!mania",
      introduction: {
        title: "Introduction",
        content: "osu!mania is a game mode that simulates playing a keyboard or piano. Players press keys to hit notes that fall from the top of the screen, matching the rhythm of the music. The gameplay is inspired by rhythm games like Beatmania IIDX, Dance Dance Revolution, and O2Jam."
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
      keymodes: {
        title: "Keymodes",
        content: "osu!mania features different key counts, called keymodes, which determines the number of columns displayed in the gameplay field:",
        modes: [
          {
            name: "4K",
            description: "Four key mode - popular for beginners"
          },
          {
            name: "7K",
            description: "Seven key mode - similar to games like Beatmania IIDX"
          },
          {
            name: "5K",
            description: "Five key mode - middle ground between simple and complex"
          },
          {
            name: "6K",
            description: "Six key mode - stepped difficulty from 4K"
          },
          {
            name: "8K",
            description: "Eight key mode - high complexity, similar to 7K+1"
          },
          {
            name: "9K",
            description: "Nine key mode - most complex standard configuration"
          }
        ]
      },
      controls: {
        title: "Controls",
        content: "osu!mania controls can be customized, but the default controls depend on the keymode:",
        defaultControls: {
          title: "Default Controls",
          keymodes: [
            {
              name: "4K",
              keys: "D, F, J, K"
            },
            {
              name: "7K",
              keys: "S, D, F, Space, J, K, L"
            }
          ]
        },
        customization: "Players can customize their key bindings in the options menu to match their preferred play style. Many advanced players use specific key layouts to optimize their performance."
      },
      basics: {
        title: "Gameplay Basics",
        content: "In osu!mania, notes fall from the top of the screen and must be hit when they reach the judgment line at the bottom. There are several types of notes:",
        notes: [
          {
            name: "Regular Notes",
            description: "Tap when the note reaches the judgment line"
          },
          {
            name: "Hold Notes",
            description: "Press and hold until the end of the note passes the judgment line"
          }
        ]
      },
      scoring: {
        title: "Scoring System",
        content: "The scoring system in osu!mania is based on accuracy and combo:",
        points: {
          max: "MAX (彩) - 320 points: Perfect timing",
          perfect: "PERFECT (良) - 300 points: Great timing",
          great: "GREAT (可) - 200 points: Good timing",
          good: "GOOD (不可) - 100 points: Off timing",
          bad: "BAD (不可) - 50 points: Significantly off timing",
          miss: "MISS (激不可) - 0 points: Completely missed"
        },
        combo: "A combo multiplier increases as you hit consecutive notes correctly. Missed notes reset your combo."
      },
      difficulty: {
        title: "Difficulty Levels",
        content: "Maps in osu!mania are categorized into different difficulty levels:",
        levels: [
          {
            name: "Beginner",
            stars: 1,
            description: "Simple patterns, slow falling speed",
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
            description: "Complex patterns, faster speed",
            starElement: (
              <>
                <Star size={16} className="text-[#FF8888]" />
                <Star size={16} className="text-[#FF8888]" />
                <Star size={16} className="text-[#FF8888]" />
              </>
            )
          },
          {
            name: "Insane",
            stars: 4,
            description: "Dense patterns, high speed",
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
            name: "Extra",
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
        title: "Skinning in osu!mania",
        content: "Skinning allows players to customize the visual appearance of osu!mania to their preferences. Players can modify various elements of the game interface, note appearance, animations, and sound effects.",
        elements: {
          title: "Customizable Elements",
          items: [
            {
              name: "Note Appearance",
              description: "Change how notes look and their colors"
            },
            {
              name: "Hit Effects",
              description: "Custom animations when hitting notes"
            },
            {
              name: "Judgment Line",
              description: "Modify the appearance of the judgment line"
            },
            {
              name: "Hit Sounds",
              description: "Replace the default sounds with custom sounds"
            },
            {
              name: "Background",
              description: "Customize the playfield background"
            },
            {
              name: "Column Width",
              description: "Adjust how wide each column appears"
            }
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
        title: "osu!mania Mapping",
        content: "Creating beatmaps for osu!mania involves placing notes to match the rhythm and feel of the music. Mappers need to consider various aspects such as note density, patterns, and the overall flow of the map to create an enjoyable gameplay experience.",
        aspects: [
          "Pattern Creation - Creating rhythmically engaging note patterns",
          "Difficulty Balancing - Ensuring appropriate challenge for the target difficulty",
          "Column Usage - Thoughtful distribution of notes across columns",
          "Long Note Placement - Strategic positioning of hold notes"
        ]
      },
      conversion: {
        title: "osu! Conversion Notes",
        content: "Standard osu! beatmaps can be automatically converted to osu!mania format. However, there are some important considerations:",
        points: [
          "Notes will be distributed across the available columns",
          "Sliders may not translate cleanly to hold notes",
          "Some complex patterns in standard mode may feel awkward in mania",
          "Difficulty ratings may not accurately reflect mania gameplay",
          "Native mania maps generally provide a better playing experience"
        ]
      },
      trivia: {
        title: "Trivia",
        gameplay: {
          title: "Gameplay Trivia",
          facts: [
            "osu!mania was the fourth game mode added to osu!",
            "Players have developed various techniques like 'jacks' (rapid repeated notes on the same column) and 'streams' (continuous notes across multiple columns)",
            "Some players can achieve scores over 990,000 out of a possible 1,000,000 on the most difficult maps",
            "The world's best players can handle speeds exceeding 250+ BPM with complex patterns"
          ]
        }
      },
      history: {
        title: "History",
        content: "osu!mania was added to osu! in 2012 as the fourth game mode. It was inspired by vertical scrolling rhythm games like Beatmania IIDX, Dance Dance Revolution, and O2Jam. The mode quickly gained popularity among rhythm game enthusiasts looking for a keyboard-based challenge.",
        milestones: [
          "2012: osu!mania was officially added to osu!",
          "2013: Support for multiple keymodes was introduced",
          "2014: The first official osu!mania tournament was held",
          "2017: Significant judgment improvements were made for more accurate timing"
        ]
      }
    }
  };
  
  const content = contentByLanguage[currentLanguage] || contentByLanguage.en;

  return (
    <main className="flex-1 overflow-y-auto bg-[#222] p-4">
      <div className="container mx-auto max-w-4xl">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-400">Translating content...</p>
          </div>
        ) : (
          <div className="fade-in">
            {/* Main heading */}
            <h1 className="text-4xl font-bold mb-8 pb-4 border-b border-[#3a3a3a] text-purple-400">
              {content.heading}
            </h1>

            {/* Main game image */}
            <div className="mb-8 rounded-md overflow-hidden w-[30%] mx-auto">
              <ManiaImage 
                src="./mania.gif" 
                alt="osu!mania gameplay"
                className="w-full h-auto rounded-md"
              />
            </div>

            {/* Introduction */}
            <section className="mb-8">
              <h2 id="introduction" className="text-2xl font-bold mb-4 text-purple-400">{content.introduction.title}</h2>
              <p className="text-gray-300 leading-relaxed">{content.introduction.content}</p>
            </section>

            {/* Song Selection */}
            <section className="mb-8">
              <h2 id="song-selection" className="text-2xl font-bold mb-4 text-purple-400">{content.songSelection.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.songSelection.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {content.songSelection.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* Keymodes */}
            <section className="mb-8">
              <h2 id="keymodes" className="text-2xl font-bold mb-4 text-purple-400">{content.keymodes.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.keymodes.content}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {content.keymodes.modes.map((mode, index) => (
                  <div key={index} className="bg-[#2a2a2a] p-4 rounded-md transition-transform hover:scale-[1.02] duration-200">
                    <h3 className="text-purple-400 font-medium mb-2">{mode.name}</h3>
                    <p className="text-gray-300">{mode.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <ManiaImage 
                  src="./4k.jpg" 
                  alt="4K gameplay" 
                  className="rounded-md aspect-video object-cover"
                />
                <ManiaImage 
                  src="./7k.jpg" 
                  alt="7K gameplay" 
                  className="rounded-md aspect-video object-cover"
                />
              </div>
            </section>

            {/* Controls */}
            <section className="mb-8">
              <h2 id="controls" className="text-2xl font-bold mb-4 text-purple-400">{content.controls.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.controls.content}</p>
              <div className="bg-[#2a2a2a] p-4 rounded-md mb-4">
                <h3 className="text-purple-400 font-medium mb-3">{content.controls.defaultControls.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.controls.defaultControls.keymodes.map((keymode, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-[#333] rounded-md">
                      <span className="text-gray-300 font-bold">{keymode.name}:</span>
                      <span className="text-purple-400 font-medium">{keymode.keys}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 italic">{content.controls.customization}</p>
              <div className="mt-4">
                <ManiaImage 
                  src="./player.png" 
                  alt="Player hands on keyboard" 
                  className="rounded-md"
                />
              </div>
            </section>

            {/* Gameplay Basics */}
            <section className="mb-8">
              <h2 id="gameplay-basics" className="text-2xl font-bold mb-4 text-purple-400">{content.basics.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.basics.content}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.basics.notes.map((note, index) => (
                  <div key={index} className="bg-[#2a2a2a] p-4 rounded-md">
                    <h3 className="text-purple-400 font-medium mb-2">{note.name}</h3>
                    <p className="text-gray-300">{note.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <ManiaImage 
                  src="./maniagameplay.jpg" 
                  alt="Gameplay screenshot" 
                  className="rounded-md"
                />
                <video 
                    className="w-full h-auto" 
                    controls
                    muted
                    poster="./maniathumbnail.jpg"
                  >
                    <source src="./Gameplay.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
              </div>
            </section>

            {/* Scoring System */}
            <section className="mb-8">
              <h2 id="scoring" className="text-2xl font-bold mb-4 text-purple-400">{content.scoring.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.scoring.content}</p>
              <div className="bg-[#2a2a2a] p-4 rounded-md mb-4">
                <ul className="space-y-2 text-gray-300">
                  <li><span className="text-purple-300 font-medium">{content.scoring.points.max}</span></li>
                  <li><span className="text-green-400 font-medium">{content.scoring.points.perfect}</span></li>
                  <li><span className="text-blue-400 font-medium">{content.scoring.points.great}</span></li>
                  <li><span className="text-yellow-400 font-medium">{content.scoring.points.good}</span></li>
                  <li><span className="text-orange-400 font-medium">{content.scoring.points.bad}</span></li>
                  <li><span className="text-red-400 font-medium">{content.scoring.points.miss}</span></li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed">{content.scoring.combo}</p>
            </section>

            {/* Difficulty Levels */}
            <section className="mb-8">
              <h2 id="difficulty" className="text-2xl font-bold mb-4 text-purple-400">{content.difficulty.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.difficulty.content}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {content.difficulty.levels.map((level, index) => (
                  <div key={index} className="bg-[#2a2a2a] p-4 rounded-md hover:bg-[#2f2f2f] transition-colors">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-purple-400 font-bold">{level.name}</span>
                      <div className="flex ml-2">{level.starElement}</div>
                    </div>
                    <p className="text-gray-300 text-sm">{level.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Skinning */}
            <section className="mb-8">
              <h2 id="skinning" className="text-2xl font-bold mb-4 text-purple-400">{content.skinning.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.skinning.content}</p>

              <div className="bg-[#2a2a2a] p-4 rounded-md mb-6">
                <h3 className="text-purple-400 font-medium mb-3">{content.skinning.elements.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.skinning.elements.items.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-purple-400 font-medium">{item.name}</span>
                      <span className="text-gray-300 text-sm">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#2a2a2a] p-4 rounded-md mb-6">
                <h3 className="text-purple-400 font-medium mb-3">{content.skinning.howTo.title}</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  {content.skinning.howTo.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <p className="text-gray-300 leading-relaxed">{content.skinning.community}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-[#2a2a2a] p-4 rounded-md">
                  <ManiaImage 
                    src="./maniadefault.webp" 
                    alt="Default osu!mania skin" 
                    className="rounded-md mb-2 aspect-video object-cover"
                  />
                  <p className="text-center text-sm text-gray-400">Default skin</p>
                </div>
                <div className="bg-[#2a2a2a] p-4 rounded-md">
                  <ManiaImage 
                    src="./maniacustom.png" 
                    alt="Custom osu!mania skin" 
                    className="rounded-md mb-2 aspect-video object-cover"
                  />
                  <p className="text-center text-sm text-gray-400">Custom skin example</p>
                </div>
              </div>
            </section>

            {/* Mapping */}
            <section className="mb-8">
              <h2 id="mapping" className="text-2xl font-bold mb-4 text-purple-400">{content.mapping.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.mapping.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                {content.mapping.aspects.map((aspect, index) => (
                  <li key={index}>{aspect}</li>
                ))}
              </ul>
               <video 
                    className="w-full h-auto" 
                    controls
                    muted
                    poster="./mapping.jpg"
                  >
                    <source src="./Mapping.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
            </section>

            {/* Conversion Notes */}
            <section className="mb-8">
              <h2 id="conversion-notes" className="text-2xl font-bold mb-4 text-purple-400">{content.conversion.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.conversion.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {content.conversion.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </section>

            {/* Trivia - Gameplay */}
            <section className="mb-8">
              <h2 id="trivia-gameplay" className="text-2xl font-bold mb-4 text-purple-400">{content.trivia.gameplay.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {content.trivia.gameplay.facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </section>

            {/* History */}
            <section className="mb-8">
              <h2 id="history" className="text-2xl font-bold mb-4 text-purple-400">{content.history.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.history.content}</p>
              <div className="bg-[#2a2a2a] p-4 rounded-md mb-4">
                <h3 className="text-purple-400 font-medium mb-3">Key Milestones</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {content.history.milestones.map((milestone, index) => (
                    <li key={index}>{milestone}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <ManiaImage 
                  src="./osumania.jpg" 
                  alt="osu!mania historical screenshot" 
                  className="rounded-md"
                />
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
};

export default ManiaMainContent;