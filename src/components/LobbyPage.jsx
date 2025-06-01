import React, { useState, useEffect } from "react";
import { supabase } from "../../integration/supabase";
import NavBar from "../pages/Navbar";
import OsuNewsPage from "../pages/OsuNewsPage";
import GirlLogo from "../pages/GirlLogo";
import SignInModal from "../pages/SignInModal";
import RegisterModal from "../pages/RegisterModal";
import LogoutModal from "../pages/LogoutModal.jsx";
import GameModesSection from "./GameModesSection";
import Footer from "./Footer";
import SocialMediaBar from "../components/SocialMediaBar.JSX";
import DownloadPopup from "./DownloadPopup"; // Add the import for DownloadPopup

const LobbyPage = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Add missing state
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUser({
          name: user.user_metadata.full_name || user.email,
          photo: user.user_metadata.avatar_url,
        });
      }
    };

    fetchUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          setUser({
            name: session.user.user_metadata.full_name || session.user.email,
            photo: session.user.user_metadata.avatar_url,
          });
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (!error) {
        setUser(null);
        setIsLogoutOpen(false);
      } else {
        console.error("Logout failed:", error.message);
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const handleDownload = () => {
    // Add your download logic here
    window.open('./download', '_blank');
    setShowPopup(false);
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
            <h2 className="text-5xl 2xl:mt-20 sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl max-w-3xl mx-auto sm:mx-0 font-extrabold bg-gradient-to-r from-pink-800 via-white to-indigo-100 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] [animation:bounceSlow_3s_ease-in-out_infinite] xl:whitespace-nowrap">
              Welcome to osu!
            </h2>

            <p
              className="mt-4 text-1xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl mx-auto sm:mx-0 text-white max-w-2xl [animation:bounceSlow_3s_ease-in-out_infinite] [animation-delay:1s]"
              style={{ textShadow: "0 0 4px white, 0 0 6px white" }}
            >
              The ultimate rhythm game experience – challenge your reflexes, master the beat,
              and rise through the global ranks with style.<br />
              Join a vibrant community and show the world your perfect score!
            </p>
            <button 
              onClick={() => setShowPopup(true)}
              className="mt-8 px-6 py-3 2xl:text-1xl bg-gradient-to-r from-pink-900 to-indigo-950 text-white rounded-lg hover:brightness-110 transition-all duration-300 shadow-lg
              relative overflow-hidden group">
              <span className="relative z-10">Start Game</span>
            </button>
          </div>

          {/* Avatar + Social Icons */}
          <div className="absolute top-10 right-5 flex items-center gap-4 z-50">
            {/* Social Media Buttons */}
            <SocialMediaBar />

            {/* Avatar Button */}
            <div className="group relative">
              <button
                onClick={() => {
                  if (!user) {
                    setIsSignInOpen(true);
                  } else {
                    setIsLogoutOpen(true);
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
              <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-[#1F1F1F] text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                {user ? `Hi, ${user.name}` : "Sign In"}
              </span>
            </div>
          </div>

          <GirlLogo />
        </div>
         
        <div className="-mt-24 sm:-mt-1 md:-mt-1 lg:-mt-1">
          <GameModesSection />
        </div>

        <div className="w-full bg-black">
          <OsuNewsPage />
        </div>

        <Footer />
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
          onConfirmLogout={handleLogout}
        />
      )}
      
      {/* Download popup */}
      <DownloadPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)}
        onDownload={handleDownload}
      />
    </div>
  );
};

export default LobbyPage;
