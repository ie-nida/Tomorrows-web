import React from 'react';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

const Rules = ({ subsection, language }) => {
  // Rules content
  const content = {
    title: "osu! Community Rules",
    introduction: "These rules are the foundation upon which the osu! community is built. They are designed to ensure that osu! remains a fun and welcoming environment for everyone.",
    communityRules: {
      title: "Community Rules",
      description: "These rules apply to all users across all aspects of the osu! community, including the game, forums, chat, and other official communication channels.",
      rules: [
        {
          id: "C1",
          rule: "Be respectful and considerate",
          description: "Treat all players with respect. Be kind and constructive in your interactions. Harassment, discrimination, and bullying are not tolerated in any form.",
          examples: {
            allowed: [
              "Offering constructive criticism",
              "Engaging in friendly competition",
              "Helping new players"
            ],
            prohibited: [
              "Personal attacks or insults",
              "Discriminatory language or behavior",
              "Intentionally creating a hostile environment"
            ]
          }
        },
        {
          id: "C2",
          rule: "Follow the chat etiquette",
          description: "Communicate appropriately in chat channels. Avoid spamming, excessive caps, or disruptive behavior that interferes with others' ability to enjoy the game.",
          examples: {
            allowed: [
              "Discussing gameplay strategies",
              "Sharing achievements with appropriate excitement",
              "Using emotes in moderation"
            ],
            prohibited: [
              "Spamming messages or emotes",
              "Typing in ALL CAPS excessively",
              "Disrupting ongoing conversations purposefully"
            ]
          }
        },
        {
          id: "C3",
          rule: "Resolve conflicts appropriately",
          description: "If a conflict arises, attempt to resolve it peacefully. If necessary, report the issue through proper channels rather than escalating it publicly.",
          examples: {
            allowed: [
              "Calmly discussing disagreements",
              "Stepping away from heated situations",
              "Using the report system for serious issues"
            ],
            prohibited: [
              "Public callouts or shaming",
              "Escalating arguments intentionally",
              "Retaliating against other users"
            ]
          }
        },
        {
          id: "C4",
          rule: "Use appropriate names and avatars",
          description: "Usernames, avatars, and profile content must be appropriate for all ages and not contain offensive or explicit material.",
          examples: {
            allowed: [
              "Creative or gameplay-related usernames",
              "Anime, game characters, or personal photos as avatars",
              "Profile customization that expresses your personality"
            ],
            prohibited: [
              "Offensive, discriminatory, or explicit usernames",
              "Inappropriate or sexually explicit avatars",
              "Profile content that violates the terms of service"
            ]
          }
        }
      ]
    },
    contentRules: {
      title: "Content Rules",
      description: "These rules apply to all content created, shared, or uploaded within the osu! ecosystem, including beatmaps, forum posts, and user-generated content.",
      rules: [
        {
          id: "CO1",
          rule: "Keep content appropriate",
          description: "All content must be appropriate for a broad audience. Explicit, offensive, or inappropriate material is not allowed.",
          examples: {
            allowed: [
              "Artistic expression within community guidelines",
              "Creating beatmaps with appropriate themes",
              "Sharing gameplay highlights and achievements"
            ],
            prohibited: [
              "Sexually explicit or suggestive content",
              "Graphic violence or disturbing imagery",
              "Content promoting harmful activities"
            ]
          }
        },
        {
          id: "CO2",
          rule: "Respect intellectual property",
          description: "Do not share copyrighted material without permission. This includes unlicensed music, artwork, or other protected content.",
          examples: {
            allowed: [
              "Using content with proper licenses",
              "Creating original artwork or compositions",
              "Attributing sources when appropriate"
            ],
            prohibited: [
              "Distributing copyrighted music without permission",
              "Claiming others' work as your own",
              "Removing attribution from shared content"
            ]
          }
        },
        {
          id: "CO3",
          rule: "Follow beatmap submission guidelines",
          description: "When creating and submitting beatmaps, follow the established guidelines for quality, content, and metadata.",
          examples: {
            allowed: [
              "Submitting maps that follow quality standards",
              "Providing accurate and complete metadata",
              "Working with modders to improve map quality"
            ],
            prohibited: [
              "Submitting maps with inappropriate content",
              "Intentionally misleading metadata",
              "Ignoring established mapping standards"
            ]
          }
        }
      ]
    },
    accountRules: {
      title: "Account Rules",
      description: "These rules apply to account management, security, and play practices.",
      rules: [
        {
          id: "A1",
          rule: "One account per player",
          description: "Each player should have only one account. Multiple accounts (multiaccount) are not allowed.",
          examples: {
            allowed: [
              "Using your single account across all devices",
              "Recovering your account if you lose access",
              "Changing your username (if eligible)"
            ],
            prohibited: [
              "Creating additional accounts",
              "Sharing accounts with other players",
              "Using someone else's account"
            ]
          }
        },
        {
          id: "A2",
          rule: "Play legitimately",
          description: "Do not cheat, hack, or manipulate the game in any way. This includes using automated tools, macros, or other third-party software to gain an advantage.",
          examples: {
            allowed: [
              "Using approved gameplay peripherals",
              "Practicing to improve your skills naturally",
              "Using official game modifications (mods)"
            ],
            prohibited: [
              "Using cheating tools or macros",
              "Modifying the game client to gain advantages",
              "Manipulating scores or statistics"
            ]
          }
        },
        {
          id: "A3",
          rule: "Account security",
          description: "You are responsible for your account security. Keep your password secure and do not share your account details with others.",
          examples: {
            allowed: [
              "Using a strong, unique password",
              "Keeping your email address up to date",
              "Enabling additional security features when available"
            ],
            prohibited: [
              "Sharing your password with others",
              "Attempting to access others' accounts",
              "Selling or trading accounts"
            ]
          }
        },
        {
          id: "A4",
          rule: "Report violations",
          description: "If you witness rule violations, report them through the appropriate channels. Do not take matters into your own hands.",
          examples: {
            allowed: [
              "Using the in-game report feature",
              "Contacting moderators about serious issues",
              "Providing evidence when reporting"
            ],
            prohibited: [
              "Publicly accusing others without evidence",
              "Harassing suspected rule-breakers",
              "Making false reports"
            ]
          }
        }
      ]
    }
  };

  // Helper component for rule examples
  const RuleExamples = ({ allowed, prohibited }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
      <div className="bg-[#2a3a2a] rounded-md p-4">
        <div className="flex items-center mb-2">
          <CheckCircle2 size={18} className="text-green-400 mr-2" />
          <h4 className="text-green-400 font-medium">Allowed</h4>
        </div>
        <ul className="space-y-1">
          {allowed.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#3a2a2a] rounded-md p-4">
        <div className="flex items-center mb-2">
          <XCircle size={18} className="text-red-400 mr-2" />
          <h4 className="text-red-400 font-medium">Prohibited</h4>
        </div>
        <ul className="space-y-1">
          {prohibited.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // Render a specific rule section
  const renderRuleSection = (rules, title, description) => (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-pink-400 pb-2 border-b border-[#3a3a3a]">
        {title}
      </h2>
      <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
      
      <div className="space-y-6">
        {rules.map((rule, index) => (
          <div key={index} className="bg-[#2a2a2a] rounded-lg p-5 shadow-md">
            <div className="flex items-start mb-3">
              <div className="bg-pink-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                {rule.id}
              </div>
              <h3 className="text-xl font-semibold text-yellow-400">{rule.rule}</h3>
            </div>
            <p className="text-gray-300 mb-4 pl-11">{rule.description}</p>
            <RuleExamples allowed={rule.examples.allowed} prohibited={rule.examples.prohibited} />
          </div>
        ))}
      </div>
    </section>
  );

  // Determine which subsection to show
  const renderSubsection = () => {
    switch (subsection) {
      case '-community':
        return renderRuleSection(
          content.communityRules.rules,
          content.communityRules.title,
          content.communityRules.description
        );
      case '-content':
        return renderRuleSection(
          content.contentRules.rules,
          content.contentRules.title,
          content.contentRules.description
        );
      case '-account':
        return renderRuleSection(
          content.accountRules.rules,
          content.accountRules.title,
          content.accountRules.description
        );
      default:
        return (
          <>
            <section className="mb-8">
              <h1 className="text-4xl font-bold mb-6 pb-2 border-b border-[#3a3a3a] text-pink-400">
                {content.title}
              </h1>
              
              <div className="flex items-center bg-[#2a2a2a] p-4 rounded-lg mb-6">
                <AlertCircle size={24} className="text-yellow-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300 italic">{content.introduction}</p>
              </div>
              
              {/* Rule categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div 
                  className="bg-gradient-to-br from-[#2d2d2d] to-[#353535] p-6 rounded-lg shadow-md border-t-4 border-pink-500 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => document.getElementById('community-rules')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <h2 className="text-xl font-semibold text-pink-400 mb-3">Community Rules</h2>
                  <p className="text-gray-300">Rules for interaction with other players and community conduct.</p>
                </div>
                <div 
                  className="bg-gradient-to-br from-[#2d2d2d] to-[#353535] p-6 rounded-lg shadow-md border-t-4 border-yellow-500 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => document.getElementById('content-rules')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <h2 className="text-xl font-semibold text-yellow-400 mb-3">Content Rules</h2>
                  <p className="text-gray-300">Guidelines for creating and sharing content within osu!.</p>
                </div>
                <div 
                  className="bg-gradient-to-br from-[#2d2d2d] to-[#353535] p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => document.getElementById('account-rules')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <h2 className="text-xl font-semibold text-blue-400 mb-3">Account Rules</h2>
                  <p className="text-gray-300">Rules for account management and fair play.</p>
                </div>
              </div>
            </section>
            
            {/* Community Rules */}
            <section id="community-rules" className="mb-10">
              {renderRuleSection(
                content.communityRules.rules,
                content.communityRules.title,
                content.communityRules.description
              )}
            </section>
            
            {/* Content Rules */}
            <section id="content-rules" className="mb-10">
              {renderRuleSection(
                content.contentRules.rules,
                content.contentRules.title,
                content.contentRules.description
              )}
            </section>
            
            {/* Account Rules */}
            <section id="account-rules" className="mb-10">
              {renderRuleSection(
                content.accountRules.rules,
                content.accountRules.title,
                content.accountRules.description
              )}
            </section>
          </>
        );
    }
  };

  return (
    <div className="fade-in">
      {renderSubsection()}
    </div>
  );
};

export default Rules;