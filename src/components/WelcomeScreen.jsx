import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function WelcomeScreen() {
  const navigate = useNavigate(); 
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        navigate("/loading"); 
      }, 1000); 
    }, 3000); 

    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Center Faint Glowing Circle */}
      <div
        className="absolute rounded-full border-2 border-blue-400 opacity-10 animate-pulse"
        style={{
          width: "500px",
          height: "500px",
          boxShadow: "0 0 30px 5px #00bfff",
        }}
      ></div>

      <AnimatePresence>
        {!fadeOut && (
          <motion.h1
            key="welcome-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-white text-6xl font-bold z-10"
            style={{
              fontFamily: "'Orbitron', 'Poppins', 'Quicksand', sans-serif",
              textShadow: `
                0 0 5px #00bfff,
                0 0 10px #00bfff,
                0 0 20px #00bfff,
                0 0 40px #00bfff
              `,
              letterSpacing: "4px",
              textTransform: "lowercase",
            }}
          >
            welcome
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
}

export default WelcomeScreen;

