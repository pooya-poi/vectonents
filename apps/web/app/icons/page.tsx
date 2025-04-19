"use client";
import * as icons from "@pooya-poi/vectonents";
import json from "./icons.json";
import Fuse from "fuse.js";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Footer from "@/components/blocks/footer";
import { Input } from "@/components/ui/input";
import CopyButton from "@/components/copy-button";
import iconVariants from "./iconVariants";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// TODO: fix the meta tag, it cause error because its 'use client'


// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'Vectonents | Icons ',
//   description:
//     "Free and Open-source React icons (SVG). Optimized for Next.js, TypeScript & Tailwind CSS. Perfect for developers building modern web apps. An alternative to Lucide.",
//   keywords: [
//     "react icons",
//     "react icons component",
//     "free react icons",
//     "svg icons react",
//     "react icon library",
//     "fill icons",
//     "outline icons",
//     "persian icons",
//     "multi variant icon",

//     "vectonents vs lucide",
//     "vectonents vs react-icons",
//     "alternative to font awesome",

//     "lightweight react icons",
//     "customizable svg icons",
//     "typescript react icons",
//     "next.js icon library",
//     "tailwind css icons",
//   ],
// };




// Debounce function
function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
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
  // State for sidebar filter
  const [openSidebarFilter, setOpenSidebarFilter] = useState<boolean>(false);

  // State for visible icons (lazy loading)
  const [visibleIcons, setVisibleIcons] = useState<[string, any][]>([]);

  // State for selected tags and categories
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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
    [setSearchQuery],
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

  // Handle tag selection

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };
  const handleSidebarFilter = () => {
    setOpenSidebarFilter((setOpenSidebarFilter) => !setOpenSidebarFilter);
  };
  return (
    <div className="dark:bg-zinc-950">
      {/* sidebar filter checkbox */}
      {openSidebarFilter && (
        <div
          className="bg-opacity-40 fixed inset-0 z-20 md:hidden"
          onClick={() => setOpenSidebarFilter(false)}
        />
      )}
      <motion.div
        initial={{ left: "-260px" }}
        animate={{ left: openSidebarFilter ? "0" : "-260px" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`fixed top-0 z-90 block h-full w-56 overflow-y-auto px-4 py-5 backdrop-blur-md md:hidden`}
      >
        <div className="flex justify-end">
          <button onClick={() => setOpenSidebarFilter(false)}>
            <icons.CloseRectangle className="text-zinc-900 dark:text-white" />
          </button>
        </div>
        <div className="h-[90vh] overflow-y-scroll">
          {allTags.map((tag) => (
            <div
              key={tag}
              className="mt-2 flex items-center gap-2 [--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)]"
            >
              <Checkbox
                id={`${tag}-1`}
                checked={selectedTags.includes(tag)}
                onCheckedChange={() => handleTagChange(tag)}
              />
              <Label htmlFor={`${tag}-1`}>
                {tag} ({tagCounts[tag] || 0})
              </Label>
            </div>
          ))}
        </div>
      </motion.div>

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
        <div className="flex justify-end md:hidden">
          <button
            className="flex flex-row-reverse"
            onClick={handleSidebarFilter}
          >
            Filter <icons.Filter />{" "}
          </button>
        </div>

        <div className="sticky top-16 z-10 hidden h-40 overflow-y-scroll rounded-lg border bg-white p-4 md:block lg:top-15 lg:h-full lg:w-1/5 dark:bg-zinc-950">
          <Accordion
            type="single"
            collapsible
            className="md:h-fit md:max-h-[70vh]"
          >
            <div className="">
              icons: {filteredIcons.length}
              <div className="mt-6">
                {/* <h4>Tags</h4> */}

                <AccordionItem value="item-1">
                  <AccordionTrigger>Tags</AccordionTrigger>
                  <AccordionContent className="overflow-y-scroll">
                    <div className="grid gap-y-5">
                      {allTags.map((tag) => (
                        <div
                          key={tag}
                          className="flex items-center gap-2 [--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)]"
                        >
                          <Checkbox
                            id={`${tag}-1`}
                            checked={selectedTags.includes(tag)}
                            onCheckedChange={() => handleTagChange(tag)}
                          />
                          <Label htmlFor={`${tag}-1`}>
                            {tag} ({tagCounts[tag] || 0})
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </div>
          </Accordion>
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
                      <CopyButton valueToCopy={`<${name} />`} />
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
