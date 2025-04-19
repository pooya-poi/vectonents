import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import { Roboto, Vazirmatn } from "next/font/google";
import BottomDock from "@/components/widgets/bottom-dock";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});
const vazir = Vazirmatn({
  subsets: ["latin"],
  variable: "--font-vazir",
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

// export const metadata: Metadata = {
//   title: "Vectonents",
//   description: "Open-source icon library for displaying icons in your projects",
//   keywords: ['icon library', 'React library', 'nextjs library', 'persian icon', 'icon'],
//   siteName
// };
export const metadata: Metadata = {
  title: "Vectonents: Open-source React Icons Library",
  description:
    "Free and Open-source multi variant React icons (SVG). Optimized for Next.js, TypeScript & Tailwind CSS. Perfect for developers building modern web apps. An alternative to Lucide.",
  keywords: [
    "react icons",
    "react icons component",
    "free react icons",
    "svg icons react",
    "react icon library",
    "best react icons 2025",
    "persian icons",

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
  openGraph: {
    title: "Vectonents: Free React Icon Library (Lightweight SVG)",
    description:
      "Icon component for React. Works with Next.js, Tailwind, and TypeScript.",
    url: "https://vectonents-web.vercel.app/",
    siteName: "My Website",
    images: [
      {
        url: "https://vectonents-web.vercel.app/images/og-image.png",
        width: 1200,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vectonents: The Lightweight React Icon Library",
    description:
      "Free, customizable SVG icons for React. Perfect for Next.js projects.",
    images: ["https://vectonents-web.vercel.app/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${vazir.variable} ${roboto.className} `}
    >
      <body className="dark:bg-zinc-950">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <BottomDock />
        </ThemeProvider>
      </body>
    </html>
  );
}
