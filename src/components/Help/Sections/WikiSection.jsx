import React from 'react';
import { ExternalLink } from 'lucide-react';
import HelpImage from '../HelpImage';

const WikiSection = ({ subSection }) => {
  // Maps subsection IDs to their scroll targets
  const scrollToTarget = () => {
    if (subSection && subSection !== '') {
      const element = document.getElementById(subSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Scroll to subsection after render
  React.useEffect(() => {
    scrollToTarget();
  }, [subSection]);

  return (
    <div>
      {/* Main heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 pb-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-pink-800 via-white to-indigo-100 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)]">
        Osu Wiki
      </h1>

      {/* Introduction section */}
      <section className="mb-8 prose prose-sm md:prose-base dark:prose-invert prose-headings:text-purple-600 dark:prose-headings:text-purple-400 max-w-none">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Welcome to the OSU Wiki! Here you'll find comprehensive guides and documentation to help you get started with OSU.
          From tutorials for beginners to advanced techniques for seasoned players, explore everything OSU has to offer.
        </p>
        
        <div className="my-6 rounded-xl overflow-hidden shadow-md">
          <HelpImage 
            src="https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg" 
            alt="Someone playing a rhythm game"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Getting Started section */}
      <section id="getting-started" className="mb-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4 text-pink-600 dark:text-pink-800">Getting Started</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            OSU is a rhythm game where players aim to click, slide, or tap to the beat of the music. It's accessible, fun, and offers a genuine challenge at higher difficulty levels.
          </p>
          <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">Installation</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
            <li>Visit the official OSU website at <a href="#" className="text-pink-600 dark:text-pink-400 hover:underline inline-flex items-center">osu.ppy.sh <ExternalLink size={14} className="ml-1" /></a></li>
            <li>Download the installer for your operating system (Windows, macOS, or Linux)</li>
            <li>Run the installer and follow the on-screen instructions</li>
            <li>Create an account or log in with your existing credentials</li>
            <li>Start playing!</li>
          </ol>
          <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">System Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Minimum:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>1.5 GHz Processor</li>
                <li>1 GB RAM</li>
                <li>DirectX compatible GPU</li>
                <li>250 MB available space</li>
                <li>Any modern web browser</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Recommended:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>2.0 GHz dual-core Processor</li>
                <li>2 GB RAM</li>
                <li>DirectX compatible GPU with 1GB VRAM</li>
                <li>2 GB available space (for songs)</li>
                <li>Stable internet connection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Game Modes section */}
      <section id="game-modes" className="mb-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4 text-pink-600 dark:text-pink-800">Game Modes</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            OSU offers four distinct game modes, each providing a unique rhythm experience:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transform transition-transform hover:scale-[1.02]">
              <h3 className="font-medium text-xl mb-2 text-pink-500">osu! (Standard)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The original gameplay style. Click circles, follow sliders, and spin spinners to the beat of the music.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-md overflow-hidden">
                <HelpImage 
                  src="https://images.pexels.com/photos/2261/food-man-person-face.jpg" 
                  alt="osu! standard gameplay"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transform transition-transform hover:scale-[1.02]">
              <h3 className="font-medium text-xl mb-2 text-blue-500">osu!taiko</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Inspired by Taiko drumming, hit the notes with the correct drum (Don or Kat) as they approach the judgment line.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-md overflow-hidden">
                <HelpImage 
                  src="https://images.pexels.com/photos/11697176/pexels-photo-11697176.jpeg" 
                  alt="osu!taiko gameplay"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transform transition-transform hover:scale-[1.02]">
              <h3 className="font-medium text-xl mb-2 text-green-500">osu!catch</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Control a character to catch falling fruits to the rhythm of the music. Move left and right to collect all the fruits.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-md overflow-hidden">
                <HelpImage 
                  src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg" 
                  alt="osu!catch gameplay"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transform transition-transform hover:scale-[1.02]">
              <h3 className="font-medium text-xl mb-2 text-purple-500">osu!mania</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A vertical scrolling rhythm game similar to piano-based games. Press keys as notes fall from the top of the screen.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-md overflow-hidden">
                <HelpImage 
                  src="https://images.pexels.com/photos/5082580/pexels-photo-5082580.jpeg" 
                  alt="osu!mania gameplay"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls section */}
      <section id="controls" className="mb-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4 text-pink-600 dark:text-pink-800">Controls</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Each OSU game mode has its own set of controls. You can customize these in the options menu to suit your preferences.
          </p>
          
          <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Default Controls by Game Mode</h3>
          
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-pink-500 mb-2">osu! (Standard)</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><span className="font-medium">Z or X:</span> Click hit circles and hit sliders</li>
                <li><span className="font-medium">Mouse buttons:</span> Alternative way to click objects</li>
                <li><span className="font-medium">Mouse movement:</span> Move cursor</li>
                <li><span className="font-medium">Spin mouse:</span> Complete spinner objects</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-blue-500 mb-2">osu!taiko</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><span className="font-medium">X or C:</span> Don (red notes)</li>
                <li><span className="font-medium">Z or V:</span> Kat (blue notes)</li>
                <li><span className="font-medium">ZXCV together:</span> For big notes</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-green-500 mb-2">osu!catch</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><span className="font-medium">Left/Right Arrow Keys:</span> Move catcher left and right</li>
                <li><span className="font-medium">Shift:</span> Activate dash (move faster)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-purple-500 mb-2">osu!mania</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><span className="font-medium">4K layout:</span> D F J K</li>
                <li><span className="font-medium">7K layout:</span> S D F Space J K L</li>
                <li><span className="font-medium">Other layouts:</span> Customizable in settings</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 rounded">
            <h4 className="font-medium text-yellow-700 dark:text-yellow-400 mb-1">Tip:</h4>
            <p className="text-gray-700 dark:text-gray-300">
              You can customize all controls in Settings → Keyboard → Key Bindings. Finding comfortable key bindings can significantly improve your gameplay!
            </p>
          </div>
        </div>
      </section>

      {/* Scoring section */}
      <section id="scoring" className="mb-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4 text-pink-600 dark:text-pink-800">Scoring</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The scoring system in OSU rewards accuracy, combo, and difficulty completion. Each game mode has slightly different scoring mechanics.
          </p>
          
          <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Hit Scoring</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-600 text-left">
                  <th className="py-2 px-4 text-gray-800 dark:text-gray-200">Hit Result</th>
                  <th className="py-2 px-4 text-gray-800 dark:text-gray-200">Points</th>
                  <th className="py-2 px-4 text-gray-800 dark:text-gray-200">Accuracy Value</th>
                  <th className="py-2 px-4 text-gray-800 dark:text-gray-200">Effect on Combo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300 font-medium">300 (Perfect)</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">300</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">100%</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Combo +1</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300 font-medium">100 (Good)</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">100</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">1/3 (33.33%)</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Combo +1</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300 font-medium">50 (Meh)</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">50</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">1/6 (16.67%)</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Combo +1</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300 font-medium">Miss</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">0</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">0%</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Combo reset to 0</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Scoring Formula</h3>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
            <p className="text-gray-700 dark:text-gray-300 font-mono">
              Score = <span className="text-pink-500">(Hit Value * Combo Multiplier * Difficulty Multiplier * Mod Multiplier)</span>
            </p>
          </div>
          
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Accuracy Calculation</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Accuracy is calculated based on the weighted average of your hit scores:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 font-mono">
                  Accuracy = <span className="text-purple-500">((300 count × 300) + (100 count × 100) + (50 count × 50)) / (Total hits × 300)</span>
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Performance Points (PP)</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Performance Points are calculated based on the difficulty of the beatmap, your accuracy, and the mods used. 
                The exact formula is complex and has been refined over time. PP is the primary metric used for global rankings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WikiSection;