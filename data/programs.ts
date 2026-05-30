export interface Program {
  id: string;
  title: string;
  category: string;
  duration: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  shortDesc: string;
  longDesc: string;
  features: string[];
  icon: string; // Lucide icon name
  calories: string;
  image: string;
}

export const programsData: Program[] = [
  {
    id: "weight-training",
    title: "Elite Weight Training",
    category: "Strength",
    duration: "45-60 mins",
    intensity: "All Levels",
    shortDesc: "Sculpt, build, and strengthen your physique with high-performance progressive overload training under world-class coaches.",
    longDesc: "Our Elite Weight Training program is the cornerstone of muscular hypertrophy and raw physical power. Whether you are lifting your first barbell or aiming to shatter your personal records, this system focuses on biomechanically optimized compound movements, targeted isolation exercises, and customized tracking worksheets to trigger consistent progressive overload.",
    features: [
      "1-on-1 technique biomechanics assessment",
      "Custom progression sheets",
      "Access to Olympic platform and premium machines",
      "Hypertrophy and strength-focused periodization"
    ],
    icon: "Dumbbell",
    calories: "450-600 kcal",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "crossfit",
    title: "Championship CrossFit",
    category: "Conditioning",
    duration: "60 mins",
    intensity: "Advanced",
    shortDesc: "Vibrant, high-intensity workouts of the day (WOD) combining Olympic lifting, gymnastics, and raw cardiorespiratory endurance.",
    longDesc: "Defy mediocrity in our premium CrossFit arena. Every session delivers an unpredictable, carefully engineered mix of functional power, high-intensity intervals, calisthenics, and loaded carries. This program is tailored to build mental resilience, metabolic flexibility, and a highly functional, athletic body that performs in the real world.",
    features: [
      "Certified Level 3 CrossFit coaches",
      "State-of-the-art Rogue fitness rig and bumper plates",
      "Daily competitive WOD leaderboard tracking",
      "Advanced gymnastics and weightlifting workshops"
    ],
    icon: "Flame",
    calories: "700-900 kcal",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "fat-loss",
    title: "Fat Shred & Melt",
    category: "Weight Loss",
    duration: "45 mins",
    intensity: "All Levels",
    shortDesc: "Accelerate your metabolic rate, melt stubborn body fat, and tone muscles through specialized high-intensity metabolic conditioning.",
    longDesc: "A high-octane program engineered to keep your metabolism elevated for up to 36 hours post-workout. Combining loaded metabolic conditioning with bodyweight complexes and rowing/assault bike intervals, our Shred sessions are designed to burn maximal calories while retaining lean skeletal muscle mass for a toned, defined aesthetic.",
    features: [
      "Heart rate monitor biofeedback integration",
      "EPOC (Afterburn effect) optimization protocols",
      "Interactive weekly body composition analysis",
      "Low impact joints-friendly custom alternatives"
    ],
    icon: "Activity",
    calories: "600-800 kcal",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "yoga",
    title: "Vinyasa & Recovery Yoga",
    category: "Wellness",
    duration: "60 mins",
    intensity: "All Levels",
    shortDesc: "Restore muscular balance, optimize flexibility, and reduce mental stress in an immersive, beautifully lit sensory environment.",
    longDesc: "The ultimate athletic recovery session. Perfect for heavy lifters and busy professionals alike, this class bridges the gap between intense neural drive and parasympathetic relaxation. Flow through dynamic, breath-synchronized vinyasas, targeted deep tissue stretching, and mindfulness exercises that lower cortisol and accelerate muscle regeneration.",
    features: [
      "Immersive sound bath and aromatherapy ambience",
      "Deep static stretching for structural joint longevity",
      "Core stabilization and posture correction",
      "Guided breathwork (Pranayama) and stress reduction"
    ],
    icon: "Wind",
    calories: "200-300 kcal",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "cardio",
    title: "Endurance & HIIT Cardio",
    category: "Conditioning",
    duration: "50 mins",
    intensity: "Intermediate",
    shortDesc: "Increase your cardiovascular threshold and lung capacity with dynamic interval formats on elite treadmills, ski-ergs, and spin bikes.",
    longDesc: "Supercharge your cardiovascular system in our high-energy Cardio zone. Utilizing a premium array of Technogym Skillruns, Concept2 SkiErgs, and air bikes, you will toggle between peak aerobic capacity thresholds and anaerobic recovery zones to expand your lung volume, lower resting heart rate, and fortify athletic endurance.",
    features: [
      "Custom interval coaching playlists and projection screens",
      "VO2 Max estimation and performance tracking",
      "HIIT and Steady-State conditioning formats",
      "Athletic movement drills for agility and speed"
    ],
    icon: "Zap",
    calories: "500-700 kcal",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "personal-training",
    title: "1-on-1 Premium Coaching",
    category: "Individual",
    duration: "Flexible",
    intensity: "All Levels",
    shortDesc: "Unlock your true genetic potential with private, highly bespoke physical coaching, direct accountability, and biological tracking.",
    longDesc: "The apex fitness experience. You are paired with a dedicated master trainer who designs a comprehensive physical, nutritional, and lifestyle roadmap designed exclusively around your anatomy, injuries, and aspirations. Benefit from undivided attention, instant form corrections, absolute accountability, and guaranteed results.",
    features: [
      "Dedicated 24/7 direct messaging access to your coach",
      "Custom workout app portal with personalized demonstration videos",
      "Bi-weekly caliper and 3D body scanning checks",
      "Assigned rehabilitation strategies for joint prehab/rehab"
    ],
    icon: "UserCheck",
    calories: "Variable",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "functional-training",
    title: "Functional Movement & Calisthenics",
    category: "Movement",
    duration: "55 mins",
    intensity: "Intermediate",
    shortDesc: "Develop master-level body control, core stability, and agility utilizing kettlebells, suspension systems, and bodyweight levers.",
    longDesc: "Break free from linear machine boundaries. Functional Movement returns training to fundamental patterns: push, pull, hinge, squat, rotate, and carry. Utilizing kettlebells, sandbags, TRX straps, and gymnastics rings, you will forge a highly resilient core, correct muscle imbalances, and unlock fluid, pain-free movement.",
    features: [
      "Suspended rings and kettlebell specialization zones",
      "Rotational core strength (anti-rotation & power development)",
      "Unilateral balance training to iron out postural deficiencies",
      "Calisthenics foundations (handstands, muscle-ups, levers)"
    ],
    icon: "Shuffle",
    calories: "400-550 kcal",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "nutrition-coaching",
    title: "Precision Nutrition & Meal Design",
    category: "Dietary",
    duration: "Consultation based",
    intensity: "All Levels",
    shortDesc: "Fuel your performance, supercharge recovery, and sustain health with macro-calculated, bio-individual meal design plans.",
    longDesc: "Abs are truly made in the kitchen, but muscle is sustained by precise cellular fueling. Our clinical nutritionists cut through modern media confusion to design a highly practical, culturally relevant, macro-balanced, and calorie-controlled dietary blueprint. Learn to eat for high cognitive drive, muscular fullness, and fat shredding.",
    features: [
      "Macronutrient and micronutrient target sheets tailored to you",
      "Custom cookbook, grocery list checklists, and dining-out guides",
      "Hormonal health, sleep optimization, and hydration markers",
      "Elite supplement protocols backed by clinical research"
    ],
    icon: "Compass",
    calories: "N/A",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop"
  }
];
