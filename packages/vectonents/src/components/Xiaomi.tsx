import React from "react";

interface XiaomiProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined";
}

const Xiaomi: React.FC<XiaomiProps> = ({
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
          fillRule="evenodd"
          d="M3 0a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm13 10v8h-2.667v-7.333c0-1.107-.893-2-2-2h-6V18H2.667V6H12c2.207 0 4 1.793 4 4m-8 .667h2.667V18H8zM21.333 6h-2.666v12h2.666z"
          clipRule="evenodd"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          d="M17.143 16V5.333C17.143 2.391 14.837 0 12 0H0v16h3.429V3.556h7.714c1.423 0 2.571 1.19 2.571 2.666V16z"
        />
        <path
          fill="currentColor"
          d="M10.286 6.222H6.857V16h3.429zM20.571 0H24v16h-3.429z"
        />
      </>
    ) : null}
  </svg>
);

export default Xiaomi;
