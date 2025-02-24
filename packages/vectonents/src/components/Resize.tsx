
import React from 'react';

interface ResizeProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Resize: React.FC<ResizeProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M10 2h4.24a8 8 0 0 1 8 8v4.24a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V10a8 8 0 0 1 8-8m6.37 9.87a.75.75 0 0 0 .75-.75l.01-3.25a.75.75 0 0 0-.75-.75h-3.26a.78.78 0 1 0 0 1.56h1.39l-5.89 5.88v-1.44a.75.75 0 0 0-1.5 0v3.22a.7.7 0 0 0 0 .29.78.78 0 0 0 .45.49 1 1 0 0 0 .28 0h3.27a.75.75 0 0 0 0-1.5h-1.5l6-6v1.5c0 .414.336.75.75.75" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M20.129 3h-6.201a.875.875 0 0 0-.871.879c0 .485.39.879.87.879h3.938L4.742 18v-4.137a.875.875 0 0 0-.871-.879.875.875 0 0 0-.871.88v6.257a.887.887 0 0 0 .871.879h6.201c.481 0 .871-.393.871-.879a.875.875 0 0 0-.87-.879h-4.1L19.258 5.836v4.3c0 .486.39.88.871.88a.875.875 0 0 0 .871-.88V3.88A.887.887 0 0 0 20.129 3"/>
      </>
    ) : null}
  </svg>
);

export default Resize;