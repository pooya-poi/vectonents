import ColorConverter from "@/components/widgets/color-convertor";
import { LoremIpsumGenerator } from "@/components/widgets/lorem-generator";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Vectonents | Tools',
  description:
    "Free and Open-source React icons (SVG). Optimized for Next.js, TypeScript & Tailwind CSS. Perfect for developers building modern web apps. An alternative to Lucide.",
  keywords: [
    "color convertor",
    "advanced color convertor",
    "OKLCH to HEX",
    "HEX to OKLCH",
    "HEX to OKLCH",
    "lorem ipsum generator",

    "react icons",
    "react icons component",
    "free react icons",
    "svg icons react",
    "react icon library",
    "best react icons 2025",

    "vectonents vs lucide",
    "vectonents vs react-icons",
    "alternative to font awesome",

    "lightweight react icons",
    "customizable svg icons",
    "typescript react icons",
    "next.js icon library",
    "tailwind css icons",

    "vectonents",
    "vectonents npm",
    "vectonents github",
    "vectonents documentation",
  ],
};

export default function ToolsPage() {
  return (
    <div className="mb-56">
      <ColorConverter />
      <LoremIpsumGenerator />
    </div>
  );
}
