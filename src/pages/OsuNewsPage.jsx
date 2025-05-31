import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useOsuApi } from '../hooks/useOsuApi';
import NewsCard from './NewsCard';

const TABS = ['osu! News','Reddit', 'YouTube'];

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchWithRetry = async (url, options = {}, maxRetries = 3) => {
  let lastError;
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      lastError = error;
      if (i < maxRetries - 1) {
        await wait(Math.pow(2, i) * 1000); // Exponential backoff
      }
    }
  }
  throw lastError;
};

const OsuNewsPage = () => {
  const [activeTab, setActiveTab] = useState('osu! News');
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

  const { osuNews, osuLoading, osuError } = useOsuApi();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRedditPosts = async () => {
      try {
        const response = await fetchWithRetry('https://www.reddit.com/r/osugame/new.json?limit=3');
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
        setError('Failed to load Reddit posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRedditPosts();
    const interval = setInterval(fetchRedditPosts, 60000);
    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    if (activeTab === 'Reddit') {
      return (
        <>
          {loading && <div className="text-center text-gray-400">Loading posts...</div>}
          {error && <div className="text-center text-red-500">{error}</div>}
          {!loading && !error && <NewsGrid posts={redditPosts} />}
          <ViewMoreButton link="https://reddit.com/r/osugame" text="See more Reddit News" />
        </>
      );
    } else if (activeTab === 'osu! News') {
      return (
        <>
          {osuLoading && <div className="text-center text-gray-400">Loading posts...</div>}
          {osuError && <div className="text-center text-red-500">{osuError}</div>}
          {!osuLoading && !osuError && <NewsGrid posts={osuNews} showDateFormatted />}
          <ViewMoreButton link="https://osu.ppy.sh/home/news" text="See more osu! News" />
        </>
      );
    } else if (activeTab === 'YouTube') {
      return (
        <>
          {loading && <div className="text-center text-gray-400">Loading posts...</div>}
          {error && <div className="text-center text-red-500">{error}</div>}
          {!loading && !error && <NewsGrid posts={youtubeVideos} />}
          <ViewMoreButton link="https://www.youtube.com/@osugame/featured" text="See more YouTube News" />
        </>
      );
    }
    return null;
  };

  return (
    <section className="xl:-mt-40 2xl:-mt-70 bg-gradient-to-b from-[#230715] to-[#360b20] min-h-screen text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="-mt-10 inline-block text-5xl font-extrabold bg-gradient-to-r from-[#9a094a] via-[#fbaad1] to-white bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(198,36,110,0.7)]">
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

        {renderContent()}
      </div>
    </section>
  );
};

const NewsGrid = ({ posts, showDateFormatted }) => {
  const formatted = showDateFormatted || false;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {posts.map((post, i) => (
        <NewsCard key={i} post={post} showDateFormatted={formatted} />
      ))}
    </div>
  );
};

const ViewMoreButton = ({ link, text }) => (
  <div className="mt-8 flex justify-center">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white border-2 border-[#85194a] px-6 py-3 rounded-full bg-[#4b112c] hover:border-pink-900 hover:bg-gradient-to-r from-[#9a094a] via-[#76274c] transition-all"
    >
      {text}
    </a>
  </div>
);

export default OsuNewsPage;


