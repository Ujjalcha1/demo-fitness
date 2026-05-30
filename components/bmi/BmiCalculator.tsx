"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Dumbbell, Apple, Activity, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function BmiCalculator() {
  const [height, setHeight] = useState(175); // cm
  const [weight, setWeight] = useState(70);  // kg
  const [bmi, setBmi] = useState(22.9);
  const [category, setCategory] = useState("Normal");
  const [percent, setPercent] = useState(39.5); // position percentage on scale (15 to 35)

  useEffect(() => {
    const heightInMeters = height / 100;
    const computedBmi = weight / (heightInMeters * heightInMeters);
    const roundedBmi = parseFloat(computedBmi.toFixed(1));
    setBmi(roundedBmi);

    // Calculate percent position on gauge (min 15, max 35)
    let computedPercent = ((roundedBmi - 15) / (35 - 15)) * 100;
    if (computedPercent < 0) computedPercent = 0;
    if (computedPercent > 100) computedPercent = 100;
    setPercent(computedPercent);

    // Determine category
    if (roundedBmi < 18.5) {
      setCategory("Underweight");
    } else if (roundedBmi >= 18.5 && roundedBmi < 25) {
      setCategory("Normal Weight");
    } else if (roundedBmi >= 25 && roundedBmi < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  }, [height, weight]);

  const getRecommendation = () => {
    switch (category) {
      case "Underweight":
        return {
          icon: <Dumbbell className="h-5 w-5 text-sky-400" />,
          title: "Hypertrophy & Lean Bulk Split",
          desc: "Target a biological caloric surplus of +300-500 kcal daily. Focus on heavy compound movements (squats, bench press, deadlifts) with longer rest intervals (2-3 mins) to stimulate myofibrillar growth.",
          color: "border-sky-500/20 bg-sky-500/5 text-sky-400",
        };
      case "Normal Weight":
        return {
          icon: <Sparkles className="h-5 w-5 text-emerald-400" />,
          title: "Body Recomposition Split",
          desc: "Build muscle while shaving remaining fat by eating at caloric maintenance with a high protein split (2g per kg). Focus on intense weight training and moderate high-intensity interval conditioning (HIIT).",
          color: "border-emerald-500/20 bg-emerald-500/5 text-emerald-400",
        };
      case "Overweight":
        return {
          icon: <Activity className="h-5 w-5 text-yellow-400" />,
          title: "Metabolic Conditioning & Fat Shred",
          desc: "Set a healthy caloric deficit of -350-500 kcal. Utilize our metabolic Shred classes, Kettlebell circuits, and finish resistance sessions with 15 mins of incline cardio steady state (LISS).",
          color: "border-yellow-500/20 bg-yellow-500/5 text-yellow-400",
        };
      case "Obese":
      default:
        return {
          icon: <Apple className="h-5 w-5 text-rose-400" />,
          title: "Low-Impact Fat Burn & Nutrition Prep",
          desc: "Safely create a -500 kcal deficit. Focus on joints-friendly strength exercises (machines, cables) paired with low-impact cardio (swimming, elliptical). Consult our Precision Nutrition team for hormone assessments.",
          color: "border-rose-500/20 bg-rose-500/5 text-rose-400",
        };
    }
  };

  const recommendation = getRecommendation();

  return (
    <div className="glass-panel p-6 sm:p-10 rounded-3xl relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />

      <h3 className="text-2xl font-bold font-display uppercase text-white tracking-wider mb-6">
        Precision BMI Calculator
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Sliders Area */}
        <div className="space-y-6">
          {/* Height Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="height-slider" className="text-xs uppercase text-gray-400 font-bold tracking-widest">
                Height
              </label>
              <span className="text-white font-mono font-bold text-sm">
                {height} <span className="text-primary font-sans text-xs">cm</span>
              </span>
            </div>
            <input
              type="range"
              id="height-slider"
              min="120"
              max="220"
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value))}
              className="w-full h-1.5 bg-[#080808] rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex items-center justify-between text-[10px] text-gray-600 mt-1 font-mono">
              <span>120 cm</span>
              <span>170 cm</span>
              <span>220 cm</span>
            </div>
          </div>

          {/* Weight Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="weight-slider" className="text-xs uppercase text-gray-400 font-bold tracking-widest">
                Weight
              </label>
              <span className="text-white font-mono font-bold text-sm">
                {weight} <span className="text-primary font-sans text-xs">kg</span>
              </span>
            </div>
            <input
              type="range"
              id="weight-slider"
              min="40"
              max="150"
              value={weight}
              onChange={(e) => setWeight(parseInt(e.target.value))}
              className="w-full h-1.5 bg-[#080808] rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex items-center justify-between text-[10px] text-gray-600 mt-1 font-mono">
              <span>40 kg</span>
              <span>95 kg</span>
              <span>150 kg</span>
            </div>
          </div>

          {/* Gauge representation */}
          <div className="pt-6">
            <div className="flex items-center justify-between text-[10px] uppercase text-gray-500 font-bold tracking-wider mb-2.5">
              <span>Underweight</span>
              <span>Healthy</span>
              <span>Overweight</span>
              <span>Obese</span>
            </div>
            
            {/* Color Line Bar */}
            <div className="h-2 w-full bg-gradient-to-r from-sky-500 via-emerald-500 via-yellow-500 to-rose-500 rounded-full relative">
              {/* Sliding needle tick */}
              <div
                className="absolute top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-white border-2 border-charcoal-medium shadow-neon flex items-center justify-center -translate-x-1/2 transition-all duration-300"
                style={{ left: `${percent}%` }}
              >
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] text-gray-600 mt-2 font-mono">
              <span>BMI 15</span>
              <span>18.5</span>
              <span>25.0</span>
              <span>30.0</span>
              <span>BMI 35</span>
            </div>
          </div>
        </div>

        {/* Calculation Result & Advice */}
        <div className="flex flex-col justify-between">
          <div className="glass-panel p-6 rounded-2xl bg-black/40 border-white/5 relative overflow-hidden flex items-center space-x-6">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">
                Computed Body Mass Index
              </span>
              <span className="text-4xl sm:text-5xl font-black font-display text-white mt-1">
                {bmi}
              </span>
            </div>
            
            <div className="h-px w-10 bg-white/10 rotate-90 hidden sm:block" />

            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">
                Biological Status
              </span>
              <span
                className={`text-xl font-bold font-display uppercase mt-1 tracking-wider ${
                  category === "Underweight"
                    ? "text-sky-400"
                    : category === "Normal Weight"
                    ? "text-emerald-400"
                    : category === "Overweight"
                    ? "text-yellow-400"
                    : "text-rose-400"
                }`}
              >
                {category}
              </span>
            </div>
          </div>

          {/* Advice card */}
          <div className={`mt-6 p-5 border rounded-2xl ${recommendation.color}`}>
            <div className="flex items-center space-x-2.5 mb-2">
              {recommendation.icon}
              <h4 className="font-bold text-sm uppercase tracking-wider">{recommendation.title}</h4>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">{recommendation.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
