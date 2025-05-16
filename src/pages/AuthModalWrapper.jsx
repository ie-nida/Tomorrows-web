import React, { useState } from "react";
import SignInModal from "./SignInModal"; // Adjust path as needed
import RegisterModal from "./RegisterModal"; // Assuming you have a RegisterModal component

const AuthWrapper = () => {
  const [activeModal, setActiveModal] = useState("signIn"); // State to track which modal is active

  // Function to switch to the Register Modal
  const handleSignInSwitch = () => {
    setActiveModal("register");
  };

  // Function to switch to the Sign In Modal
  const handleRegisterSwitch = () => {
    setActiveModal("signIn");
  };

  // Close the active modal
  const closeModal = () => {
    setActiveModal(null); // No modal open
  };

  return (
    <div>
      {/* Button to open the Sign In Modal */}
      <button onClick={() => setActiveModal("signIn")}>Open Sign In</button>

      {/* Conditionally render either SignInModal or RegisterModal based on activeModal */}
      {activeModal === "signIn" && (
        <SignInModal
          onClose={closeModal}
          onSwitchToRegister={handleSignInSwitch}
        />
      )}

      {activeModal === "register" && (
        <RegisterModal
          onClose={closeModal}
          onSwitchToSignIn={handleRegisterSwitch}
        />
      )}
    </div>
  );
};

export default AuthWrapper;
