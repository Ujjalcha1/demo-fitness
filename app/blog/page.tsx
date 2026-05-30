"use client";

import React, { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { blogsData, BlogPost } from "@/data/blogs";
import { Search, Calendar, User, Clock, ArrowRight, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<string>("All");
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  // Search & category filter logic
  const filteredPosts = blogsData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filter === "All") return matchesSearch;
    return post.category === filter && matchesSearch;
  });

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative py-24 md:py-32 bg-[#080808] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 filter brightness-50">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1920&auto=format&fit=crop"
            alt="Diet blog backdrop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase text-primary font-bold tracking-widest font-mono">Knowledge Base</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-white mt-3 leading-none">
            PHYSIOLOGICAL <span className="text-gradient-neon font-black">RESOURCES.</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed font-light font-sans">
            Read clinical training progressive overload guides, macronutrient balancing protocols, and metabolic science papers.
          </p>
        </div>
      </section>

      {/* Blog Grid & Filters */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search bar & Category filters row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-16">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2.5">
              {["All", "Training", "Nutrition", "Recovery", "Cardio"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4.5 py-2.5 rounded-full text-xs uppercase font-extrabold tracking-wider transition-all duration-300 cursor-pointer ${
                    filter === cat
                      ? "bg-gradient-neon text-white shadow-neon"
                      : "bg-[#121212] border border-white/5 text-gray-400 hover:text-white hover:border-white/15"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:max-w-sm flex items-center">
              <Search className="absolute left-4 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search progressive overload, sleep..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121212] border border-white/5 focus:border-primary/50 text-white rounded-full pl-11 pr-5 py-3 text-sm focus:outline-none placeholder:text-gray-700 transition-colors"
              />
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="glass-panel group overflow-hidden rounded-3xl border border-white/5 glow-hover flex flex-col justify-between"
                >
                  {/* Image aspect ratio */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-medium via-transparent z-10" />
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    />
                    
                    <span className="absolute top-4 left-4 z-20 text-[9px] uppercase tracking-widest bg-black/60 border border-white/15 px-2.5 py-1 rounded-full text-primary font-bold backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Body content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Meta header */}
                      <div className="flex items-center space-x-4 text-gray-500 text-[10px] uppercase font-bold tracking-wider font-mono">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3 text-primary" />
                          <span>{post.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-3 w-3 text-primary" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wide text-white mt-3 group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-xs leading-relaxed mt-3 line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    {/* Author & CTA */}
                    <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-8 w-8 rounded-full border border-primary/20 object-cover"
                        />
                        <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">
                          {post.author.name}
                        </span>
                      </div>

                      <button
                        onClick={() => setActiveArticle(post)}
                        className="text-xs font-bold uppercase tracking-wider text-primary hover:text-white flex items-center space-x-1.5 transition-colors cursor-pointer focus:outline-none"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-white/5 rounded-3xl">
              <p className="text-gray-500 text-sm">No research articles match your exact keyword criteria.</p>
              <button
                onClick={() => { setSearchQuery(""); setFilter("All"); }}
                className="mt-4 text-xs uppercase font-extrabold tracking-widest text-primary hover:underline focus:outline-none"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Readable Article Detail Drawer Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl overflow-y-auto max-h-[85vh] rounded-3xl border border-white/10 bg-charcoal-medium shadow-glass-panel-glow"
            >
              {/* Header image cover */}
              <div className="relative aspect-[16/8] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-medium to-transparent z-10" />
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
                
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 p-2 text-white rounded-full bg-black/60 border border-white/10 hover:border-primary/50 transition-colors z-20"
                  aria-label="Close article"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Text Area */}
              <div className="p-8 sm:p-10 relative">
                {/* Meta details */}
                <div className="flex items-center space-x-4 text-gray-500 text-[10px] uppercase font-bold tracking-wider font-mono">
                  <span className="bg-primary/10 border border-primary/20 text-primary px-3 py-0.5 rounded text-[8px]">
                    {activeArticle.category}
                  </span>
                  <span>{activeArticle.date}</span>
                  <span>{activeArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider text-white mt-4 leading-snug">
                  {activeArticle.title}
                </h2>

                {/* Author Info */}
                <div className="flex items-center space-x-3.5 my-6 py-3 border-y border-white/5">
                  <img
                    src={activeArticle.author.avatar}
                    alt={activeArticle.author.name}
                    className="h-9 w-9 rounded-full border border-primary/20 object-cover"
                  />
                  <div>
                    <p className="text-xs text-white font-bold uppercase tracking-wider">{activeArticle.author.name}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold font-mono">Elite APEX Coach</p>
                  </div>
                </div>

                {/* Body Content */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light whitespace-pre-line">
                  {activeArticle.content}
                </p>
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
