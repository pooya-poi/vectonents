
import React from 'react';

interface MouseProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Mouse: React.FC<MouseProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M11.8 2h.4A6.79 6.79 0 0 1 19 8.8v6.4a6.79 6.79 0 0 1-6.8 6.8h-.4A6.79 6.79 0 0 1 5 15.2V8.8A6.79 6.79 0 0 1 11.8 2m.2 10.75a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M11.8 2h.4A6.79 6.79 0 0 1 19 8.8v6.4a6.79 6.79 0 0 1-6.8 6.8h-.4A6.79 6.79 0 0 1 5 15.2V8.8A6.79 6.79 0 0 1 11.8 2m.4 18.5a5.31 5.31 0 0 0 5.3-5.3V8.8a5.31 5.31 0 0 0-5.3-5.3h-.4a5.31 5.31 0 0 0-5.3 5.3v6.4a5.31 5.31 0 0 0 5.3 5.3z" clipRule="evenodd"/><path fill="currentColor" d="M12 6.25a.76.76 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0V7a.76.76 0 0 0-.75-.75"/>
      </>
    ) : null}
  </svg>
);

export default Mouse;