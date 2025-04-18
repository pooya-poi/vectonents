
import React from 'react'

interface FilmnetProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Filmnet: React.FC<FilmnetProps> = ({
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
    <path fill="currentColor" d="M7.243 10.055a25 25 0 0 0-4.538 1.337A36 36 0 0 0 12.007 24a36 36 0 0 0 3.376-3.35 31 31 0 0 1-5.57-6.133 21 21 0 0 1 2.194-.116c2.476 0 4.853.44 7.062 1.257a37 37 0 0 0 2.24-4.263 24.9 24.9 0 0 0-9.302-1.793c-1.63-.003-3.22.156-4.764.453M12.001.003c-2.568 0-5.07.286-7.485.827A34.4 34.4 0 0 0 0 2.18c.25 1.613.604 3.189 1.054 4.72a29.553 29.553 0 0 1 10.948-2.1c3.86 0 7.55.744 10.944 2.098Q23.622 4.6 24 2.18A33.9 33.9 0 0 0 12.001 0z"/>
  </svg>
);

export default Filmnet;