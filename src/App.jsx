import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import LoadingPage from "./components/LoadingPage";
import LobbyPage from "./components/LobbyPage";
import { GlobalStyle } from "./GlobalStyles";
import CursorTrail from "./CursorTrail";
import OsuDailyLeaderboard from "./section/OsuDailyLeaderboard.jsx";
import DownloadPage from "./pages/DownloadPage";
import Community from "./components/Community.jsx";
import Taiko from "./components/Taiko";
import Standard from "./components/Standard.jsx";
import Catch from "./components/Catch.jsx";
import Mania from "./components/Mania.jsx";
import Help from "./Help.jsx";
import { Toaster } from 'react-hot-toast';
import WikiSection from "./components/Help/Sections/WikiSection.jsx";
import FAQSection from "./components/Help/Sections/FAQSection.jsx";
import RulesSection from "./components/Help/Sections/RulesSection.jsx";
import ReportSection from "./components/Help/Sections/ReportSection.jsx";
import NeedHelpSection from "./components/Help/Sections/NeedHelpSection.jsx";
import DownloadSection from "./components/DownloadSection.jsx";

function WelcomeScreenWithNavigate() {
  const navigate = useNavigate();

  const handleCompleteWelcome = () => {
  
    navigate("/loading");
  };

  return <WelcomeScreen onComplete={handleCompleteWelcome} />;
}


function LoadingPageWithNavigate() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    
    navigate("/lobby");
  };

  return <LoadingPage onStart={handleStartGame} />;
}

function App() {
  return (
    <Router>
      <GlobalStyle />
      <CursorTrail />

      

      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1f1f1f",
            color: "#fff",
            borderRadius: "12px",
          },
        }}
      />
     
      
     
      {/* <Navbar /> */}

      <Routes>
        {/* Route for Welcome Screen */}
        <Route path="/" element={<WelcomeScreenWithNavigate />} />
        
        {/* Route for Loading Page */}
        <Route path="/loading" element={<LoadingPageWithNavigate />} />
        
        {/* Route for Lobby Page */}
        <Route path="/lobby" element={<LobbyPage />} />
        
        {/* Route for Leaderboard */}
        <Route path="/OsuDailyLeaderboard" element={<OsuDailyLeaderboard />} />

        {/* Route for DownloadPage */}
        <Route path="/download" element={<DownloadPage />} />

        {/* Route for CommunityLivePage */}
        <Route path="/communitylive" element={<Community />} />

        {/* Route for Taiko */}
        <Route path="/taiko" element={<Taiko />} />

        {/* Route for Standard */}
        <Route path="/standard" element={<Standard />} />

        {/* Route for Catch */}
        <Route path="/catch" element={<Catch />} />

        {/* Route for Mania */}
        <Route path="/mania" element={<Mania />} />

        {/* Route for Help */}
        <Route path="/help" element={<Help />} />

        {/* Route for  Wiki */}
        <Route path="/wiki" element={<WikiSection />} />

        {/* Route for  FAQ */}
        <Route path="/faq" element={<FAQSection />} />

        {/* Route for  Rules */}
        <Route path="/rules" element={<RulesSection />} />

        {/* Route for  Report */}
        <Route path="/reports" element={<ReportSection />} />

        {/* Route for  Need Help */}
        <Route path="/need" element={<NeedHelpSection />} />

        {/* Route for  Download */}
        <Route path="/download" element={<DownloadSection />} />

      </Routes>
    </Router>
  );
}

export default App;