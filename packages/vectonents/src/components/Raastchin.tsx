
import React from 'react'

interface RaastchinProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Raastchin: React.FC<RaastchinProps> = ({
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
    <path fill="currentColor" d="M21.386 0h-2.49v7.817L11.953.901A3.07 3.07 0 0 0 9.9 0a3 3 0 0 0-.267 0h-7.02A2.61 2.61 0 0 0 0 2.605v18.788a2.61 2.61 0 0 0 2.614 2.604h2.49v-7.914l7.18 7.152a2.6 2.6 0 0 0 1.714.76l.036.003h7.352c.617 0 1.183-.212 1.629-.567.6-.476.985-1.212.985-2.036V2.607a2.61 2.61 0 0 0-2.614-2.608M5.104 15.58V5.105h3.568l3.23 3.217zm13.792 3.221h-3.848l-3.069-3.058 6.917-7.434z"/>
  </svg>
);

export default Raastchin;