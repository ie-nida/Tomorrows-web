import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";
import ReCAPTCHA from "react-recaptcha";

const RegisterModal = ({ onClose, onSwitchToSignIn }) => {
  const [isVerified, setIsVerified] = useState(false);  // Track verification status

  const handleCaptchaChange = (value) => {
    if (value) {
      setIsVerified(true); // If CAPTCHA is solved, set verification to true
    }
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
            Register to Proceed
          </h2>

          {/* Username Input */}
          <div className="relative mb-4">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              className="pl-10 pr-3 py-2 w-full bg-[#1e1e1e] text-white rounded-lg focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 pr-3 py-2 w-full bg-[#1e1e1e] text-white rounded-lg focus:outline-none"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="pl-10 pr-3 py-2 w-full bg-[#1e1e1e] text-white rounded-lg focus:outline-none"
            />
          </div>

           {/* Cloudflare Verification Box */}
           <div className="bg-[#1a1a1a] border border-gray-600 rounded p-3 mb-5 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-green-400 font-semibold">
              <img src="/icons/success-check.png" alt="Success" className="w-4 h-4" />
              Success!
            </div>
            <div className="text-right text-gray-400 text-xs">
              <div>CLOUDFLARE</div>
              <div>Privacy • Terms</div>
            </div>
          </div>

          {/* reCAPTCHA Component */}
          <div className="mb-5">
            <ReCAPTCHA
              sitekey="your-site-key-here" // Use your actual reCAPTCHA site key
              render="explicit"
              verifyCallback={(response) => console.log(response)} // Handle the reCAPTCHA response
            />
          </div>

          {/* Register Button with Sparkle Effect */}
          <button
            disabled={!isVerified}  // Disable if not verified
            className={`${
              isVerified ? "bg-green-500 hover:bg-green-600" : "bg-green-400"
            } px-4 py-2 w-full rounded-lg mb-3 flex items-center justify-center gap-2 relative overflow-hidden`}
          >
            <span>Register✨</span>
            {/* Sparkle Effect */}
            {isVerified && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="sparkle animate-ping">✨</span>
              </div>
            )}
          </button>

          {/* CAPTCHA */}
          <div className="mt-4">
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"  // Replace with your site key
              onChange={handleCaptchaChange}
            />
          </div>

          {/* Switch to Sign In Link */}
          <p className="text-sm text-gray-300 mt-6 text-center">
            Already have an account?{" "}
            <span
              onClick={onSwitchToSignIn}
              className="text-yellow-400 hover:underline cursor-pointer font-semibold"
            >
              Sign in here
            </span>
          </p>
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

export default RegisterModal;
