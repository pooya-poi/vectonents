
import React from 'react'

interface AnsarProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Ansar: React.FC<AnsarProps> = ({
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
    <path fill="currentColor" d="M0 11.977 12.012 0l3.51 3.526L3.509 15.503zM7.745 20.5H3.5v-4.99h9.249zM20.475 16.244V20.5h-4.269zM3.525 7.756V3.5h4.269zM16.257 3.5H20.5v4.99h-9.249zM20.49 8.497 8.479 20.474 11.988 24 24 12.023z"/>
  </svg>
);

export default Ansar;