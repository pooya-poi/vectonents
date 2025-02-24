
import React from 'react';

interface MugProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Mug: React.FC<MugProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M7 4h11.82a2.63 2.63 0 0 1 2.5 2.75v4a2.63 2.63 0 0 1-2.5 2.75h-1.43v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4m-.46 10.91a.8.8 0 0 0 .53.22.8.8 0 0 0 .53-.22l5.62-5.61a.75.75 0 0 0-1.06-1.06l-5.62 5.61a.75.75 0 0 0 0 1.06m6.68-1.16-1.15 1.11a.73.73 0 0 1-.52.21.78.78 0 0 1-.54-.23.75.75 0 0 1 0-1.06l1.15-1.03a.75.75 0 0 1 1.06 0 .75.75 0 0 1 0 1m5.6-1.75a1.15 1.15 0 0 0 1-1.25v-4a1.15 1.15 0 0 0-1-1.25h-2.33a4 4 0 0 1 .9 2.5v4z" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M13.2 8.24a.74.74 0 0 0-1.06 0l-5.61 5.61a.75.75 0 0 0 0 1.06.76.76 0 0 0 1.07 0l5.6-5.61a.75.75 0 0 0 0-1.06M11.03 13.86l1.14-1.11.04-.08a.75.75 0 1 1 1 1.08l-1.12 1.19a.77.77 0 0 1-.52.21.76.76 0 0 1-.54-.23.75.75 0 0 1 0-1.06"/><path fill="currentColor" fillRule="evenodd" d="M18.78 4H7a4 4 0 0 0-4 4v7.5a4 4 0 0 0 4 4h6.38a4 4 0 0 0 4-4v-2h1.4a2.63 2.63 0 0 0 2.53-2.75v-4A2.63 2.63 0 0 0 18.78 4m-3.09 11.5a2.34 2.34 0 0 1-2.34 2.34H7a2.34 2.34 0 0 1-2.34-2.34V8A2.34 2.34 0 0 1 7 5.66h6.38A2.34 2.34 0 0 1 15.72 8zm3.09-3.5a1.14 1.14 0 0 0 1-1.25v-4a1.14 1.14 0 0 0-1-1.25h-2.3a3.94 3.94 0 0 1 .9 2.5v4z" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Mug;