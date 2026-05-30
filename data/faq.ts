export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    id: "guest-pass",
    question: "Do you offer guest passes or trial memberships?",
    answer: "Yes, we offer an exclusive Free 3-Day All-Access Pass for first-time local residents. This allows you to experience our strength floors, metabolic group classes, and locker room amenities. You can book your free trial directly via our website using the 'Book Free Trial' modal button.",
    category: "General"
  },
  {
    id: "membership-contract",
    question: "Are your memberships locked into long-term contracts?",
    answer: "No, we offer flexible month-to-month memberships for absolute freedom. However, if you choose our annual commitment plans, you save up to 20% on monthly rates. You can manage, freeze, or cancel your subscription anytime via your Premium User Dashboard.",
    category: "Billing"
  },
  {
    id: "personal-trainer",
    question: "How do I get matched with a personal trainer?",
    answer: "When you join APEX FIT, you receive a complimentary 60-minute biomechanics and body composition consultation. Based on your specific physical targets, metabolic profile, and movement preferences, we match you with a master trainer whose specialty perfectly aligns with your goals.",
    category: "Coaching"
  },
  {
    id: "multi-location",
    question: "Can I access all APEX FIT locations globally?",
    answer: "Yes! Our 'Pro' and 'Elite' membership tiers include universal passport privileges, allowing you to scan in and train at any of our state-of-the-art facilities worldwide without any additional surcharges.",
    category: "General"
  },
  {
    id: "parking-facilities",
    question: "Do you have secure parking and premium locker amenities?",
    answer: "Absolutely. All locations feature complimentary, secure multi-level parking for members. Our luxury lockers are equipped with digital locks, fresh towels, premium vanity products, rainfall showers, and access to our dry sauna and steam recovery rooms.",
    category: "Facilities"
  },
  {
    id: "age-requirement",
    question: "What is the minimum age requirement to train?",
    answer: "The minimum age to train independently on our strength floors is 16 years. Teens aged 14-15 may train when accompanied by an active parent or participating in our highly structured Elite Youth Athletic coaching blocks.",
    category: "General"
  }
];
