"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppFloat() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Show the active chat invitation prompt after 6 seconds
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open(
      "https://wa.me/13105550199?text=Hi!%20I'm%20interested%20in%20joining%20APEX%20FIT.%20Could%20I%20schedule%20a%20free%20trial%20session?",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start space-y-2">
      {/* Dynamic invite prompt */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="bg-[#121212] border border-white/5 shadow-glass backdrop-blur-md rounded-2xl p-4 max-w-[260px] relative overflow-hidden"
          >
            {/* Green active dot */}
            <div className="absolute top-3 right-3 flex items-center space-x-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] uppercase tracking-wider text-emerald-500 font-bold">Online</span>
            </div>
            
            <button
              onClick={() => setShowPrompt(false)}
              className="absolute top-2 left-2 text-gray-600 hover:text-white transition-colors"
              aria-label="Close chat prompt"
            >
              <X className="h-3 w-3" />
            </button>

            <div className="pt-2">
              <p className="text-white text-xs font-semibold">Coach Marcus</p>
              <p className="text-gray-400 text-[11px] mt-1 leading-normal">
                Hey! Need help choosing a workout plan or matching with a trainer? Ask me anything right here!
              </p>
              <button
                onClick={handleClick}
                className="mt-3.5 w-full text-center py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all duration-300 shadow-lg shadow-emerald-950"
              >
                Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="h-12 w-12 rounded-full bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center text-white cursor-pointer shadow-lg shadow-emerald-950 focus:outline-none relative group border border-emerald-500/20"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-red-500 border-2 border-emerald-600 flex items-center justify-center text-[8px] font-black text-white animate-bounce">
          1
        </span>
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </div>
  );
}
