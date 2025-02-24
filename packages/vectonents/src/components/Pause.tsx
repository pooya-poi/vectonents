
import React from 'react';

interface PauseProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Pause: React.FC<PauseProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M16 2H8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6m-5.5 13a1 1 0 1 1-2 0V9a1 1 0 0 1 2 0zm4 1a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M9.5 8.25a.76.76 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0V9a.76.76 0 0 0-.75-.75M14.5 8.25a.76.76 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0V9a.76.76 0 0 0-.75-.75"/><path fill="currentColor" fillRule="evenodd" d="M8 2h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6m11.092 17.092A4.33 4.33 0 0 0 20.36 16V8A4.33 4.33 0 0 0 16 3.64H8A4.33 4.33 0 0 0 3.64 8v8A4.33 4.33 0 0 0 8 20.36h8a4.33 4.33 0 0 0 3.092-1.268" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Pause;