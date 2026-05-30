"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Counter from "@/components/shared/Counter";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { ShieldAlert, Award, Heart, CheckCircle2, ChevronRight, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#080808] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20 filter brightness-50">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
            alt="Gym backdrop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase text-primary font-bold tracking-widest">About APEX FIT</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-white mt-3 leading-none">
            OUR STORY. <span className="text-gradient-neon font-black">YOUR TRIUMPH.</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed font-light">
            Founded with a commitment to absolute performance, physical longevity, and luxury design. We do not just build gyms; we engineer high-energy training grounds.
          </p>
        </div>
      </section>

      {/* Gym Story & Timeline */}
      <section className="py-24 bg-[#080808] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Story */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase text-primary font-bold tracking-widest font-mono">The Foundations</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display uppercase text-white tracking-wide">
                BORN FROM DUST. FORGED IN <span className="text-gradient-neon">STEEL.</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                APEX FIT started in 2018 in a cold, 1,200 sq.ft warehouse in Los Angeles. Frustrated by generic, overcrowded franchise gyms featuring dusty equipment, uninspired staff, and zero clinical accountability, our founders set out to build a highly optimized physical sanctuary.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                By pairing absolute biomechanical precision, clinical body tracking, and Olympic-grade platforms with high-end architectural aesthetics, soundproofing, and luxury recovery lounges, we developed a gym setting that feels completely alive and inspiring. Today, APEX FIT represents the apex training club for modern champions.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-4 text-center sm:text-left">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black font-display text-white">2018</h4>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-1">Warehouse Zero</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black font-display text-gradient-neon">6</h4>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-1">Global Locations</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black font-display text-white">40+</h4>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-1">Master Coaches</p>
                </div>
              </div>
            </div>

            {/* Timeline graphics */}
            <div className="lg:col-span-6 space-y-8">
              <h3 className="text-xl font-bold font-display uppercase tracking-wider text-white border-b border-white/5 pb-3">
                Key Milestones
              </h3>

              {/* Milestones list */}
              <div className="space-y-6 relative border-l border-white/5 pl-6 ml-2">
                {[
                  {
                    year: "2018",
                    title: "First Warehouse Hub",
                    desc: "Launced LA location with 10 Rogue racks and 50 dedicated members."
                  },
                  {
                    year: "2021",
                    title: "Metabolic Shred Launch",
                    desc: "Engineered and trademarked our high-intensity heart-rate feedback conditioning system."
                  },
                  {
                    year: "2024",
                    title: "Beverly Hills Flagship",
                    desc: "Opened our signature 30,000 sq.ft ultra-luxury strength floor and recovery saunas."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full bg-primary border-2 border-background shadow-neon" />
                    <span className="text-xs font-mono font-bold text-primary">{item.year}</span>
                    <h4 className="text-white font-bold text-sm uppercase mt-0.5">{item.title}</h4>
                    <p className="text-gray-400 text-xs mt-1 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Core values */}
      <section className="py-24 bg-charcoal-dark border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase text-primary font-bold tracking-widest">Our Directives</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display uppercase text-white mt-1 leading-none">
              MISSION, VISION & <span className="text-gradient-neon">VALUES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/5">
              <div className="h-10 w-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-wide text-white">Our Mission</h3>
              <p className="text-gray-400 text-xs leading-relaxed mt-4">
                To build high-performance environments and structure detailed nutritional/workout systems that eliminate physical plateaus, guaranteeing muscle growth and fat shredded outcomes.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/5">
              <div className="h-10 w-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-wide text-white">Our Vision</h3>
              <p className="text-gray-400 text-xs leading-relaxed mt-4">
                To serve as the global passport standard in elite modern physical training, setting standard practices for recovery longevity and high-energy luxury fitness formatting.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/5">
              <div className="h-10 w-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-wide text-white">Our Core Value</h3>
              <p className="text-gray-400 text-xs leading-relaxed mt-4">
                Cleanliness and safety first, continuous biomechanics education, absolute member tracking transparency, and providing an inspiring community space for elite achievers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Gallery showcase */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase text-primary font-bold tracking-widest">Take a Tour</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display uppercase text-white mt-1 leading-none">
              OUR LUXURY <span className="text-gradient-neon">FACILITIES</span>
            </h2>
            <p className="text-gray-400 text-xs mt-3 max-w-sm mx-auto">
              Our zones boast complete air filtration systems, clean filtered water bars, sound insulation, and elite machinery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Heavy Strength Zone",
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
                desc: "Rogue racks, full dumbbell stacks up to 150 lbs, and custom Olympic platforms."
              },
              {
                title: "Cardio & HIIT Arena",
                img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
                desc: "Equipped with curved Skillrun treadmills, SkiErgs, and live heart rate monitor projection grids."
              },
              {
                title: "Wellness & Dry Sauna Lounge",
                img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
                desc: "Cedar-wood saunas, luxury rainfall showers, fresh clean towels, and premium cold plunge tubs."
              }
            ].map((facility, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-3xl overflow-hidden group border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
                <img
                  src={facility.img}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <h3 className="text-xl font-bold font-display uppercase tracking-wide text-white">
                    {facility.title}
                  </h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed mt-1">
                    {facility.desc}
                  </p>
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
