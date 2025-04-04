"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Color from "colorjs.io";
import cssColorNames from "css-color-names";
import CopyButton from "../copy-button";

type ColorValues = {
  hex: string;
  rgb: string;
  hsl: string;
  oklch: string;
};

export default function ColorConverter() {
  const [inputColor, setInputColor] = useState<string>("#ba59c9");
  const [convertedColors, setConvertedColors] = useState<ColorValues | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const [isP3, setIsP3] = useState<boolean>(false);

  const isInputComplete = (input: string) => {
    // Check if input is a CSS color name
    if (cssColorNames[input.toLowerCase() as keyof typeof cssColorNames])
      return true;

    // Check for complete color patterns
    return (
      /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(input) || // HEX
      /^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/.test(input) || // RGB
      /^hsl\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*\)$/.test(input) || // HSL
      /^oklch\(\s*\d+(\.\d+)?%\s*,\s*\d+(\.\d+)?\s*,\s*\d+(\.\d+)?\s*\)$/.test(
        input,
      ) // OKLCH
    );
  };

  const debounce = (func: Function, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const convertColor = useCallback((value: string) => {
    try {
      // Handle CSS color names by converting them to HEX
      //   if (cssColorNames[value.toLowerCase()]) {
      //     value = cssColorNames[value.toLowerCase()];
      //   }

      const color = new Color(value);

      // Check if color is in P3 gamut
      setIsP3(color.spaceId === "p3");

      // Convert to different color spaces
      const hex = color.to("srgb").toString({ format: "hex" });
      const rgb = color.to("srgb").toString({ format: "rgb" });
      const hsl = color.to("hsl").toString({ format: "hsl" });
      const oklch = color.to("oklch").toString({ precision: 3 });

      setConvertedColors({ hex, rgb, hsl, oklch });
      setError(null);
    } catch (err) {
      console.error("Invalid color input:", err);
      setError(
        "Invalid color format. Please enter a valid color (HEX, RGB, HSL, named color, etc.)",
      );
      setConvertedColors(null);
    }
  }, []);

  const handleDebouncedColorChange = debounce((value: string) => {
    if (isInputComplete(value)) {
      convertColor(value);
    }
  }, 500);

  useEffect(() => {
    handleDebouncedColorChange(inputColor);
  }, [inputColor, handleDebouncedColorChange]);

  function handleColorChange(value: string) {
    setInputColor(value);
  }

  return (
    <div className="mx-auto max-w-[1920px] space-y-8 p-2">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-center font-extrabold tracking-wider">
            Advanced Color Converter
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Label htmlFor="colorInput">
            Enter Color (any CSS-compatible format)
          </Label>
          <Input
            id="colorInput"
            value={inputColor}
            onChange={(e) => handleColorChange(e.target.value)}
            placeholder="#ff0000, rgb(255 0 0), hsl(0 100% 50%), red, oklch(62.8% 0.25 29), etc."
            className="font-mono"
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <div className="flex flex-col items-center justify-between gap-x-10 md:flex-row-reverse">
            <div className="flex flex-col items-center gap-2">
              <div
                className="size-36 flex-shrink-0 rounded-lg border-none"
                style={{ backgroundColor: convertedColors?.hex || inputColor }}
              ></div>
              <span className="text-xs text-muted-foreground">
                {isP3 ? "Display P3" : "sRGB"} color
              </span>
            </div>

            <div className="">
              {convertedColors && (
                <div className="space-y-2">
                  {Object.entries(convertedColors).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2">
                      <CopyButton valueToCopy={value} />
                      <span className="font-black">{key.toUpperCase()}:</span>
                      <span className="font-mono">{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
