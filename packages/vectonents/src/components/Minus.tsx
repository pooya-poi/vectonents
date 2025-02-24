
import React from 'react';

interface MinusProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Minus: React.FC<MinusProps> = ({
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
        <path fill="currentColor" d="M20.5 11h-16a1.5 1.5 0 0 0 0 3h16a1.5 1.5 0 0 0 0-3"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M19.75 12.5h-16a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5"/>
      </>
    ) : null}
  </svg>
);

export default Minus;