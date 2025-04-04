"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Check, Copy } from "@pooya-poi/vectonents";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  valueToCopy: string;
}
const CopyButton: React.FC<CopyButtonProps> = (value) => {
  // Handle copy button click
  // State for copied icons (track copied state per icon)
  const [copiedIcons, setCopiedIcons] = useState<{ [key: string]: boolean }>(
    {},
  );
  const handleCopy = async (value: string) => {
    try {
      const textValue = value;
      await navigator.clipboard.writeText(textValue);

      // Update the copied state for the specific icon
      setCopiedIcons((prev) => ({
        ...prev,
        [value]: true,
      }));

      // Reset the copied state after 1.5 seconds
      setTimeout(() => {
        setCopiedIcons((prev) => ({
          ...prev,
          [value]: false,
        }));
      }, 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="disabled:opacity-100"
      onClick={() => handleCopy(value.valueToCopy)}
        aria-label={  copiedIcons[value.valueToCopy] ? "Copied" : "Copy to clipboard"}
        disabled={  copiedIcons[value.valueToCopy]}
    >
      <div
        className={cn(
          "transition-all",
          copiedIcons[value.valueToCopy] ? "scale-100 opacity-100" : "scale-0 opacity-0",
        )}
      >
        <Check className="stroke-emerald-500" size={16} aria-hidden="true" />
      </div>
      <div
        className={cn(
          "absolute transition-all",
          copiedIcons[value.valueToCopy] ? "scale-0 opacity-0" : "scale-100 opacity-100",
        )}
      >
        <Copy size={16} aria-hidden="true" />
      </div>
    </Button>
  );
};

CopyButton.displayName = "pageComponents";
export default CopyButton;
