import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 px-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">{question}</h3>
        <span className="text-pink-600 dark:text-pink-400 ml-4">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 pt-0 text-gray-700 dark:text-gray-300">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection = ({ subSection }) => {
  
  const scrollToTarget = () => {
    if (subSection && subSection !== '') {
      const element = document.getElementById(`faq-${subSection}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  
  React.useEffect(() => {
    scrollToTarget();
  }, [subSection]);
  
  
  const accountFAQs = [
    {
      question: "How do I create an OSU account?",
      answer: (
        <div>
          <p className="mb-2">Creating an OSU account is simple:</p>
          <ol className="list-decimal list-inside space-y-1 mb-2">
            <li>Visit the OSU website at osu.ppy.sh</li>
            <li>Click on "Sign up" in the top right corner</li>
            <li>Fill in your details including username, email, and password</li>
            <li>Verify your email address by clicking the link sent to your inbox</li>
            <li>Log in and start playing!</li>
          </ol>
          <p>Note: Choose your username carefully as you can only change it once every 30 days.</p>
        </div>
      )
    },
    {
      question: "How do I recover my lost password?",
      answer: (
        <div>
          <p className="mb-2">If you've forgotten your password:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Go to the login page</li>
            <li>Click on "Forgot your password?"</li>
            <li>Enter the email address associated with your account</li>
            <li>Check your email for password reset instructions</li>
            <li>Create a new password and log in</li>
          </ol>
          <p className="mt-2">If you don't receive the email, check your spam folder or contact support.</p>
        </div>
      )
    },
    {
      question: "Can I change my username?",
      answer: (
        <p>
          Yes, you can change your username once every 30 days. To change your username, go to your account settings and look for the "Change Username" option. Note that this feature is only available to users who have purchased OSU! Supporter at least once.
        </p>
      )
    },
    {
      question: "What is OSU! Supporter and what benefits does it provide?",
      answer: (
        <div>
          <p className="mb-2">OSU! Supporter is a way to support the game's development while receiving perks:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Access to OSU!direct for downloading beatmaps in-game</li>
            <li>Username changes</li>
            <li>Friend list filtering</li>
            <li>Customizable in-game interface colors</li>
            <li>Automatic beatmap downloads in multiplayer</li>
            <li>Supporter badge next to your name</li>
            <li>Download beatmap skin and background</li>
            <li>Upload beatmaps more frequently</li>
          </ul>
        </div>
      )
    }
  ];

  // Gameplay FAQ items
  const gameplayFAQs = [
    {
      question: "How do I download more beatmaps?",
      answer: (
        <div>
          <p className="mb-2">There are two primary ways to download beatmaps:</p>
          <ol className="list-decimal list-inside space-y-1 mb-2">
            <li><strong>From the website:</strong> Browse beatmaps on the OSU website and click "Download" on maps you like.</li>
            <li><strong>In-game (with Supporter):</strong> Use OSU!direct to browse and download maps directly within the game.</li>
          </ol>
          <p>Downloaded .osz files will automatically be processed when you open OSU, or you can drag them into the game window.</p>
        </div>
      )
    },
    {
      question: "What are mods and how do they affect gameplay?",
      answer: (
        <div>
          <p className="mb-2">Mods are gameplay modifiers that change the difficulty, scoring, or appearance of beatmaps:</p>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li><strong>Difficulty Reduction Mods:</strong> Easy, No Fail, Half Time</li>
            <li><strong>Difficulty Increasing Mods:</strong> Hard Rock, Double Time, Hidden, Flashlight</li>
            <li><strong>Special Mods:</strong> Auto, Relax, Spun Out</li>
            <li><strong>Format Changing Mods:</strong> Target Practice, Perfect, Sudden Death</li>
          </ul>
          <p>Most difficulty-increasing mods provide a score multiplier, while difficulty-reducing mods apply a penalty to your score.</p>
        </div>
      )
    },
    {
      question: "How do I improve my accuracy?",
      answer: (
        <div>
          <p className="mb-2">Improving accuracy takes time and practice:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Start with easier maps and gradually increase difficulty</li>
            <li>Focus on timing rather than just hitting notes</li>
            <li>Play with the Hidden mod to improve reading ability</li>
            <li>Adjust your offset in the settings if you consistently hit early or late</li>
            <li>Consider using a skin with clear hit markers</li>
            <li>Play maps with simple rhythm patterns repeatedly</li>
            <li>Take breaks to avoid fatigue</li>
          </ul>
        </div>
      )
    },
    {
      question: "What's the difference between local and online rankings?",
      answer: (
        <p>
          Local rankings show your personal best scores on each beatmap, while online rankings compare your scores with other players worldwide. Online rankings contribute to your global ranking and provide performance points (PP) when you submit scores while connected to the internet. Local rankings allow you to track your personal improvement over time.
        </p>
      )
    }
  ];

  // Technical FAQ items
  const technicalFAQs = [
    {
      question: "OSU is lagging or stuttering. How can I fix it?",
      answer: (
        <div>
          <p className="mb-2">If you're experiencing lag or stutters:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Lower your graphics settings in the options menu</li>
            <li>Disable visual effects and animations</li>
            <li>Update your graphics drivers</li>
            <li>Close background applications that might be using resources</li>
            <li>Set OSU to high priority in Task Manager</li>
            <li>Enable Compatibility Mode in OSU settings</li>
            <li>Try fullscreen mode instead of windowed</li>
            <li>Verify that your system meets the minimum requirements</li>
          </ul>
        </div>
      )
    },
    {
      question: "My beatmaps aren't showing up. What should I do?",
      answer: (
        <div>
          <p className="mb-2">If your beatmaps aren't appearing:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Press F5 in the song selection screen to refresh the beatmap list</li>
            <li>Check that your .osz files were properly extracted to the "Songs" folder</li>
            <li>Verify that the beatmaps are compatible with your OSU version</li>
            <li>Look for any error messages in the OSU logs</li>
            <li>Make sure your song filter isn't excluding your maps</li>
            <li>Try restarting OSU completely</li>
          </ol>
        </div>
      )
    },
    {
      question: "How do I fix audio latency/delay issues?",
      answer: (
        <div>
          <p className="mb-2">To fix audio latency problems:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Go to Options → Audio → Offset Adjustment</li>
            <li>Use the built-in offset wizard to calculate your optimal offset</li>
            <li>Alternatively, manually adjust the global offset value</li>
            <li>Try different audio compatibility modes</li>
            <li>Use a wired headset instead of Bluetooth (which adds latency)</li>
            <li>Update your audio drivers</li>
            <li>Close other applications that might be using audio</li>
          </ol>
        </div>
      )
    },
    {
      question: "Can I transfer my OSU account or data to another computer?",
      answer: (
        <div>
          <p className="mb-2">Yes, you can transfer your OSU data:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Your account data (rankings, PP, etc.) is stored online and will sync automatically when you log in</li>
            <li>For local data (replays, skins, beatmaps):</li>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Copy the entire OSU folder to an external drive or cloud storage</li>
              <li>Transfer it to your new computer</li>
              <li>Install OSU on the new computer</li>
              <li>Copy your user data from the old installation to the new one</li>
            </ul>
            <li>You can also use the in-game settings export/import feature for transferring your settings</li>
          </ol>
        </div>
      )
    }
  ];

  return (
    <div className="bg-gray-700 dark:bg-gray-900">
      {/* Main heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 pb-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-pink-800 via-white to-indigo-100 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] ">
        Frequently Asked Questions
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Find answers to the most common questions about OSU. If you can't find what you're looking for, please check out the "No, Really, I Do Need Help" section or contact our support team.
      </p>

      {/* Account Questions */}
      <section id="faq-account" className="mb-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4 text-pink-600 dark:text-pink-800">Account Questions</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          {accountFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* Gameplay Questions */}
      <section id="faq-gameplay" className="mb-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4 text-pink-600 dark:text-pink-800">Gameplay Questions</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          {gameplayFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* Technical Questions */}
      <section id="faq-technical" className="mb-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4 text-pink-600 dark:text-pink-800">Technical Issues</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          {technicalFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* Still Need Help */}
      <div className="bg-purple-50 dark:bg-pink-900/20 border border-purple-200 dark:border-pink-800 rounded-xl p-6 text-center">
        <h3 className="text-xl font-medium mb-2 text-pink-700 dark:text-pink-800">Still Have Questions?</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          If you didn't find the answer you were looking for, please check our detailed Wiki or contact our support team.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
            Contact Support
          </button>
          <button className="px-6 py-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-pink-600 dark:text-pink-400 border border-purple-200 dark:border-gray-600 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Visit Community Forums
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;