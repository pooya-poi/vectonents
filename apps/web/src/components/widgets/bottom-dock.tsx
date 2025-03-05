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
    <div className="fixed bottom-5 z-20 w-full px-2">
      <TooltipProvider>
        <Dock
          direction="middle"
          className="h-14 w-full rounded-full bg-zinc-950/10 py-8 lg:w-96"
        >
          {DATA.navbar.map((item) => (
            <DockIcon key={item.id} className="flex">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "flex flex-col justify-center rounded-full p-6",
                    )}
                  >
                    <item.icon className="size-6" />
                    <span className="text-[12px] font-light lg:hidden">
                      {item.label}
                    </span>
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
                <ToggleTheme variant={"simple"} />
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
