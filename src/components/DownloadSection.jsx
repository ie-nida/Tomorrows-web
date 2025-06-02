import React, { useState } from 'react';
import { downloadOptions } from '../data/constants'; 
import DownloadButton from './DownloadButton';
import { Download, Monitor, Laptop, CheckCircle } from 'lucide-react';
import NavBar from "../pages/Navbar";

const DownloadSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleDownload = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Download':
        return <Download className="h-6 w-6" />;
      case 'Monitor':
        return <Monitor className="h-6 w-6" />;
      case 'Laptop':
        return <Laptop className="h-6 w-6" />;
      default:
        return <Download className="h-6 w-6" />;
    }
  };

  return (
    <>
      <NavBar />

      <section
        id="download-section"
        className="py-20 bg-gradient-to-b from-[#0F0F1A] via-[#151226] to-[#261038]"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-600 via-gray-300 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] animate-[pulse_3s_ease-in-out_infinite] mb-4">
              Choose Your Version
            </h2>
            <p
              className="text-gray-300 max-w-3xl mx-auto mb-12 mt-9 text-xl text-center"
              style={{ textShadow: "0 0 4px white, 0 0 6px white" }}
            >
              Whether you prefer the classic experience or want to try the future
              of osu!, we've got you covered with our two versions.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Version tabs */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {downloadOptions.map((option, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-pink-900 to-indigo-950 text-white shadow-lg'
                      : 'bg-[#1A1A2E] text-gray-300 hover:bg-[#2A2A3E]'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-center">
                    {getIcon(option.icon)}
                    <span className="ml-2">{option.name}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Version details */}
            <div className="bg-[#151528] rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {downloadOptions[activeTab].name}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {downloadOptions[activeTab].description}
                    </p>

                    <div className="mb-8">
                      <div className="text-sm font-medium text-gray-400 mb-2">
                        Version
                      </div>
                      <div className="text-white font-semibold">
                        {downloadOptions[activeTab].version}
                      </div>
                    </div>

                    <DownloadButton
                      label={`Download ${downloadOptions[activeTab].name}`}
                      url={downloadOptions[activeTab].downloadUrl}
                      size={downloadOptions[activeTab].size}
                      onClick={handleDownload}
                      isPrimary
                    />
                  </div>

                  <div className="md:w-1/2">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      System Requirements
                    </h4>
                    <div className="space-y-4">
                      {downloadOptions[activeTab].systemRequirements.map((req, i) => (
                        <div key={i} className="border-b border-[#2A2A3E] pb-3">
                          <div className="font-medium text-white mb-1">{req.name}</div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <div className="text-xs text-gray-400">Minimum</div>
                              <div className="text-gray-300">{req.minimum}</div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-400">Recommended</div>
                              <div className="text-gray-300">{req.recommended}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Version compare note */}
            <div className="mt-8 bg-[#1A1A2E] rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-3">
                Which version should I choose?
              </h4>
              <p className="text-gray-300 mb-4">
                <span className="font-semibold text-[#FF66AB]">osu! (stable)</span> is
                the classic version with years of refinement. Perfect for tournaments and
                competitive play.
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-[#6666FF]">osu!lazer</span> is the
                future of osu! with modern features, cross-platform support, and
                experimental gameplay modes. Great for trying new features!
              </p>
            </div>
          </div>
        </div>

        {/* Download popup */}
        {showPopup && (
          <div className="fixed bottom-8 right-8 bg-[#2C2C42] text-white p-4 rounded-lg shadow-lg flex items-center z-50 animate-slideIn">
            <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
            <div>
              <div className="font-medium">Download started!</div>
              <div className="text-sm text-gray-300">Your file will download shortly</div>
            </div>
          </div>
        )}
      </section>
    </>
    
  );
};

export default DownloadSection;
