
import React from 'react';

interface ReplyProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Reply: React.FC<ReplyProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M10 2h4.24a8 8 0 0 1 8 8v4.24a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V10a8 8 0 0 1 8-8m6.446 10.074A3.62 3.62 0 0 0 17.52 9.5V8.34a.75.75 0 1 0-1.5 0V9.5a2.11 2.11 0 0 1-2.16 2.16H9.28l2.21-2.21a.75.75 0 0 0-1.06-1.06l-3.49 3.49a.8.8 0 0 0-.16.24.73.73 0 0 0 0 .58.8.8 0 0 0 .16.24l3.49 3.45a.77.77 0 0 0 .53.22.8.8 0 0 0 .53-.22.75.75 0 0 0 0-1.06l-2.21-2.21h4.58a3.62 3.62 0 0 0 2.586-1.046" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M19.75 5a.76.76 0 0 0-.75.75v2A4.21 4.21 0 0 1 14.75 12H5.56l4.72-4.75a.75.75 0 0 0-1.06-1l-6 6a.8.8 0 0 0-.16.24.73.73 0 0 0 0 .58.8.8 0 0 0 .16.24l6 6a.75.75 0 0 0 1.06-1.06L5.56 13.5h9.19a5.69 5.69 0 0 0 5.75-5.75v-2a.76.76 0 0 0-.75-.75"/>
      </>
    ) : null}
  </svg>
);

export default Reply;