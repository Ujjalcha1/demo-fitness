"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { Check, Info, FileWarning, AlertOctagon } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative py-24 md:py-32 bg-[#080808] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 filter brightness-50">
          <img
            src="https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=1920&auto=format&fit=crop"
            alt="Workout gear backdrop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase text-primary font-bold tracking-widest font-mono">Club Regulations</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-white mt-3 leading-none">
            TERMS OF <span className="text-gradient-neon font-black">SERVICE.</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed font-light font-sans">
            Membership guidelines, facility conduct rules, safety protocols, and liability waivers. Integrity and athletic discipline first.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#080808] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Club Etiquette Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Info, title: "Card Scan Required", desc: "Digital passport required for all entries." },
                { icon: FileWarning, title: "Clean Dress Code", desc: "Athletic wear and clean trainers mandatory." },
                { icon: AlertOctagon, title: "Respect Etiquette", desc: "Re-rack plates and respect heavy zones." },
              ].map((item, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 flex items-start space-x-4">
                  <div className="h-10 w-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider">{item.title}</h4>
                    <p className="text-[11px] text-gray-400 mt-1 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Terms Articles */}
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 space-y-8 text-gray-300 text-xs sm:text-sm font-light leading-relaxed font-sans">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-primary font-bold font-mono">Article 1.0</span>
                <h3 className="text-lg font-bold font-display uppercase tracking-wide text-white mt-1">Membership Eligibility & Access</h3>
                <p className="mt-3">
                  All active members must maintain active profiles and utilize official passport entries or card barcodes at our global turnstiles. Access is strictly limited to current holders of the corresponding tier tier in good standing. Guests are not permitted on the gym floor without prior registry.
                </p>
              </div>

              <div className="border-t border-white/5 pt-8">
                <span className="text-[9px] uppercase tracking-widest text-primary font-bold font-mono">Article 2.0</span>
                <h3 className="text-lg font-bold font-display uppercase tracking-wide text-white mt-1">Freezing & Cancellations</h3>
                <p className="mt-3">
                  Membership freezes are permitted for medical or travel reasons for up to two (2) calendar months per year. Cancellation requests require a written notice sent via email or submitted at our reception desks at least ten (10) business days prior to the next billing cycle.
                </p>
              </div>

              <div className="border-t border-white/5 pt-8">
                <span className="text-[9px] uppercase tracking-widest text-primary font-bold font-mono">Article 3.0</span>
                <h3 className="text-lg font-bold font-display uppercase tracking-wide text-white mt-1">Facility Conduct & Safety</h3>
                <p className="mt-3">
                  To ensure a high-energy and safe training environment, all members must strictly adhere to club etiquette:
                </p>
                <ul className="space-y-2 mt-4 pl-4">
                  {[
                    "Re-rack all dumbbells, barbells, and specialty bars instantly after use.",
                    "Wipe down equipment after every set using the complimentary disinfectant towels.",
                    "Respect designated sound zones; voice calls are permitted inside wellness lobbies only.",
                    "Follow coach advisories when operating heavy Olympic lifting platforms.",
                  ].map((rule, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-2 text-xs">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/5 pt-8">
                <span className="text-[9px] uppercase tracking-widest text-primary font-bold font-mono">Article 4.0</span>
                <h3 className="text-lg font-bold font-display uppercase tracking-wide text-white mt-1">Physical Liability & Waivers</h3>
                <p className="mt-3">
                  Training involves high-intensity cardiovascular conditioning and skeletal loading activities. By executing a membership pass or entering APEX FIT facilities, you represent that you are in suitable physical health and acknowledge that you release the facility, training coaches, and directors from any liabilities resulting from physical injuries or equipment usage.
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
