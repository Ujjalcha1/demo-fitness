"use client";

import React, { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  url: string;
  category: "Strength" | "Cardio" | "Recovery";
  title: string;
}

const galleryImages: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    category: "Strength",
    title: "Olympic Deadlift Platform"
  },
  {
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    category: "Strength",
    title: "Bespoke Dumbbell Deck"
  },
  {
    url: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=600&auto=format&fit=crop",
    category: "Strength",
    title: "Rogue Heavy Lifting Rig"
  },
  {
    url: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
    category: "Cardio",
    title: "Curved Skillrun Treadmills"
  },
  {
    url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
    category: "Cardio",
    title: "High-Octane Metabolic Conditioning"
  },
  {
    url: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop",
    category: "Recovery",
    title: "Infrared Cedar Dry Sauna"
  },
  {
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
    category: "Recovery",
    title: "Vinyasa Regenerative Recovery"
  },
  {
    url: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=600&auto=format&fit=crop",
    category: "Recovery",
    title: "Luxury Rainfall Showers"
  }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = galleryImages.filter((img) => {
    if (filter === "All") return true;
    return img.category === filter;
  });

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1);
  };

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative py-24 md:py-32 bg-[#080808] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 filter brightness-50">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop"
            alt="Wellness gallery background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase text-primary font-bold tracking-widest font-mono">Atmosphere</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-white mt-3 leading-none">
            AESTHETIC & <span className="text-gradient-neon font-black">DESIGN.</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed font-light font-sans">
            Step inside our architectural training environments. Cleanliness and layout designed strictly for hyper-focused workouts.
          </p>
        </div>
      </section>

      {/* Masonry gallery */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {["All", "Strength", "Cardio", "Recovery"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase font-extrabold tracking-wider transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? "bg-gradient-neon text-white shadow-neon scale-105"
                    : "bg-[#121212] border border-white/5 text-gray-400 hover:text-white hover:border-white/15"
                }`}
              >
                {cat} {cat === "All" ? "Photos" : "Zone"}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="relative overflow-hidden rounded-3xl border border-white/5 group shadow-lg cursor-pointer break-inside-avoid flex flex-col justify-end"
              >
                {/* Overlay Zoom In Icon */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white z-10 transition-opacity duration-300">
                  <div className="h-12 w-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary shadow-neon">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>

                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] uppercase tracking-widest text-primary font-black">
                    {img.category}
                  </span>
                  <h4 className="text-white text-xs font-bold uppercase mt-0.5">{img.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox full overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            />

            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 text-gray-500 hover:text-white rounded-full bg-white/5 border border-white/5 focus:outline-none z-10"
              aria-label="Close Lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-primary/40 text-gray-400 hover:text-white transition-colors focus:outline-none z-10"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-primary/40 text-gray-400 hover:text-white transition-colors focus:outline-none z-10"
              aria-label="Next Slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-3xl border border-white/10 z-0 flex flex-col justify-end"
            >
              <img
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].title}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-6 py-4 border-t border-white/5">
                <span className="text-[10px] uppercase text-primary font-black tracking-widest">
                  {filteredImages[lightboxIndex].category}
                </span>
                <h4 className="text-white text-sm font-bold uppercase mt-0.5">
                  {filteredImages[lightboxIndex].title}
                </h4>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
