"use client";

import React, { use } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Twitter, Facebook } from "lucide-react";

const subjectOptions = [
  "Membership Inquiry",
  "Facility Tour Request",
  "Personal Trainer Matching",
  "Corporate Wellness Plans",
  "General Inquiry",
  "Elite Weight Training",
  "Championship CrossFit",
  "Fat Shred & Melt",
  "1-on-1 Premium Coaching",
  "Vinyasa & Recovery Yoga",
  "Endurance & HIIT Cardio",
  "Functional Movement & Calisthenics",
  "Precision Nutrition & Meal Design",
];

type ContactPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  const query = use(searchParams);
  const requestedSubject = query.subject;
  const requestedPlan = query.plan;
  const requestedPrice = query.price;
  const requestedBilling = query.billing;
  const subjectValue = Array.isArray(requestedSubject) ? requestedSubject[0] : requestedSubject;
  const planValue = Array.isArray(requestedPlan) ? requestedPlan[0] : requestedPlan;
  const priceValue = Array.isArray(requestedPrice) ? requestedPrice[0] : requestedPrice;
  const billingValue = Array.isArray(requestedBilling) ? requestedBilling[0] : requestedBilling;
  const emailSubject = subjectValue && subjectOptions.includes(subjectValue) ? subjectValue : "General Inquiry";
  const emailTemplate = [
    "Hi APEX FIT Team,",
    "",
    `I would like to inquire about: ${emailSubject}`,
    `Selected Plan: ${planValue || ""}`,
    `Selected Price: ${priceValue || ""}${billingValue ? ` (${billingValue})` : ""}`,
    "",
    "Full Name:",
    "Phone Number:",
    "Preferred Program:",
    "Preferred Date/Time:",
    "Fitness Goal:",
    "",
    "Thanks,",
  ].join("\n");
  const mailtoLink = `mailto:info@apex-fit.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailTemplate)}`;

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative py-24 md:py-32 bg-[#080808] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 filter brightness-50">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase text-primary font-bold tracking-widest">Get In Touch</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-white mt-3 leading-none">
            REACH OUT & <span className="text-gradient-neon font-black">CONNECT.</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed font-light">
            Our concierge team is ready to assist you with memberships, bookings, trainer consultations, and facility tours.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left: Contact Info */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-display uppercase tracking-wide text-white">Location & Hours</h2>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">Walk-ins welcome during all operating hours.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 glass-panel p-5 rounded-2xl border border-white/5">
                  <div className="h-10 w-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider">Address</h4>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">100 Luxury Avenue, Ground Floor<br />Beverly Hills, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 glass-panel p-5 rounded-2xl border border-white/5">
                  <div className="h-10 w-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider">Phone</h4>
                    <p className="text-gray-400 text-xs mt-1">+1 (310) 555-0199</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 glass-panel p-5 rounded-2xl border border-white/5">
                  <div className="h-10 w-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider">Email</h4>
                    <p className="text-gray-400 text-xs mt-1">info@apex-fit.com</p>
                    <p className="text-gray-400 text-xs">support@apex-fit.com</p>
                  </div>
                </div>

                <div className="glass-panel p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="h-10 w-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider">Operating Hours</h4>
                  </div>
                  <div className="space-y-2 pl-1">
                    {[
                      { day: "Monday – Friday", hours: "5:00 AM – 10:00 PM" },
                      { day: "Saturday", hours: "7:00 AM – 8:00 PM" },
                      { day: "Sunday", hours: "8:00 AM – 6:00 PM" },
                      { day: "Public Holidays", hours: "9:00 AM – 5:00 PM" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-[11px]">
                        <span className="text-gray-500 font-semibold uppercase tracking-wide">{item.day}</span>
                        <span className="text-gray-300 font-mono font-bold">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div>
                <h4 className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-3">Follow Our Journey</h4>
                <div className="flex items-center space-x-3">
                  {[
                    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                    { icon: Youtube, href: "https://youtube.com", label: "Youtube" },
                    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  ].map((social, idx) => (
                    <a key={idx} href={social.href} target="_blank" rel="noreferrer"
                      className="h-10 w-10 border border-white/5 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form + Map */}
            <div className="lg:col-span-8 space-y-10">
              {/* Google Map embed */}
              <div className="rounded-3xl overflow-hidden border border-white/5 aspect-[16/7] relative">
                <iframe
                  title="APEX FIT Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.4!2d-118.4003!3d34.0697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb7e7b30f3cf%3A0x3c2b5e63a7cee285!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Direct Email CTA */}
              <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5">
                <h2 className="text-2xl font-bold font-display uppercase tracking-wide text-white mb-8">
                  Book Via Email
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tap below to open your email app with a prefilled subject and message template for your booking request.
                </p>
                <a
                  href={mailtoLink}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-neon px-6 py-4 text-base font-extrabold font-display uppercase tracking-wider text-white shadow-neon transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  Open Mail
                </a>
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
