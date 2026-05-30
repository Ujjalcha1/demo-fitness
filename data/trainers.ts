export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string[];
  experience: string;
  certifications: string[];
  bio: string;
  quote: string;
  image: string;
  socials: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };
}

export const trainersData: Trainer[] = [
  {
    id: "marcus-vance",
    name: "Marcus \"The Titan\" Vance",
    role: "Head of Strength & Conditioning",
    specialty: ["Hypertrophy", "Powerlifting", "Body Recomposition", "Injury Rehab"],
    experience: "12+ Years",
    certifications: ["CSCS (Certified Strength & Conditioning Specialist)", "NASM-PES", "IKFF Level 2 Kettlebell"],
    bio: "A former competitive powerlifter, Marcus has spent over a decade training elite athletes, executives, and bodybuilding competitors. His philosophy centers around rigid execution, progressive overload, and systematic neural conditioning.",
    quote: "Excuses burn zero calories. Build a frame that lasts.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com"
    }
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Lead HIIT & Metabolic Performance Coach",
    specialty: ["Metabolic Conditioning", "Fat Shredding", "VO2 Max Training", "Athletic Speed"],
    experience: "8+ Years",
    certifications: ["B.Sc. Sports Science", "NASM-CPT", "FMS Level 1 (Functional Movement Screen)"],
    bio: "Sarah is a metabolic specialist dedicated to maximizing caloric afterburn. She designs high-octane conditioning classes that push clients past physical and mental thresholds, utilizing bio-feedback to optimize dynamic recovery.",
    quote: "Your body is a high-performance machine. Fuel it, test it, expand it.",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "kenji-sato",
    name: "Coach Kenji Sato",
    role: "CrossFit & Olympic Weightlifting Specialist",
    specialty: ["Olympic Lifting", "Gymnastics Foundations", "CrossFit WOD Programming", "Core Leverage"],
    experience: "9 Years",
    certifications: ["CrossFit Level 3 Trainer (CF-L3)", "USA Weightlifting Level 2 Coach", "CPR/AED Certified"],
    bio: "Kenji excels at making technical lifts accessible and exceptionally safe. With a deep background in gymnastics and weightlifting, he focuses on spatial awareness, core brace mechanisms, and raw bar speed.",
    quote: "Precision first. Intensity second. Excellence always.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=600&auto=format&fit=crop",
    socials: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Director of Yoga & Athletic Mobility",
    specialty: ["Vinyasa & Yin Yoga", "Myofascial Release", "Posture Correction", "Stress Recovery"],
    experience: "10 Years",
    certifications: ["RYT 500 (Registered Yoga Teacher)", "Myofascial Compression Therapy Certified", "Nutritional Advisor"],
    bio: "Elena specializes in structural longevity and active muscle regeneration. Her immersive sessions balance the mechanical stresses of heavy lifting, helping athletes maintain joint mobility, deep sleep patterns, and mental focus.",
    quote: "Recovery is where the magic happens. Flex the mind to free the body.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  }
];
