"use client";

import React, { useState, useEffect } from "react";
import { X, Dumbbell, Sparkles, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FreeTrialModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "weight-training",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Custom Event Trigger: Listen for "open-free-trial" events (e.g. from CTA buttons)
    const handleOpenModal = () => {
      setIsOpen(true);
    };

    window.addEventListener("open-free-trial", handleOpenModal);

    return () => {
      window.removeEventListener("open-free-trial", handleOpenModal);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("freeTrialDismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
        setFormData({ name: "", email: "", phone: "", program: "weight-training" });
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-charcoal-medium shadow-glass-panel-glow"
          >
            {/* Ambient Red Blur Background */}
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-white rounded-full bg-white/5 border border-white/5 transition-colors"
              aria-label="Close trial modal"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-8 sm:p-10 relative">
              {!submitted ? (
                <>
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-bold uppercase tracking-wider mb-6">
                    <Sparkles className="h-3 w-3" />
                    <span>Limited Time Pass</span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white uppercase leading-none">
                    UNLEASH YOUR <br />
                    <span className="text-gradient-neon font-black">HIGHER SELF</span>
                  </h2>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    Claim your exclusive **Free 3-Day All-Access Pass** today. Experience our luxury equipment, athletic conditioning classes, and premium dry saunas.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div>
                      <label htmlFor="modal-name" className="block text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="modal-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Marcus Vance"
                        className="w-full bg-[#080808] border border-white/5 focus:border-primary/50 text-white rounded-xl px-4 py-3 text-sm focus:outline-none placeholder:text-gray-700 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="modal-email" className="block text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="modal-email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="marcus@apex.com"
                          className="w-full bg-[#080808] border border-white/5 focus:border-primary/50 text-white rounded-xl px-4 py-3 text-sm focus:outline-none placeholder:text-gray-700 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="modal-phone" className="block text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="modal-phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 0199"
                          className="w-full bg-[#080808] border border-white/5 focus:border-primary/50 text-white rounded-xl px-4 py-3 text-sm focus:outline-none placeholder:text-gray-700 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="modal-program" className="block text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-1.5">
                        Preferred Focus
                      </label>
                      <select
                        id="modal-program"
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full bg-[#080808] border border-white/5 focus:border-primary/50 text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="weight-training">Elite Weight Training</option>
                        <option value="crossfit">Championship CrossFit</option>
                        <option value="fat-loss">Fat Shred & Melt</option>
                        <option value="yoga">Vinyasa & Recovery Yoga</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 mt-2 bg-gradient-neon text-white font-display text-lg uppercase tracking-wider font-extrabold rounded-xl shadow-neon hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer"
                    >
                      Claim My Free Pass
                    </button>
                  </form>

                  {/* Lock badge */}
                  <div className="flex items-center justify-center space-x-2 mt-5 text-[10px] text-gray-500">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                    <span>No obligation. Your data is 100% encrypted & confidential.</span>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-500 mb-6 shadow-lg shadow-emerald-950">
                    <Dumbbell className="h-8 w-8 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold font-display uppercase tracking-wide text-white">
                    PASS RESERVED!
                  </h3>
                  <p className="text-gray-400 text-sm mt-3 max-w-sm leading-relaxed">
                    Welcome to the apex, **{formData.name.split(" ")[0]}**! An SMS confirmation pass with your unique gate scan code has been dispatched to **{formData.phone}**.
                  </p>
                  <p className="text-primary text-xs mt-6 font-bold uppercase tracking-widest animate-pulse">
                    Preparing invitation...
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
