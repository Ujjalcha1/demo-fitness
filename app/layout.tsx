import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";
import { siteConfig } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: "%s | APEX FIT",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "gym",
    "fitness gym",
    "Beverly Hills gym",
    "crossfit training",
    "personal training",
    "weight training",
    "fat loss program",
    "yoga recovery",
    "strength and conditioning",
    "nutrition coaching",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "APEX FIT Premium Strength Floor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const rootJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "SportsActivityLocation", "HealthClub"],
      "@id": `${siteConfig.siteUrl}#organization`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      email: siteConfig.contactEmail,
      telephone: siteConfig.phone,
      logo: `${siteConfig.siteUrl}/next.svg`,
      sameAs: [
        "https://instagram.com",
        "https://youtube.com",
        "https://twitter.com",
        "https://facebook.com",
      ],
      address: {
        "@type": "PostalAddress",
        ...siteConfig.address,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}#website`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      inLanguage: "en-US",
      publisher: {
        "@id": `${siteConfig.siteUrl}#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rootJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
