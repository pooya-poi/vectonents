
import React from 'react'

interface BazarProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Bazar: React.FC<BazarProps> = ({
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
    <path fill="currentColor" d="M23.278 7.504a13.5 13.5 0 0 0-3.334-.853c-1.01-.11-1.862-.234-2.54-.386A96 96 0 0 0 15.96 2.96a8 8 0 0 0-.664-1.129C14.632.881 13.737.275 12.596 0h-1.183c-.765.179-1.386.482-1.862.895-.664.592-1.213 1.363-1.646 2.3a77 77 0 0 0-1.284 3.07 45 45 0 0 0-4.648.826 7 7 0 0 0-1.646.634c-.26.124-.36.358-.317.688q.173 1.529.433 3.057a28.4 28.4 0 0 0 1.27 5.356l1.04 2.176c1.89 2.891 4.633 4.557 8.213 4.998h2.093c3.565-.44 6.307-2.107 8.213-4.998l1.068-2.313a29 29 0 0 0 1.256-5.412L24 8.578v-.62c-.318-.233-.563-.385-.722-.454M10.374 3.222c.216-.372.78-.964 1.255-1.088.535-.124 1.011.014 1.415.427.448.44.794.978 1.068 1.57.289.688.592 1.377.866 2.093H9.017a17.3 17.3 0 0 1 1.357-3.002"/>
  </svg>
);

export default Bazar;