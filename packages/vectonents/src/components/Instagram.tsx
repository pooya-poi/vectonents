import React from "react";

interface InstagramProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined";
}

const Instagram: React.FC<InstagramProps> = ({
  size = 24,
  fillColor = "currentColor",
  className = "",
  variants = "filled",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-${fillColor} ${className}`}
  >
    {variants === "filled" ? (
      <>
        <path
          fill="currentColor"
          d="M6.998 0C3.139 0 0 3.142 0 7.002v10C0 20.861 3.142 24 7.002 24h10C20.861 24 24 20.858 24 16.998v-10C24 3.139 20.858 0 16.998 0zM19 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-7 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          d="M7.057 0C3.183 0 0 3.179 0 7.057v9.886C0 20.817 3.179 24 7.057 24h9.886C20.817 24 24 20.821 24 16.943V7.057C24 3.183 20.821 0 16.943 0zm0 2.182h9.886a4.87 4.87 0 0 1 4.875 4.875v9.886a4.87 4.87 0 0 1-4.875 4.875H7.057a4.87 4.87 0 0 1-4.875-4.875V7.057a4.87 4.87 0 0 1 4.875-4.875m11.386 2.386a.984.984 0 0 0-.989.989c0 .55.44.988.99.988a.983.983 0 0 0 .988-.988.984.984 0 0 0-.989-.989M12 5.455c-3.6 0-6.545 2.944-6.545 6.545S8.399 18.546 12 18.546 18.546 15.6 18.546 12 15.601 5.455 12 5.455m0 2.181A4.345 4.345 0 0 1 16.364 12 4.345 4.345 0 0 1 12 16.364 4.345 4.345 0 0 1 7.636 12 4.345 4.345 0 0 1 12 7.636"
        />
      </>
    ) : null}
  </svg>
);

export default Instagram;
