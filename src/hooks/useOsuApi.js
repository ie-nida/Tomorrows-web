import { useState, useEffect } from 'react';

const OSU_CLIENT_ID = '40472';
const OSU_CLIENT_SECRET = 'kGEKT1Sd8Lkj3e2fkfeVftdjybymaL4LGW4ElFW1';

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchWithRetry = async (url, options, maxRetries = 3) => {
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

export const useOsuApi = () => {
  const [osuNews, setOsuNews] = useState([]);
  const [osuLoading, setOsuLoading] = useState(true);
  const [osuError, setOsuError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const tokenResponse = await fetchWithRetry('/osu-api/oauth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            client_id: OSU_CLIENT_ID,
            client_secret: OSU_CLIENT_SECRET,
            grant_type: 'client_credentials',
            scope: 'public',
          }),
        });

        const tokenData = await tokenResponse.json();
        setAccessToken(tokenData.access_token);
      } catch (error) {
        console.error('Error getting OAuth token:', error);
        setOsuError('Failed to authenticate with osu! API');
        setOsuLoading(false);
      }
    };

    getAccessToken();
  }, []);

  useEffect(() => {
    if (!accessToken) return;

    const fetchOsuNews = async () => {
      try {
        const response = await fetchWithRetry('/osu-api/api/v2/news', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
        });

        const data = await response.json();

        const formattedNews = data.news_posts.slice(0, 3).map((post) => ({
          title: post.title,
          author: post.author,
          date: new Date(post.published_at).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          }),
          image: post.first_image || 'https://assets.ppy.sh/contests/122/header.jpg',
          link: `https://osu.ppy.sh/home/news/${post.slug}`,
        }));

        setOsuNews(formattedNews);
      } catch (error) {
        console.error('Error fetching osu! news:', error);
        setOsuError('Failed to load osu! news. Using fallback data.');

        setOsuNews([
          {
            title: 'The Lazer Grand Arena Returns',
            author: 'LeoFLT',
            date: '2 May 2025',
            image: 'https://assets.ppy.sh/contests/122/header.jpg',
            link: 'https://osu.ppy.sh/home/news',
          },
          {
            title: 'The Followpoint: Spectator, the osu!catch Mapping Pioneer',
            author: 'MegaMix & -Isla-',
            date: '30 Apr 2025',
            image: 'https://assets.ppy.sh/artists/214/header.jpg',
            link: 'https://osu.ppy.sh/home/news',
          },
          {
            title: 'KEL LAN Tournament 3 Recap',
            author: '0x84f',
            date: '29 Apr 2025',
            image: 'https://assets.ppy.sh/tournaments/22/header.jpg',
            link: 'https://osu.ppy.sh/home/news',
          },
        ]);
      } finally {
        setOsuLoading(false);
      }
    };

    fetchOsuNews();
    const interval = setInterval(fetchOsuNews, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, [accessToken]);

  return { osuNews, osuLoading, osuError };
};
