
import React from 'react';

interface MagnifierProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Magnifier: React.FC<MagnifierProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M4.062 7.67A9.21 9.21 0 0 1 12.539 2a9.22 9.22 0 1 1-5.39 16.66l-2.87 2.87a.75.75 0 0 1-1.06-1.06l2.79-2.79A9.21 9.21 0 0 1 4.062 7.67m10.798.372A1.56 1.56 0 0 0 16.31 9a1.55 1.55 0 0 0 1.55-1.55 1.56 1.56 0 1 0-3 .592" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M4.062 7.67A9.21 9.21 0 0 1 12.539 2a9.21 9.21 0 1 1-5.38 16.65l-2.88 2.88a.75.75 0 0 1-1.06-1.06l2.79-2.79A9.21 9.21 0 0 1 4.062 7.67m1.337 6.5a7.72 7.72 0 0 0 7.14 4.76v-.04a7.72 7.72 0 0 0 7.71-7.67A7.72 7.72 0 1 0 5.4 14.17" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Magnifier;