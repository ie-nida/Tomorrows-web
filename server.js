import express from 'express';
import session from 'express-session';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import mongoose from 'mongoose';
import User from './models/User.js';
import authRoutes from './auth.js';


// Load environment variables
dotenv.config();
const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
}));
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth setup
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `${process.env.BASE_URL}/auth/google/callback`,
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });
    if (!user) {
      user = new User({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails?.[0]?.value || '',
        photo: profile.photos?.[0]?.value || '',
      });
      await user.save();
    }
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// Routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Server is running...');
});

// Google Auth Routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
 passport.authenticate('google', {
  successRedirect: 'http://localhost:5173/lobby',
  failureRedirect: 'http://localhost:5173/welcome',
 })
);

// Get current Google user
app.get('/api/auth/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
});

// osu! OAuth Start
app.get('/auth/osu', (req, res) => {
  const redirectUrl = `https://osu.ppy.sh/oauth/authorize?client_id=${process.env.OSU_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.OSU_REDIRECT_URI)}&response_type=code&scope=public+identify`;
  res.redirect(redirectUrl);
});

// osu! OAuth Callback
app.get('/auth/osu/callback', async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).send('Missing code');

  try {
    const tokenResponse = await axios.post('https://osu.ppy.sh/oauth/token', {
      client_id: process.env.OSU_CLIENT_ID,
      client_secret: process.env.OSU_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: process.env.OSU_REDIRECT_URI,
    });

    req.session.accessToken = tokenResponse.data.access_token;
    res.redirect('http://localhost:5173/'); // Redirect to LobbyPage
  } catch (error) {
    console.error('osu! token error:', error.response?.data || error.message);
    res.status(500).send('Failed to get osu! token');
  }
});

// osu! Leaderboard
app.get('/api/osu/leaderboard', async (req, res) => {
  const token = req.session.accessToken;
  if (!token) return res.status(401).json({ error: 'Unauthorized: No access token' });

  try {
    const response = await axios.get('https://osu.ppy.sh/api/v2/rankings/osu', {
      headers: { Authorization: `Bearer ${token}` },
    });
    res.json(response.data.ranking);
  } catch (err) {
    console.error('osu! leaderboard error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

// Backend logout route
app.get("/api/auth/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed", error: err });
    }

    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Session destruction failed", error: err });
      }
      res.clearCookie("connect.sid");
      res.status(200).json({ message: "Successfully logged out" });
    });
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});






