
import React from 'react';

interface FigmaProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Figma: React.FC<FigmaProps> = ({
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
        <path fill="currentColor" d="M15 9a3 3 0 0 0-3 2.8V9za3 3 0 1 0 0-6H9a3 3 0 0 0 0 6 3 3 0 1 0 0 6 3 3 0 1 0 3 3v-5.8A3 3 0 1 0 15 9"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M18.312 4.567A3.74 3.74 0 0 1 16.98 8.75a3.74 3.74 0 0 1-2.21 6.77 3.7 3.7 0 0 1-2.25-.77v3a3.75 3.75 0 1 1-6-3 3.72 3.72 0 0 1 0-6A3.74 3.74 0 0 1 8.75 2h6a3.74 3.74 0 0 1 3.562 2.567M14.75 8a2.25 2.25 0 0 0 2.23-2.25H17a2.25 2.25 0 0 0-2.25-2.25H12.5V8zM6.5 5.75A2.25 2.25 0 0 1 8.75 3.5H11V8H8.75A2.25 2.25 0 0 1 6.5 5.75M8.75 9.5a2.25 2.25 0 0 0 0 4.5H11V9.5zM11 17.75a2.25 2.25 0 1 1-2.25-2.25H11zm1.5-6a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Figma;