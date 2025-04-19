// "use client";
import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import Iconicool from "../../public/images/iconicool-figma.png";
import PersianBrands from "../../public/images/400-persian-brands.png";
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Vectonents | Guide page',
  description:
    "Free and Open-source React icons (SVG). Optimized for Next.js, TypeScript & Tailwind CSS. Perfect for developers building modern web apps. An alternative to Lucide.",
  keywords: [
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

export default function GuidePage() {
  const customCommandMap = {
    pnpm: "pnpm i @pooya-poi/vectonents",
    npm: "npm i @pooya-poi/vectonents",
    yarn: "yarn add @pooya-poi/vectonents",
  };
  return (
    <div className="container mx-auto mb-56 max-w-[1920px] space-y-8 p-2 md:w-3xl">
      {/* what is */}
      <Card>
        <CardHeader className="font-bold">What is Vectonent?</CardHeader>
        <CardContent>
          Vectonents is an open-source icon library that provides vector files
          for displaying icons in your projects. This library aims to make it
          easier for you to use icons into your projects by the provided
          package.
        </CardContent>
      </Card>
      {/* how to use */}
      <Card>
        <CardHeader className="font-bold">How to use Vectonent?</CardHeader>
        <CardContent>
          To use Vectonent, you can install the package using pnpm, yarn or
          other package manager. Once installed, you can import the icons you
          need and use them in your project. The icons are available in two
          variants, including outliend and filled.
        </CardContent>
        <CardFooter>
          <ScriptCopyBtn
            showMultiplePackageOptions={true}
            codeLanguage="shell"
            // lightTheme="nord"
            darkTheme="vitesse-dark"
            lightTheme="github-light"
            commandMap={customCommandMap}
          />
        </CardFooter>
      </Card>
      {/* source of the icons */}
      <Card>
        <CardHeader className="font-bold">Our Sources for icons?</CardHeader>
        <CardContent>
          For this library, we have used the following sources for icons:
          <ul className="list-disc pl-4">
            <li className="my-2">
              <Link
                className="text-indigo-500"
                href="https://www.figma.com/@whale_design"
                target="_blank"
              >
                Iconicool
                <Image
                  alt="iconcool in figma"
                  src={Iconicool}
                  width={500}
                  height={500}
                  className="rounded-md"
                ></Image>
              </Link>
            </li>
            <li className="my-2">
              <Link
                href="https://www.figma.com/community/file/1455474071182501105"
                target="_blank"
                className="text-indigo-500"
              >
                400 Persian Brands- v1.0
                <Image
                  alt="400 Persian Brands"
                  src={PersianBrands}
                  width={500}
                  height={500}
                  className="rounded-md"
                ></Image>
              </Link>
            </li>
            <li className="my-2">
              <Link
                className="text-indigo-500"
                href="https://icons8.com/"
                target="_blank"
              >
                Icons8
              </Link>
            </li>
            <li className="my-2">the internet</li>
          </ul>
        </CardContent>
      </Card>
      {/* packages */}
      <Card>
        <CardHeader className="font-bold">Contribute</CardHeader>
        <CardContent>soon...</CardContent>
      </Card>
    </div>
  );
}
