
import React from 'react';

interface SandClockProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const SandClock: React.FC<SandClockProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M19.801 5.55a3.53 3.53 0 0 1-.85 2.3l-1.83 2.08a3.54 3.54 0 0 0 0 4.56l1.79 2.13a3.52 3.52 0 0 1-2.69 5.78h-7.7a3.52 3.52 0 0 1-2.7-5.78l1.81-2.16a3.51 3.51 0 0 0 0-4.52l-1.81-2.16A3.52 3.52 0 0 1 8.521 2h7.76a3.52 3.52 0 0 1 3.52 3.55M9.621 18.46h5.56a.7.7 0 1 0 0-1.39h-5.56a.7.7 0 1 0 0 1.39" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M19.82 5.53c0 .844-.3 1.66-.85 2.3l-1.83 2.09a3.51 3.51 0 0 0 0 4.56l1.79 2.14a3.52 3.52 0 0 1-2.7 5.79H8.52A3.53 3.53 0 0 1 5 18.88a3.46 3.46 0 0 1 .83-2.26l1.81-2.16a3.54 3.54 0 0 0 0-4.54L5.83 7.76A3.46 3.46 0 0 1 5 5.5 3.53 3.53 0 0 1 8.52 2h7.78a3.53 3.53 0 0 1 3.52 3.53m-1.96 11.98-1.78-2.13a4.9 4.9 0 0 1-.01-6.37l1.8-2.09a2.1 2.1 0 0 0 .52-1.39 2.14 2.14 0 0 0-2.09-2.16H8.52a2.13 2.13 0 0 0-1.63 3.5l1.82 2.16a4.92 4.92 0 0 1 0 6.32l-1.82 2.16a2.13 2.13 0 0 0 1.63 3.5h7.71a2.13 2.13 0 0 0 2.13-2.13 2.08 2.08 0 0 0-.5-1.37" clipRule="evenodd"/><path fill="currentColor" d="M15.2 18.46H9.62a.7.7 0 0 1 0-1.39h5.58a.7.7 0 0 1 0 1.39"/>
      </>
    ) : null}
  </svg>
);

export default SandClock;