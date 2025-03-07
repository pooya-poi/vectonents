"use client";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";

/**
 * Variants for the ToggleTheme component styles using class-variance-authority.
 */
const toggleThemeVariants = cva("group", {
  variants: {
    variant: {
      default:
        "border-none shadow-none hover:text-white   dark:hover:data-[state=on]:bg-slate-300 dark:group-hover:text-slate-900 ",
      simple:
        "border-none rounded-full bg-transparent dark:hover:text-white dark:hover:data-[state=on]:text-slate-300 dark:group-hover:text-slate-400 ",
    },
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      "2xl": "rounded-2xl",
      full: "rounded-full",
    },
    size: {
      default: "size-9",
      sm: "size-9 ",
      lg: "size-12",
      icon: "size-9",
    },
  },
});

/**
 * Props for the ToggleTheme component.
 */
interface ToggleThemeProps extends VariantProps<typeof toggleThemeVariants> {
  className?: string;
}

/**
 * ToggleTheme component for switching between light and dark themes.
 *
 * @param {ToggleThemeProps} props - Props for customizing the appearance and behavior of the toggle.
 * @returns {JSX.Element} The ToggleTheme component.
 */
const ToggleTheme = ({
  className,
  variant,
  size,
  rounded,
}: ToggleThemeProps) => {
  const { setTheme } = useTheme();

  return (
    <Toggle
      type="button"
      variant="outline"
      className={cn(toggleThemeVariants({ variant, rounded, size, className }))}
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
    >
      <MoonIcon
        aria-hidden="true"
        className="group-data-[state=on]:text-white-900/80 size-6 shrink-0 scale-0 opacity-0 transition-all group-hover:text-slate-900 group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
      />
      <SunIcon className="absolute size-6 shrink-0 scale-100 opacity-100 drop-shadow-lg transition-all group-hover:text-slate-900 group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0 dark:text-white group-hover:dark:text-slate-900" />
    </Toggle>
  );
};

export default ToggleTheme;
