"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { trainersData, Trainer } from "@/data/trainers";
import { Instagram, Youtube, Twitter, Linkedin, Check } from "lucide-react";

export default function TrainersPage() {
  const [filter, setFilter] = useState<string>("All");

  // Filter handlers
  const filteredTrainers = trainersData.filter((trainer) => {
    if (filter === "All") return true;
    if (filter === "Strength") return trainer.specialty.includes("Hypertrophy") || trainer.specialty.includes("Powerlifting");
    if (filter === "Conditioning") return trainer.specialty.includes("Metabolic Conditioning") || trainer.specialty.includes("Fat Shredding");
    if (filter === "CrossFit") return trainer.specialty.includes("Olympic Lifting") || trainer.specialty.includes("CrossFit WOD Programming");
    if (filter === "Recovery") return trainer.specialty.includes("Vinyasa & Yin Yoga") || trainer.specialty.includes("Stress Recovery");
    return true;
  });

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative py-24 md:py-32 bg-[#080808] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 filter brightness-50">
          <img
            src="https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=1920&auto=format&fit=crop"
            alt="Trainers background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase text-primary font-bold tracking-widest">Master Roster</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-white mt-3 leading-none">
            WORLD CLASS <span className="text-gradient-neon font-black">COACHING.</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed font-light">
            We employ only CSCS strength coaches, CF-L3 trainers, and certified mobility directors. No amateur instructors, only pure performance.
          </p>
        </div>
      </section>

      {/* Roster & Filter */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {["All", "Strength", "Conditioning", "CrossFit", "Recovery"].map((spec) => (
              <button
                key={spec}
                onClick={() => setFilter(spec)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase font-extrabold tracking-wider transition-all duration-300 cursor-pointer ${
                  filter === spec
                    ? "bg-gradient-neon text-white shadow-neon scale-105"
                    : "bg-[#121212] border border-white/5 text-gray-400 hover:text-white hover:border-white/15"
                }`}
              >
                {spec} {spec === "All" ? "Roster" : "Specialists"}
              </button>
            ))}
          </div>

          {/* Roster Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredTrainers.map((trainer) => (
              <div
                key={trainer.id}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 glow-hover flex flex-col md:flex-row gap-8 relative overflow-hidden"
              >
                {/* Glow Overlay */}
                <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-primary/5 blur-2xl pointer-events-none" />

                {/* Trainer Image */}
                <div className="w-full md:w-[200px] shrink-0 aspect-[3/4] md:aspect-auto md:h-[260px] rounded-2xl overflow-hidden border border-white/5 relative">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Trainer Info */}
                <div className="flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] uppercase text-primary font-black tracking-widest">
                        {trainer.role}
                      </span>
                      <h3 className="text-2xl font-bold font-display uppercase tracking-wide text-white mt-0.5">
                        {trainer.name}
                      </h3>
                      <p className="text-gray-500 text-[10px] font-semibold mt-1 font-mono uppercase">
                        Experience: {trainer.experience}
                      </p>
                    </div>

                    <p className="text-gray-400 text-xs leading-relaxed italic">
                      "{trainer.quote}"
                    </p>

                    <p className="text-gray-400 text-xs leading-relaxed">
                      {trainer.bio}
                    </p>

                    {/* Certifications Checklist */}
                    <div className="border-t border-white/5 pt-4">
                      <h4 className="text-[9px] uppercase text-gray-500 font-bold tracking-widest mb-2 font-mono">
                        Certifications
                      </h4>
                      <div className="space-y-1">
                        {trainer.certifications.map((cert, cIdx) => (
                          <div key={cIdx} className="flex items-center space-x-2 text-[10px] text-gray-300">
                            <Check className="h-3 w-3 text-emerald-500 shrink-0" />
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Socials */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Socials */}
                    <div className="flex items-center space-x-3.5">
                      {trainer.socials.instagram && (
                        <a href={trainer.socials.instagram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Trainer Instagram">
                          <Instagram className="h-4.5 w-4.5" />
                        </a>
                      )}
                      {trainer.socials.youtube && (
                        <a href={trainer.socials.youtube} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Trainer Youtube">
                          <Youtube className="h-4.5 w-4.5" />
                        </a>
                      )}
                      {trainer.socials.twitter && (
                        <a href={trainer.socials.twitter} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Trainer Twitter">
                          <Twitter className="h-4.5 w-4.5" />
                        </a>
                      )}
                      {trainer.socials.linkedin && (
                        <a href={trainer.socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Trainer Linkedin">
                          <Linkedin className="h-4.5 w-4.5" />
                        </a>
                      )}
                    </div>

                    <Link
                      href="/contact"
                      className="w-full sm:w-auto px-5 py-2.5 bg-gradient-neon text-white font-display text-xs uppercase tracking-wider font-extrabold rounded-lg shadow-neon hover:scale-[1.01] active:scale-[0.99] transition-transform cursor-pointer"
                    >
                      Consult Coach
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
