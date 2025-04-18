import React from "react";

interface AparatProps {
  className?: string;
  size?: number;
}

const Aparat: React.FC<AparatProps> = ({ className = "", size = 24 }) => {
  const defaultColor = "white";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-${defaultColor} ${className}`}
    >
      <path
        fill="currentColor"
        d="M9.926.682 7.806.12A3.56 3.56 0 0 0 3.45 2.648l-.532 1.997A10.9 10.9 0 0 1 9.923.682zM.639 13.239.12 15.19a3.56 3.56 0 0 0 2.528 4.356l2.03.539a10.92 10.92 0 0 1-4.04-6.85zM20.352 3.45l-2.27-.603a10.9 10.9 0 0 1 4.175 7.305l.623-2.346a3.56 3.56 0 0 0-2.528-4.356M13.023 22.304l2.172.576a3.56 3.56 0 0 0 4.355-2.528l.613-2.303a10.92 10.92 0 0 1-7.136 4.252z"
      />
      <path
        fill="currentColor"
        d="M11.502 1.527c-5.508 0-9.975 4.464-9.975 9.975a9.97 9.97 0 0 0 9.975 9.974 9.97 9.97 0 0 0 9.974-9.974 9.97 9.97 0 0 0-9.974-9.975M5.853 6.503A2.846 2.846 0 0 1 9.19 4.244a2.846 2.846 0 0 1 2.259 3.336 2.846 2.846 0 0 1-3.336 2.259 2.846 2.846 0 0 1-2.259-3.336m4.144 8.617a2.846 2.846 0 0 1-3.336 2.26 2.846 2.846 0 0 1-2.259-3.337 2.846 2.846 0 0 1 3.336-2.259 2.846 2.846 0 0 1 2.259 3.336m1.209-2.305a1.265 1.265 0 0 1-1.004-1.485 1.267 1.267 0 1 1 1.003 1.485m5.941 3.682a2.846 2.846 0 0 1-3.336 2.259 2.846 2.846 0 0 1-2.259-3.336 2.846 2.846 0 0 1 3.336-2.259 2.846 2.846 0 0 1 2.259 3.336m-1.885-5.278a2.846 2.846 0 0 1-2.259-3.336 2.846 2.846 0 0 1 3.336-2.259 2.846 2.846 0 0 1 2.259 3.336 2.846 2.846 0 0 1-3.336 2.259"
      />
    </svg>
  );
};

export default Aparat;
