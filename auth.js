import express from 'express';
import passport from 'passport';

const router = express.Router();

// Start Google OAuth login
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google OAuth callback
router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
    successRedirect: 'http://localhost:5173/lobby', // your frontend
  })
);

// Logout (Handles session destruction and cookie clearing)
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send("Logout error");
    }
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send("Session destruction error");
      }
      res.clearCookie("connect.sid"); // Clear session cookie
      res.status(200).send("Logged out successfully");
    });
  });
});

router.post("/api/auth/signin", async (req, res) => {
  const { username, password, recaptchaToken } = req.body;

  if (!recaptchaToken) {
    return res.status(400).json({ message: "Missing reCAPTCHA token" });
  }

  try {
    // Verify reCAPTCHA
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=6LfyfzUrAAAAALigDQDK-xrVKcurQFr6yHzHgqVb&response=${recaptchaToken}`;
    const { data } = await axios.post(verificationURL);

    if (!data.success) {
      return res.status(403).json({ message: "reCAPTCHA verification failed" });
    }

    // Proceed with your actual sign-in logic here (e.g., username/password verification)
    console.log("reCAPTCHA passed, user can be authenticated:", username, password);

    // Example: Add user authentication with your own logic here (e.g., checking DB)
    res.status(200).json({ message: "Login successful" });

  } catch (error) {
    console.error("reCAPTCHA error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});


export default router;



