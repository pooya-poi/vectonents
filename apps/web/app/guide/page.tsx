"use client";
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

export default function GuidePage() {
  const customCommandMap = {
    pnpm: "pnpm i @pooya-poi/vectonents",
    npm: "npm i @pooya-poi/vectonents",
    yarn: "yarn add @pooya-poi/vectonents",
  };
  return (
    <div className="container mx-auto mb-56 md:w-3xl max-w-[1920px] space-y-8 p-2">
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
              <Link href="https://www.figma.com/@whale_design" target="_blank">
                Iconicool
                <Image
                  alt="iconcool in figma"
                  src={Iconicool}
                  width={500}
                  height={500}
                  className="rounded-md"
                ></Image>
              </Link>{" "}
            </li>
            <li className="my-2">soon...</li>
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
