"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const scrollPercent = (window.scrollY / totalScroll) * 100;
        setProgress(scrollPercent);
      }
      
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG parameters
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full border border-white/5 bg-background/80 text-white backdrop-blur-md flex items-center justify-center cursor-pointer hover:border-primary/30 transition-colors group focus:outline-none"
          aria-label="Scroll back to top"
        >
          {/* Progress circle */}
          <svg className="absolute top-0 left-0 h-full w-full -rotate-95">
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="2"
              fill="transparent"
            />
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="#FF3E3E"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>

          <ArrowUp className="h-5 w-5 text-gray-300 group-hover:text-primary group-hover:-translate-y-0.5 transition-all duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
