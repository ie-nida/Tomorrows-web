import React from 'react';
import HeroSection from '../components/HeroSection';
import DownloadSection from '../components/DownloadSection';
import GuideSection from '../components/GuideSection';
import VideoGuide from '../components/VideoGuide';
import SupportSection from '../components/SupportSection';

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white">
      <HeroSection />
      <DownloadSection />
      <GuideSection />
      <VideoGuide />
      <SupportSection />
    </div>
  );
};

export default DownloadPage;
