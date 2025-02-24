
import React from 'react';

interface UnavailableProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Unavailable: React.FC<UnavailableProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2A10 10 0 1 1 2 12m5.72 5.11 9.39-9.39a.59.59 0 0 0-.83-.83l-9.39 9.39a.59.59 0 0 0 0 .83.63.63 0 0 0 .42.17.58.58 0 0 0 .41-.17" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10A10 10 0 0 0 12 2M3.5 12a8.48 8.48 0 0 1 14.27-6.22l-12 12A8.43 8.43 0 0 1 3.5 12m3.4 6.78A8.48 8.48 0 0 0 18.78 6.9z" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Unavailable;