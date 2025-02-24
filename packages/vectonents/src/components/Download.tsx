
import React from 'react';

interface DownloadProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Download: React.FC<DownloadProps> = ({
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
        <path fill="currentColor" d="M22.661 13.33v3.92a3.82 3.82 0 0 1-3.73 3.9l-13.2-.07a3.83 3.83 0 0 1-3.73-3.91v-3.92a3.82 3.82 0 0 1 3.73-3.91h5.74v4.85l-2.35-2.33a.86.86 0 0 0-1.22 0 .84.84 0 0 0 0 1.22l3.82 3.82a.87.87 0 0 0 1.22 0l3.82-3.82a.84.84 0 0 0 0-1.22.86.86 0 0 0-1.22 0l-2.35 2.36V9.38h5.74a3.82 3.82 0 0 1 3.73 3.95"/><path fill="currentColor" d="M13.191 3.86v5.52h-1.72V3.86a.86.86 0 1 1 1.72 0"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="m11.31 16.54-3.73-3.72a.84.84 0 0 1 0-1.19.86.86 0 0 1 1.19 0l2.29 2.3V3.84a.84.84 0 0 1 1.68 0v10.09l2.29-2.3a.86.86 0 0 1 1.19 0 .84.84 0 0 1 0 1.19l-3.73 3.72a.8.8 0 0 1-.59.25.8.8 0 0 1-.59-.25"/><path fill="currentColor" d="M17.12 8.42h1.21a4.57 4.57 0 0 1 4.47 4.65v3.81a4.57 4.57 0 0 1-4.47 4.65l-12.86-.08A4.57 4.57 0 0 1 1 16.8v-3.81a4.57 4.57 0 0 1 4.47-4.68h1.21a.84.84 0 1 1 0 1.68H5.47a2.88 2.88 0 0 0-2.79 3v3.78a2.88 2.88 0 0 0 2.79 3l12.86.14a2.88 2.88 0 0 0 2.79-3V13.1a2.88 2.88 0 0 0-2.79-3h-1.21a.84.84 0 0 1 0-1.68"/>
      </>
    ) : null}
  </svg>
);

export default Download;