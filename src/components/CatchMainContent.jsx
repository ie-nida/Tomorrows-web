import React from 'react';
import { AlertTriangle, Star } from 'lucide-react';
import CatchImage from './CatchImage';

const CatchMainContent = ({ isLoading, currentLanguage }) => {
  
  const contentByLanguage = {
    en: {
      heading: "osu!catch",
      introduction: {
        title: "Introduction",
        content: "osu!catch, also known as Catch the Beat (CtB), is a game mode where players control a character that catches falling fruit to the rhythm of the music. With colorful visuals and intuitive gameplay, it offers a refreshing and fun way to experience rhythm games."
      },
      songSelection: {
        title: "Song Selection",
        content: "The song selection screen allows players to browse through thousands of beatmaps organized by various categories and filters.",
        features: [
          "Search and filter beatmaps by artist, difficulty, or tags",
          "Preview songs before playing",
          "Sort by difficulty, length, or BPM",
          "Create and manage personal collections",
          "Download new beatmaps directly from the game"
        ]
      },
      gameplay: {
        title: "Gameplay Basics",
        content: "In osu!catch, players control a character (catcher) that moves horizontally at the bottom of the screen. Various fruits fall from the top of the screen along with the rhythm of the music, and players must move the catcher to catch them all.",
        notes: {
          fruits: "Regular Fruits: Standard catch items worth 300 points",
          droplets: "Droplets: Smaller fruits worth 100 points",
          bananas: "Bananas: Special items that appear during Banana Showers worth 1,100 points"
        }
      },
      controls: {
        title: "Controls",
        content: "osu!catch can be played using various control schemes:",
        defaultControls: {
          title: "Default Controls",
          keys: [
            { action: "Move Left", keys: "← (Left Arrow) or Z" },
            { action: "Move Right", keys: "→ (Right Arrow) or X" },
            { action: "Dash (for faster movement)", keys: "Shift (hold while moving)" }
          ]
        },
        customization: "Players can customize their key bindings in the options menu to match their preferred play style."
      },
      fruitsItems: {
        title: "Fruits & Items",
        content: "There are several types of fruits and items that you need to catch:",
        types: [
          {
            name: "Fruits",
            description: "Regular fruits that follow the beat of the song (300 points)"
          },
          {
            name: "Droplets",
            description: "Smaller fruits that appear in streams or as slider ticks (100 points)"
          },
          {
            name: "Banana",
            description: "Special items that appear during Banana Showers (1,100 points)"
          },
          {
            name: "Drops",
            description: "Tiny droplets that appear from sliders (10 points)"
          }
        ]
      },
      scoring: {
        title: "Scoring System",
        content: "The scoring system in osu!catch is based on how many fruits you catch:",
        points: {
          fruits: "Fruits: 300 points",
          droplets: "Droplets: 100 points",
          drops: "Drops: 10 points",
          bananas: "Bananas: 1,100 points"
        },
        combo: "A combo multiplier increases the points for each consecutive catch. Missing any fruit resets your combo to zero.",
        grades: {
          title: "Grades",
          ss: "SS: 100.00% accuracy (Perfect)",
          s: "S: 98.01% to 99.99% accuracy (Excellent)",
          a: "A: 94.01% to 98.00% accuracy (Great)",
          b: "B: 90.01% to 94.00% accuracy (Good)",
          c: "C: 85.01% to 90.00% accuracy (Decent)",
          d: "D: Below 85.00% accuracy (Poor)"
        }
      },
      difficultyLevels: {
        title: "Difficulty Levels",
        content: "Maps in osu!catch are categorized into different difficulty levels:",
        levels: [
          {
            name: "Easy",
            stars: 1,
            description: "Simple patterns, slow-falling fruits",
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
            description: "Complex patterns, faster falling fruits",
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
            name: "Expert",
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
        title: "Skinning in osu!catch",
        content: "Skinning allows players to customize the visual appearance of osu!catch. Players can modify the catcher character, fruits, and other visual elements to create a personalized experience.",
        elements: {
          title: "Customizable Elements",
          items: [
            { name: "Catcher Character", description: "Change the appearance of the character you control" },
            { name: "Fruits", description: "Customize the appearance of regular fruits" },
            { name: "Droplets", description: "Change the look of smaller fruits" },
            { name: "Bananas", description: "Modify the appearance of special items" },
            { name: "Hit Animations", description: "Customize the animations when catching fruits" },
            { name: "Background", description: "Change the playfield background" }
          ]
        },
        howTo: {
          title: "How to Apply Skins",
          steps: [
            "Download a skin or create your own",
            "Place skin files in the 'Skins' folder in your osu! directory",
            "Select the skin in Options > Skin",
            "You can also customize individual elements in the skin editor"
          ]
        },
        community: "The osu! community creates and shares a wide variety of creative skins for osu!catch. Many players enjoy creating their own skins to match their personal style or to make gameplay more visually appealing."
      },
      mapping: {
        title: "osu!catch Mapping",
        content: "Creating beatmaps for osu!catch involves placing fruits to match the rhythm and feel of the music. Mappers need to consider various aspects such as fruit placement, density, and patterns to create an enjoyable experience.",
        considerations: [
          "Fruit density should match the intensity of the music",
          "Create patterns that are challenging but fair to play",
          "Consider the player's movement limitations",
          "Use hyperdash (fast movement) elements strategically",
          "Banana showers should be placed at special moments in the song"
        ]
      },
      conversion: {
        title: "osu! Conversion Notes",
        content: "Standard osu! beatmaps can be automatically converted to osu!catch format. However, there are some important considerations:",
        points: [
          "Circle notes become regular fruits",
          "Slider ticks become droplets",
          "Slider ends become regular fruits",
          "Spinners become banana showers",
          "Some patterns may require unusual movement that doesn't translate well to catching gameplay",
          "Native osu!catch maps generally provide a better playing experience"
        ]
      },
      trivia: {
        title: "Trivia",
        gameplay: {
          title: "Gameplay Trivia",
          facts: [
            "The catcher character was originally a simple plate in early versions",
            "The fastest players can maintain accuracy even with extremely rapid fruit patterns",
            "The term 'hyperdash' refers to when the catcher needs to move extremely quickly to catch successive fruits",
            "World records for some maps approach perfect scores on incredibly difficult patterns"
          ]
        }
      },
      history: {
        title: "History",
        content: "osu!catch (originally called Catch the Beat) was added to osu! in 2008, becoming the third game mode after the standard osu! mode and osu!taiko. It was inspired by various fruit-catching games but adapted for rhythm-based gameplay."
      }
    }
  };

  const content = contentByLanguage[currentLanguage] || contentByLanguage.en;

  return (
    <main className="flex-1 overflow-y-auto bg-[#222] p-4">
      <div className="container mx-auto max-w-4xl">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-400">Translating content...</p>
          </div>
        ) : (
          <div className="fade-in">
            {/* Main heading */}
            <h1 className="text-4xl font-bold mb-8 pb-4 border-b border-[#3a3a3a] text-red-400">
              {content.heading}
            </h1>

            {/* Main game image */}
            <div className="mb-8 rounded-md overflow-hidden">
              <CatchImage 
                src="./catch.gif" 
                alt="osu!catch gameplay"
                className="w-full h-auto rounded-md"
              />
            </div>

            {/* Introduction */}
            <section className="mb-8">
              <h2 id="introduction" className="text-2xl font-bold mb-4 text-red-400">{content.introduction.title}</h2>
              <p className="text-gray-300 leading-relaxed">{content.introduction.content}</p>
            </section>

            {/* Song Selection */}
            <section className="mb-8">
              <h2 id="song-selection" className="text-2xl font-bold mb-4 text-red-400">{content.songSelection.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.songSelection.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {content.songSelection.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* Gameplay Basics */}
            <section className="mb-8">
              <h2 id="gameplay-basics" className="text-2xl font-bold mb-4 text-red-400">{content.gameplay.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.gameplay.content}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <CatchImage 
                  src="./fruit.jpg" 
                  alt="Catcher character" 
                  className="rounded-md"
                />
                <CatchImage 
                  src="./catcher.gif" 
                  alt="Fruits in osu!catch" 
                  className="rounded-md"
                />
              </div>
            </section>

            {/* Controls */}
            <section className="mb-8">
              <h2 id="controls" className="text-2xl font-bold mb-4 text-red-400">{content.controls.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.controls.content}</p>
              <div className="bg-[#2a2a2a] p-4 rounded-md mb-4">
                <h3 className="text-blue-400 font-medium mb-3">{content.controls.defaultControls.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.controls.defaultControls.keys.map((key, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-gray-300">{key.action}:</span>
                      <span className="text-red-400 font-medium">{key.keys}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 italic">{content.controls.customization}</p>
            </section>

            {/* Fruits & Items */}
            <section className="mb-8">
              <h2 id="fruits-items" className="text-2xl font-bold mb-4 text-red-400">{content.fruitsItems.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.fruitsItems.content}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.fruitsItems.types.map((type, index) => (
                  <div key={index} className="bg-[#2a2a2a] p-4 rounded-md">
                    <h3 className="text-blue-400 font-medium mb-2">{type.name}</h3>
                    <p className="text-gray-300">{type.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Scoring System */}
            <section className="mb-8">
              <h2 id="scoring" className="text-2xl font-bold mb-4 text-red-400">{content.scoring.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.scoring.content}</p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                <li><span className="text-red-400 font-medium">{content.scoring.points.fruits}</span></li>
                <li><span className="text-yellow-400 font-medium">{content.scoring.points.droplets}</span></li>
                <li><span className="text-blue-400 font-medium">{content.scoring.points.drops}</span></li>
                <li><span className="text-green-400 font-medium">{content.scoring.points.bananas}</span></li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">{content.scoring.combo}</p>
              
              <h3 className="text-xl font-bold mb-3 text-blue-400">{content.scoring.grades.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#2a2a2a] p-3 rounded-md">
                  <span className="text-yellow-400 font-bold">{content.scoring.grades.ss}</span>
                </div>
                <div className="bg-[#2a2a2a] p-3 rounded-md">
                  <span className="text-yellow-300 font-bold">{content.scoring.grades.s}</span>
                </div>
                <div className="bg-[#2a2a2a] p-3 rounded-md">
                  <span className="text-green-400 font-bold">{content.scoring.grades.a}</span>
                </div>
                <div className="bg-[#2a2a2a] p-3 rounded-md">
                  <span className="text-blue-400 font-bold">{content.scoring.grades.b}</span>
                </div>
                <div className="bg-[#2a2a2a] p-3 rounded-md">
                  <span className="text-purple-400 font-bold">{content.scoring.grades.c}</span>
                </div>
                <div className="bg-[#2a2a2a] p-3 rounded-md">
                  <span className="text-red-400 font-bold">{content.scoring.grades.d}</span>
                </div>
              </div>
            </section>

            {/* Difficulty Levels */}
            <section className="mb-8">
              <h2 id="difficulty-levels" className="text-2xl font-bold mb-4 text-red-400">{content.difficultyLevels.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.difficultyLevels.content}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {content.difficultyLevels.levels.map((level, index) => (
                  <div key={index} className="bg-[#2a2a2a] p-4 rounded-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-blue-400 font-bold">{level.name}</span>
                      <div className="flex">{level.starElement}</div>
                    </div>
                    <p className="text-gray-300 text-sm">{level.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Skinning */}
            <section className="mb-8">
              <h2 id="skinning" className="text-2xl font-bold mb-4 text-red-400">{content.skinning.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.skinning.content}</p>

              <div className="bg-[#2a2a2a] p-4 rounded-md mb-6">
                <h3 className="text-blue-400 font-medium mb-3">{content.skinning.elements.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.skinning.elements.items.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-red-400 font-medium">{item.name}</span>
                      <span className="text-gray-300 text-sm">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#2a2a2a] p-4 rounded-md mb-6">
                <h3 className="text-blue-400 font-medium mb-3">{content.skinning.howTo.title}</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  {content.skinning.howTo.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <p className="text-gray-300 leading-relaxed">{content.skinning.community}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-[#2a2a2a] p-4 rounded-md">
                  <CatchImage 
                    src="catchdefault.jpg" 
                    alt="Default osu!catch skin" 
                    className="rounded-md mb-2"
                  />
                  <p className="text-center text-sm text-gray-400">Default skin</p>
                </div>
                <div className="bg-[#2a2a2a] p-4 rounded-md">
                  <CatchImage 
                    src="./customcatch.jpg" 
                    alt="Custom osu!catch skin" 
                    className="rounded-md mb-2"
                  />
                  <p className="text-center text-sm text-gray-400">Custom skin example</p>
                </div>
              </div>
            </section>

            {/* Mapping */}
            <section className="mb-8">
              <h2 id="mapping" className="text-2xl font-bold mb-4 text-red-400">{content.mapping.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.mapping.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {content.mapping.considerations.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </section>

            {/* Conversion Notes */}
            <section className="mb-8">
              <h2 id="conversion-notes" className="text-2xl font-bold mb-4 text-red-400">{content.conversion.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.conversion.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {content.conversion.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </section>

            {/* Trivia - Gameplay */}
            <section className="mb-8">
              <h2 id="trivia-gameplay" className="text-2xl font-bold mb-4 text-red-400">{content.trivia.gameplay.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {content.trivia.gameplay.facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </section>

            {/* History */}
            <section className="mb-8">
              <h2 id="history" className="text-2xl font-bold mb-4 text-red-400">{content.history.title}</h2>
              <p className="text-gray-300 leading-relaxed">{content.history.content}</p>
              <div className="mt-6">
                <CatchImage 
                  src="./historycatch.jpg" 
                  alt="Early version of osu!catch" 
                  className="rounded-md mb-2 mx-auto max-w-lg"
                />
                <p className="text-center text-sm text-gray-400 mt-2">Early version of osu!catch</p>
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
};

export default CatchMainContent;