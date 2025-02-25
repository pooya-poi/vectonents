"use client"
import Logo from "@/components/logo";
import ToggleTheme from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {



  return (

    <>
      <header className="border-b border-gray-700 border-dashed h-12 pt-3">
        <nav className="flex justify-between mx-auto max-w-7xl">
          <Link href="/">Logo</Link>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>


        <ToggleTheme />

      </header>

      {/* hero section */}
      {/* <div className="flex flex-col gap-y-3 w-full md:h-[100vh] text-center justify-center items-center ">
        <div className="transform-flat">
          <div className="translate-z-12 -rotate-z-25 rotate-x-25 hover:rotate-z-0 hover:rotate-x-0 transition transform-3d ease-in-out ">
            <Logo className='size-44 md:size-72' />
          </div>
        </div>
        <div className="w-1/2">

          <h1 className="text-5xl font-bold font-rasgen text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-400">
            Vectonents
          </h1>
          <h2 className="text-3xl font-bold font-rasgen">
            <span className="underline  bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-400">Lightweight</span> & <span className="underline">Customizable</span> React SVG Icon Components
          </h2>
          <p className="text-lg text-justify">Elevate your React apps with Vectonents – a sleek library of SVG icon components designed for performance and flexibility. Enjoy crisp, scalable vector graphics, effortless customization via props (size, color, stroke), and seamless theming. Built for developers who value clean code, accessibility, and pixel-perfect visuals. Perfect for modern UIs. 🚀 Install once, vectorize everywhere.</p>
          <Button>Get Started</Button>
        </div>
      </div>


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
      <div className="relative w-full flex flex-wrap md:flex-row justify-center gap-x-2 items-center h-[100vh]">
        {/* background */}
        <div className="absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        {/* Logo */}
        <div className=" w-96 h-96 self-center flex items-center justify-center">
          <div className="transform-flat">
            <div className="translate-z-12 -rotate-z-25 rotate-x-25 hover:rotate-z-0 hover:rotate-x-0 transition transform-3d ease-in-out ">
              <Logo className="size-80" />
            </div>
          </div>
        </div>
        {/* texts */}
        <div className="bg-amber-600 w-96 h-96 ">aaa</div>
      </div>
      {/* why vectonents section */}
      <div className="w-full bg-emerald-500 h-96">why vectonents</div>
      {/* icon samples section */}
      <div className="w-full bg-orange-400 h-96">why vectonents</div>

      <footer className=" bg-zinc-950 w-full flex justify-center items-center py-4">
        <p>All rights reserved for Vectonents © {new Date().getFullYear()}</p>
      </footer>


    </>
  );
}


