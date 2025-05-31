import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaGoogle, FaEnvelope } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { supabase } from "../../integration/supabase";
import { useAuth } from "../../auth";

const SignInModal = ({ onClose, onSwitchToRegister, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const registerLinkRef = useRef(null);

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/lobby`,
      },
    });
    if (error) {
      console.error("Google Sign-In error:", error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      setError("");

      if (!recaptchaValue) {
        setError("Please confirm you are not a robot!");
        return;
      }

      if (!email || !password) {
        setError("Please fill in all fields");
        return;
      }

      const { data: authData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message || "Invalid credentials");
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", authData.user.id)
        .single();

      if (profileError) {
        setError("Could not fetch profile data");
        return;
      }

      localStorage.setItem("user", JSON.stringify({ ...authData, profile }));
      history.push("/lobby");
      onClose();
    } catch (err) {
      setError("Supabase error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30">
      <motion.div
        className="bg-[#2c2c2c]/50 text-white p-6 md:p-8 rounded-2xl w-[90%] max-w-2xl flex flex-col md:flex-row relative shadow-2xl backdrop-blur-sm"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Form Section */}
        <div className="w-full md:w-2/3 md:pr-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center md:text-left">
            Sign In to Proceed
          </h2>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-lg mb-4">
              {error}
            </div>
          )}

          <div className="relative mb-4">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 pr-3 py-2 w-full bg-[#1e1e1e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
            />
          </div>

          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-3 py-2 w-full bg-[#1e1e1e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
            />
          </div>

          <div className="mb-5 overflow-hidden">
            <ReCAPTCHA
              sitekey="6LfyfzUrAAAAANWR2HgQ7d2vF-ZzcpK-0hAezmCJ"
              theme="dark"
              onChange={(value) => {
                setRecaptchaValue(value);
                setError("");
              }}
            />
          </div>

          <div className="text-yellow-400 text-sm mb-3">
            <button
              ref={registerLinkRef}
              onClick={onSwitchToRegister}
              className="text-yellow-400 hover:underline cursor-pointer font-semibold bg-transparent border-none p-0 focus:outline-none"
            >
              Don't have an account? Register here
            </button>
          </div>

          <button
            onClick={handleSignIn}
            disabled={isLoading}
            className={`bg-green-500 hover:bg-green-600 px-4 py-2 w-full rounded-lg mb-3 flex items-center justify-center gap-2 transition-colors duration-300 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span>{isLoading ? "Signing in..." : "Sign in"}</span>
            <span className="text-xl">🔓</span>
          </button>

          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className={`bg-white text-black px-4 py-2 w-full rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors duration-300 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaGoogle />
            <span>Sign in with Google</span>
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
          className="absolute top-3 right-4 text-white text-3xl hover:text-red-400 transition-colors duration-300"
          aria-label="Close"
        >
          ×
        </button>
      </motion.div>
    </div>
  );
};

export default SignInModal;
