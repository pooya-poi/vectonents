import React from "react";

interface TeslaProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Tesla: React.FC<TeslaProps> = ({
  size = 24,
  fillColor = "currentColor",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-${fillColor} ${className}`}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.298 3.6c2.797-1.16 7.413-1.311 9.419-1.234L12 4.053l1.284-1.687c2.005-.077 6.621.073 9.418 1.234-.386.75-2.067 1.818-2.99 2.056-.053-1.476-2.09-1.783-4.045-1.783L11.999 24 8.333 3.872c-1.958 0-3.995.308-4.048 1.783C3.363 5.418 1.683 4.35 1.298 3.6"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m0 1.599.716 1.075c2.716-.975 5.94-1.444 9.341-1.55 1.288-.04 2.598-.04 3.885 0 3.401.105 6.625.574 9.341 1.55L24 1.6C20.793.487 17.385.116 13.982.026a76 76 0 0 0-3.962 0C6.614.116 3.208.486 0 1.599"
      clipRule="evenodd"
    />
  </svg>
);

export default Tesla;
