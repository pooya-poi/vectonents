
import React from 'react';

interface UnlockProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Unlock: React.FC<UnlockProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M8.552 7.782h6.14a4.73 4.73 0 0 1 4.9 5.34l.05 5.77a4.86 4.86 0 0 1-4.88 3.92h-5.88a4.86 4.86 0 0 1-4.88-3.92l.05-5.77a4.58 4.58 0 0 1 3-5v-3.12a3 3 0 0 1 3.11-3h3.28a3 3 0 0 1 3.11 3 .75.75 0 0 1-1.5 0 1.55 1.55 0 0 0-1.61-1.48h-3.28a1.55 1.55 0 0 0-1.61 1.48zm4.46 8.77-.21-.62a1 1 0 0 1 .23-1 1.66 1.66 0 1 0-2.54 0 1 1 0 0 1 .23 1l-.21.62a.94.94 0 0 0 .88 1.23h.74a.94.94 0 0 0 .88-1.23" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M13.463 13.902a1.66 1.66 0 1 0-3.32 0 1.62 1.62 0 0 0 .39 1.06 1 1 0 0 1 .23 1l-.21.62a.93.93 0 0 0 .88 1.19h.74a.93.93 0 0 0 .88-1.23l-.25-.62a1 1 0 0 1 .23-1c.258-.279.41-.64.43-1.02"/><path fill="currentColor" fillRule="evenodd" d="M14.693 7.772a4.73 4.73 0 0 1 4.88 5.32l.05 5.77a4.85 4.85 0 0 1-4.88 3.91h-5.88a4.85 4.85 0 0 1-4.86-3.88l.05-5.77a4.57 4.57 0 0 1 3-5v-3.12a3 3 0 0 1 3.11-3h3.28a3 3 0 0 1 3.11 3 .75.75 0 1 1-1.5 0 1.55 1.55 0 0 0-1.61-1.48h-3.28a1.55 1.55 0 0 0-1.61 1.48v2.77zm3.11 10.79v-5.79a2.55 2.55 0 0 0-.65-2.06 3.22 3.22 0 0 0-2.46-1.09h-5.78a3.22 3.22 0 0 0-2.46 1.07 2.55 2.55 0 0 0-.6 2.08l-.05 5.79a3 3 0 0 0 3.06 2.36h5.88a3 3 0 0 0 3.06-2.36" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Unlock;