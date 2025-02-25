"use client"
import Logo from "@/components/logo";
import ToggleTheme from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowLeft, ArrowRight } from "@pooya-poi/vectonents";
// import styles from "./page.module.css";
import * as icons from "@pooya-poi/vectonents";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {



  return (

    <div>
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
      <div className="flex justify-center mx-auto h-[100vh] ">

        <div className="flex flex-col gap-y-3 text-center justify-center items-center w-1/2">
          <div className="transform-flat">
            <div className="translate-z-12 -rotate-z-25 rotate-x-25 hover:rotate-z-0 hover:rotate-x-0 transition transform-3d ease-in-out ">
              <Logo className='size-80 ' size={200} />
            </div>
          </div>
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



      <footer className="mx-auto max-w-7xl">footer</footer>


    </div>
  );
}


