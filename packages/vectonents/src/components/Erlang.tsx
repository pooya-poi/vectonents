import React from "react";

interface ErlangProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Erlang: React.FC<ErlangProps> = ({
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
      d="M.6.017v15h3.703c-1.765-2.209-2.846-5.134-2.846-8.334 0-2.566.987-4.9 2.615-6.666zm12 0c-.3 0-.583.034-.857.109C10.26.492 9.172 1.8 9.172 3.35h6.857c0-1.842-1.535-3.333-3.429-3.333m8.28 0a12 12 0 0 1 2.006 6.666H9.172c0 2.925.857 5.466 2.571 6.691.266.2.548.359.857.484a4.5 4.5 0 0 0 1.714.325c2.546 0 4.774-1.516 5.948-3.774l3.07 1.49a11.6 11.6 0 0 1-2.341 3.118h3.61v-15z"
    />
  </svg>
);

export default Erlang;
