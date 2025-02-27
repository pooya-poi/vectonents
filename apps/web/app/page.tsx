"use client";
import Logo from "@/components/logo";
import ToggleTheme from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home as HomeIcon, Compass, Box, Lamp } from "@pooya-poi/vectonents";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { AuroraBackground } from "@/components/aceternity/aurora-background";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <header className="hidden h-12 border-b border-dashed border-gray-700 md:block">
        <nav className="mx-auto flex max-w-7xl justify-between">
          <Link href="/">Logo</Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <ToggleTheme />
      </header>

      {/* mobile Navigation */}
      {/* <div className="fixed z-10 bottom-0 h-14 w-full bg-white/20 backdrop-blur-2xl md:hidden dark:bg-zinc-950/20">
      <svg className=""   viewBox="0 0 571 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M286 0H0V75H571V0H331C331 11.9347 326.259 23.3807 317.82 31.8198C309.381 40.2589 297.935 45 286 45C274.065 45 262.619 40.2589 254.18 31.8198C245.741 23.3807 241 11.9347 241 6.79481e-06L286 0Z" fill="#D9D9D9"/>
</svg>

        <nav>
          <ul className="flex items-center justify-between px-4 pt-1.5 text-xs">
            <li className="flex flex-col items-center">
              <Link href="#" className="flex flex-col items-center">
              <HomeIcon />
              Home
              </Link>
            </li>
            <li className="flex flex-col items-center">
              <Link href="#" className="flex flex-col items-center">
              <Lamp variants="outlined" size={30} />
              Guide
              </Link>
            </li>
            <li className="flex flex-col items-center">
              <Link href="#" className=" border-4 border-black bg-red-400 p-2 -mt-10 rounded-full text-center">
              <Logo className="size-8"/>
              </Link>
            </li>
            <li className="flex flex-col items-center">
              <Link href="#" className="flex flex-col items-center">
              <Box />
              Packages
              </Link>
            </li>
            <li className="flex flex-col items-center">
              <Link href="#" className="flex flex-col items-center">
              <Compass />
              Icons
              </Link>
            </li>
          </ul>
        </nav>
      </div> */}

<AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Background lights are cool you know.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is chemical burn.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>

<div  className="fixed w-full z-10 bottom-5 ">

<Dock iconMagnification={60} iconDistance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Compass />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
         <Box />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
         <Lamp />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
         <HomeIcon />
        </DockIcon>
      </Dock>
</div>

















      {/* hero section */}
      {/*

      <div className="bg-red-400 py-10">
        <h3 className="text-center">Why Vectonents?</h3>
        <div className="flex  flex-wrap justify-center gap-x-28 gap-y-16 ">
          <div className="bg-slate-900 w-60">
            <h4>Performance</h4>
            <p>Optimized for speed and efficiency, Vectonents are lightweight and render quickly. Say goodbye to sluggish icons and hello to snappy, responsive UIs.</p>
          </div>
          <div className="bg-slate-900 w-60">
            <h4>Customization</h4>
            <p>With Vectonents, you’re in control. Easily adjust size, color, stroke, and more using simple props. No more manual tweaking or complex SVG editing.</p>
          </div>
          <div className="bg-slate-900 w-60">
            <h4>Theming</h4>
            <p>Seamlessly integrate Vectonents with your app’s theme. Switch between light and dark modes effortlessly, or create your own custom themes with ease.</p>
          </div>
          <div className="bg-slate-900 w-60">
            <h4>Accessibility</h4>
            <p>Designed with accessibility in mind, Vectonents are screen reader-friendly and meet WCAG standards. Ensure your icons are inclusive and usable by all.</p>
          </div>
          <div className="bg-slate-900 w-60">
            <h4>Pixel-Perfect</h4>
            <p>Enjoy crisp, high-quality vector graphics that scale beautifully on any screen. Say goodbye to blurry, pixelated icons and hello to sharp, clear visuals.</p>
          </div>
          <div className="bg-slate-900 w-60">
            <h4>Developer-Friendly</h4>
            <p>Developed by developers, for developers. Vectonents are easy to use, easy to customize, and easy to love. Elevate your React apps with Vectonents today!</p>
          </div>
        </div>
      </div> */}

      {/* hero section */}
      <div className="relative flex h-[100vh] w-full flex-col justify-center gap-x-5 px-5 lg:flex-row lg:items-center">
        {/* background */}
        {/* <div className="absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
        {/* Logo */}
        <div className="mx-5 flex items-center justify-center self-center">
          <div className="transform-flat">
            <div className="translate-z-12 rotate-x-25 -rotate-z-25 transition ease-in-out transform-3d hover:rotate-x-0 hover:rotate-z-0">
              <Logo className="size-60 lg:size-80" />
            </div>
          </div>
        </div>
        {/* texts */}
        <div className="self-center px-5 text-center">
          <h1 className="font-rasgen bg-gradient-to-r from-indigo-300 to-pink-400 bg-clip-text text-center text-4xl text-transparent lg:text-7xl">
            Vectonents
          </h1>
          <h2 className="font-rasgen mt-5 text-lg font-bold lg:text-3xl">
            <span className="bg-gradient-to-r from-indigo-300 to-pink-400 bg-clip-text underline">
              Lightweight
            </span>{" "}
            & <span className="underline">Customizable</span> React SVG Icon
            Components
          </h2>
          <p className="text-center text-base lg:text-lg">
            Elevate your React apps with Vectonents – a sleek library of SVG
            icon components designed for performance and flexibility.
            <span className="hidden text-justify md:block">
              Enjoy crisp, scalable vector graphics, effortless customization
              via props (size, color, className), and seamless theming. Built
              for developers who value clean code, accessibility, and
              pixel-perfect visuals. Perfect for modern UIs.
            </span>
          </p>
          <Button className="mt-5">Get Started 🚀</Button>
        </div>
      </div>

      {/* why vectonents section */}
      <div className="h-96 w-full bg-emerald-500">
        <h2>why vectonents</h2>
        <div className="flex"></div>
      </div>
      {/* icon samples section */}
      <div className="h-96 w-full bg-orange-400">why vectonents</div>

      <footer className="mb-14 flex w-full items-center justify-center bg-zinc-950 md:mb-0">
        <p>All rights reserved for Vectonents © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
