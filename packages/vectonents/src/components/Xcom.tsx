import React from "react";

interface XcomProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined" | "filled";
}

const Xcom: React.FC<XcomProps> = ({
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
        <path fill="currentColor" d="M18.374 19.172h-1.7L5.582 4.732h1.824z" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3 0a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm17.818 3h-3.067l-5.053 5.752L8.328 3H2l7.561 9.845L2.395 21h3.069l5.53-6.293L15.829 21H22l-7.882-10.375z"
          clipRule="evenodd"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          d="M17.176 4h2.76l-6.03 6.777L21 20h-5.554l-4.35-5.593L6.116 20H3.355l6.45-7.25L3 4h5.695l3.933 5.113zm-.969 14.375h1.53L7.864 5.54h-1.64z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 1H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4M5 0a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5z"
          clipRule="evenodd"
        />
      </>
    ) : variants === "filled-1" ? (
      <>
        <path
          fill="currentColor"
          d="M18.901 0h3.68l-8.04 9.319L24 22h-7.406l-5.8-7.691L4.156 22H.474l8.6-9.968L0 0h7.594l5.243 7.03zM17.61 19.766h2.039L6.486 2.116H4.298z"
        />
      </>
    ) : null}
  </svg>
);

export default Xcom;
