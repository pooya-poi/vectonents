
import React from 'react';

interface ImageProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Image: React.FC<ImageProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M14.23 2H10a8 8 0 0 0-8 8v4.24a8 8 0 0 0 8 8h4.23a8 8 0 0 0 8-8V10a8 8 0 0 0-8-8M8.12 6.12a2 2 0 1 1 0 4 2 2 0 0 1 0-4m7.39 14a7.26 7.26 0 0 0 4.72-6.78l-.03-1.72c0-.41-.08-1.18-.08-1.18h-1.63a10 10 0 0 0-8.91 5.52 6.72 6.72 0 0 0-4.46-1.71H3.91a6 6 0 0 0 3.24 5.56 5.1 5.1 0 0 0 2.4.6h4.17a5.2 5.2 0 0 0 1.79-.29" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M8.12 10.08a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path fill="currentColor" fillRule="evenodd" d="M14.24 2H10a8 8 0 0 0-8 8v4.24a8 8 0 0 0 8 8h4.24a8 8 0 0 0 8-8V10a8 8 0 0 0-8-8M10 3.5h4.24a6.5 6.5 0 0 1 6.43 5.62h-1.55a11.76 11.76 0 0 0-10.14 5.82 7.42 7.42 0 0 0-4.63-1.61H3.5V10A6.51 6.51 0 0 1 10 3.5M4.35 14.83h-.82a6.5 6.5 0 0 0 3.87 5.36 11.6 11.6 0 0 1 .89-3.88 6 6 0 0 0-3.94-1.48m9.89 5.91H10a6 6 0 0 1-1.12-.11A10.26 10.26 0 0 1 19.12 10.6h1.62v3.64a6.51 6.51 0 0 1-6.5 6.5" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Image;