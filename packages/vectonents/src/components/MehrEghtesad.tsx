
import React from 'react'

interface MehrEghtesadProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const MehrEghtesad: React.FC<MehrEghtesadProps> = ({
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
    <path fill="currentColor" d="M14.676 2.65 12.028 0l-6.83 6.821c-1.023 1.043-2.215.931-3.446.816l-.257-.024c1.261 2.865 4.588 3.676 6.54 1.713z"/><path fill="currentColor" d="m2.648 9.355 6.667 6.648c1.961 1.955 1.151 5.285-1.71 6.548l.023-.257c.115-1.232.227-2.426-.815-3.45L0 12.006z"/><path fill="currentColor" d="M11.99 24 9.34 21.35l6.64-6.676c1.953-1.963 5.28-1.152 6.54 1.713l-.256-.024c-1.23-.115-2.423-.227-3.446.816z"/><path fill="currentColor" d="m24 11.988-2.648 2.651-6.667-6.648c-1.961-1.954-1.151-5.285 1.71-6.547l-.023.257c-.115 1.232-.227 2.425.815 3.45zM12 8.25a3.751 3.751 0 1 0 .002 7.502A3.751 3.751 0 0 0 12 8.25"/>
  </svg>
);

export default MehrEghtesad;