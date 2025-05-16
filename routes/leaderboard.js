import express from 'express';
import axios from 'axios';

const router = express.Router();

// osu! Leaderboard Route
router.get('/osu/leaderboard', async (req, res) => {
  const { accessToken } = req.session; // Assuming accessToken is saved in the session after osu! OAuth
  
  if (!accessToken) {
    return res.status(401).json({ error: 'Unauthorized: No access token available' });
  }

  try {
    // Fetch the leaderboard from osu! API using the access token
    const response = await axios.get('http://localhost:5000/auth/osu/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    res.json(response.data); // Return leaderboard data to the frontend
  } catch (error) {
    console.error('Error fetching osu! leaderboard:', error);
    res.status(500).json({ error: 'Failed to fetch leaderboard data' });
  }
});

export default router;
