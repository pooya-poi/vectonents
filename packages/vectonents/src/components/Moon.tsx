
import React from 'react';

interface MoonProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Moon: React.FC<MoonProps> = ({
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
        <path fill="currentColor" d="M22.16 12.08c0 5.567-4.513 10.08-10.08 10.08S2 17.647 2 12.08 6.513 2 12.08 2a9.4 9.4 0 0 1 2.2.25 6.17 6.17 0 1 0 7.63 7.63c.17.721.254 1.46.25 2.2"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M2 12.08C2 6.513 6.513 2 12.08 2a9.4 9.4 0 0 1 2.2.25 6.17 6.17 0 1 0 7.63 7.63c.17.721.254 1.46.25 2.2 0 5.567-4.513 10.08-10.08 10.08S2 17.647 2 12.08m8.543 1.536A7.67 7.67 0 0 1 9.64 3.85a8.58 8.58 0 1 0 10.67 10.66 7.67 7.67 0 0 1-9.767-.894" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Moon;