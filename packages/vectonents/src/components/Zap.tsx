
import React from 'react';

interface ZapProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Zap: React.FC<ZapProps> = ({
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
        <path fill="currentColor" d="m11.605 3.507-5.45 9.55a1.13 1.13 0 0 0 1 1.7h2.86a1.38 1.38 0 0 1 1.39 1.38v3.61a1 1 0 0 0 1.83.55l5.28-7.92a1.14 1.14 0 0 0-.94-1.77h-2.72a1.38 1.38 0 0 1-1.38-1.38v-5.22a1 1 0 0 0-1.87-.5"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M10.908 5a2 2 0 0 1 1.73-1l.01.02a2 2 0 0 1 2 2v4.11h2.04a2 2 0 0 1 1.67 3.11l-4.55 6.86a2 2 0 0 1-3.66-1.11v-2.85h-2.14a2 2 0 0 1-1.74-3zm2.09.643a.5.5 0 0 0-.36-.143.48.48 0 0 0-.43.27l-4.64 8.12a.5.5 0 0 0 .44.74h2.64a1 1 0 0 1 1 1v3.35a.5.5 0 0 0 .91.28l4.57-6.87a.5.5 0 0 0-.42-.78h-2.56a1 1 0 0 1-1-1V6a.5.5 0 0 0-.15-.357" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Zap;