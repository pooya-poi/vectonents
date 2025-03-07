"use client";
import * as icons from "@pooya-poi/vectonents";
import json from "./icons.json";
import Fuse from "fuse.js";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Footer from "@/components/blocks/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Debounce function
function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default function Home() {
  const iconEntries = Object.entries(icons);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // State for visible icons (lazy loading)
  const [visibleIcons, setVisibleIcons] = useState<[string, any][]>([]);

  // State for selected tags and categories
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // State for copied icons (track copied state per icon)
  const [copiedIcons, setCopiedIcons] = useState<{ [key: string]: boolean }>(
    {},
  );

  // Ref for the observer
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Fuse.js instance (created once)
  const fuse = useMemo(
    () =>
      new Fuse(iconEntries, {
        keys: ["0"], // Search by the icon name (first element of the tuple)
        includeScore: true,
        threshold: 0.3, // Adjust the threshold for fuzzy search
      }),
    [iconEntries],
  );

  // Calculate counts for tags and categories
  const tagCounts: { [key: string]: number } = {};
  const categoryCounts: { [key: string]: number } = {};

  json.icons.forEach((icon) => {
    icon.tag.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
    icon.category.forEach((category) => {
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });
  });

  // Extract unique tags and categories from JSON
  const allTags = Array.from(new Set(json.icons.flatMap((icon) => icon.tag)));
  const allCategories = Array.from(
    new Set(json.icons.flatMap((icon) => icon.category)),
  );

  // Filter icons based on search query, tags, and categories (memoized)
  const filteredIcons = useMemo(() => {
    return iconEntries.filter(([name]) => {
      const iconData = json.icons.find((icon) => icon.name === name);

      // Filter by search query
      const matchesSearch = searchQuery
        ? fuse.search(searchQuery).some((result) => result.item[0] === name)
        : true;

      // Filter by tags (logical OR: match any selected tag)
      const matchesTags =
        selectedTags.length > 0
          ? selectedTags.some((tag) => iconData?.tag.includes(tag))
          : true;

      // Filter by categories (logical OR: match any selected category)
      const matchesCategories =
        selectedCategories.length > 0
          ? selectedCategories.some((category) =>
              iconData?.category.includes(category),
            )
          : true;

      return matchesSearch && matchesTags && matchesCategories;
    });
  }, [searchQuery, selectedTags, selectedCategories, fuse, iconEntries]);

  // Debounced search handler
  const handleSearch = useCallback(
    debounce((query: string) => {
      setSearchQuery(query);
    }, 300),
    [],
  );

  // Lazy loading with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const iconName = entry.target.getAttribute("data-icon-name");
            if (iconName) {
              // Add the icon to the visible icons list
              setVisibleIcons((prev) => {
                const icon = filteredIcons.find(([name]) => name === iconName);
                return icon && !prev.some(([name]) => name === iconName)
                  ? [...prev, icon]
                  : prev;
              });
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the icon is visible
      },
    );

    observerRef.current = observer;

    // Observe all icon placeholders
    const placeholders = document.querySelectorAll(".icon-placeholder");
    placeholders.forEach((placeholder) => observer.observe(placeholder));

    // Cleanup observer on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [filteredIcons]);

  const iconVariants: { [key: string]: string[] } = {
    ArrowDown: ["filled", "outlined", "filled-1", "outlined-1"],
    Sort: ["filled", "outlined", "filled-1", "outlined-1"],
    AirpodCase: ["filled", "outlined", "filled-1", "outlined-1"],
    Speaker: ["filled", "outlined", "filled-1", "outlined-1"],
    Watch: ["filled", "outlined", "filled-r", "outlined-r"],
    Document: [
      "filled",
      "filled-1",
      "filled-2",
      "filled-3",
      "outlined",
      "outlined-1",
      "outlined-2",
      "outlined-3",
    ],
    Brush: ["filled", "filled-1", "outlined", "outlined-1"],
    Crop: ["filled", "filled-1", "outlined", "outlined-1"],
    Chat: [
      "filled",
      "filled-1",
      "filled-2",
      "outlined",
      "outlined-1",
      "outlined-2",
    ],
    Filter: [
      "filled",
      "filled-1",
      "filled-2",
      "outlined",
      "outlined-1",
      "outlined-2",
    ],
    Menu: [
      "filled",
      "filled-1",
      "filled-2",
      "outlined",
      "outlined-1",
      "outlined-2",
    ],
    Grid: [
      "filled",
      "filled-1",
      "filled-2",
      "filled-3",
      "filled-4",
      "filled-5",
      "filled-6",
      "filled-7",
      "outlined",
      "outlined-1",
      "outlined-2",
      "outlined-3",
      "outlined-4",
      "outlined-5",
      "outlined-6",
      "outlined-7",
    ],
  };

  // Handle tag selection
  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  // Handle copy button click
  const handleCopy = async (iconName: string) => {
    try {
      const iconText = `<${iconName} />`;
      await navigator.clipboard.writeText(iconText);

      // Update the copied state for the specific icon
      setCopiedIcons((prev) => ({
        ...prev,
        [iconName]: true,
      }));

      // Reset the copied state after 1.5 seconds
      setTimeout(() => {
        setCopiedIcons((prev) => ({
          ...prev,
          [iconName]: false,
        }));
      }, 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="dark:bg-zinc-950">
      {/* Search Input */}
      <div className="sticky top-0 z-10 flex justify-center bg-white py-5 dark:bg-zinc-950">
        <div className="relative w-1/2">
          <Input
            id="searchInput"
            ref={inputRef}
            className="pe-9"
            placeholder="Search icons..."
            type="text"
            defaultValue={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-5 p-5 lg:flex-row">
        {/* Filter Section */}
        <div className="sticky top-16 z-10 h-60 overflow-y-scroll rounded-lg bg-white p-4 lg:top-15 lg:h-full lg:w-1/5 dark:bg-zinc-950">
          <div className="">
            icons: {filteredIcons.length}
            <div className="mt-6">
              <h4>Tags</h4>
              <div className="grid gap-y-5">
                {allTags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 [--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)]"
                  >
                    <Checkbox
                      id={`${tag}-1`}
                      onCheckedChange={() => handleTagChange(tag)}
                    />
                    <Label htmlFor={`${tag}-1`}>
                      {tag} ({tagCounts[tag] || 0})
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="mt-6">
              <h4>Categories</h4>
              <div className="grid gap-y-5">
                {allCategories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center gap-2 [--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)]"
                  >
                    <Checkbox
                      id={`${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => handleCategoryChange(category)}
                    />
                    <Label htmlFor={`${category}`}>
                      {category} ({categoryCounts[category] || 0})
                    </Label>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Icons Grid */}
        <div className="flex flex-wrap justify-center gap-4 overflow-y-scroll px-4 lg:w-full">
          {filteredIcons.map(([name]) => {
            const isVisible = visibleIcons.some(
              ([visibleName]) => visibleName === name,
            );

            return (
              <div
                key={name}
                data-icon-name={name}
                className="icon-placeholder h-fit w-fit rounded-lg border-white bg-gradient-to-br from-zinc-950/8 p-4 text-center dark:from-zinc-900/90"
              >
                {isVisible ? (
                  <>
                    <div className="flex items-center justify-center gap-x-2">
                      <h3 className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text font-bold text-transparent">
                        &lt;{name} /&gt;
                      </h3>

                      <Button
                        id={name}
                        variant="outline"
                        size="icon"
                        className="disabled:opacity-100"
                        onClick={() => handleCopy(name)}
                        aria-label={
                          copiedIcons[name] ? "Copied" : "Copy to clipboard"
                        }
                        disabled={copiedIcons[name]}
                      >
                        <div
                          className={cn(
                            "transition-all",
                            copiedIcons[name]
                              ? "scale-100 opacity-100"
                              : "scale-0 opacity-0",
                          )}
                        >
                          <icons.Check
                            className="stroke-emerald-500"
                            size={16}
                            aria-hidden="true"
                          />
                        </div>
                        <div
                          className={cn(
                            "absolute transition-all",
                            copiedIcons[name]
                              ? "scale-0 opacity-0"
                              : "scale-100 opacity-100",
                          )}
                        >
                          <icons.Copy size={16} aria-hidden="true" />
                        </div>
                      </Button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                      {(iconVariants[name] || ["filled", "outlined"]).map(
                        (variant) => {
                          const IconComponent = icons[
                            name as keyof typeof icons
                          ] as React.ComponentType<{
                            size: number;
                            variants: "filled" | "outlined";
                          }>;

                          return (
                            <div
                              key={variant}
                              className="flex flex-col items-center"
                            >
                              <div style={{ marginBottom: "8px" }}>
                                <IconComponent
                                  size={32}
                                  variants={variant as "filled" | "outlined"}
                                />
                              </div>
                              <div className="text-xs text-white">
                                {variant}
                              </div>
                            </div>
                          );
                        },
                      )}
                    </div>
                  </>
                ) : (
                  // Loading spinner
                  <div>
                    <icons.RetryRefresh
                      className="animate-spin"
                      variants="outlined"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
