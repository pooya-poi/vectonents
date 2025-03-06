"use client";
import * as icons from "@pooya-poi/vectonents";
import json from "./icons.json";
import Fuse from "fuse.js";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";

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

  return (
    <>
      {/* Search Input */}
      <div style={{ marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Search icons..."
          defaultValue={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          style={{
            padding: "8px",
            fontSize: "16px",
            width: "100%",
            maxWidth: "400px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Filter Section */}
      <div style={{ marginBottom: "16px", display: "flex", gap: "16px" }}>
        icon count: {filteredIcons.length}
        <div>
          <h4>Tags</h4>
          {allTags.map((tag) => (
            <div key={tag}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                />
                {tag} ({tagCounts[tag] || 0})
              </label>
            </div>
          ))}
        </div>
        <div>
          <h4>Categories</h4>
          {allCategories.map((category) => (
            <div key={category}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                {category} ({categoryCounts[category] || 0})
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Icons Grid */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {filteredIcons.map(([name]) => {
          const isVisible = visibleIcons.some(
            ([visibleName]) => visibleName === name,
          );

          return (
            <div
              key={name}
              data-icon-name={name}
              className="icon-placeholder w-fit rounded-lg border border-white p-4 text-center"
            >
              {isVisible ? (
                <>
                  <h3
                    className=""
                    style={{
                      marginBottom: "16px",
                      fontSize: "16px",
                      color: "#333",
                    }}
                  >
                    {name}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      justifyContent: "center",
                    }}
                  >
                    {(iconVariants[name] || ["filled", "outlined"]).map(
                      (variant) => {
                        const IconComponent = icons[
                          name as keyof typeof icons
                        ] as React.ComponentType<{
                          size: number;
                          variants: "filled" | "outlined";
                        }>;

                        return (
                          <div key={variant}>
                            <div style={{ marginBottom: "8px" }}>
                              <IconComponent
                                size={32}
                                variants={variant as "filled" | "outlined"}
                              />
                            </div>
                            <div style={{ fontSize: "12px", color: "#666" }}>
                              {variant}
                            </div>
                          </div>
                        );
                      },
                    )}
                  </div>
                </>
              ) : (
                <div>Loading...</div> // Placeholder content
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
