"use client";

import WhySection from "@/components/blocks/why-section";
import IconSampleSection from "@/components/blocks/icon-sample-section";
import Footer from "@/components/blocks/footer";
import HeroSection from "@/components/blocks/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Why section */}
      <WhySection />

      {/* icon samples section */}
      <IconSampleSection />

      <Footer />
    </>
  );
}
