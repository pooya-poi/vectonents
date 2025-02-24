
import React from 'react';

interface InstagramProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Instagram: React.FC<InstagramProps> = ({
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
        <path fill="currentColor" d="M11.84 9.05a2.8 2.8 0 1 0 2.8 2.8 2.79 2.79 0 0 0-2.8-2.8"/><path fill="currentColor" fillRule="evenodd" d="M15.69 2H8a6 6 0 0 0-6 6v7.69a6 6 0 0 0 6 6h7.69a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6m-3.85 14.14a4.3 4.3 0 1 1 .02-8.6 4.3 4.3 0 0 1-.02 8.6m3.735-9.228a1.09 1.09 0 0 0 1.015.668 1.08 1.08 0 0 0 1.08-1.08 1.09 1.09 0 1 0-2.095.412" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M8 2h7.7a6 6 0 0 1 6 6v7.7a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6m12.2 6a4.51 4.51 0 0 0-4.5-4.5H8A4.51 4.51 0 0 0 3.5 8v7.7A4.51 4.51 0 0 0 8 20.2h7.7a4.51 4.51 0 0 0 4.5-4.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M7.55 11.85a4.31 4.31 0 0 1 4.3-4.3 4.31 4.31 0 0 1 4.3 4.3 4.3 4.3 0 0 1-8.6 0m7.1 0a2.8 2.8 0 0 0-2.8-2.8 2.81 2.81 0 0 0-2.8 2.8 2.8 2.8 0 1 0 5.6 0" clipRule="evenodd"/><path fill="currentColor" d="M15.51 6.505a1.085 1.085 0 1 1 2.17 0 1.085 1.085 0 0 1-2.17 0"/>
      </>
    ) : null}
  </svg>
);

export default Instagram;