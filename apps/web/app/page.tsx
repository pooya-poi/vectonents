// "use client";

import WhySection from "@/components/blocks/why-section";
import IconSampleSection from "@/components/blocks/icon-sample-section";
import Footer from "@/components/blocks/footer";
import HeroSection from "@/components/blocks/hero-section";
import { Metadata } from "next";


// export const metadata: Metadata = {
//   title: "Vectonents: Open-source React Icons Library",
//   description:
//     "Free and Open-source multi variant React icons (SVG). Optimized for Next.js, TypeScript & Tailwind CSS. Perfect for developers building modern web apps. An alternative to Lucide.",
//   keywords: [
//     "react icons",
//     "react icons component",
//     "free react icons",
//     "svg icons react",
//     "react icon library",
//     "best react icons 2025",
//     "persian icons",

//     "vectonents vs lucide",
//     "vectonents vs react-icons",
//     "alternative to font awesome",

//     "lightweight react icons",
//     "customizable svg icons",
//     "typescript react icons",
//     "next.js icon library",
//     "tailwind css icons",

//     "vectonents",
//     "vectonents npm",
//     "vectonents github",
//     "vectonents documentation",
//   ],
 
// };
export const metadata = {
    openGraph: {
      images: [{ url: 'https://vectonents-web.vercel.app/images/og-image.png' }],
    },
  };

export default function Home() {
  return (
    <div className="mb-24">
      <HeroSection />

      {/* Why section */}
      <WhySection />

      {/* icon samples section */}
      <IconSampleSection />

      <Footer />
    </div>
  );
}
