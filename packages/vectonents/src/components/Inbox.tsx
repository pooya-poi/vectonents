
import React from 'react';

interface InboxProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Inbox: React.FC<InboxProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M18.714 3a2.72 2.72 0 0 1 2.52 2.29l.68 11.81c.14 2.44-1.49 4.44-3.55 4.44H5.573c-2.1 0-3.74-2.09-3.56-4.53l.87-11.72A2.72 2.72 0 0 1 5.404 3zm-1.85 11.13h1.85l-.1.04a.71.71 0 0 0 0-1.42h-1.85a3.52 3.52 0 0 0-3 2 2.13 2.13 0 0 1-3.82 0 3.5 3.5 0 0 0-3-2h-1.73a.71.71 0 0 0 0 1.42h1.73c.78.03 1.48.487 1.82 1.19a3.55 3.55 0 0 0 6.32 0 2.11 2.11 0 0 1 1.78-1.23" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M21.233 5.29A2.72 2.72 0 0 0 18.713 3H5.403a2.72 2.72 0 0 0-2.52 2.29l-.87 11.72c-.18 2.44 1.47 4.53 3.56 4.53h12.79c2.06 0 3.69-2 3.55-4.44zm-15.83-.75h13.31a1.22 1.22 0 0 1 1 1l.42 7.16h-3.27a3.53 3.53 0 0 0-3.06 2 2.1 2.1 0 0 1-3.76 0 3.52 3.52 0 0 0-3.06-2h-3.14l.53-7.15a1.23 1.23 0 0 1 1.03-1.01m12.96 15.5a1.82 1.82 0 0 0 1.3-.6 3 3 0 0 0 .73-2.23l-.17-3h-3.38a2.07 2.07 0 0 0-1.74 1.2 3.58 3.58 0 0 1-6.39 0 2.08 2.08 0 0 0-1.75-1.2h-3.23l-.22 2.91a3.1 3.1 0 0 0 .74 2.3 1.82 1.82 0 0 0 1.32.62z" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Inbox;