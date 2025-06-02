import React from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

const RulesSection = ({ subSection }) => {
 
  const scrollToTarget = () => {
    if (subSection && subSection !== '') {
      const element = document.getElementById(`rules-${subSection}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  
  React.useEffect(() => {
    scrollToTarget();
  }, [subSection]);

  return (
   <div className="bg-gray-700 dark:bg-gray-900">
      {/* Main heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 pb-4 border-b border-gray-200 dark:border-gray-700  bg-gradient-to-r from-pink-800 via-white to-indigo-100 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] ">
        OSU Rules &amp; Guidelines
      </h1>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-md mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700 dark:text-yellow-400 font-medium">Important</p>
            <p className="text-yellow-700 dark:text-yellow-500 mt-1">
              These rules apply to all OSU players. Violation may result in account restrictions or bans. Please read them carefully.
            </p>
          </div>
        </div>
      </div>

      {/* Community Guidelines */}
      <section id="rules-community" className="mb-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4 text-pink-800 dark:text-pink-800">Community Guidelines</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our community guidelines are designed to create a positive and supportive environment for all players. 
            We expect everyone to treat each other with respect and courtesy.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">Respect All Users</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Treat everyone with respect regardless of their skill level, background, language, or any other factor. 
                Harassment, discrimination, or bullying of any kind is not tolerated.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">Keep Conversations Appropriate</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Avoid explicit, offensive, or controversial topics. This includes but is not limited to sexual content, 
                excessive violence, illegal activities, and political or religious discussions that could lead to conflict.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">Avoid Spam and Disruptive Behavior</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Don't flood chats with repetitive messages, excessive capitalization, or purposely disruptive content. 
                This includes excessive use of emotes or text formatting to disrupt normal conversation flow.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">No Account Sharing or Trading</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Your OSU account is for your use only. Sharing, selling, or trading accounts is prohibited and may result in 
                permanent bans for all involved accounts.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">Report Violations</h3>
              <p className="text-gray-700 dark:text-gray-300">
                If you encounter anyone violating these guidelines, please report them through the appropriate channels. 
                Do not publicly accuse or confront them.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-pink-900" />
              </div>
              <div className="ml-3">
                <p className="text-pink-800 dark:text-pink-800 font-medium">Remember</p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  These guidelines exist to ensure everyone has a positive experience. By following them, you help maintain 
                  the welcoming and supportive community that makes OSU special.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Rules */}
      <section id="rules-chat" className="mb-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4 text-pink-800 dark:text-pink-800">Chat Rules</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The in-game chat is a place for players to communicate, make friends, and share tips. To keep chat enjoyable for everyone, 
            please follow these specific rules.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-red-500">Prohibited in Chat</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Harassment or targeted negativity</li>
                <li>Excessive swearing or offensive language</li>
                <li>Sharing inappropriate links or content</li>
                <li>Spamming messages or symbols</li>
                <li>Impersonating other players or staff</li>
                <li>Advertising or self-promotion</li>
                <li>Multi-posting (splitting one message into multiple lines)</li>
                <li>Discussing cheats, hacks or exploit methods</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-green-500">Encouraged in Chat</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Constructive feedback and advice</li>
                <li>Congratulating others on their achievements</li>
                <li>Asking for help or clarification</li>
                <li>Sharing tips and strategies</li>
                <li>Organizing multiplayer games</li>
                <li>Using English in global channels (or the designated language in language-specific channels)</li>
                <li>Being mindful of chat channel topics</li>
                <li>Using moderation tools appropriately</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Channel-Specific Rules</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-600 text-left">
                  <th className="py-2 px-4 text-gray-800 dark:text-gray-200">Channel</th>
                  <th className="py-2 px-4 text-gray-800 dark:text-gray-200">Purpose</th>
                  <th className="py-2 px-4 text-gray-800 dark:text-gray-200">Special Rules</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300 font-medium">#osu</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">General discussion</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">English only, game-related topics</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300 font-medium">#help</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Support questions</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">No off-topic chat, be specific about issues</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300 font-medium">#lobby</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Multiplayer organization</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Keep messages related to finding or creating games</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300 font-medium">Language-specific</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Non-English discussion</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Use only the designated language of that channel</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Consequences for Violations</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Breaking chat rules may result in the following actions:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li><span className="font-medium">Silences</span> - Temporary restrictions from using chat</li>
            <li><span className="font-medium">Silence duration</span> - Increases with repeated violations</li>
            <li><span className="font-medium">Channel restrictions</span> - Being banned from specific channels</li>
            <li><span className="font-medium">Account restrictions</span> - For severe or repeated violations</li>
          </ul>
        </div>
      </section>

      {/* Ranking Criteria */}
      <section id="rules-ranking" className="mb-8 scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4 text-pink-800 dark:text-pink-800">Ranking Criteria</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The ranking criteria sets the standards for beatmaps to be considered for ranking. These guidelines ensure playability, fairness, and consistency across all ranked maps.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">General Requirements</h3>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Maps must be properly timed to the music</li>
                  <li>Maps must follow the rhythm and intensity of the song</li>
                  <li>Maps must be playable and beatable</li>
                  <li>Maps must have an appropriate difficulty spread</li>
                  <li>Maps must include a background image and proper metadata</li>
                  <li>Maps must not use copyrighted images without permission</li>
                  <li>Maps must adhere to the game mode-specific criteria</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Info className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-blue-700 dark:text-blue-400 font-medium">Note</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">
                      The ranking criteria is regularly updated. Make sure to check the latest guidelines before submitting a map for ranking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Mode-Specific Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-pink-500 mb-2">osu! (Standard)</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    <li>No excessive overlapping of hit objects</li>
                    <li>Appropriate spacing between hit objects</li>
                    <li>Sliders must be properly shaped and sized</li>
                    <li>Spinners must have reasonable duration</li>
                    <li>No unrankable patterns or impossible jumps</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-500 mb-2">osu!taiko</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Patterns must be playable on a taiko drum</li>
                    <li>Appropriate use of Don and Kat notes</li>
                    <li>Reasonable note density for the difficulty</li>
                    <li>Proper use of big notes for emphasis</li>
                    <li>Finisher notes should match song structure</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-green-500 mb-2">osu!catch</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Objects must be catchable with proper movements</li>
                    <li>Appropriate use of hyperdash</li>
                    <li>Reasonable object density and spacing</li>
                    <li>Edge dashes must be properly signaled</li>
                    <li>Bananas should match song intensity</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-pink-800 mb-2">osu!mania</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Consistent column usage throughout the map</li>
                    <li>Appropriate scroll speed for the difficulty</li>
                    <li>Reasonable chord density</li>
                    <li>Long notes must be properly timed</li>
                    <li>Patterns must be physically playable</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Modding and Ranking Process</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Submit your beatmap to the modding queue</li>
                <li>Receive feedback from other mappers (modding)</li>
                <li>Make necessary adjustments based on feedback</li>
                <li>Get approval from at least two Beatmap Nominators</li>
                <li>Wait for final review from the Quality Assurance team</li>
                <li>If approved, your map becomes officially ranked</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Enforcement Notice */}
      <div className="bg-purple-50 dark:bg-pink-900/20 border border-purple-200 dark:border-pink-800 rounded-xl p-6 text-center">
        <h3 className="text-xl font-medium mb-2 text-pink-800 dark:text-pink-800">Rules Enforcement</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          These rules are enforced by our moderation team. Violations may result in warnings, restrictions, or permanent bans depending on severity and frequency.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          If you have questions about the rules or want to report a violation, please use the Report Abuse section or contact our support team.
        </p>
      </div>
    </div>
  );
};

export default RulesSection;