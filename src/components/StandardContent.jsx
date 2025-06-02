import React from 'react';
import StandardImage from './StandardImage';

const StandardContent = ({ isLoading, currentLanguage }) => {
 
  const contentByLanguage = {
    en: {
      heading: "osu!standard",
      introduction: {
        title: "Introduction",
        content: "osu!standard is the original game mode in osu!, directly inspired by the rhythm game 'Osu! Tatakae! Ouendan'. In this mode, players must click circles, trace sliders, and spin spinners in time with the music. It's a rhythm game that tests your agility, timing, and memory as you advance through increasingly difficult maps."
      },
      songSelection: {
        title: "Song Selection",
        content: "In the song selection screen, players can browse through thousands of beatmaps categorized by artist, difficulty, or mapper. This interface allows you to filter maps and find exactly what you're looking for.",
        features: [
          "Search and filter beatmaps by various criteria",
          "Sort by difficulty, BPM, length, or ranking status",
          "Preview songs before playing",
          "Create collections of favorite beatmaps",
          "Download new beatmaps directly from the game"
        ]
      },
      gameplayBasics: {
        title: "Gameplay Basics",
        content: "osu!standard gameplay revolves around hitting various objects with rhythm and precision. The player interacts with hit objects as they appear on screen, timed with the beat of the music.",
        keyPoints: [
          "Hit circles and slider heads must be clicked when their approach circles align with them",
          "Sliders require holding and dragging the cursor along a defined path",
          "Spinners require rapid circular cursor movement around a central point",
          "The health bar increases with successful hits and decreases with misses",
          "Building combo by hitting consecutive objects increases score multiplier"
        ]
      },
      hitObjects: {
        title: "Hit Objects",
        description: "There are three main types of hit objects in osu!standard:",
        objects: [
          {
            name: "Hit Circles",
            description: "Basic hit objects that require a single click when the approach circle aligns with the hit circle."
          },
          {
            name: "Sliders",
            description: "Objects that require the player to click and follow a path while holding the click button. These can have various shapes and may include reverse arrows requiring multiple passes along the same path."
          },
          {
            name: "Spinners",
            description: "Circular objects that require the player to rotate the cursor around the center as many times as possible within a set time period."
          }
        ]
      },
      approachCircles: {
        title: "Approach Circles",
        content: "Approach circles are shrinking rings that indicate when to click a hit circle or slider. They start from outside the hit object and shrink inward, reaching the perfect size at the exact moment you should click. Mastering the timing of approach circles is essential for achieving accuracy in osu!standard."
      },
      sliders: {
        title: "Sliders",
        content: "Sliders are hit objects that require following a path while holding down the click button. They come in various shapes and patterns, adding complexity to maps.",
        types: [
          { name: "Linear", description: "Straight path between two points" },
          { name: "Bezier", description: "Curved path with smooth transitions" },
          { name: "Perfect Circle", description: "Arc following part of a perfect circle" },
          { name: "Catmull", description: "Complex curved path following multiple points" }
        ],
        elements: [
          "Slider head - Starting point that must be clicked initially",
          "Slider body - Path that must be followed while holding the click button",
          "Slider ticks - Points along the slider that provide additional points when passed over",
          "Slider end - End point where the player can release the click button",
          "Reverse arrow - Indicates that the slider changes direction, requiring the player to follow the path multiple times"
        ]
      },
      spinners: {
        title: "Spinners",
        content: "Spinners are circular objects that require rotating the cursor around the center as rapidly as possible. The player gains points based on the number of rotations completed before the spinner ends. A 'Spin Clear' bonus is awarded for reaching the required number of spins, while additional rotations provide extra points."
      },
      healthBar: {
        title: "Health Bar",
        content: "The health bar represents the player's current health status during gameplay. It increases with successful hits and decreases with misses or when hit objects are left untouched. If the health bar empties completely, the player fails the map (unless the No Fail mod is enabled)."
      },
      controls: {
        title: "Controls & Input Methods",
        content: "osu!standard can be played using various input methods. Each has its advantages and is suited to different playstyles:",
        inputMethods: [
          {
            name: "Mouse",
            description: "Using the mouse to move the cursor and mouse buttons to click. This is the most accessible method for beginners.",
            specifics: [
              "Mouse buttons for clicking hit objects",
              "Mouse movement for cursor positioning and following sliders",
              "Mouse spinning for spinners (often challenging at higher difficulties)"
            ]
          },
          {
            name: "Keyboard",
            description: "Using the keyboard for clicking while controlling the cursor with a mouse or tablet. This is the most common approach for experienced players.",
            specifics: [
              "Z and X keys (default) for clicking hit objects",
              "Allows for alternating between fingers for faster tapping",
              "Combined with mouse movement for cursor control"
            ]
          },
          {
            name: "Tablet",
            description: "Using a drawing tablet for cursor movement and keyboard for clicking. Provides precise cursor control and is popular among top players.",
            specifics: [
              "Absolute positioning - cursor position directly maps to tablet position",
              "Customizable active area for comfort and precision",
              "Used in combination with keyboard for clicking"
            ]
          },
          {
            name: "Touchscreen",
            description: "Tapping directly on the screen to both move the cursor and click. This is commonly used on mobile devices and touchscreen PCs.",
            specifics: [
              "Direct interaction with hit objects",
              "Can be advantageous for certain maps",
              "Often has special considerations in competitive play"
            ]
          }
        ]
      },
      scoring: {
        title: "Scoring System",
        content: "The scoring system in osu!standard rewards accuracy, combo, and difficulty. It consists of several components:",
        hitValues: {
          title: "Hit Values",
          values: [
            { name: "300", description: "Perfect hit (blue)", points: 300 },
            { name: "100", description: "Good hit (green)", points: 100 },
            { name: "50", description: "Acceptable hit (orange)", points: 50 },
            { name: "Miss", description: "Missed hit (red)", points: 0 }
          ]
        },
        combo: {
          title: "Combo Multiplier",
          description: "Each consecutive hit increases the combo multiplier, which is applied to the base score of each hit. Misses reset the combo to zero."
        },
        accuracy: {
          title: "Accuracy",
          description: "Calculated as the weighted average of hit values divided by the maximum possible points:",
          formula: "Accuracy = (300 count × 300 + 100 count × 100 + 50 count × 50) / (Total hits × 300)"
        },
        grades: {
          title: "Performance Grades",
          grades: [
            { name: "SS", criteria: "100% accuracy" },
            { name: "S", criteria: "Over 90% 300s, less than 1% 50s, no misses" },
            { name: "A", criteria: "Over 80% 300s and no misses OR over 90% 300s" },
            { name: "B", criteria: "Over 70% 300s and no misses OR over 80% 300s" },
            { name: "C", criteria: "Over 60% 300s" },
            { name: "D", criteria: "Anything else" }
          ]
        },
        pp: {
          title: "Performance Points (PP)",
          description: "A more complex scoring system used for global rankings. PP takes into account map difficulty, accuracy, mods used, and other factors to provide a more balanced measure of player skill."
        }
      },
      gameMods: {
        title: "Game Mods",
        content: "Mods modify gameplay by changing various aspects of the game, offering increased challenge or accessibility options. They can affect scoring, gameplay mechanics, and visual elements.",
        categories: [
          {
            name: "Difficulty Increase",
            mods: [
              { name: "Hard Rock (HR)", description: "Increases overall difficulty by making circles smaller, approach rate faster, and flipping the playfield vertically" },
              { name: "Double Time (DT)", description: "Increases song speed by 50%, making everything faster" },
              { name: "Nightcore (NC)", description: "Same as Double Time but with a pitched-up soundtrack" },
              { name: "Hidden (HD)", description: "Hit objects fade out as they approach, requiring memorization" },
              { name: "Flashlight (FL)", description: "Limits visible playfield to area around cursor" }
            ]
          },
          {
            name: "Difficulty Decrease",
            mods: [
              { name: "Easy (EZ)", description: "Makes circles larger, approach rate slower, and increases HP drain leniency" },
              { name: "No Fail (NF)", description: "Prevents failing regardless of health bar" },
              { name: "Half Time (HT)", description: "Decreases song speed by 25%, making everything slower" }
            ]
          },
          {
            name: "Special",
            mods: [
              { name: "Relax (RX)", description: "Automated clicking, only requiring cursor movement" },
              { name: "Auto Pilot (AP)", description: "Automated cursor movement, only requiring clicking" },
              { name: "Spun Out (SO)", description: "Automated spinner spinning" }
            ]
          }
        ]
      },
      skinning: {
        title: "Skinning",
        content: "Skinning allows players to customize the visual and audio aspects of osu!standard. Players can create or download skins to personalize their experience and potentially improve gameplay visibility.",
        customizableElements: [
          "Hit circles and approach circles",
          "Sliders and slider follow points",
          "Spinners and spinner elements",
          "Cursor and cursor trail",
          "Hit explosions and animations",
          "Combo colors",
          "Hit sounds and music effects",
          "Interface elements like the health bar and score display"
        ],
        impact: "Many players find that certain skins can improve visibility and performance, especially by reducing visual clutter or making timing more intuitive. The right skin can significantly enhance the playing experience."
      },
      mapping: {
        title: "Mapping",
        content: "Beatmap creation is a creative process where mappers place hit objects to match the rhythm and feel of a song. Mapping requires understanding of rhythm, music structure, and gameplay flow.",
        principles: [
          "Timing - Setting the correct BPM and timing points",
          "Rhythm representation - Placing objects to match the song's rhythm",
          "Difficulty progression - Creating appropriate challenge throughout the map",
          "Pattern design - Creating engaging and playable patterns",
          "Aesthetics - Creating visually cohesive maps with good flow"
        ],
        ranking: {
          title: "Beatmap Ranking",
          content: "The process through which community-created beatmaps become officially ranked and eligible for performance points:",
          stages: [
            "Work-in-Progress (WIP) - Initial creation phase",
            "Pending - Map submitted for feedback",
            "Qualified - Approved by Beatmap Nominators and pending final checks",
            "Ranked - Officially approved and available for PP gains"
          ]
        }
      },
      community: {
        title: "Community",
        content: "osu! has a vibrant global community with various events, competitions, and social aspects:",
        tournaments: {
          title: "Tournaments",
          types: [
            "Official tournaments like the osu! World Cup",
            "Community tournaments organized by players",
            "1v1, team-based, and specialty tournaments"
          ]
        },
        notablePlayers: {
          title: "Notable Players",
          description: "The community recognizes top players who have achieved remarkable scores, rankings, or contributions:",
          players: [
            "Cookiezi/Shigetora - Known for incredible mechanical skill and iconic scores",
            "Mrekk - Achieved #1 global ranking with exceptional DT skills",
            "WhiteCat - Former #1 with precise aim and consistency",
            "Vaxei - Known for versatility across all aspects of gameplay",
            "RyuK - Recognized for incredible speed and accuracy"
          ]
        }
      },
      history: {
        title: "History",
        content: "osu! was created by Dean 'peppy' Herbert in 2007, inspired by the Japanese rhythm game 'Osu! Tatakae! Ouendan'. It began as a simple recreation but has evolved into one of the most popular rhythm games worldwide, with multiple game modes and a thriving community.",
        milestones: [
          "2007 - Initial release of osu!",
          "2008 - Addition of multiplayer functionality",
          "2009 - Introduction of osu!taiko, the first alternative game mode",
          "2010 - Implementation of the performance points (PP) system",
          "2013 - First official osu! World Cup",
          "2017 - Beginning of the lazer client development",
          "2021 - Open-sourcing of the entire osu! codebase"
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
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-400">Translating content...</p>
          </div>
        ) : (
          <div className="fade-in">
            {/* Main heading */}
            <h1 className="text-4xl font-bold mb-8 pb-4 border-b border-[#3a3a3a] text-pink-700">
              {content.heading}
            </h1>

            {/* Main game image */}
            <div className="mb-8 rounded-md overflow-hidden">
              <StandardImage 
                src="./standard.gif" 
                alt="osu!standard gameplay"
                className="w-full h-auto rounded-md"
              />
            </div>

            {/* Introduction */}
            <section className="mb-8">
              <h2 id="introduction" className="text-2xl font-bold mb-4 text-pink-700">{content.introduction.title}</h2>
              <p className="text-gray-300 leading-relaxed">{content.introduction.content}</p>
            </section>

            {/* Song Selection */}
            <section className="mb-8">
              <h2 id="song-selection" className="text-2xl font-bold mb-4 text-pink-700">{content.songSelection.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.songSelection.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {content.songSelection.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* Gameplay Basics */}
            <section className="mb-8">
              <h2 id="gameplay-basics" className="text-2xl font-bold mb-4 text-pink-700">{content.gameplayBasics.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.gameplayBasics.content}</p>

              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                {content.gameplayBasics.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <StandardImage 
                  src="./hitcircles.jpg" 
                  alt="osu! gameplay" 
                  className="rounded-md"
                />
                <StandardImage 
                  src="./Sliders.jpg" 
                  alt="Player focused on rhythm game" 
                  className="rounded-md"
                />
                 <StandardImage 
                  src="./Spinners.jpg" 
                  alt="Player focused on rhythm game" 
                  className="rounded-md"
                />
                 <StandardImage 
                  src="./Interface.jpg" 
                  alt="Player focused on rhythm game" 
                  className="rounded-md"
                />
              </div>
            </section>

            {/* Hit Objects */}
            <section className="mb-8">
              <h2 id="hit-objects" className="text-2xl font-bold mb-4 text-pink-700">{content.hitObjects.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.hitObjects.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {content.hitObjects.objects.map((object, index) => (
                  <div key={index} className="bg-[#2a2a2a] p-4 rounded-md">
                    <h3 className="text-blue-400 font-medium mb-2">{object.name}</h3>
                    <p className="text-gray-300">{object.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Approach Circles */}
            <section className="mb-8">
              <h2 id="approach-circles" className="text-2xl font-bold mb-4 text-pink-700">{content.approachCircles.title}</h2>
              <p className="text-gray-300 leading-relaxed">{content.approachCircles.content}</p>
            </section>

            {/* Sliders */}
            <section className="mb-8">
              <h2 id="sliders" className="text-2xl font-bold mb-4 text-pink-700">{content.sliders.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.sliders.content}</p>
              
              <div className="bg-[#2a2a2a] p-4 rounded-md mb-6">
                <h3 className="text-blue-400 font-medium mb-3">Slider Types</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.sliders.types.map((type, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-pink-400 font-medium">{type.name}</span>
                      <span className="text-gray-300 text-sm">{type.description}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#2a2a2a] p-4 rounded-md">
                <h3 className="text-blue-400 font-medium mb-3">Slider Elements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {content.sliders.elements.map((element, index) => (
                    <li key={index}>{element}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Spinners */}
            <section className="mb-8">
              <h2 id="spinners" className="text-2xl font-bold mb-4 text-pink-700">{content.spinners.title}</h2>
              <p className="text-gray-300 leading-relaxed">{content.spinners.content}</p>
            </section>

            {/* Health Bar */}
            <section className="mb-8">
              <h2 id="health-bar" className="text-2xl font-bold mb-4 text-pink-700">{content.healthBar.title}</h2>
              <p className="text-gray-300 leading-relaxed">{content.healthBar.content}</p>
            </section>

            {/* Controls */}
            <section className="mb-8">
              <h2 id="controls" className="text-2xl font-bold mb-4 text-pink-700">{content.controls.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{content.controls.content}</p>
              
              {content.controls.inputMethods.map((method, methodIndex) => (
                <div key={methodIndex} className="mb-6">
                  <h3 id={`${method.name.toLowerCase()}-controls`} className="text-xl font-bold mb-3 text-pink-700">{method.name}</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">{method.description}</p>
                  <div className="bg-[#2a2a2a] p-4 rounded-md">
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {method.specifics.map((specific, index) => (
                        <li key={index}>{specific}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </section>

            {/* Scoring System */}
            <section className="mb-8">
              <h2 id="scoring" className="text-2xl font-bold mb-4 text-pink-700">{content.scoring.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.scoring.content}</p>
              
              <div className="bg-[#2a2a2a] p-4 rounded-md mb-6">
                <h3 className="text-pink-700 font-medium mb-3">{content.scoring.hitValues.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.scoring.hitValues.values.map((value, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className={`font-bold ${
                        value.name === "300" ? "text-blue-400" : 
                        value.name === "100" ? "text-green-400" : 
                        value.name === "50" ? "text-yellow-400" : 
                        "text-red-400"
                      }`}>{value.name}</span>
                      <span className="text-gray-300">- {value.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#2a2a2a] p-4 rounded-md">
                  <h3 className="text-pink-700 font-medium mb-3">{content.scoring.combo.title}</h3>
                  <p className="text-gray-300">{content.scoring.combo.description}</p>
                </div>
                <div className="bg-[#2a2a2a] p-4 rounded-md">
                  <h3 className="text-pink-700 font-medium mb-3">{content.scoring.accuracy.title}</h3>
                  <p className="text-gray-300 mb-2">{content.scoring.accuracy.description}</p>
                  <div className="bg-[#333] p-3 rounded-md">
                    <code className="text-pink-700">{content.scoring.accuracy.formula}</code>
                  </div>
                </div>
              </div>

              <div className="bg-[#2a2a2a] p-4 rounded-md mb-6">
                <h3 className="text-pink-700 font-medium mb-3">{content.scoring.grades.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {content.scoring.grades.grades.map((grade, index) => (
                    <div key={index} className="bg-[#333] p-3 rounded-md">
                      <div className="text-center mb-2">
                        <span className={`text-xl font-bold ${
                          grade.name === "SS" ? "text-yellow-400" : 
                          grade.name === "S" ? "text-yellow-300" : 
                          grade.name === "A" ? "text-green-400" : 
                          grade.name === "B" ? "text-blue-400" : 
                          grade.name === "C" ? "text-purple-400" : 
                          "text-red-400"
                        }`}>{grade.name}</span>
                      </div>
                      <p className="text-gray-300 text-sm text-center">{grade.criteria}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#2a2a2a] p-4 rounded-md">
                <h3 className="text-pink-700 font-medium mb-3">{content.scoring.pp.title}</h3>
                <p className="text-gray-300">{content.scoring.pp.description}</p>
              </div>
            </section>

            {/* Game Mods */}
            <section className="mb-8">
              <h2 id="game-mods" className="text-2xl font-bold mb-4 text-pink-700">{content.gameMods.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{content.gameMods.content}</p>
              
              {content.gameMods.categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-400">{category.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.mods.map((mod, index) => (
                      <div key={index} className="bg-[#2a2a2a] p-4 rounded-md">
                        <h4 className="text-yellow-400 font-medium mb-2">{mod.name}</h4>
                        <p className="text-gray-300">{mod.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Skinning */}
            <section className="mb-8">
              <h2 id="skinning" className="text-2xl font-bold mb-4 text-pink-700">{content.skinning.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.skinning.content}</p>
              
              <div className="bg-[#2a2a2a] p-4 rounded-md mb-6">
                <h3 className="text-blue-400 font-medium mb-3">Customizable Elements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {content.skinning.customizableElements.map((element, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 text-pink-700 rounded-full"></div>
                      <span className="text-gray-300">{element}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">{content.skinning.impact}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-[#2a2a2a] p-4 rounded-md">
                  <StandardImage 
                    src="./standarddefault.jpg" 
                    alt="Default osu! skin" 
                    className="rounded-md mb-2"
                  />
                  <p className="text-center text-sm text-gray-400">Default skin</p>
                </div>
                <div className="bg-[#2a2a2a] p-4 rounded-md">
                  <StandardImage 
                    src="./standardcustom.jpg" 
                    alt="Custom osu! skin" 
                    className="rounded-md mb-2"
                  />
                  <p className="text-center text-sm text-gray-400">Custom skin example</p>
                </div>
              </div>
            </section>

            {/* Mapping */}
            <section className="mb-8">
              <h2 id="mapping" className="text-2xl font-bold mb-4 text-pink-700">{content.mapping.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{content.mapping.content}</p>
              
              <div className="bg-[#2a2a2a] p-4 rounded-md mb-6">
                <h3 className="text-pink-700 font-medium mb-3">Mapping Principles</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {content.mapping.principles.map((principle, index) => (
                    <li key={index}>{principle}</li>
                  ))}
                </ul>
              </div>
              
              <div id="map-ranking">
                <h3 className="text-xl font-bold mb-3 text-pink-700">{content.mapping.ranking.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{content.mapping.ranking.content}</p>
                
                <div className="relative">
                  {/* Progress line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 text-pink-700"></div>
                  
                  {/* Stages */}
                  {content.mapping.ranking.stages.map((stage, index) => (
                    <div key={index} className="relative pl-12 pb-6">
                      {/* Circle marker */}
                      <div className="absolute left-2 w-4 h-4 text-pink-700 rounded-full"></div>
                      <p className="text-gray-300">{stage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Community */}
            <section className="mb-8">
              <h2 id="community" className="text-2xl font-bold mb-4 text-pink-700">{content.community.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{content.community.content}</p>
              
              {/* Tournaments */}
              <div id="tournaments" className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-pink-700">{content.community.tournaments.title}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {content.community.tournaments.types.map((type, index) => (
                    <li key={index}>{type}</li>
                  ))}
                </ul>
              </div>
              
              {/* Notable Players */}
              <div id="notable-players">
                <h3 className="text-xl font-bold mb-3 text-pink-700">{content.community.notablePlayers.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{content.community.notablePlayers.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.community.notablePlayers.players.map((player, index) => (
                    <div key={index} className="bg-[#2a2a2a] p-4 rounded-md">
                      <p className="text-gray-300">{player}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* History */}
            <section className="mb-8">
              <h2 id="history" className="text-2xl font-bold mb-4 text-pink-700">{content.history.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{content.history.content}</p>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-pink-700"></div>
                
                {/* Milestones */}
                {content.history.milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-12 pb-8">
                    {/* Circle marker */}
                    <div className="absolute left-2 w-4 h-4 bg-pink-700 rounded-full"></div>
                    <p className="text-gray-300">{milestone}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
};

export default StandardContent;