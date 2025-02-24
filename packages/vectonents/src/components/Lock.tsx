
import React from 'react';

interface LockProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Lock: React.FC<LockProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M16.552 7.122v-3.12a3 3 0 0 0-3.11-3h-3.28a3 3 0 0 0-3.11 3v3.12a4.58 4.58 0 0 0-3 5l-.05 5.77a4.86 4.86 0 0 0 4.88 3.92h5.88a4.86 4.86 0 0 0 4.88-3.92l-.05-5.77a4.58 4.58 0 0 0-3.04-5m-3.75 7.81.21.62a.94.94 0 0 1-.88 1.23h-.74a.94.94 0 0 1-.88-1.23l.21-.62a1 1 0 0 0-.23-1 1.66 1.66 0 1 1 2.54 0 1 1 0 0 0-.23 1m-4.25-8.15h.36v.01h6.14v-2.79a1.55 1.55 0 0 0-1.61-1.48h-3.28a1.55 1.55 0 0 0-1.61 1.48z" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M13.463 13.902a1.66 1.66 0 1 0-3.32 0 1.62 1.62 0 0 0 .39 1.06 1 1 0 0 1 .23 1l-.21.62a.93.93 0 0 0 .88 1.19h.74a.93.93 0 0 0 .88-1.23l-.25-.62a1 1 0 0 1 .23-1c.258-.279.41-.64.43-1.02"/><path fill="currentColor" fillRule="evenodd" d="M16.553 8.122v-3.12a3 3 0 0 0-3.11-3h-3.28a3 3 0 0 0-3.11 3v3.12a4.57 4.57 0 0 0-3 5l-.05 5.77a4.85 4.85 0 0 0 4.86 3.88h5.88a4.85 4.85 0 0 0 4.88-3.91l-.05-5.77a4.57 4.57 0 0 0-3.02-4.97m-8-3.12a1.55 1.55 0 0 1 1.61-1.48h3.28a1.55 1.55 0 0 1 1.61 1.48v2.77h-6.5zm9.25 13.56v-5.79a2.55 2.55 0 0 0-.65-2.06 3.22 3.22 0 0 0-2.46-1.09h-5.78a3.22 3.22 0 0 0-2.46 1.07 2.55 2.55 0 0 0-.6 2.08l-.05 5.79a3 3 0 0 0 3.06 2.36h5.88a3 3 0 0 0 3.06-2.36" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Lock;