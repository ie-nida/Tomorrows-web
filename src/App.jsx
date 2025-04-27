import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import LoadingPage from "./components/LoadingPage"; 
import LobbyPage from "./components/LobbyPage";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showLoading, setShowLoading] = useState(false); // New state for loading page
  const [showLobby, setShowLobby] = useState(false); // New state for lobby page

  const handleCompleteWelcome = () => {
    setShowWelcome(false);
    setShowLoading(true); // Show loading page after welcome screen
  };

  const handleStartGame = () => {
    setShowLoading(false); // Hide loading page
    setShowLobby(true); // Show lobby page
  };

  return (
    <>
      {showWelcome && <WelcomeScreen onComplete={handleCompleteWelcome} />}
      {showLoading && <LoadingPage onStart={handleStartGame} />}
      {showLobby && <LobbyPage />}
    </>
  );
}

export default App;





