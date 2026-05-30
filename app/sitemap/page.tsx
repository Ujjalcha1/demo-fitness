"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { Dumbbell, Home, Users, Compass, Tag, Image, BookOpen, Mail, Shield, ShieldCheck, Map, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface SitemapSection {
  title: string;
  desc: string;
  links: {
    name: string;
    href: string;
    icon: React.ComponentType<any>;
    desc: string;
  }[];
}

const sitemapSections: SitemapSection[] = [
  {
    title: "Core Roster & Locations",
    desc: "Explore our facilities, training roster, and elite coaching methodologies.",
    links: [
      { name: "Home Dashboard", href: "/", icon: Home, desc: "Introductory high-intensity showcase and transformation portfolios." },
      { name: "About Story", href: "/about", icon: Compass, desc: "Our humble CA beginnings, timeline benchmarks, and facility vision." },
      { name: "Athletic Programs", href: "/programs", icon: Dumbbell, desc: "Our 8 custom core physiological disciplines built for growth." },
      { name: "Master Roster", href: "/trainers", icon: Users, desc: "Meet our certified CSCS coaches and mobility directors." },
    ],
  },
  {
    title: "Interact & Enquire",
    desc: "Select plan options, browse active portfolios, and connect with advisors.",
    links: [
      { name: "Membership Tiers", href: "/pricing", icon: Tag, desc: "Monthly and annual investment cycles with detailed tier features." },
      { name: "Virtual Gallery", href: "/gallery", icon: Image, desc: "Virtual deck showcasing heavy training areas and saunas." },
      { name: "Science Journal", href: "/blog", icon: BookOpen, desc: "Physiological papers, progressive overload guides, and nutrition advice." },
      { name: "Concierge Contact", href: "/contact", icon: Mail, desc: "Send messages, request facility tours, or match with trainers." },
    ],
  },
  {
    title: "Legal & Directory Information",
    desc: "Review confidentiality guarantees, guest waivers, and system lists.",
    links: [
      { name: "Privacy Policy", href: "/privacy", icon: Shield, desc: "Physiological and contact details encryption protocols." },
      { name: "Terms of Service", href: "/terms", icon: ShieldCheck, desc: "Membership cancellations, gym rules, and physical liability waivers." },
      { name: "Active Sitemap", href: "/sitemap", icon: Map, desc: "Direct listing and comprehensive domain mapping directory." },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative py-24 md:py-32 bg-[#080808] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 filter brightness-50">
          <img
            src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1920&auto=format&fit=crop"
            alt="Gym architecture backdrop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase text-primary font-bold tracking-widest font-mono">Domain Index</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-white mt-3 leading-none">
            ACTIVE <span className="text-gradient-neon font-black">SITEMAP.</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed font-light font-sans">
            Direct navigation directory mapping all core features, training articles, and legal documents in one unified portal.
          </p>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="py-24 bg-[#080808] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sitemapSections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-6">
                {/* Section Header */}
                <div className="border-b border-white/5 pb-4">
                  <h2 className="text-2xl font-bold font-display uppercase tracking-wider text-white">
                    {section.title}
                  </h2>
                  <p className="text-gray-500 text-xs mt-1 font-light">
                    {section.desc}
                  </p>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.links.map((link, lIdx) => (
                    <Link
                      key={lIdx}
                      href={link.href}
                      className="glass-panel p-6 rounded-3xl border border-white/5 glow-hover flex items-start space-x-4 group transition-all duration-300"
                    >
                      {/* Icon */}
                      <div className="h-10 w-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300 shrink-0">
                        <link.icon className="h-5 w-5" />
                      </div>

                      {/* Info & Description */}
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-white text-sm font-bold uppercase tracking-wider group-hover:text-primary transition-colors">
                            {link.name}
                          </h4>
                          <ArrowRight className="h-3 w-3 text-gray-500 group-hover:text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        <p className="text-gray-400 text-xs mt-1.5 leading-relaxed font-light">
                          {link.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
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
