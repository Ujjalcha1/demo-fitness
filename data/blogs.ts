export interface BlogPost {
  id: string;
  title: string;
  category: 'Training' | 'Nutrition' | 'Recovery' | 'Cardio';
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  summary: string;
  content: string;
  image: string;
}

export const blogsData: BlogPost[] = [
  {
    id: "progressive-overload-blueprint",
    title: "The Progressive Overload Blueprint: How to Force Constant Muscle Growth",
    category: "Training",
    date: "May 18, 2026",
    author: {
      name: "Marcus Vance",
      avatar: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=100&auto=format&fit=crop"
    },
    readTime: "6 Min Read",
    summary: "Stop repeating the exact same weight and reps week after week. Learn the exact biological mechanisms of mechanical tension and progressive overload to trigger steady strength and hypertrophy gains.",
    content: "Progressive overload is the most critical law of muscular hypertrophy. Your body will not build new muscle tissue unless it is forced to adapt to a physical stimulus it has never encountered before. If you bench press 80kg for 8 reps every week, your chest has no biological reason to grow larger or stronger. You must increase the total volume (weight x reps x sets), adjust the mechanical tension, or decrease the rest times to consistently demand biological adaptations. Focus on tracking your compound lifts in a logbook and aim to add either 1 rep or 2.5kg of load in every single session.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "macronutrient-mastery",
    title: "Macronutrient Mastery: Fueling the Aesthetic Physique",
    category: "Nutrition",
    date: "May 14, 2026",
    author: {
      name: "Elena Rostova",
      avatar: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=100&auto=format&fit=crop"
    },
    readTime: "8 Min Read",
    summary: "Calories control your weight, but macronutrients govern your body composition. Learn how to calculate and balance your proteins, carbs, and fats to fuel intense athletic training while shredding adipose fat.",
    content: "While a caloric deficit or surplus dictates whether you lose or gain weight, your macro split determines whether that weight comes from fat or muscle. Protein is the foundational building block of cellular repair; you should target 1.6g to 2.2g of protein per kilogram of bodyweight to trigger muscle protein synthesis. Carbohydrates are the primary fuel for high-intensity anaerobic lifting; do not fear them, but time them around your workouts to maximize glycogen replenishment and muscle fullness. Fats govern your entire endocrine system and hormone production; ensure healthy fats represent at least 20% of your total energy intake.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "sleep-science-recovery",
    title: "The Silent Growth Hormone: Science of Sleep & Neural Recovery",
    category: "Recovery",
    date: "May 10, 2026",
    author: {
      name: "Marcus Vance",
      avatar: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=100&auto=format&fit=crop"
    },
    readTime: "5 Min Read",
    summary: "You do not grow in the gym; you grow in your sleep. Learn how deep sleep cycles trigger massive growth hormone release and repair the central nervous system after demanding mechanical stress.",
    content: "Training breaks down muscle fibers; sleep is the absolute phase where they are super-compensated. During Stage 3 and 4 of non-REM deep sleep, blood supply to muscles increases, tissue growth occurs, and massive pulses of Natural Growth Hormone (hGH) are released by the pituitary gland. Chronic sleep deprivation elevates cortisol levels, which breaks down muscle tissue (catabolism), reduces insulin sensitivity, and severely impairs motor unit recruitment. Aim for 7.5 to 9 hours of quality sleep, keep your room completely pitch black, and avoid blue screens for 60 minutes before hitting the mattress.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "hiit-vs-liss-cardio",
    title: "HIIT vs. LISS: The Cardio Showdown for Rapid Fat Shredding",
    category: "Cardio",
    date: "May 05, 2026",
    author: {
      name: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=100&auto=format&fit=crop"
    },
    readTime: "7 Min Read",
    summary: "Should you sprint until your lungs burn or walk at a steady incline? We dissect the physiological differences between high-intensity intervals and low-intensity steady-state cardio.",
    content: "Both High-Intensity Interval Training (HIIT) and Low-Intensity Steady-State (LISS) cardio burn fat, but they utilize entirely different metabolic pathways. HIIT triggers excess post-exercise oxygen consumption (EPOC), raising your metabolic rate for hours after you leave the gym, and preserves muscle mass by engaging fast-twitch muscle fibers. However, it places high structural demand on the central nervous system. LISS (like incline walking) utilizes fat directly as its primary energy source during the activity, requires zero recovery resources, and is incredibly gentle on joints. For optimal results, utilize a structured combination of both.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop"
  }
];
