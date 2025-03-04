import {
  Flame,
  Home,
  Lock,
  Image,
  Sun,
  Bell,
  Magnifier,
  VolumeDown,
  BatteryMedium,
  Watch,
  Star,
  Heart,
  Camera,
  MusicNote,
  Trash,
  Bookmark,
  Calendar,
  Unlock,
  Sort,
  AirpodCase,
  Archive,
  Book,
  Alarm,
} from "@pooya-poi/vectonents";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Slider } from "../ui/slider";
import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { BorderBeam } from "../magicui/border-beam";
import { Play, SkipBack, SkipForward } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const icons = [
  { id: 1, name: "Flame", icon: <Flame /> },
  { id: 2, name: "Home", icon: <Home /> },
  { id: 3, name: "Lock", icon: <Lock /> },
  { id: 4, name: "Image", icon: <Image /> },
  { id: 5, name: "Sun", icon: <Sun /> },
  { id: 6, name: "Bell", icon: <Bell /> },
  { id: 7, name: "Magnifier", icon: <Magnifier /> },
  { id: 8, name: "VolumeDown", icon: <VolumeDown /> },
  { id: 9, name: "BatteryMedium", icon: <BatteryMedium /> },
  { id: 10, name: "Watch", icon: <Watch /> },
  { id: 11, name: "Watch", icon: <Watch /> },
  { id: 12, name: "Star", icon: <Star /> },
  { id: 13, name: "Heart", icon: <Heart /> },
  { id: 14, name: "Camera", icon: <Camera /> },
  { id: 15, name: "Unlock", icon: <Unlock /> },
  { id: 16, name: "Sort", icon: <Sort /> },
  { id: 17, name: "AirpodCase", icon: <AirpodCase /> },
  { id: 18, name: "Archive", icon: <Archive /> },
  { id: 19, name: "Book", icon: <Book /> },
  { id: 20, name: "Alarm", icon: <Alarm /> },
  { id: 21, name: "Trash", icon: <Trash /> },
  { id: 22, name: "MusicNote", icon: <MusicNote /> },
  { id: 23, name: "Bookmark", icon: <Bookmark /> },
  { id: 24, name: "Calendar", icon: <Calendar /> },
];

const IconSample: React.FC = () => {
  const [size, setSize] = useState([30]); // Default size is 25
  const [variants, setVariants] = useState<"filled" | "outlined">("filled"); // Default variant is filled
  const [color, setColor] = useState("text-white"); // Default color is white
  const theme = useTheme();
  // Track if the theme is dark or light
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    const updateColorAndTheme = () => {
      // Check if dark theme is enabled
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkTheme(isDark);

      // Set color based on the theme
      if (isDark) {
        setColor("text-white"); // Dark theme, use white text
      } else {
        setColor("text-zinc-800"); // Light theme, use zinc color
      }
    };

    // Run on initial render
    updateColorAndTheme();

    // Listen for theme changes (light or dark)
    const observer = new MutationObserver(() => {
      updateColorAndTheme();
    });

    // Observe changes in the root element for class changes (theme change)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="border-t py-15 dark:bg-zinc-950">
      <Card className="relative mx-auto flex w-fit flex-col overflow-hidden rounded-xs border">
        <CardHeader className="text-center">
          <CardTitle className="font-rasgen tracking-wide">
            Customization
          </CardTitle>
          <CardDescription>
            Change color, size, and variant of the icon
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex w-full flex-col gap-y-5 px-5 py-2 lg:w-1/2">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <Label className="leading-6">Size</Label>
                <output className="text-sm font-medium tabular-nums">
                  {size[0]}
                </output>
              </div>
              <Slider
              
                value={size}
                min={16}
                max={50}
                onValueChange={setSize}
                aria-label="Slider with output"
              />
            </div>

            <div className="[--ring:var(--color-indigo-300)] *:not-first:mt-2 in-[.dark]:[--ring:var(--color-indigo-900)]">
              <Label htmlFor={"variants"}>Select variants</Label>
              <Select
                defaultValue="filled"
                onValueChange={(value) =>
                  setVariants(value as "filled" | "outlined")
                }
              >
                <SelectTrigger id={"variants"}>
                  <SelectValue placeholder="Select variant" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="filled">Filled</SelectItem>
                  <SelectItem value="outlined">Outlined</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="[--ring:var(--color-indigo-300)] *:not-first:mt-2 in-[.dark]:[--ring:var(--color-indigo-900)]">
              <Label htmlFor={"color"}>Color</Label>
              <Select
                value={color} // Set color to the current dynamic value
                onValueChange={(value) => setColor(value)}
              >
                <SelectTrigger id={"color"}>
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value={
                      theme.theme == "dark" ? "text-white" : "text-zinc-800"
                    }
                  >
                    {theme.theme == "dark" ? "white" : "zinc"}
                  </SelectItem>
                  <SelectItem value="text-amber-500">amber</SelectItem>
                  <SelectItem value="text-sky-500">sky</SelectItem>
                  <SelectItem value="text-rose-600">rose</SelectItem>
                  <SelectItem value="text-emerald-600">emerald</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TooltipProvider>
            <div className="grid grid-cols-6 content-between justify-items-center gap-1">
              {icons.map((icon) => (
                <div
                  key={icon.id}
                  // className="m-[3px] flex h-12 w-12 items-center justify-center rounded-md bg-zinc-900/5 dark:bg-zinc-900/80"
                  className="flex h-12 w-12 items-center justify-center bg-zinc-900/5 lg:mx-2 dark:bg-zinc-900/80 [:nth-child(1)]:rounded-tl-md [:nth-child(19)]:rounded-bl-md [:nth-child(24)]:rounded-br-md [:nth-child(6)]:rounded-tr-md"
                >
                  <Tooltip>
                    <TooltipTrigger>
                      <div style={{ fontSize: size[0] }}>
                        {React.cloneElement(icon.icon, {
                          variants,
                          size: size[0],
                          className: color,
                        })}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={15}>
                      <p>{icon.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              ))}
            </div>
          </TooltipProvider>
        </CardContent>
        <BorderBeam
          duration={6}
          size={400}
          className="from-transparent via-pink-500 to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          className="from-transparent via-indigo-500 to-transparent"
        />
      </Card>
    </div>
  );
};

IconSample.displayName = "IconSample";
export default IconSample;
