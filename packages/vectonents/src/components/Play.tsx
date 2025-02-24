
import React from 'react';

interface PlayProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Play: React.FC<PlayProps> = ({
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
        <path fill="currentColor" d="M17.12 9.4 9.88 5.22a3 3 0 0 0-4.5 2.59v8.38a3 3 0 0 0 4.5 2.59l7.24-4.18a3 3 0 0 0 0-5.2"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="m10.11 5.51 7.25 4.19a3 3 0 0 1 0 5.19l-7.25 4.19a3 3 0 0 1-4.5-2.6V8.11a3 3 0 0 1 4.5-2.6m-.9 12.01 7.25-4.18a1.19 1.19 0 0 0 .6-1.04 1.2 1.2 0 0 0-.6-1.05L9.21 7.07a1.2 1.2 0 0 0-.6-.17A1.21 1.21 0 0 0 7.4 8.11v8.37a1.21 1.21 0 0 0 1.21 1.21 1.2 1.2 0 0 0 .6-.17" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Play;