export const siteConfig = {
  name: "APEX FIT",
  siteUrl: "https://apex-fit.com",
  title: "APEX FIT | Premium Fitness Gym, CrossFit & Personal Training",
  description:
    "APEX FIT is a premium Beverly Hills fitness gym for strength training, CrossFit, fat-loss transformation, private coaching, and recovery-focused performance programs.",
  locale: "en_US",
  contactEmail: "info@apex-fit.com",
  phone: "+13105550199",
  address: {
    streetAddress: "100 Luxury Avenue, Ground Floor",
    addressLocality: "Beverly Hills",
    addressRegion: "CA",
    postalCode: "90210",
    addressCountry: "US",
  },
} as const;

export const publicRoutes = [
  "/",
  "/about",
  "/programs",
  "/trainers",
  "/pricing",
  "/gallery",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
  "/sitemap",
] as const;
