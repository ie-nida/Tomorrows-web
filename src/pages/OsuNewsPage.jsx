import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import React from 'react';

const TABS = ['Reddit', 'osu! News', 'YouTube'];

const OsuNewsSection = () => {
  const [activeTab, setActiveTab] = useState('Reddit');
  const [redditPosts, setRedditPosts] = useState([]);
  const [youtubeVideos, setYoutubeVideos] = useState([
    {
      title: 'a better way to find maps',
      author: 'osu! Official',
      date: '2025-03-21',
      image: 'https://i.ytimg.com/vi/cL4iwng19Ow/hqdefault.jpg',
      link: 'https://youtu.be/cL4iwng19Ow?si=59HNZvFUwvIQzmiX',
    },
    {
      title: 'improving the "new player experience"',
      author: 'osu! Official',
      date: '2025-02-20',
      image: 'https://i.ytimg.com/vi/ZzDdJqJnnvw/hqdefault.jpg',
      link: 'https://youtu.be/ZzDdJqJnnvw?si=WDtgIkhNrIeMtx4U',
    },
    {
      title: '....its a new lazer update',
      author: 'osu! Official',
      date: '2025-01-19',
      image: 'https://i.ytimg.com/vi/FOb9v4BZ118/hqdefault.jpg',
      link: 'https://youtu.be/FOb9v4BZ118?si=cBfuJnLsCn7VcFwa',
    },
  ]);
  const [osuNews] = useState([
    {
      title: 'The Lazer Grand Arena Returns',
      author: 'LeoFLT',
      date: '2 May 2025',
      image: '/lazer.jpg',
      link: 'https://osu.ppy.sh/home/news',
    },
    {
      title: 'The Followpoint: Spectator, the osu!catch Mapping Pioneer',
      author: 'MegaMix & -Isla-',
      date: '30 Apr 2025',
      image: '/spectator.jpg',
      link: 'https://osu.ppy.sh/home/news',
    },
    {
      title: 'KEL LAN Tournament 3 Recap',
      author: '0x84f',
      date: '29 Apr 2025',
      image: '/KEL.jpg',
      link: 'https://osu.ppy.sh/home/news',
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Reddit Posts
  useEffect(() => {
    const fetchRedditPosts = async () => {
      try {
        const response = await fetch('https://www.reddit.com/r/osugame/new.json?limit=3');
        const data = await response.json();
        const posts = data.data.children.map((post) => {
          const p = post.data;
          const previewImage =
            p.preview?.images?.[0]?.resolutions?.pop()?.url?.replace(/&amp;/g, '&') ||
            p.preview?.images?.[0]?.source?.url?.replace(/&amp;/g, '&') ||
            null;

          return {
            title: p.title,
            author: p.author,
            date: new Date(p.created_utc * 1000),
            image: previewImage,
            link: `https://reddit.com${p.permalink}`,
          };
        });

        setRedditPosts(posts);
      } catch (err) {
        console.error('Error fetching Reddit posts:', err);
        setError('Failed to load Reddit posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchRedditPosts();
    const interval = setInterval(fetchRedditPosts, 60000);
    return () => clearInterval(interval);
  }, []);

  const renderPosts = (posts, showDateFormatted = false) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {posts.map((post, i) => (
        <a
          key={i}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl p-[2px] bg-gradient-to-r from-pink-800 to-[rgb(113,34,68)] shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-pink-800/50 transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="rounded-2xl bg-[#250e29] backdrop-blur-sm border-[#3d3d5c] overflow-hidden flex flex-col group h-full">
            <div className="w-full h-40 relative overflow-hidden flex items-center justify-center bg-gray-500 text-sm text-gray-400">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
              ) : (
                <div className="text-center text-gray-400">No image</div>
              )}
            </div>
            <div className="p-3 flex flex-col justify-between flex-1">
              <h3 className="text-lg font-semibold mb-1 text-white">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 mb-1">by {post.author}</p>
              <p className="text-xs text-gray-500 mt-auto">
                {showDateFormatted
                  ? post.date
                  : formatDistanceToNow(new Date(post.date), { addSuffix: true })}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );

  return (
    <section className="bg-gradient-to-b from-[#360b20] to-[#000000] min-h-screen text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="-mt-4 inline-block text-5xl font-extrabold bg-gradient-to-r from-[#9a094a] via-[#fbaad1] to-white bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(198,36,110,0.7)]">
          Osu! News Hub
        </h2>
        <p
          className="text-lg text-gray-300 mb-8"
          style={{
            textShadow:
              '0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.3)',
          }}
        >
          Stay updated with the latest from the osu! community
        </p>

        <div className="flex justify-center gap-4 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeTab === tab
                  ? 'px-6 py-2.5 rounded-full font-semibold transition-all duration-300 border-2 bg-gradient-to-r from-[#c6246e] to-[#8c1b50] text-white shadow-[0_4px_16px_rgba(198,36,110,0.5)] border-[#d64d8a]/40 scale-105'
                  : 'bg-[#2a2a3d] text-gray-300 hover:bg-[#34344e]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Reddit' && (
          <>
            {loading && <div className="text-center text-gray-400">Loading posts...</div>}
            {error && <div className="text-center text-red-500">{error}</div>}
            {!loading && !error && renderPosts(redditPosts)}
            <div className="mt-8 flex justify-center">
              <a
                href="https://reddit.com/r/osugame"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-2 border-[#85194a] px-6 py-3 rounded-full bg-[#4b112c] hover:border-pink-900 hover:bg-gradient-to-r from-[#9a094a] via-[#76274c] transition-all"
              >
                See more Reddit News
              </a>
            </div>
          </>
        )}

        {activeTab === 'osu! News' && (
          <>
            {loading && <div className="text-center text-gray-400">Loading posts...</div>}
            {error && <div className="text-center text-red-500">{error}</div>}
            {!loading && !error && renderPosts(osuNews, true)}
            <div className="mt-8 flex justify-center">
              <a
                href="https://osu.ppy.sh/home/news"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-2 border-[#85194a] px-6 py-3 rounded-full bg-[#4b112c] hover:border-pink-900 hover:bg-gradient-to-r from-[#9a094a] via-[#76274c] transition-all"
              >
                See more osu! News
              </a>
            </div>
          </>
        )}

        {activeTab === 'YouTube' && (
          <>
            {loading && <div className="text-center text-gray-400">Loading posts...</div>}
            {error && <div className="text-center text-red-500">{error}</div>}
            {!loading && !error && renderPosts(youtubeVideos)}
            <div className="mt-8 flex justify-center">
              <a
                href="https://www.youtube.com/@osugame/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-2 border-[#85194a] px-6 py-3 rounded-full bg-[#4b112c] hover:border-pink-900 hover:bg-gradient-to-r from-[#9a094a] via-[#76274c] transition-all"
              >
                See more YouTube News
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default OsuNewsSection;


