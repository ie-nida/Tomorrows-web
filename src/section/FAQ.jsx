import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#3a3a3a] py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <Minus size={20} className="text-pink-400" />
          ) : (
            <Plus size={20} className="text-pink-400" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-300 leading-relaxed pr-8 animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // FAQ data organized by categories
  const faqItems = {
    account: [
      {
        question: "How do I create an osu! account?",
        answer: "Visit the osu! website and click on the 'Register' button. Fill out the required information and follow the email verification process to complete your account setup."
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer: "Go to the login page and click on 'Forgot Password'. Enter your email address or username and follow the instructions sent to your email to reset your password."
      },
      {
        question: "Can I change my username?",
        answer: "Yes, but only once. To change your username, you need to have supporter status. Go to your account settings and look for the username change option."
      },
      {
        question: "How do I link my osu! account to Discord?",
        answer: "In Discord, go to User Settings > Connections > Add, then select osu! and follow the authentication process to link your accounts."
      }
    ],
    gameplay: [
      {
        question: "How do I improve my accuracy?",
        answer: <div>
          <p>Improving accuracy takes practice and focus. Here are some tips:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>Play maps slightly below your skill level and focus on hitting every note perfectly</li>
            <li>Use a skin with clear visual feedback</li>
            <li>Practice with the No Fail mod to complete maps</li>
            <li>Watch replays of top players to understand timing</li>
            <li>Try adjusting your universal offset in the settings if you consistently hit early or late</li>
          </ul>
        </div>
      },
      {
        question: "What do the different mods do?",
        answer: <div>
          <p>Mods modify gameplay in various ways. Some common mods include:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li><span className="text-yellow-400">Easy (EZ)</span>: Makes the game easier by making circles larger and reducing speed</li>
            <li><span className="text-yellow-400">No Fail (NF)</span>: Prevents failing a map even if your health bar empties</li>
            <li><span className="text-yellow-400">Hard Rock (HR)</span>: Makes the game harder by increasing approach rate and making circles smaller</li>
            <li><span className="text-yellow-400">Double Time (DT)</span>: Increases the speed of the song by 1.5x</li>
            <li><span className="text-yellow-400">Hidden (HD)</span>: Makes approach circles and hitcircles disappear before you need to hit them</li>
          </ul>
        </div>
      },
      {
        question: "What is the difference between PP and score?",
        answer: "PP (Performance Points) measures skill level and determines your global ranking. Score is specific to each beatmap and is based on your accuracy, combo, and the mods you use. PP takes into account map difficulty, while score is more straightforward."
      }
    ],
    technical: [
      {
        question: "osu! is lagging. How can I fix it?",
        answer: <div>
          <p>Try these steps to reduce lag:</p>
          <ol className="list-decimal list-inside mt-2 space-y-1 ml-4">
            <li>Update your graphics drivers</li>
            <li>Close other programs running in the background</li>
            <li>Lower your in-game settings (disable video, reduce effects)</li>
            <li>Disable integration features like Discord overlay</li>
            <li>Try running in compatibility mode</li>
            <li>Check for Windows updates</li>
          </ol>
        </div>
      },
      {
        question: "How do I install custom skins?",
        answer: <div>
          <p>To install a custom skin:</p>
          <ol className="list-decimal list-inside mt-2 space-y-1 ml-4">
            <li>Download a skin from the osu! forums or other websites</li>
            <li>Extract the skin folder to your osu! skins directory (usually <code className="bg-[#333] px-1 py-0.5 rounded">/path/to/osu!/Skins</code>)</li>
            <li>In osu!, press <code className="bg-[#333] px-1 py-0.5 rounded">Ctrl + O</code> to open options</li>
            <li>Go to the Skin tab and select your new skin from the dropdown menu</li>
            <li>Click "Apply" to use the new skin</li>
          </ol>
        </div>
      },
      {
        question: "Can I play osu! offline?",
        answer: "Yes, you can play osu! offline. The game will work without an internet connection, but you won't be able to download new beatmaps, submit scores, or interact with other players. Your local scores will be saved and submitted when you reconnect."
      }
    ],
    beatmaps: [
      {
        question: "How do I download more beatmaps?",
        answer: <div>
          <p>There are several ways to download beatmaps:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>In-game: Use the beatmap browser (press F5)</li>
            <li>Website: Browse beatmaps on the <a href="https://osu.ppy.sh/beatmapsets" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">osu! website</a> and click download</li>
            <li>osu!direct: Available for supporters, allows direct downloading in-game</li>
            <li>Collections: Download beatmap packs from the osu! website</li>
          </ul>
        </div>
      },
      {
        question: "I can't see the beatmaps I downloaded. Where are they?",
        answer: "After downloading beatmaps, you need to extract them if they're in .zip format. The game should automatically process .osz files. If you don't see the beatmaps, try pressing F5 to refresh the song list. Make sure you have the correct filters applied in the song selection screen. You can also check if the files were downloaded correctly in your Downloads folder."
      }
    ]
  };

  // Flatten the FAQ items for searching
  const allFaqItems = Object.values(faqItems).flat();

  // Filter FAQ items based on search term
  const filteredFaqItems = searchTerm
    ? allFaqItems.filter(item => 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (typeof item.answer === 'string' && item.answer.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : allFaqItems;

  return (
    <div className="fade-in">
      <h1 className="text-4xl font-bold mb-6 pb-2 border-b border-[#3a3a3a] text-pink-400">
        Frequently Asked Questions
      </h1>
      
      {/* Search bar */}
      <div className="mb-8 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {searchTerm ? (
        // Show search results
        <div>
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">
            Search Results {filteredFaqItems.length > 0 ? `(${filteredFaqItems.length})` : ''}
          </h2>
          
          {filteredFaqItems.length > 0 ? (
            <div className="space-y-1">
              {filteredFaqItems.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          ) : (
            <div className="bg-[#2a2a2a] rounded-lg p-6 text-center">
              <p className="text-gray-300">No matching questions found.</p>
              <p className="text-gray-400 mt-2">Try using different keywords or check out our categories below.</p>
            </div>
          )}
        </div>
      ) : (
        // Show categorized FAQ
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div 
              className="bg-[#2a2a2a] p-6 rounded-lg shadow-md border-l-4 border-pink-500 transform transition-transform hover:scale-[1.02]"
              onClick={() => document.getElementById('account-faq')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <h2 className="text-xl font-semibold text-pink-400 mb-2">Account Questions</h2>
              <p className="text-gray-300">Registration, password recovery, username changes, and account settings.</p>
            </div>
            <div 
              className="bg-[#2a2a2a] p-6 rounded-lg shadow-md border-l-4 border-yellow-500 transform transition-transform hover:scale-[1.02]"
              onClick={() => document.getElementById('gameplay-faq')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">Gameplay Questions</h2>
              <p className="text-gray-300">Improving skills, scoring system, mods, and gameplay mechanics.</p>
            </div>
            <div 
              className="bg-[#2a2a2a] p-6 rounded-lg shadow-md border-l-4 border-blue-500 transform transition-transform hover:scale-[1.02]"
              onClick={() => document.getElementById('technical-faq')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-2">Technical Questions</h2>
              <p className="text-gray-300">Performance issues, installation, updates, and compatibility problems.</p>
            </div>
            <div 
              className="bg-[#2a2a2a] p-6 rounded-lg shadow-md border-l-4 border-green-500 transform transition-transform hover:scale-[1.02]"
              onClick={() => document.getElementById('beatmaps-faq')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <h2 className="text-xl font-semibold text-green-400 mb-2">Beatmaps Questions</h2>
              <p className="text-gray-300">Finding, downloading, and managing beatmaps.</p>
            </div>
          </div>

          {/* Account FAQ */}
          <section id="account-faq" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-pink-400 pb-2 border-b border-[#3a3a3a]">
              Account
            </h2>
            <div className="space-y-1">
              {faqItems.account.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* Gameplay FAQ */}
          <section id="gameplay-faq" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400 pb-2 border-b border-[#3a3a3a]">
              Gameplay
            </h2>
            <div className="space-y-1">
              {faqItems.gameplay.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* Technical FAQ */}
          <section id="technical-faq" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-blue-400 pb-2 border-b border-[#3a3a3a]">
              Technical
            </h2>
            <div className="space-y-1">
              {faqItems.technical.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* Beatmaps FAQ */}
          <section id="beatmaps-faq" className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-green-400 pb-2 border-b border-[#3a3a3a]">
              Beatmaps
            </h2>
            <div className="space-y-1">
              {faqItems.beatmaps.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default FAQ;