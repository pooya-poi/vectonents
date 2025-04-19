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

export const metadata: Metadata = {
  title: "Vectonents",
  description: "Open-source icon library for displaying icons in your projects",
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
