import { useEffect } from "react";

const CursorTrail = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";

      
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;

      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 400);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default CursorTrail;

