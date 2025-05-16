import React, { useState } from "react";
import { motion } from "framer-motion";
import girlImage from "/girl.png";
import osuLogo from "/Osu-Logo.png";

const GirlLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute bottom-0 right-7 z-20 flex items-end">
      {/* Girl Image */}
      <div className="animate-[slideUp_1.5s_ease-out_forwards]" style={{ marginRight: "-50px" }}>
        <img
          src={girlImage}
          alt="osu! Girl"
          className="w-64 max-w-full drop-shadow-xl select-none sm:w-64 md:w-64 lg:w-70 xl:w-[300px] 2xl:w-[370px]" // Adjust the size for bigger screens only
          draggable="false"
        />
      </div>

      {/* osu! Logo with animation */}
      <div className="animate-[slideUp_1.5s_ease-out_forwards]">
        <motion.div
          className="rounded-full cursor-pointer overflow-hidden sm:w-[170px] sm:h-[170px] md:w-[170px] md:h-[170px] lg:w-[170px] lg:h-[170px] xl:w-[170px] xl:h-[170px] 2xl:w-[240px] 2xl:h-[240px]" // Responsive width and height
          style={{
            marginBottom: "90px", // Adjust this to move the logo up or down
            marginLeft: "-50px", // Added margin to move logo left
            backgroundImage: `url(${osuLogo})`,
            backgroundSize: "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            opacity: 0.8,
          }}
          animate={{
            scale: isHovered ? [1.2, 1.3, 1.25, 1.2] : [1, 1.08, 1.04, 1],
            filter: isHovered
              ? ["brightness(1.1)", "brightness(1.2)", "brightness(1.15)", "brightness(1.1)"]
              : ["brightness(1)", "brightness(1.05)", "brightness(1.02)", "brightness(1)"],
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
        />
      </div>
    </div>
  );
};

export default GirlLogo;



