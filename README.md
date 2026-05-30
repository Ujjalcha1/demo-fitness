# 🔥 APEX FIT Strength Club

> **APEX FIT** is a high-performance, premium digital platform designed for an elite strength training club and fitness center in Beverly Hills. Built using cutting-edge technologies like Next.js 16 and Tailwind CSS v4.

---

## 🚀 Badges & Technologies

![Next.js](https://img.shields.io/badge/next.js-v16.2.6-%23000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/react-v19.2.4-%23202327.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-v4.0.0--beta-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-v5.0.0-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-v12.40.0-%23FF007F.svg?style=for-the-badge&logo=framer&logoColor=white)
![Lenis](https://img.shields.io/badge/Smooth_Scroll-Lenis-orange?style=for-the-badge)

---

## ✨ Features

- **🏋️ Energetic Gym Video Hero:** Features a cinematic looping stock workout video overlay set against a dark obsidian layout with neon highlights.
- **📊 Real-time Stats Counter:** Counts active members, elite master coaches, calories melted, and successful body recompositions as they enter the viewport.
- **🛡️ Custom Before/After Comparison Slider:** Interactive drag-to-reveal slider allowing users to compare client transformation photos side-by-side.
- **🔢 Interactive BMI Calculator:** Multi-mode body metrics tool providing instant Body Mass Index calculations and corresponding workout suggestions.
- **📋 Elite Battleground Programs:** Dynamic showcases covering strength blocks, functional hypertrophy, extreme cardio, and recovery tiers.
- **🎙️ Master Coaches Roster:** Clean overlay cards showing elite trainers' bios, roles, credentials, and specialties with smooth neon border hover glows.
- **💬 FAQ Accordion Toggle:** Interactive accordion container to address common gym memberships and scheduling questions.
- **🟢 WhatsApp Contact Integration:** Floating quick-chat contact bubble ensuring instant, mobile-friendly communications.

---

## 🛠️ Tech Stack & Key Libraries

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Next-generation server rendering, page pre-rendering and routing. |
| **Library** | [React 19](https://react.dev/) | State-driven UI updates. |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & `@tailwindcss/postcss` | Utility-first next-gen CSS compiler, fluid neon colors, and modern classes. |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Smooth card pop-overs, slide disclosures, and interactive hover effects. |
| **Scroller** | [Lenis](https://lenis.darkroom.engineering/) | Inertial smooth scrolling for premium visual consistency. |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, lightweight vectorized fitness icons. |

---

## 📂 Project Structure

```text
apex-fitness/
├── app/                  # Next.js App Router root
│   ├── globals.css       # Core styling setup with Tailwind v4 imports and custom animation keys
│   ├── layout.tsx        # HTML wrapping logic
│   ├── page.tsx          # Landing Page rendering all core sections
│   └── favicon.ico       # Fitness icon asset
├── components/           # Custom React Components
│   ├── bmi/              # Body Mass Index interactive components
│   │   └── BmiCalculator.tsx # Metric and imperial calculation UI
│   ├── home/             # Sections and sliders
│   │   └── BeforeAfterSlider.tsx # Drag-to-reveal image comparison component
│   └── shared/           # Shared modules (Navbar, Footer, Counter, WhatsAppFloat)
├── data/                 # Static datasets
│   ├── faq.ts            # FAQ questions & answers
│   ├── programs.ts       # Strength programs details & intensity scores
│   └── trainers.ts       # Coaches bios, specialties, and pictures
└── public/               # Static assets & public images
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version `18+` recommended).

### Installation

Clone the repository and install all dependencies:

```bash
# Install dependencies
npm install
```

### Running Locally

To spin up the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience APEX FIT.

### Build and Production

To build the application for production:

```bash
npm run build
```

To run the built production bundle:

```bash
npm run start
```
