import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function LoadingPage({ onStart }) {
  const [isHovered, setIsHovered] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(""); // Track background image
  const [showBackground, setShowBackground] = useState(false); // Control background fade

  // Background images array
  const backgrounds = [
    "/images/osu_background_1.jpg",
    "/images/osu_background_2.jpg",
    "/images/osu_background_3.jpg",
    "/images/osu_background_4.jpg",
    "/images/osu_background_5.webp",
  ];

  // Select a random background image
  useEffect(() => {
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBackgroundImage(randomBackground);

    // Fade in background
    setTimeout(() => {
      setShowBackground(true);
    }, 100);

    // Prevent scrollbar from appearing
    document.body.style.overflow = "hidden";

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(onStart, 1000); // Delay for fade-out effect
  };

  // Dynamic background size based on screen width
  const getBackgroundScale = () => {
    const width = window.innerWidth;
    if (width < 640) return 1.4;  // For small screens (mobile)
    if (width < 768) return 1.2;  // For tablets
    if (width < 1024) return 1.1; // For small laptops
    return 1; // For larger screens (desktops)
  };

  return (
    <motion.div
      className="relative h-screen w-screen overflow-hidden flex items-center justify-center"
      animate={{ opacity: fadeOut ? 0 : 1 }} // Fade out effect
      transition={{ duration: 1 }} // Fade duration
    >
      {/* Background Image */}
      <AnimatePresence>
        {backgroundImage && showBackground && (
          <motion.img
            key={backgroundImage}
            src={backgroundImage}
            alt="Background"
            className="absolute object-cover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: `scale(${getBackgroundScale()})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        )}
      </AnimatePresence>

      {/* Circle Logo */}
      <motion.div
        className="rounded-full cursor-pointer overflow-hidden z-10"
        style={{
          width: "350px",
          height: "350px",
          backgroundImage: "url('/Osu!_Logo_2016.svg.png')",
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          opacity: 0.8, // Make circle a bit more faint
        }}
        animate={{
          scale: isHovered ? [1.2, 1.3, 1.25, 1.2] : [1, 1.08, 1.04, 1],
          filter: isHovered
            ? [
                "brightness(1.1)",
                "brightness(1.2)",
                "brightness(1.15)",
                "brightness(1.1)",
              ]
            : [
                "brightness(1)",
                "brightness(1.05)",
                "brightness(1.02)",
                "brightness(1)",
              ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          times: [0, 0.2, 0.35, 1],
          ease: "easeInOut",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      />
    </motion.div>
  );
}

export default LoadingPage;

