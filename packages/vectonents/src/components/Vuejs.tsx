import React from "react";

interface VuejsProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined";
}

const Vuejs: React.FC<VuejsProps> = ({
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
          d="m15.415.017-2.77 4.578L9.876.017h-2.59l5.36 8.272L17.857.017z"
        />
        <path
          fill="currentColor"
          d="m.645.017 12 19 12-19h-5.5l-6.5 10.363L6.145.017z"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          d="m.645.017 12 19 12-19h-9.23l-2.77 4.578L9.876.017zm3.231 1.727h3.481l5.288 8.636 5.288-8.636h3.482l-8.77 13.904z"
        />
      </>
    ) : null}
  </svg>
);

export default Vuejs;
