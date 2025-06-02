import React from 'react';
import { Github, Twitter, Youtube, Instagram, Music2, Heart, Users } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-30 w-full bg-gradient-to-b from-[#1F1F1F] to-black text-white text-sm">
      <div className="2xl:-mt-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Top section with logo and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-pink-900/30 pb-4">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-indigo-400 bg-clip-text text-transparent">
              osu!
            </div>
            <span className="ml-2 text-xs text-gray-400">rhythm is just a click away</span>
          </div>

          <div className="flex space-x-3">
            <SocialLink icon={<Twitter size={18} />} href="https://twitter.com/osugame" label="Twitter" />
            <SocialLink icon={<Youtube size={18} />} href="https://youtube.com/osugame" label="YouTube" />
            <SocialLink icon={<Instagram size={18} />} href="https://instagram.com/osugame" label="Instagram" />
            <SocialLink icon={<Github size={18} />} href="https://github.com/ppy/osu" label="GitHub" />
          </div>
        </div>

        {/* Middle section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-b border-pink-900/30">
          {/* Navigation */}
          <FooterSection title="Navigation" links={[
            { href: "/home", label: "Home" },
            { href: "/download", label: "Play" },
            { href: "/OsuDailyLeaderboard", label: "Leaderboard" },
            { href: "/communitylive", label: "Community" },
            { href: "/help", label: "Help" },
          ]} />

          {/* Help */}
          <FooterSection title="Help & Support" links={[
            { href: "/wiki", label: "Wiki" },
            { href: "/faq", label: "FAQ" },
            { href: "/rules", label: "Rules" },
            { href: "/reports", label: "Report" },
            { href: "/need", label: "NeedHelp" },
          ]} />

          {/* Legal */}
          <FooterSection title="Legal" links={[
            { href: "https://osu.ppy.sh/legal/en/Terms", label: "Terms of Service" },
            { href: "https://osu.ppy.sh/legal/en/Privacy", label: "Privacy Policy" },
            { href: "https://osu.ppy.sh/legal/en/Copyright", label: "Copyright" },
          ]} />

          {/* Community Stats */}
          <div>
            <h3 className="text-base font-semibold mb-3">Community</h3>
            <ul className="space-y-2">
              <Stat icon={<Users size={16} />} label="14.2M+ Players" />
              <Stat icon={<Music2 size={16} />} label="2.3M+ Beatmaps" />
              <Stat icon={<Heart size={16} />} label="89.7B+ Plays" />
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-6 text-center text-xs text-gray-400">
          <p>© {currentYear} osu! All rights reserved.</p>
          <p className="mt-1 text-gray-500">
            osu! is a free-to-win rhythm game developed by peppy with four gameplay modes: osu!standard, osu!taiko, osu!catch, and osu!mania
          </p>
        </div>
      </div>
    </footer>
  );
};


const SocialLink = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-900 transition duration-300 hover:scale-105 group"
  >
    <div className="text-gray-400 group-hover:text-white">{icon}</div>
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-all duration-200 inline-block">
      {children}
    </a>
  </li>
);

const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="text-base font-semibold mb-3">{title}</h3>
    <ul className="space-y-1.5">
      {links.map((link, idx) => (
        <FooterLink key={idx} href={link.href}>{link.label}</FooterLink>
      ))}
    </ul>
  </div>
);

const Stat = ({ icon, label }) => (
  <li className="flex items-center">
    <div className="text-pink-500 mr-2">{icon}</div>
    <span>{label}</span>
  </li>
);

export default Footer;
