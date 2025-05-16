// Constants
const TWITCH_CLIENT_ID = 'j1j7njekyl68s2tzro127q0nqo8hav';
const TWITCH_CLIENT_SECRET = '4xnxsjw199or81s9oef31iu7lbodnc';
const TOKEN_ENDPOINT = 'https://id.twitch.tv/oauth2/token';
const API_ENDPOINT = 'https://api.twitch.tv/helix';

// Cache for the auth token
let cachedToken = null;

/**
 * Get a valid access token for Twitch API
 */
async function getAccessToken() {
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.token;
  }

  try {
    const response = await fetch(
      `${TOKEN_ENDPOINT}?client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
      { method: 'POST' }
    );

    if (!response.ok) {
      throw new Error(`Failed to get Twitch token: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    cachedToken = {
      token: data.access_token,
      expiresAt: Date.now() + (data.expires_in * 1000) - 60000,
    };

    return cachedToken.token;
  } catch (error) {
    console.error('Error getting Twitch access token:', error);
    throw new Error('Failed to authenticate with Twitch');
  }
}

/**
 * Fetch streams for the OSU game
 */
async function fetchOsuStreams() {
  try {
    const accessToken = await getAccessToken();

    // Get osu! game ID
    const gameResponse = await fetch(`${API_ENDPOINT}/games?name=osu!`, {
      headers: {
        'Client-ID': TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!gameResponse.ok) {
      throw new Error(`Failed to get OSU game info: ${gameResponse.status} ${gameResponse.statusText}`);
    }

    const gameData = await gameResponse.json();

    if (!gameData.data || gameData.data.length === 0) {
      throw new Error('OSU game not found on Twitch');
    }

    const osuGameId = gameData.data[0].id;

    // Get osu! streams
    const streamsResponse = await fetch(`${API_ENDPOINT}/streams?game_id=${osuGameId}&first=20`, {
      headers: {
        'Client-ID': TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!streamsResponse.ok) {
      throw new Error(`Failed to get streams: ${streamsResponse.status} ${streamsResponse.statusText}`);
    }

    const streamsData = await streamsResponse.json();

    if (streamsData.data && streamsData.data.length > 0) {
      const userIds = streamsData.data.map(stream => stream.user_id).join('&id=');

      const usersResponse = await fetch(`${API_ENDPOINT}/users?id=${userIds}`, {
        headers: {
          'Client-ID': TWITCH_CLIENT_ID,
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (usersResponse.ok) {
        const usersData = await usersResponse.json();
        const userMap = new Map();

        usersData.data.forEach(user => {
          userMap.set(user.id, user.profile_image_url);
        });

        return streamsData.data.map(stream => ({
          id: stream.id,
          user_id: stream.user_id,
          user_login: stream.user_login,
          user_name: stream.user_name,
          game_id: stream.game_id,
          game_name: stream.game_name,
          type: stream.type,
          title: stream.title,
          viewer_count: stream.viewer_count,
          started_at: stream.started_at,
          language: stream.language,
          thumbnail_url: stream.thumbnail_url,
          profile_image_url: userMap.get(stream.user_id) || null,
        }));
      }
    }

    return streamsData.data || [];
  } catch (error) {
    console.error('Error fetching OSU streams:', error);
    throw error;
  }
}

export { fetchOsuStreams };
