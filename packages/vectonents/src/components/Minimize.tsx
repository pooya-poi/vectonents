
import React from 'react';

interface MinimizeProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Minimize: React.FC<MinimizeProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M9.5 3a1 1 0 0 1 1 1v3.5a3 3 0 0 1-3 3H4a1 1 0 1 1 0-2h3.5a1 1 0 0 0 1-1V4a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v3.5a1 1 0 0 0 1 1H21a1 1 0 1 1 0 2h-3.5a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1M3 15.5a1 1 0 0 1 1-1h3.5a3 3 0 0 1 3 3V21a1 1 0 1 1-2 0v-3.5a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1m14.5 1a1 1 0 0 0-1 1V21a1 1 0 1 1-2 0v-3.5a3 3 0 0 1 3-3H21a1 1 0 1 1 0 2z" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M7.25 14.51h-3.5a.75.75 0 0 0 0 1.5h3.5a1.25 1.25 0 0 1 1.25 1.24v3.5a.75.75 0 0 0 1.5 0v-3.5a2.75 2.75 0 0 0-2.75-2.74M20.75 14.51h-3.5a2.75 2.75 0 0 0-2.75 2.74v3.5a.75.75 0 0 0 1.5 0v-3.5a1.25 1.25 0 0 1 1.25-1.24h3.5a.75.75 0 0 0 0-1.5M17.25 10.01h3.5a.75.75 0 0 0 0-1.5h-3.5A1.25 1.25 0 0 1 16 7.25v-3.5a.75.75 0 0 0-1.5 0v3.5a2.75 2.75 0 0 0 2.75 2.76M9.25 3a.76.76 0 0 0-.75.75v3.5a1.25 1.25 0 0 1-1.25 1.26h-3.5a.75.75 0 0 0 0 1.5h3.5A2.75 2.75 0 0 0 10 7.25v-3.5A.76.76 0 0 0 9.25 3"/>
      </>
    ) : null}
  </svg>
);

export default Minimize;