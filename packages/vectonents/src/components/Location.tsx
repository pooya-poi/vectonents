
import React from 'react';

interface LocationProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Location: React.FC<LocationProps> = ({
  size = 24,
  fillColor = 'currentColor',
  className = '',
  variants = 'filled'
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-${fillColor} ${className}`}
  >
    {variants === 'filled' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M12 2a6.27 6.27 0 0 0-.75 12.5v4.3a.75.75 0 0 0 1.5 0v-4.3A6.27 6.27 0 0 0 12 2m-.65 3.47a2.09 2.09 0 0 0-2.09 2.08.75.75 0 0 1-1.5 0 3.59 3.59 0 0 1 3.59-3.58.75.75 0 0 1 0 1.5" clipRule="evenodd"/><path fill="currentColor" d="M15.82 15.79a.76.76 0 0 1 1-.33A3.42 3.42 0 0 1 19 18.38c0 2.21-3 3.88-7 3.88s-7-1.67-7-3.88a3.42 3.42 0 0 1 2.18-2.87.751.751 0 0 1 .68 1.34c-.88.45-1.38 1.01-1.38 1.53 0 1.08 2.37 2.32 5.53 2.32s5.52-1.25 5.52-2.38c0-.53-.5-1.08-1.38-1.53a.75.75 0 0 1-.33-1"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M16.82 15.485a.75.75 0 0 0-1 .32.76.76 0 0 0 .33 1c.88.45 1.38 1 1.38 1.53 0 1.13-2.36 2.39-5.52 2.39s-5.53-1.25-5.53-2.35c0-.52.5-1.08 1.38-1.53a.75.75 0 1 0-.68-1.33A3.39 3.39 0 0 0 5 18.375c0 2.22 3 3.89 7 3.89s7-1.67 7-3.89a3.39 3.39 0 0 0-2.18-2.89"/><path fill="currentColor" fillRule="evenodd" d="M11.25 18.815v-4.32a6.27 6.27 0 1 1 1.5 0v4.32a.75.75 0 0 1-1.5 0m5.174-12.374a4.78 4.78 0 1 0-8.828 3.668 4.78 4.78 0 0 0 8.828-3.668" clipRule="evenodd"/><path fill="currentColor" d="M9.59 9.375a.75.75 0 0 0 .75-.75 2.08 2.08 0 0 1 2.08-2.08.75.75 0 0 0 0-1.5 3.59 3.59 0 0 0-3.58 3.6.74.74 0 0 0 .75.73"/>
      </>
    ) : null}
  </svg>
);

export default Location;