
import React from 'react';

interface TwoPersonProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const TwoPerson: React.FC<TwoPersonProps> = ({
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
        <path fill="currentColor" d="M8.92 12H9a4 4 0 0 0 4-4V6.43a3.37 3.37 0 0 0-3.4-3.36H8.28a3.37 3.37 0 0 0-3.36 3.36V8a4 4 0 0 0 4 4M17.5 11.25a3 3 0 0 0 3-3V7.1A2.52 2.52 0 0 0 18 4.58h-1a2.52 2.52 0 0 0-2.5 2.52v1.15a3 3 0 0 0 3 3M22.39 15.42l-.16-.79A2.27 2.27 0 0 0 20 12.75h-6.1a2.22 2.22 0 0 0-1.85 1H5a2.76 2.76 0 0 0-1.9.76 3 3 0 0 0-.89 1.51v.4l-.21.8a3 3 0 0 0 2.8 3.71h8.28q.32-.001.63-.08h.13q.225-.064.44-.16l.16-.09q.18-.1.34-.23l.16-.13q.148-.137.28-.29c0-.05.09-.09.13-.15a2.337 2.337 0 0 0 .4-.75q.06-.137.1-.28c0-.1.05-.2.07-.3v-.15h4.28a2.33 2.33 0 0 0 2.19-2.9"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="m21.74 14.74.14.69a2 2 0 0 1-1.88 2.5h-3.81a3 3 0 0 1-2.9 3H5a3 3 0 0 1-2.86-3.73l.21-1a2.92 2.92 0 0 1 2.83-2.41h7.94a1.87 1.87 0 0 1 1.43-.67h5.29a2 2 0 0 1 1.9 1.62m-1.76 1.68a.41.41 0 0 0 .31-.16.63.63 0 0 0 .18-.5l-.14-.69a.48.48 0 0 0-.43-.42h-5.29a.36.36 0 0 0-.29.15 1.5 1.5 0 0 1-1.14.52H5.24a1.41 1.41 0 0 0-1.36 1.2l-.21 1a1.7 1.7 0 0 0 .33 1.4 1.35 1.35 0 0 0 1 .51h8.26a1.5 1.5 0 0 0 1.4-1.54 1.5 1.5 0 0 1 1.5-1.47zM13.1 8a4 4 0 0 1-8 0V6.43a3.36 3.36 0 0 1 3.36-3.36h1.31a3.36 3.36 0 0 1 3.33 3.36zM8.46 4.57A1.86 1.86 0 0 0 6.6 6.43L6.63 8a2.52 2.52 0 0 0 5 0V6.43a1.86 1.86 0 0 0-1.86-1.86zM20.68 8.25a3 3 0 0 1-6 0V7.1a2.52 2.52 0 0 1 2.48-2.52h1a2.52 2.52 0 0 1 2.52 2.52zm-3.5-2.15a1 1 0 0 0-1 1v1.15a1.5 1.5 0 0 0 3 0V7.1a1 1 0 0 0-1-1z" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default TwoPerson;