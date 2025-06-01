import { FaTwitter, FaHeart } from "react-icons/fa";

const Socialmedia = () => {
  const icons = [
    { icon: <FaTwitter />, label: "Twitter", link: "https://twitter.com/osugame" },
    { icon: <FaHeart className="text-pink-500" />, label: "Support the game", link: "https://osu.ppy.sh/home/support" },
  ];

  return (
    <div className="flex gap-4 items-center">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group text-white"
        >
          {/* Icon */}
          <div className="text-lg group-hover:scale-110 transition-transform duration-200">
            {item.icon}
          </div>

          {/* Tooltip BELOW the icon */}
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200">
            <div className="relative bg-black text-white text-xs px-3 py-1 rounded-md whitespace-nowrap z-10">
              {item.label}
              {/* Triangle Pointer */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45 z-[-1]"></div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Socialmedia;
