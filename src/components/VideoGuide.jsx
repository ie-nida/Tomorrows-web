import React, { useState } from 'react';
import { Play, Maximize2 } from 'lucide-react';

const VideoGuide = () => {
  const [mainVideoLoaded, setMainVideoLoaded] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState([false, false, false]);

  const handlePlay = (index) => {
    const updated = [...loadedVideos];
    updated[index] = true;
    setLoadedVideos(updated);
  };

  const sideVideos = [
    {
      title: 'Beginner Tips',
      duration: '32:53',
      image: './guide.jpg',
      videoSrc: 'Osu! Beginner Guide .mp4'
    },
    {
      title: 'Controller Setup',
      duration: '9:52',
      image: './setup.jpg',
      videoSrc: 'osu!setup.mp4'
    },
    {
      title: 'Finding Beatmaps',
      duration: '8:37',
      image: './beatmaps.jpg',
      videoSrc: 'beatmaps.mp4'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0F0F1A] via-[#151226] to-[#261038]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[#450874] via-white to-pink-900 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] mb-4">
            Video Installation Guide
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Need more help? Watch our comprehensive installation guide to get started with osu!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-[#0A0A14]">
            {/* Video thumbnail overlay */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${mainVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(./neon.jpg)' }}
              />
              <div className="absolute inset-0 bg-[#0F0F1A]/50" />

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-20 h-20 rounded-full bg-[#FF66AB] flex items-center justify-center text-white hover:bg-[#FF86BB] transition-all transform hover:scale-110"
                  onClick={() => setMainVideoLoaded(true)}
                >
                  <Play className="h-8 w-8 ml-1" />
                </button>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold text-white mb-2">Getting Started with osu!</h3>
                <p className="text-gray-300">
                  Learn how to install, set up, and start playing osu! with our complete guide.
                </p>
              </div>

              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors">
                  <Maximize2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Main Embedded video */}
            {mainVideoLoaded && (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/0V5GwzmMhpU"
                title="osu! installation guide"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Side videos */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {sideVideos.map((video, index) => (
              <div key={index} className="bg-[#1A1A2E] rounded-xl overflow-hidden group relative aspect-video">
                {!loadedVideos[index] ? (
                  <>
                    <img
                      src={video.image}
                      alt={video.title}
                      className="absolute w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0F0F1A]/50 transition-opacity group-hover:bg-[#0F0F1A]/70" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        className="w-12 h-12 rounded-full bg-[#FF66AB] flex items-center justify-center text-white"
                        onClick={() => handlePlay(index)}
                      >
                        <Play className="h-5 w-5 ml-0.5" />
                      </button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                      {video.title}
                    </div>
                  </>
                ) : (
                  <iframe
                    className="absolute w-full h-full"
                    src={video.videoSrc}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGuide;
