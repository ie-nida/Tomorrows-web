import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaGoogle } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";

const SignInModal = ({ onClose, onSwitchToRegister, history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleSignIn = async () => {
    if (!recaptchaValue) {
      alert("Please confirm you are not a robot!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (res.ok) {
        history.push("/lobby");
      } else {
        console.error("Sign-in failed");
      }
    } catch (err) {
      console.error("Sign-in error:", err);
    }
  };

  // Ensure the switch to register doesn't navigate
  const handleRegisterClick = (e) => {
    e.preventDefault();
    onSwitchToRegister();  // Switch to register modal
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-transparent">
      <motion.div
        className="bg-[#2c2c2c]/50 text-white p-6 md:p-8 rounded-2xl w-[90%] max-w-2xl flex flex-col md:flex-row relative shadow-2xl backdrop-blur-sm"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        {/* Form Section */}
        <div className="w-full md:w-2/3 md:pr-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center md:text-left">
            Sign In to Proceed
          </h2>

          <div className="relative mb-4">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="pl-10 pr-3 py-2 w-full bg-[#1e1e1e] text-white rounded-lg focus:outline-none"
            />
          </div>

          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-3 py-2 w-full bg-[#1e1e1e] text-white rounded-lg focus:outline-none"
            />
          </div>

          {/* reCAPTCHA */}
          <div className="mb-5">
            <ReCAPTCHA
              sitekey="6LfyfzUrAAAAANWR2HgQ7d2vF-ZzcpK-0hAezmCJ" // Your site key
              theme="dark" // Set the theme to dark
              onChange={(value) => setRecaptchaValue(value)}
            />
          </div>

          <p className="text-yellow-400 text-sm mb-3 cursor-pointer">
            <span
              onClick={handleRegisterClick} // Use the new handler
              className="text-yellow-400 hover:underline cursor-pointer font-semibold"
            >
              Don't have an account? Register here
            </span>
          </p>

          <button
            onClick={handleSignIn}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 w-full rounded-lg mb-3 flex items-center justify-center gap-2"
          >
            <span>Sign in</span>
            <span className="text-xl">🔓</span>
          </button>

          {/* Google Sign-In Button */}
          <button
            onClick={() => (window.location.href = "http://localhost:5000/auth/google")}
            className="bg-white text-black px-4 py-2 w-full rounded-lg flex items-center justify-center gap-2"
          >
            <FaGoogle />
            Sign in with Google
          </button>
        </div>

        {/* Side Video */}
        <div className="hidden md:block w-1/3">
          <video
            src="/vid.mp4"
            autoPlay
            loop
            muted
            className="rounded-xl object-cover h-full max-h-[360px] w-full"
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-3xl hover:text-red-400"
        >
          ×
        </button>
      </motion.div>
    </div>
  );
};

export default SignInModal;

