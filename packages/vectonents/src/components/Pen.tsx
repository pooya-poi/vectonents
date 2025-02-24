
import React from 'react';

interface PenProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Pen: React.FC<PenProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="m21.297 15.157.76 5.28a1.43 1.43 0 0 1-1.62 1.61l-5.28-.76a3.3 3.3 0 0 1-1.89-.94l-9.74-9.75a5 5 0 1 1 7.07-7.07l9.76 9.74a3.3 3.3 0 0 1 .94 1.89m-10.59-3.39a.75.75 0 0 0 1.06-1.06l-4.21-4.21a.75.75 0 0 0-1.06 1.06z" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="m21.174 15.034.76 5.28a1.42 1.42 0 0 1-1.41 1.61h-.21l-5.28-.76a3.3 3.3 0 0 1-1.89-.94l-9.74-9.75a5 5 0 0 1 7.07-7.07l9.76 9.74a3.3 3.3 0 0 1 .94 1.89m-6.92 4.13a2 2 0 0 0 1 .52l5.21.69-.73-5.17a2 2 0 0 0-.52-1l-9.75-9.74a3.49 3.49 0 0 0-5 0 3.49 3.49 0 0 0 0 4.95z" clipRule="evenodd"/><path fill="currentColor" d="M7.434 6.374a.75.75 0 0 0-1.06 1.06l4.21 4.21a.75.75 0 0 0 1.06-1.06z"/>
      </>
    ) : null}
  </svg>
);

export default Pen;