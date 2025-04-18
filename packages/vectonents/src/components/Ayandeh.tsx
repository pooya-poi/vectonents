
import React from 'react'

interface AyandehProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Ayandeh: React.FC<AyandehProps> = ({
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
    <path fill="currentColor" d="M1.012 3.406c0-1.441.958-2.398 2.399-2.398h17.183c1.44 0 2.398.957 2.398 2.398v3.073c0 3.36-1.2 5.325-3.31 5.325-3.649 0-8.063-4.56-11.761-4.56-2.832 0-5.28 1.87-6.909 5.95zM22.997 20.59c0 1.44-.958 2.398-2.399 2.398H3.411c-1.441 0-2.399-.958-2.399-2.398v-3.073c0-3.36 1.2-5.325 3.311-5.325 3.648 0 8.062 4.559 11.76 4.559 2.832 0 5.281-1.87 6.914-5.95zM3.36 0C1.345 0 0 1.345 0 3.36v17.28C0 22.655 1.345 24 3.36 24h17.28c2.015 0 3.36-1.345 3.36-3.36V3.36C24 1.345 22.655 0 20.64 0z"/>
  </svg>
);

export default Ayandeh;