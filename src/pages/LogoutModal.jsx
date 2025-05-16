import React from "react";
import { motion } from "framer-motion";
import { FaSignOutAlt } from "react-icons/fa";

const LogoutModal = ({ onClose, onConfirmLogout }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-transparent">
      <motion.div
        className="bg-[#2c2c2c]/50 text-white p-6 md:p-8 rounded-2xl w-[90%] max-w-2xl flex flex-col md:flex-row relative shadow-2xl backdrop-blur-sm"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <div className="w-full md:w-2/3 md:pr-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center md:text-left">
            Are you sure you want to log out?
          </h2>
          <p className="text-gray-400 mb-5 text-center">
            You will be logged out of your account. You can sign back in anytime.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={onConfirmLogout}
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-white font-semibold flex items-center gap-2"
            >
              <FaSignOutAlt />
              Confirm Logout
            </button>
            <button
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-lg text-white font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="hidden md:block w-1/3">
          <video
            src="/vid.mp4"
            autoPlay
            loop
            muted
            className="rounded-xl object-cover h-full max-h-[360px] w-full"
          />
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-3xl hover:text-red-400"
        >
          ×
        </button>
      </motion.div>
    </div>
  );
};

export default LogoutModal;
