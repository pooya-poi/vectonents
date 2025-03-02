"use client";
import { Home as HomeIcon, Compass, Box, Lamp } from "@pooya-poi/vectonents";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Dock, DockIcon } from "../magicui/dock";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { BorderBeam } from "../magicui/border-beam";
import ToggleTheme from "../toggle-theme";

const DATA = {
  navbar: [
    { id: 1, href: "#", icon: HomeIcon, label: "Home" },
    { id: 2, href: "#", icon: Compass, label: "Blog" },
    { id: 3, href: "#", icon: Box, label: "Blog" },
    { id: 4, href: "#", icon: Lamp, label: "Blog" },
    { id: 5, href: "#", icon: Compass, label: "Blog" },
  ],
};

const BottomDock: React.FC = () => {
  return (
    // <div className="fixed bottom-5 flex flex-col items-center justify-center">
    <div className="fixed bottom-5 z-20 w-full ">
      <TooltipProvider>
        <Dock direction="middle" className="bg-zinc-950/10 rounded-full">
      
          {DATA.navbar.map((item) => (
            <DockIcon key={item.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "rounded-full p-6",
                    )}
                  >
                    <item.icon className="size-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          {/* <Separator orientation="vertical" className="h-full" /> */}

          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                {/* <ModeToggle className="rounded-full" /> */}
                <ToggleTheme  variant={"simple"}/>
              </TooltipTrigger>
              
              <TooltipContent>
                <p>Change Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
   
        </Dock>
      </TooltipProvider>
    </div>
  );
};

BottomDock.displayName = "pageWidgets";
export default BottomDock;
