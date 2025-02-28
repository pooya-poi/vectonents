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
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Slider } from "../ui/slider";
import { useState } from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import React from "react";

const icons = [
  { id: 1, name: <Flame /> },
  { id: 2, name: <Home /> },
  { id: 3, name: <Lock /> },
  { id: 4, name: <Image /> },
  { id: 5, name: <Sun /> },
  { id: 6, name: <Bell /> },
  { id: 7, name: <Magnifier /> },
  { id: 8, name: <VolumeDown /> },
  { id: 9, name: <BatteryMedium /> },
  { id: 10, name: <Watch /> },
  { id: 11, name: <Watch /> },
  { id: 12, name: <Star /> },
  { id: 13, name: <Heart /> },
  { id: 14, name: <Camera /> },
  { id: 15, name: <Unlock /> },
  { id: 16, name: <Sort /> },
  { id: 17, name: <AirpodCase /> },
  { id: 18, name: <Archive /> },
  { id: 19, name: <Book /> },
  { id: 20, name: <Alarm /> },
  { id: 21, name: <Trash /> },
  { id: 22, name: <MusicNote /> },
  { id: 23, name: <Bookmark /> },
  { id: 24, name: <Calendar /> },
];

const IconSample: React.FC = () => {
  const [size, setSize] = useState([30]); // Default size is 25
  const [variants, setVariants] = useState<"filled" | "outlined">("filled"); // Default variant is filled
  const [color, setColor] = useState("text-white"); // Default variant is filled

  return (
    <div className="border-t bg-zinc-950 py-15">
      <Card className="mx-auto flex w-2xl flex-col rounded-none border">
        <CardHeader className="text-center">
          <CardTitle className="font-rasgen tracking-wide">
            Customiztion
          </CardTitle>
          <CardDescription>
            Change color, size and variant of the icon
          </CardDescription>
        </CardHeader>
        <CardContent className="flex">
          <div className="flex w-1/2 flex-col gap-y-5 px-5 py-2">
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
                  <SelectValue placeholder="Select framework" />
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
                defaultValue="text-white"
                onValueChange={(value) => setColor(value)}
              >
                <SelectTrigger id={"color"}>
                  <SelectValue placeholder="Select framework" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text-white">white</SelectItem>
                  <SelectItem value="text-zinc-800">zinc</SelectItem>
                  <SelectItem value="text-indigo-500">indigo</SelectItem>
                  <SelectItem value="text-red-400">red</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-6 content-between justify-items-center">
            {icons.map((icon) => (
              <div
                key={icon.id}
                className="m-[3px] flex h-12 w-12 items-center justify-center bg-zinc-900/80 [:nth-child(1)]:rounded-tl-md [:nth-child(19)]:rounded-bl-md [:nth-child(24)]:rounded-br-md [:nth-child(6)]:rounded-tr-md"
              >
                {React.cloneElement(icon.name, {
                  variants,
                  size: size[0],
                  className: color,
                })}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

IconSample.displayName = "pageWidgets";
export default IconSample;
