"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Flame, Award, Check, ChevronDown, Instagram } from "lucide-react";
import { motion } from "framer-motion";

// Core components
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Counter from "@/components/shared/Counter";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import BmiCalculator from "@/components/bmi/BmiCalculator";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import ScrollToTop from "@/components/shared/ScrollToTop";

// Data sets
import { programsData } from "@/data/programs";
import { trainersData } from "@/data/trainers";
import { faqData } from "@/data/faq";

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <Navbar />

      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black py-20">
        {/* Looping Gym Video Overlay */}
        <div className="absolute inset-0 z-0 opacity-40 filter brightness-[35%]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          >
            {/* Direct fallback to a highly energetic stock mp4 workout video url */}
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-man-doing-exercises-with-barbell-in-the-gym-23423-large.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Linear dark gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/70 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]/10 z-0" />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-xs font-bold uppercase tracking-wider text-primary shadow-neon"
              >
                <Flame className="h-3.5 w-3.5" />
                <span>Beverly Hills Premier Strength Club</span>
              </motion.div>

              {/* Bold Headlines */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-8xl font-black font-display tracking-tight text-white uppercase leading-none"
              >
                BUILD YOUR BODY <br />
                <span className="text-gradient-neon font-black">TRANSFORM YOUR LIFE</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed font-light"
              >
                Unlock your absolute biological peak at APEX FIT. State-of-the-art heavy iron zones, Rogue Olympic rigs, specialized calorie-burning conditioning, and cold-plunge recovery hubs.
              </motion.p>

              {/* CTA Action Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto pt-4"
              >
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto text-center px-8 py-4 bg-gradient-neon text-white font-display text-lg uppercase tracking-wider font-extrabold rounded-xl shadow-neon hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300"
                >
                  View Memberships
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center px-8 py-4 border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-white/10 text-white font-display text-lg uppercase tracking-wider font-extrabold rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>

            {/* Glowing motivational box or dynamic video preview */}
            <div className="lg:col-span-4 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative glass-panel p-8 rounded-3xl border border-white/5 shadow-glass-panel-glow w-full max-w-[340px] ml-auto overflow-hidden group"
              >
                <div className="absolute top-0 right-0 h-24 w-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="text-white font-display uppercase tracking-widest font-bold">VIP Membership</span>
                </div>
                <p className="text-gray-400 text-xs leading-normal">
                  "The finest gym setting I have ever trained in. Complete clinical hygiene, premium custom platforms, and incredible direct accountability."
                </p>
                <div className="mt-6 flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                    alt="VIP Testimonial face"
                    className="h-10 w-10 rounded-full border border-primary/40 object-cover"
                  />
                  <div>
                    <h4 className="text-white text-xs font-bold">David Miller</h4>
                    <p className="text-gray-500 text-[10px] uppercase font-semibold tracking-wider">Managing Director</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Viewport Stats Counters */}
      <section className="bg-charcoal-dark border-y border-white/5 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white">
                <Counter end={10000} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-xs uppercase text-gray-500 font-bold tracking-widest mt-2">
                Active Members
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-gradient-neon">
                <Counter end={45} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-xs uppercase text-gray-500 font-bold tracking-widest mt-2">
                Elite Master Coaches
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white">
                <Counter end={1250000} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-xs uppercase text-gray-500 font-bold tracking-widest mt-2">
                Calories Melted
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white">
                <Counter end={98} suffix="%" />
              </span>
              <span className="text-[10px] sm:text-xs uppercase text-gray-500 font-bold tracking-widest mt-2">
                Successful Recomps
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Elite Programs Grid */}
      <section className="py-24 bg-[#080808] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section title */}
          <div className="text-center md:text-left mb-16 flex flex-col md:flex-row items-end justify-between">
            <div>
              <span className="text-xs uppercase text-primary font-bold tracking-widest">Our Programs</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-white mt-2 leading-none">
                CHOOSE YOUR <span className="text-gradient-neon">BATTLEGROUND</span>
              </h2>
            </div>
            <Link
              href="/programs"
              className="mt-4 md:mt-0 flex items-center space-x-2 text-xs uppercase text-gray-400 hover:text-white font-bold tracking-widest transition-colors duration-200"
            >
              <span>Explore All 8 Specialties</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programsData.slice(0, 3).map((program) => (
              <div
                key={program.id}
                className="glass-panel group overflow-hidden rounded-3xl border border-white/5 glow-hover transition-transform duration-500 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-medium via-transparent z-10" />
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-primary font-bold tracking-widest">
                      {program.category}
                    </span>
                    <h3 className="text-2xl font-bold font-display uppercase tracking-wide text-white mt-1">
                      {program.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed mt-3">
                      {program.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                      Intensity: <span className="text-gray-300 font-bold">{program.intensity}</span>
                    </span>
                    <Link
                      href="/contact"
                      className="text-xs font-bold uppercase tracking-wider text-primary hover:text-white flex items-center space-x-1.5 transition-colors"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Before/After Physical Transformations */}
      <section className="py-24 bg-charcoal-dark border-y border-white/5 relative overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase text-primary font-bold tracking-widest">Proof of Concept</span>
              <h2 className="text-4xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-none">
                REDEFINE YOUR <br />
                <span className="text-gradient-neon font-black">LIMITS</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Weight loss and muscle development are exact biological systems. No generic workouts or guessing. We track skeletal muscle volume, calorie burns, and structural alignments to guarantee deep metabolic re-compositions.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-gray-300 text-xs font-semibold">Scientifically planned caloric progression blocks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-gray-300 text-xs font-semibold">Strict bio-mechanical correction and posture loading</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-gray-300 text-xs font-semibold">Comprehensive body scanner analysis checks every 14 days</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3.5 bg-gradient-neon text-white font-display text-sm uppercase tracking-wider font-extrabold rounded-xl shadow-neon hover:scale-[1.01] active:scale-[0.99] transition-transform"
                >
                  Start Your Transformation
                </Link>
              </div>
            </div>

            {/* Right side slider wrapper */}
            <div className="lg:col-span-7 w-full max-w-2xl mx-auto">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=800&auto=format&fit=crop"
                afterImage="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop"
                beforeLabel="Alex: Before APEX FIT (24% Body Fat)"
                afterLabel="Alex: After 12 Weeks (11% Body Fat)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Precision Interactive BMI Calculator */}
      <section className="py-24 bg-[#080808] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase text-primary font-bold tracking-widest">Biological Metrics</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-white mt-1 leading-none">
              CALCULATE YOUR <span className="text-gradient-neon">STARTING POINT</span>
            </h2>
            <p className="text-gray-400 text-xs max-w-md mx-auto mt-3">
              Enter your physical dimensions below to instantly review your Body Mass Index (BMI) and discover targeted exercise programming suggestions.
            </p>
          </div>
          <BmiCalculator />
        </div>
      </section>

      {/* 6. Elite Trainer Highlights */}
      <section className="py-24 bg-charcoal-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase text-primary font-bold tracking-widest">Master Coaches</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-white mt-2 leading-none">
              ELITE ROSTER OF <span className="text-gradient-neon">TRAINERS</span>
            </h2>
            <p className="text-gray-400 text-xs mt-3 max-w-sm mx-auto">
              Our world-class certified professionals have trained athletes and elite achievers. No compromises, only execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainersData.map((trainer) => (
              <div
                key={trainer.id}
                className="glass-panel group overflow-hidden rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-medium via-charcoal-medium/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  
                  {/* Specialty details displayed absolute overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <span className="text-[9px] uppercase tracking-widest text-primary font-black">
                      {trainer.role}
                    </span>
                    <h3 className="text-xl font-bold font-display uppercase tracking-wide text-white mt-1">
                      {trainer.name}
                    </h3>
                    <p className="text-gray-400 text-[11px] mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {trainer.bio}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {trainer.specialty.slice(0, 2).map((spec, sIdx) => (
                        <span key={sIdx} className="text-[9px] uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/trainers"
              className="inline-flex items-center space-x-2 text-xs uppercase text-gray-400 hover:text-white font-bold tracking-widest transition-colors duration-200"
            >
              <span>Meet the Complete Coaching Team</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Instagram/Social Media Masonry Gallery */}
      <section className="py-24 bg-[#080808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase text-primary font-bold tracking-widest">Aesthetic Atmosphere</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-white mt-2 leading-none">
              APEX FIT <span className="text-gradient-neon">LIFESTYLE</span>
            </h2>
            <p className="text-gray-400 text-xs mt-3 max-w-sm mx-auto">
              Follow our official channel <a href="https://instagram.com" className="text-primary hover:underline">@APEX_FIT</a> for daily strength feeds.
            </p>
          </div>

          {/* Social grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=400&auto=format&fit=crop"
            ].map((imgUrl, idx) => (
              <a
                key={idx}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="relative aspect-square overflow-hidden rounded-2xl border border-white/5 group shadow-lg"
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white z-10 transition-opacity duration-300">
                  <Instagram className="h-6 w-6" />
                </div>
                <img
                  src={imgUrl}
                  alt={`Instagram feature feed ${idx}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Accenting FAQs Section */}
      <section className="py-24 bg-charcoal-dark border-t border-white/5 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase text-primary font-bold tracking-widest">Got Questions?</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-white mt-2 leading-none">
              FREQUENTLY ASKED <span className="text-gradient-neon">QUESTIONS</span>
            </h2>
          </div>

          {/* Accordion container */}
          <div className="space-y-4">
            {faqData.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-white/5 rounded-2xl overflow-hidden bg-charcoal-medium/50 hover:border-white/10 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between text-white font-semibold text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                        isOpen ? "transform rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[300px] border-t border-white/5" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 py-5 text-gray-400 text-xs sm:text-sm leading-relaxed bg-[#080808]/30">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating utility nodes */}
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
