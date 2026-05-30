"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { ShieldCheck, Eye, Key, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative py-24 md:py-32 bg-[#080808] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 filter brightness-50">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop"
            alt="Wellness backdrop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase text-primary font-bold tracking-widest font-mono">Legal Directive</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-white mt-3 leading-none">
            PRIVACY <span className="text-gradient-neon font-black">POLICY.</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed font-light font-sans">
            How we protect, encrypt, and respect your physiological records and digital footprint. Your data trust is our highest security mandate.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#080808] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Visual Icons Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, title: "100% Encrypted", desc: "Military-grade data protection" },
                { icon: Eye, title: "Zero Tracking", desc: "No behavioral data sold" },
                { icon: Key, title: "Absolute Ownership", desc: "Your metrics remain yours" },
                { icon: FileText, title: "GDPR Compliant", desc: "Full European trust alignment" },
              ].map((item, idx) => (
                <div key={idx} className="glass-panel p-5 rounded-2xl border border-white/5 text-center flex flex-col items-center">
                  <div className="h-10 w-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary mb-3">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider">{item.title}</h4>
                  <p className="text-[10px] text-gray-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Legal Sections */}
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 space-y-8 text-gray-300 text-xs sm:text-sm font-light leading-relaxed font-sans">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-primary font-bold font-mono">Section 1.0</span>
                <h3 className="text-lg font-bold font-display uppercase tracking-wide text-white mt-1">Data Collection Protocols</h3>
                <p className="mt-3">
                  APEX FIT collects physiological data, dietary records, metabolic indicators, and body composition analytics strictly in connection with membership profiles and custom coaching blueprints. Digital data collected via our website includes standard contact metrics (name, email address, phone numbers) and diagnostic answers supplied on our contact page.
                </p>
              </div>

              <div className="border-t border-white/5 pt-8">
                <span className="text-[9px] uppercase tracking-widest text-primary font-bold font-mono">Section 2.0</span>
                <h3 className="text-lg font-bold font-display uppercase tracking-wide text-white mt-1">Information Security & Storage</h3>
                <p className="mt-3">
                  All physiological and digital telemetry records are processed using Transport Layer Security (TLS) and stored on secure cloud environments featuring continuous monitoring. Under no circumstances do we lease, sell, or distribute guest contact details or fitness logs to any marketing aggregators.
                </p>
              </div>

              <div className="border-t border-white/5 pt-8">
                <span className="text-[9px] uppercase tracking-widest text-primary font-bold font-mono">Section 3.0</span>
                <h3 className="text-lg font-bold font-display uppercase tracking-wide text-white mt-1">Cookies & Tracking</h3>
                <p className="mt-3">
                  Our platform utilizes high-efficiency caching tools and functional cookies to remember visual styling preferences (such as dark-luxury layout variables) and speed up content loading sequences. No invasive cross-site marketing tracking tags are activated on our domain.
                </p>
              </div>

              <div className="border-t border-white/5 pt-8">
                <span className="text-[9px] uppercase tracking-widest text-primary font-bold font-mono">Section 4.0</span>
                <h3 className="text-lg font-bold font-display uppercase tracking-wide text-white mt-1">User Rights & Erasure</h3>
                <p className="mt-3">
                  You retain complete ownership of your data files. You have the absolute right to view, download, or request the instant deletion of all contact history and telemetry sheets logged on our secure servers. To dispatch an erasure request, please connect with our compliance office at **privacy@apex-fit.com**.
                </p>
              </div>

              <div className="border-t border-white/5 pt-8 text-[11px] text-gray-500 text-center">
                Last Updated: May 22, 2026. Designed for absolute integrity and client safety.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
