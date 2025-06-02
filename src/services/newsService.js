import { formatDistanceToNow } from '../utils/dateUtils';
import { fallbackPosts } from '../data/fallbackData';

// Reddit API configuration
const REDDIT_SUBREDDIT = 'osugame';
const REDDIT_LIMIT = 3; // Changed from 10 to 3


export const fetchRedditPosts = async () => {
  try {
    
    const response = await fetch(
      `https://www.reddit.com/r/${REDDIT_SUBREDDIT}/hot.json?limit=${REDDIT_LIMIT}`
    );
    
    if (!response.ok) {
      throw new Error(`Reddit API error: ${response.status}`);
    }
    
    const data = await response.json();
    const posts = data.data.children;
    
    return posts
      .filter((post) => !post.data.stickied) 
      .slice(0, 3) 
      .map((post) => {
        
        let imageUrl = null;
        if (post.data.preview && post.data.preview.images[0]) {
          
          imageUrl = post.data.preview.images[0].source.url.replace(/&amp;/g, '&');
        } else if (post.data.thumbnail && post.data.thumbnail !== 'self' && post.data.thumbnail !== 'default') {
          imageUrl = post.data.thumbnail;
        }
        
        
        const createdDate = new Date(post.data.created_utc * 1000);
        const relativeTime = formatDistanceToNow(createdDate);
        
        return {
          id: post.data.id,
          title: post.data.title,
          author: `u/${post.data.author}`,
          date: relativeTime,
          image: imageUrl,
          link: `https://reddit.com${post.data.permalink}`
        };
      });
  } catch (error) {
    console.error('Error fetching Reddit posts:', error);
    return fallbackPosts.reddit;
  }
};


export const fetchOsuPosts = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/news-proxy/osu`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
    });
    
    if (!response.ok) {
      throw new Error(`osu! API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching osu! posts:', error);
    return fallbackPosts.osu;
  }
};


export const fetchTwitterPosts = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/news-proxy/twitter`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
    });
    
    if (!response.ok) {
      throw new Error(`Twitter API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching Twitter posts:', error);
    return fallbackPosts.twitter;
  }
};
