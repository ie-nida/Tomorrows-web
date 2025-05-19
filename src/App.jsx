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


// Welcome Screen should navigate to LoadingPage after it completes
function WelcomeScreenWithNavigate() {
  const navigate = useNavigate();

  const handleCompleteWelcome = () => {
    // Navigate to the loading page after the welcome screen
    navigate("/loading");
  };

  return <WelcomeScreen onComplete={handleCompleteWelcome} />;
}

// Loading Page should navigate to LobbyPage once the game starts
function LoadingPageWithNavigate() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    // Navigate to the lobby page after loading is done
    navigate("/lobby");
  };

  return <LoadingPage onStart={handleStartGame} />;
}

function App() {
  return (
    <Router>
      <GlobalStyle />
      <CursorTrail />
      
      {/* Temporarily remove Navbar to check if it's causing issues */}
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

      </Routes>
    </Router>
  );
}

export default App;