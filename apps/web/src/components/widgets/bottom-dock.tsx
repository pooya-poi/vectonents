"use client";
import { usePathname } from "next/navigation";
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
import { useIsMobile } from "@/hooks/use-mobile";

const DATA = {
  navbar: [
    { id: 1, href: "/", icon: HomeIcon, label: "Home" },
    { id: 2, href: "/icons", icon: Compass, label: "Icons" },
    { id: 3, href: "/package", icon: Box, label: "Package" },
    { id: 4, href: "/guide", icon: Lamp, label: "Guide" },
    { id: 5, href: "#", icon: Compass, label: "Blog" },
  ],
};

const BottomDock: React.FC = () => {
  const currentPath = usePathname();
  const isMobile = useIsMobile();
  return (
    <div className="fixed bottom-5 z-20 w-full px-2">
      <TooltipProvider>
        <Dock
          iconMagnification={isMobile ? 40 : 55}
          iconDistance={120}
          direction="middle"
          className="h-14 w-full rounded-2xl  py-8 lg:w-96"
        >
          {DATA.navbar.map((item) => (
            <DockIcon key={item.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "relative flex flex-col justify-center rounded-full p-2",
                      currentPath === item.href
                        ? "font-bold text-black backdrop-blur-md dark:text-white"
                        : "",
                    )}
                  >
                    <item.icon
                      variants={
                        currentPath === item.href ? "filled" : "outlined"
                      }
                      size={14}
                      className="size-6 lg:size-8 absolute -top-0"
                    />
                    <span
                      className={`absolute -bottom-1 text-[12px] ${currentPath === item.href ? "font-bold" : "font-light"} lg:hidden`}
                    >
                      {item.label}
                    </span>
                    {currentPath === item.href && (
                      <div className="absolute h-1 w-10 lg:h-2 lg:w-2 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent select-none -bottom-2">
                        0
                      </div>
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
          <ToggleTheme size={"lg"} variant={"simple"} />
            {/* <Tooltip>
              <TooltipTrigger asChild>
                <ToggleTheme variant={"simple"} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Change Theme</p>
              </TooltipContent>
            </Tooltip> */}
          </DockIcon>
          <BorderBeam
            duration={6}
            size={100}
            className="from-transparent via-pink-500 to-transparent"
          />
          <BorderBeam
            duration={6}
            delay={3}
            size={100}
            className="from-transparent via-indigo-500 to-transparent"
          />
        </Dock>
      </TooltipProvider>
    </div>
  );
};

BottomDock.displayName = "pageWidgets";
export default BottomDock;
