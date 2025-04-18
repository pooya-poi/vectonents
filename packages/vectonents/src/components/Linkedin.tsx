import React from "react";

interface LinkedinProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined";
}

const Linkedin: React.FC<LinkedinProps> = ({
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
          d="M21.8 0H2.2C1 0 0 1 0 2.2v19.6C0 23 1 24 2.2 24h19.6c1.2 0 2.2-1 2.2-2.2V2.2C24 1 23 0 21.8 0M7 20H3V9h4zM5 7.7c-1.2 0-2-.802-2-1.802C3 4.801 3.8 4 5 4s2 .8 2 1.8c0 1.098-.8 1.9-2 1.9M21 20h-4v-6c0-1.602-1.102-2-1.398-2C15.3 12 14 12.2 14 14v6h-4V9h4v1.602C14.602 9.699 15.602 9 17.5 9s3.5 1.5 3.5 5z"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          d="M3.667 0A3.68 3.68 0 0 0 0 3.667v16.666A3.68 3.68 0 0 0 3.667 24h16.666A3.68 3.68 0 0 0 24 20.333V3.667A3.68 3.68 0 0 0 20.333 0zm0 2h16.666C21.266 2 22 2.735 22 3.667v16.666c0 .933-.735 1.667-1.667 1.667H3.667A1.65 1.65 0 0 1 2 20.333V3.667C2 2.735 2.735 2 3.667 2m2.666 2.667a1.667 1.667 0 1 0 0 3.333 1.667 1.667 0 0 0 0-3.333m-1 4.666a.666.666 0 0 0-.666.667v8.667c0 .368.298.666.666.666h2A.666.666 0 0 0 8 18.667V10a.666.666 0 0 0-.667-.667zm4.667 0a.666.666 0 0 0-.667.667v8.667c0 .368.298.666.667.666h2a.666.666 0 0 0 .667-.666v-5a1.668 1.668 0 0 1 3.333 0v5c0 .368.298.666.667.666h2a.666.666 0 0 0 .666-.666v-5.334c0-2.206-1.794-4-4-4a3.97 3.97 0 0 0-2.666 1.028V10A.666.666 0 0 0 12 9.333z"
        />
      </>
    ) : null}
  </svg>
);

export default Linkedin;
