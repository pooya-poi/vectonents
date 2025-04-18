import React from "react";

interface AppleProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Apple: React.FC<AppleProps> = ({
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
      d="M14.882 0c-1.307.074-2.808.78-3.7 1.68-.807.818-1.443 2.034-1.183 3.21 1.42.036 2.847-.689 3.7-1.605.798-.857 1.402-2.053 1.183-3.285m.078 4.888c-2.052 0-2.91 1.222-4.33 1.222-1.462 0-2.798-1.145-4.566-1.145C3.657 4.966 0 7.128 0 12.222 0 16.857 4.329 22 6.772 22c1.484.014 1.844-.905 3.858-.915 2.016-.015 2.451.927 3.938.915 1.673-.012 2.98-1.796 3.935-3.21.685-1.012.966-1.529 1.497-2.672-3.938-.968-4.721-7.13 0-8.403-.891-1.475-3.493-2.827-5.04-2.827"
    />
  </svg>
);

export default Apple;
