"use client";

import React from "react";
import Link from "next/link";
import { Dumbbell, Mail, Phone, MapPin, Instagram, Youtube, Twitter, Facebook } from "lucide-react";

const featuredPrograms = [
  { title: "Elite Weight Training", id: "weight-training" },
  { title: "Championship CrossFit", id: "crossfit" },
  { title: "Fat Shred & Melt", id: "fat-loss" },
  { title: "1-on-1 Premium Coaching", id: "personal-training" },
  { title: "Vinyasa & Recovery Yoga", id: "yoga" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Brand details */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-neon p-2 rounded-lg flex items-center justify-center shadow-neon">
                <Dumbbell className="h-5 w-5 text-white transform -rotate-45" />
              </div>
              <span className="text-2xl font-bold tracking-wider font-display text-white">
                APEX <span className="text-gradient-neon font-black">FIT</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              APEX FIT is the gold-standard in aesthetic and high-performance physical training. Our mission is to engineer high-energy training grounds that transform the mind, body, and spirit of modern elite achievers.
            </p>
            {/* Social icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 border border-white/5 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label="Instagram link"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 border border-white/5 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label="Youtube link"
              >
                <Youtube className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 border border-white/5 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label="Twitter link"
              >
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 border border-white/5 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label="Facebook link"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-white font-display text-lg uppercase tracking-wider font-bold">Programs</h3>
            <ul className="space-y-3">
              {featuredPrograms.map((program) => (
                <li key={program.id}>
                  <Link
                    href={`/programs#${program.id}`}
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-white font-display text-lg uppercase tracking-wider font-bold">Gym Hours & Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400">100 Luxury Avenue, Ground Floor, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-4.5 w-4.5 text-primary shrink-0" />
                <span className="text-gray-400">+1 (310) 555-0199</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-4.5 w-4.5 text-primary shrink-0" />
                <span className="text-gray-400">info@apex-fit.com</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-white/5">
              <h4 className="text-xs uppercase text-gray-500 font-semibold tracking-wider mb-2">Operating Hours</h4>
              <p className="text-gray-400 text-xs">Mon - Fri: 5:00 AM - 10:00 PM</p>
              <p className="text-gray-400 text-xs mt-0.5">Sat - Sun: 7:00 AM - 8:00 PM</p>
            </div>
          </div>

        </div>

        {/* Lower row */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} APEX FIT. All rights reserved. Built for champions.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
