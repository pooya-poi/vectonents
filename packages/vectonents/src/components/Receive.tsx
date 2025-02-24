
import React from 'react';

interface ReceiveProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Receive: React.FC<ReceiveProps> = ({
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
        <path fill="currentColor" d="M18.3 13.51a1 1 0 0 0-1.41 0l-4.12 4.12V7a1 1 0 0 0-2 0v10.63l-4.12-4.12a1 1 0 0 0-1.41 1.41l5.82 5.83a1 1 0 0 0 1.42 0l5.82-5.83a1 1 0 0 0 0-1.41M6.77 5h10a1 1 0 0 0 0-2h-10a1 1 0 1 0 0 2"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M16.58 4.5h-10a.75.75 0 0 1 0-1.5h10a.75.75 0 1 1 0 1.5M17.41 13.256c.199 0 .39.081.53.224a.75.75 0 0 1 0 1.06l-5.83 5.82a.75.75 0 0 1-1.06 0l-5.83-5.82a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0l4.55 4.54V6.8a.75.75 0 0 1 1.5 0v11.22l4.55-4.54a.74.74 0 0 1 .53-.224"/>
      </>
    ) : null}
  </svg>
);

export default Receive;