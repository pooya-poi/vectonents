
import React from 'react';

interface FacebookProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Facebook: React.FC<FacebookProps> = ({
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
        <path fill="currentColor" d="M21.82 11.918a9.9 9.9 0 0 1-8.73 9.83v-6.7h1.76a.48.48 0 0 0 .48-.43l.19-1.45a.5.5 0 0 0-.12-.38.48.48 0 0 0-.37-.17h-1.94v-1.7a1 1 0 0 1 1-1h1a.48.48 0 0 0 .49-.48v-1.61a.5.5 0 0 0-.44-.49s-.72-.06-1.58-.06c-2.14 0-3.32 1.27-3.32 3.58v1.76h-2a.49.49 0 0 0-.49.49v1.45c0 .27.22.49.49.49h1.94v6.62a9.91 9.91 0 1 1 11.64-9.75"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M14.06 9.91h1a.48.48 0 0 0 .48-.49v-1.6a.48.48 0 0 0-.44-.48s-.71-.06-1.58-.06c-2.14 0-3.32 1.27-3.32 3.57v1.77H8.23a.47.47 0 0 0-.48.48v1.46a.47.47 0 0 0 .48.48h1.94v5.66h2.92v-5.66h1.76a.49.49 0 0 0 .48-.42l.18-1.46a.48.48 0 0 0-.48-.54h-1.94v-1.71a1 1 0 0 1 .97-1"/><path fill="currentColor" fillRule="evenodd" d="M2 11.91C2 6.437 6.437 2 11.91 2a9.91 9.91 0 0 1 9.91 9.91c0 5.473-4.437 9.91-9.91 9.91S2 17.383 2 11.91m18.32 0a8.41 8.41 0 0 0-8.41-8.41 8.43 8.43 0 0 0-8.41 8.41 8.41 8.41 0 0 0 16.82 0" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Facebook;