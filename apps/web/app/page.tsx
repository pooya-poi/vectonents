"use client"
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowLeft, ArrowRight } from "@pooya-poi/vectonents";
// import styles from "./page.module.css";
import * as icons from "@pooya-poi/vectonents";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {


  const { setTheme } = useTheme()

  return (
    // <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
    <div className="bg-red-400 p-5 " >
      {/* hello */}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}


