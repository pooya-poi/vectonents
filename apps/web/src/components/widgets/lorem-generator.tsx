"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Activity } from "@pooya-poi/vectonents";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CopyButton from "../copy-button";

const loremTexts = {
  english: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates voluptatum ipsum quis porro libero dolorem minima nesciunt repudiandae, non tenetur, ullam at rem qui, labore inventore velit aliquid vel.`,
  farsi: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.`,
};

const randomTexts = {
  english: `The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump!`,

  farsi: `صفحه اصلی وبسایت خود را با محتوای جذاب پر کنید. این متن نمونه می‌تواند برای تست فونت و طرح‌بندی استفاده شود. طراحی رابط کاربری نیاز به محتوای واقع‌نما دارد.`,
};

export function LoremIpsumGenerator() {
  const [language, setLanguage] = useState<keyof typeof loremTexts>("english");
  const [textType, setTextType] = useState<"lorem" | "random">("lorem");
  const getCurrentText = () => {
    return textType === "lorem" ? loremTexts[language] : randomTexts[language];
  };
  const generateRandomText = () => {
    setTextType("random");
  };

  const generateLoremText = () => {
    setTextType("lorem");
  };

  const currentText = getCurrentText();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center font-extrabold tracking-wider">
          Text Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="w-full md:w-48">
            <Select
              value={language}
              onValueChange={(value) =>
                setLanguage(value as keyof typeof loremTexts)
              }
            >
              <SelectTrigger className="font-vazir">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="farsi" className="font-vazir">
                  فارسی (Persian)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button
              variant={textType === "lorem" ? "default" : "outline"}
              onClick={generateLoremText}
            >
              Lorem Ipsum
            </Button>
            <Button
              variant={textType === "random" ? "default" : "outline"}
              onClick={generateRandomText}
              className="gap-2"
            >
              <Activity className="h-4 w-4" />
              Random Text
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-muted/50 p-4">
          <p
            className="font-vazir leading-relaxed whitespace-pre-wrap"
            dir={["farsi", "arabic"].includes(language) ? "rtl" : "ltr"}
          >
            {getCurrentText()}
          </p>
        </div>
        <CopyButton valueToCopy={currentText} />
      </CardContent>
    </Card>
  );
}
