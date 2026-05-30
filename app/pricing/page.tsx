"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { Check, Sparkles, ArrowRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

interface Tier {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  desc: string;
  popular: boolean;
  features: string[];
  color: string;
}

const tiers: Tier[] = [
  {
    name: "Basic Strength",
    monthlyPrice: 3999,
    yearlyPrice: 3199,
    desc: "Perfect for independent lifting enthusiasts wanting standard heavy-iron conditioning floor access.",
    popular: false,
    color: "border-white/5 bg-charcoal-medium/50",
    features: [
      "Full strength and machine floor access",
      "Complimentary digital lock secure lockers",
      "Fresh towels & rain showers access",
      "1 x complimentary biomechanics consultation",
    ],
  },
  {
    name: "Pro Passport",
    monthlyPrice: 7999,
    yearlyPrice: 6399,
    desc: "Our most popular tier. Universal access to conditioning classes, global passports, and core saunas.",
    popular: true,
    color: "border-primary/30 bg-charcoal-medium/80",
    features: [
      "Includes everything in Basic tier",
      "Unlimited HIIT metabolic conditioning classes",
      "Universal scan-in at all global facilities",
      "4 x monthly infrared dry sauna passes",
      "Weekly automated body composition reviews",
    ],
  },
  {
    name: "Elite Wellness",
    monthlyPrice: 15999,
    yearlyPrice: 12799,
    desc: "Complete biological overhaul. 1-on-1 coaching blocks, clinical saunas, and nutrition roadmaps.",
    popular: false,
    color: "border-accent/20 bg-charcoal-medium/50",
    features: [
      "Includes everything in Pro tier",
      "Unlimited infrared sauna & recovery cold plunges",
      "2 x monthly 60-min private coaching sessions",
      "Custom precision diet macros & meal preps",
      "24/7 direct coach messaging portal access",
    ],
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const formatInr = (value: number) => new Intl.NumberFormat("en-IN").format(value);

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative py-24 md:py-32 bg-[#080808] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 filter brightness-50">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
            alt="Gym pricing background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase text-primary font-bold tracking-widest font-mono">Memberships</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-white mt-3 leading-none">
            INVEST IN YOUR <span className="text-gradient-neon font-black">VESSEL.</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed font-light font-sans">
            Flexible membership tiers with zero hidden registration fees. Lock in a 20% discount by selecting our annual billing plan. Contact us to get started.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 bg-[#080808] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Billing Switcher Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-16">
            <span className={`text-xs uppercase font-extrabold tracking-wider ${billingCycle === "monthly" ? "text-white" : "text-gray-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="h-6 w-12 bg-charcoal-light border border-white/10 rounded-full relative focus:outline-none transition-colors cursor-pointer"
              aria-label="Billing cycle toggle"
            >
              <div
                className={`h-4 w-4 bg-primary rounded-full absolute top-0.5 transition-all duration-300 ${
                  billingCycle === "yearly" ? "left-[26px]" : "left-0.5"
                }`}
              />
            </button>
            <span className={`text-xs uppercase font-extrabold tracking-wider flex items-center space-x-1.5 ${billingCycle === "yearly" ? "text-primary" : "text-gray-500"}`}>
              <span>Annually</span>
              <span className="bg-primary/10 border border-primary/20 px-2 py-0.5 text-[8px] text-primary font-bold uppercase rounded-md">
                Save 20%
              </span>
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {tiers.map((tier, idx) => {
              const activePrice = billingCycle === "monthly" ? tier.monthlyPrice : tier.yearlyPrice;
              const formattedPrice = `₹${formatInr(activePrice)}`;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`glass-panel p-8 rounded-3xl border flex flex-col justify-between relative glow-hover ${tier.color}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-neon text-white text-[9px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full shadow-neon flex items-center space-x-1">
                      <Sparkles className="h-3 w-3" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div>
                    <div className="text-center sm:text-left mb-6">
                      <h3 className="text-xl font-bold font-display uppercase tracking-wider text-white">
                        {tier.name}
                      </h3>
                      <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mt-1">
                        High Performance Pass
                      </p>
                    </div>

                    {/* Price */}
                    <div className="my-8 flex items-baseline justify-center sm:justify-start">
                      <span className="text-gray-400 text-2xl font-light">₹</span>
                      <span className="text-6xl font-black font-mono text-white leading-none">
                        {formatInr(activePrice)}
                      </span>
                      <span className="text-gray-500 text-xs font-semibold ml-2 uppercase font-mono tracking-wider">
                        / month
                      </span>
                    </div>

                    <p className="text-gray-400 text-xs leading-relaxed mb-8">{tier.desc}</p>

                    {/* Features checklist */}
                    <div className="border-t border-white/5 pt-6 space-y-4">
                      {tier.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-3 text-xs text-gray-300">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12">
                    <Link
                      href={{
                        pathname: "/contact",
                        query: {
                          subject: "Membership Inquiry",
                          plan: tier.name,
                          price: formattedPrice,
                          billing: billingCycle === "monthly" ? "Monthly" : "Yearly",
                        },
                      }}
                      className={`w-full py-4 flex items-center justify-center space-x-2 font-display text-base uppercase tracking-wider font-extrabold rounded-xl transition-all duration-300 ${
                        tier.popular
                          ? "bg-gradient-neon text-white shadow-neon hover:scale-[1.01]"
                          : "border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-white/10 text-white"
                      }`}
                    >
                      <PhoneCall className="h-4 w-4" />
                      <span>Enquire Now</span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="py-16 bg-charcoal-dark border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white leading-none">
            NOT SURE WHICH PLAN? <span className="text-gradient-neon">LET&apos;S TALK.</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Our membership advisors are available 7 days a week to help you find the perfect fit. No sales pressure — just honest expert guidance.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-neon text-white font-display text-base uppercase tracking-wider font-extrabold rounded-xl shadow-neon hover:scale-[1.02] transition-transform"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
