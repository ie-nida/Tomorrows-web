import React, { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const colors = ['#FF66AB', '#6666FF', '#66FFB2', '#FFFF66'];
    const circles = [];

    for (let i = 0; i < 30; i++) {
      const radius = Math.random() * 30 + 10;
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseRadius: radius,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * 2.5, // Faster movement
          y: (Math.random() - 0.5) * 2.5,
        },
        alpha: Math.random() * 0.3 + 0.2,
        decreasing: Math.random() > 0.5,
        pulseOffset: Math.random() * Math.PI * 2, // Unique pulse phase
      });
    }

    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.05;

      circles.forEach((circle) => {
        circle.x += circle.velocity.x;
        circle.y += circle.velocity.y;

        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
          circle.velocity.x = -circle.velocity.x;
        }

        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
          circle.velocity.y = -circle.velocity.y;
        }

        circle.alpha += circle.decreasing ? -0.002 : 0.002;
        if (circle.alpha <= 0.1) circle.decreasing = false;
        if (circle.alpha >= 0.4) circle.decreasing = true;

        // Pulse radius
        const pulse = Math.sin(time + circle.pulseOffset) * 2;
        circle.radius = circle.baseRadius + pulse;

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color + Math.floor(circle.alpha * 255).toString(16).padStart(2, '0');

        // Glow
        ctx.shadowColor = circle.color;
        ctx.shadowBlur = 20;

        ctx.fill();

        // Reset shadow to avoid affecting other elements
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';
      });
    };

    animate();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center brightness-100"
        style={{ backgroundImage: "url('/techno kitty.jpg')" }}
      />

      {/* Bubble Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center mt-32">
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-[#450874] via-white to-pink-900 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] [animation:bounceSlow_3s_ease-in-out_infinite]">
          Download <span className="text-[#fefefe]">osu!</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl">Rhythm is just a click away</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto [animation:bounceSlow_3s_ease-in-out_infinite] [animation-delay:1s] mt-9"
              style={{ textShadow: "0 0 4px white, 0 0 6px white" }}>
          Experience the world's leading rhythm game with over 15 million players. 
          Find your beat, challenge your friends, and join a global community.
        </p>

        <a
          href="#download-section"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-900 to-indigo-950 text-white hover:brightness-110 duration-300 rounded-full shadow-lg hover:bg-[#FF86BB] transition-all transform hover:scale-105 hover:shadow-2xl"
        >
          <Download className="mr-2 h-5 w-5" />
          <span className="text-lg font-semibold">Download Now</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
