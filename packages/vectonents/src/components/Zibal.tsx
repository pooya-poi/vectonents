
import React from 'react'

interface ZibalProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Zibal: React.FC<ZibalProps> = ({
  size = 24,
  fillColor = 'currentColor',
  className = ''
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-${fillColor} ${className}`}
  >
    <path fill="currentColor" d="M17.736 2.15 15.78.113a.364.364 0 0 0-.528 0l-3.43 3.575a.4.4 0 0 0 0 .55l1.954 2.037a.364.364 0 0 0 .528 0l3.43-3.574a.4.4 0 0 0 0-.55M8.249 3.15l3.964 4.13a.815.815 0 0 1 0 1.117l-6.957 7.249a.74.74 0 0 1-1.07 0L.22 11.516a.815.815 0 0 1 0-1.117L7.178 3.15a.74.74 0 0 1 1.07 0M19.815 4.262l3.964 4.13a.815.815 0 0 1 0 1.116l-6.957 7.25a.74.74 0 0 1-1.071 0l-3.964-4.131a.815.815 0 0 1 0-1.116l6.957-7.25a.74.74 0 0 1 1.07 0M10.27 13.725l1.955 2.037a.4.4 0 0 1 0 .55l-3.43 3.575a.364.364 0 0 1-.528 0L6.312 17.85a.4.4 0 0 1 0-.55l3.43-3.575a.364.364 0 0 1 .528 0"/>
  </svg>
);

export default Zibal;