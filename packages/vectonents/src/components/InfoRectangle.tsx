
import React from 'react';

interface InfoRectangleProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const InfoRectangle: React.FC<InfoRectangleProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M15.57 2H8a6 6 0 0 0-6 6v7.57a6 6 0 0 0 6 6h7.57a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6m-3.04 12.78a.75.75 0 0 1-1.5 0v-3.1a.75.75 0 0 1 1.5 0zm-.74-5.26a.74.74 0 0 0 .74-.74l.01-.02a.75.75 0 0 0-.75-.75.76.76 0 0 0 0 1.51" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M8 2h7.58a6 6 0 0 1 6 6v7.58a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6m7.58 18.08a4.51 4.51 0 0 0 4.5-4.5V8a4.51 4.51 0 0 0-4.5-4.5H8A4.51 4.51 0 0 0 3.5 8v7.58a4.51 4.51 0 0 0 4.5 4.5z" clipRule="evenodd"/><path fill="currentColor" d="M11.79 8.04a.76.76 0 0 0-.75.75.76.76 0 0 0 .75.76.74.74 0 0 0 .75-.76.75.75 0 0 0-.75-.75M11.79 10.92a.75.75 0 0 0-.75.75v3.12a.75.75 0 0 0 1.5 0v-3.1a.74.74 0 0 0-.75-.77"/>
      </>
    ) : null}
  </svg>
);

export default InfoRectangle;