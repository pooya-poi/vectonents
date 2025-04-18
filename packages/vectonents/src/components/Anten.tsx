import React from "react";

interface AntenProps {
  className?: string;
  size?: number;
}

const Anten: React.FC<AntenProps> = ({ className = "", size = 24 }) => {
  const defaultColor = "white";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -7 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-${defaultColor} ${className}`}
    >
      <path
        fill="currentColor"
        d="M0 3c0-1.652 1.387-3 3.087-3s3.088 1.348 3.088 3-1.388 3-3.088 3S0 4.609 0 3M6.935 3c0-1.652 1.387-3 3.087-3s3.088 1.348 3.088 3-1.387 3-3.088 3c-1.7 0-3.087-1.391-3.087-3M13.826 3c0-1.652 1.386-3 3.087-3C18.613 0 20 1.348 20 3s-1.387 3-3.087 3c-1.7-.043-3.088-1.391-3.088-3"
      />
    </svg>
  );
};

export default Anten;
