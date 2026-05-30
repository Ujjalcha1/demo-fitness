export interface Testimonial {
  id: string;
  name: string;
  age: number;
  profession: string;
  program: string;
  resultMetrics: {
    label: string;
    before: string;
    after: string;
  }[];
  testimonial: string;
  duration: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "alex-carter",
    name: "Alex Carter",
    age: 32,
    profession: "Software Architect",
    program: "1-on-1 Premium Coaching",
    resultMetrics: [
      { label: "Body Fat", before: "24%", after: "11%" },
      { label: "Skeletal Muscle", before: "36 kg", after: "41.5 kg" },
      { label: "Deadlift PR", before: "100 kg", after: "185 kg" }
    ],
    testimonial: "APEX FIT completely re-engineered my approach to health. Under Marcus, I didn't just lose fat—I rebuilt my posture, unlocked explosive compound strength, and gained double my energy levels for deep focused work. The luxury aesthetic and high-performance equipment make every session the absolute highlight of my day.",
    duration: "6 Months",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=600&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "jessica-taylor",
    name: "Jessica Taylor",
    age: 28,
    profession: "Creative Director",
    program: "Fat Shred & Melt",
    resultMetrics: [
      { label: "Body Weight", before: "78 kg", after: "61 kg" },
      { label: "Waist Size", before: "34 inches", after: "26 inches" },
      { label: "VO2 Max", before: "32 ml/kg/min", after: "48 ml/kg/min" }
    ],
    testimonial: "The high-intensity metabolic Shred classes are pure magic. The trainers motivate you past what you think is your absolute limit, and the atmosphere feels like an upscale club filled with highly motivated people. In 4 months, I shredded 17kg and reached athletic lung capacity I never thought possible.",
    duration: "4 Months",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "david-miller",
    name: "David Miller",
    age: 41,
    profession: "Managing Director",
    program: "Elite Weight Training",
    resultMetrics: [
      { label: "Resting Heart Rate", before: "74 bpm", after: "56 bpm" },
      { label: "Body Fat", before: "28%", after: "15%" },
      { label: "Lean Muscle", before: "42 kg", after: "46.2 kg" }
    ],
    testimonial: "As an executive, stress was destroying my physical health and sleep. The strength periodization and recovery systems at APEX FIT optimized my hormonal profile. I sleep better, move without back pain, and feel like I'm in the best biological shape of my entire life. Worth every single penny.",
    duration: "8 Months",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop"
  }
];
