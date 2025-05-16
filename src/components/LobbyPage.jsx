import React, { useState, useEffect } from "react";
import NavBar from "../pages/Navbar";
import OsuNewsPage from "../pages/OsuNewsPage";
import GirlLogo from "../pages/GirlLogo";
import SignInModal from "../pages/SignInModal";
import RegisterModal from "../pages/RegisterModal";
import LogoutModal from "../pages/LogoutModal.JSX";
import GameModesSection from "./GameModesSection";

const LobbyPage = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/user", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setUser(data);
      })
      .catch((err) => console.error("User fetch error:", err));
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/logout", {
        method: "GET",
        credentials: "include",
      });

      if (res.ok) {
        setUser(null);
        setIsLogoutOpen(false);
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div className="w-full min-h-screen">
      {/* Background Layers */}
      <div className="absolute bg-gradient-to-b from-[#8B004E] via-[#1F1F1F] to-black" />
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/osu_vid.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B004E] via-[#1F1F1F] to-black mix-blend-multiply"></div>

      <div className="relative z-30">
        <div className="min-h-screen w-full flex items-center justify-start relative">
          <NavBar />

          {/* Welcome Text */}
          <div className="absolute top-50 left-0 text-left text-white ml-10">
            <h2 className="text-7xl font-extrabold bg-gradient-to-r from-pink-800 via-white to-indigo-100 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] [animation:bounceSlow_3s_ease-in-out_infinite]">
              Welcome to osu!
            </h2>
            <p
              className="mt-4 text-2xl text-white max-w-2xl [animation:bounceSlow_3s_ease-in-out_infinite] [animation-delay:1s]"
              style={{ textShadow: "0 0 4px white, 0 0 6px white" }}
            >
              The ultimate rhythm game experience – challenge your reflexes, master the beat,
              and rise through the global ranks with style.<br />
              Join a vibrant community and show the world your perfect score!
            </p>
            <button className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-900 to-indigo-950 text-white rounded-lg hover:brightness-110 transition-all duration-300 shadow-lg">
              Start Game
            </button>
          </div>

          {/* Avatar Button */}
          <div className="absolute top-5 right-5 group flex items-center flex-col">
            <button
              onClick={() => {
                if (!user) {
                  setIsSignInOpen(true);
                } else {
                  setIsLogoutOpen(true); //  THIS IS THE ONLY CHANGE!
                }
              }}
              className="focus:outline-none"
            >
              <img
                src={user?.photo || "/cat.jpg"}
                alt={user?.name || "Default User"}
                className="w-13 h-13 rounded-full object-cover border-2 border-white"
              />
            </button>
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-2 py-1 rounded bg-[#1F1F1F] text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              {user ? `Hi, ${user.name}` : "Sign In"}
            </span>
          </div>

          {/*  Removed the separate "Log Out" button, as requested */}

          <GirlLogo />
        </div>

        <GameModesSection />

        <div className="w-full bg-black">
          <OsuNewsPage />
        </div>
      </div>

      {/* Modals */}
      {isSignInOpen && !user && (
        <SignInModal
          onClose={() => setIsSignInOpen(false)}
          onSwitchToRegister={() => {
            setIsSignInOpen(false);
            setIsRegisterOpen(true);
          }}
        />
      )}
      {isRegisterOpen && (
        <RegisterModal
          onClose={() => setIsRegisterOpen(false)}
          onSwitchToSignIn={() => {
            setIsRegisterOpen(false);
            setIsSignInOpen(true);
          }}
        />
      )}
      {isLogoutOpen && (
        <LogoutModal
          onClose={() => setIsLogoutOpen(false)}
          onConfirmLogout={() => {
            handleLogout();
            setIsLogoutOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default LobbyPage;

