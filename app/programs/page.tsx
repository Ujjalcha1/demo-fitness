import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { programsData } from "@/data/programs";
import { siteConfig } from "@/data/site";
import * as Icons from "lucide-react";

export const metadata: Metadata = {
  title: "Fitness Programs",
  description:
    "Explore APEX FIT training programs including Elite Weight Training, Championship CrossFit, Fat Shred & Melt, recovery yoga, and premium 1-on-1 coaching.",
  alternates: {
    canonical: "/programs",
  },
  openGraph: {
    title: "APEX FIT Programs | Strength, CrossFit, Fat Loss & Coaching",
    description:
      "Discover all APEX FIT fitness programs built for muscle growth, metabolic conditioning, athletic recovery, and high-performance coaching.",
    url: `${siteConfig.siteUrl}/programs`,
    type: "website",
  },
};

export default function ProgramsPage() {
  const programsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "APEX FIT Programs",
    itemListElement: programsData.map((program, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: program.title,
        description: program.shortDesc,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.siteUrl,
        },
        url: `${siteConfig.siteUrl}/programs#${program.id}`,
      },
    })),
  };

  // Helper to render Lucide icons dynamically from the program string
  const renderIcon = (iconName: string) => {
    const iconMap = Icons as Record<string, React.ComponentType<{ className?: string }>>;
    const IconComponent = iconMap[iconName];
    if (IconComponent) {
      return <IconComponent className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />;
    }
    return <Icons.Dumbbell className="h-6 w-6 text-primary" />;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(programsJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />

      {/* Header */}
      <section className="relative py-24 md:py-32 bg-[#080808] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 filter brightness-50">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop"
            alt="Workout backdrop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase text-primary font-bold tracking-widest">Our Programs</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-white mt-3 leading-none">
            ENGINEERED TO <span className="text-gradient-neon font-black">OUTPERFORM.</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed font-light">
            We offer 8 scientifically structured disciplines designed to iron out skeletal muscle plateaus, optimize cardiovascular limits, and accelerate cellular recovery.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {programsData.map((program) => (
              <div
                key={program.id}
                id={program.id}
                className="glass-panel group overflow-hidden rounded-3xl border border-white/5 glow-hover transition-transform duration-500 flex flex-col justify-between"
              >
                {/* Header aspect ratio image with linear gradient mask */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-medium via-charcoal-medium/10 to-transparent z-10" />
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 z-20 text-[9px] uppercase tracking-widest bg-black/60 border border-white/15 px-2.5 py-1 rounded-full text-primary font-bold backdrop-blur-md">
                    {program.category}
                  </span>
                </div>

                {/* Content body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Icon + Title */}
                    <div className="flex items-center space-x-3.5">
                      <div className="h-10 w-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center shrink-0">
                        {renderIcon(program.icon)}
                      </div>
                      <h3 className="text-xl font-bold font-display uppercase tracking-wide text-white">
                        {program.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-4">
                      {program.shortDesc}
                    </p>

                    {/* Features list */}
                    <div className="border-t border-white/5 pt-4">
                      <h4 className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-2.5">
                        Key Features
                      </h4>
                      <ul className="space-y-1.5">
                        {program.features.slice(0, 3).map((feat, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-[10px] text-gray-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing/Meta Footer */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[8px] uppercase tracking-wider text-gray-500 font-bold">Burn Target</span>
                      <span className="text-[11px] font-mono text-gray-300 font-bold mt-0.5">{program.calories}</span>
                    </div>
                    
                    <Link
                      href={{
                        pathname: "/contact",
                        query: { subject: program.title },
                      }}
                      className="px-4 py-2.5 border border-primary/30 hover:border-primary/80 bg-primary/10 hover:bg-gradient-neon text-white hover:text-white font-display text-xs uppercase tracking-wider font-extrabold rounded-lg transition-all duration-300 cursor-pointer shadow-sm hover:shadow-neon"
                    >
                      Book Session
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
