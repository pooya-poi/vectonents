
import React from 'react';

interface SunProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Sun: React.FC<SunProps> = ({
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
        <path fill="currentColor" d="M16.75 11.75a5 5 0 1 1-10 0 5 5 0 0 1 10 0M11.75 5.5a.76.76 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v3a.76.76 0 0 0 .75.75M11.75 18a.76.76 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3a.76.76 0 0 0-.75-.75M6.27 7.33a.75.75 0 0 0 1.06-1.06L5.21 4.15a.75.75 0 1 0-1.06 1.06zM17.23 16.17a.75.75 0 0 0-1.06 1.06l2.12 2.12c.14.142.33.22.53.22a.75.75 0 0 0 .53-1.28zM5.5 11.75a.76.76 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5h3a.76.76 0 0 0 .75-.75M21.75 11h-3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5M6.27 16.17l-2.12 2.12a.75.75 0 0 0 1.06 1.06l2.12-2.12a.75.75 0 0 0-1.06-1.06M16.75 7.55c.2 0 .39-.078.53-.22l2.07-2.12a.75.75 0 1 0-1.06-1.06l-2.12 2.12a.75.75 0 0 0 .58 1.28"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M6.75 11.75a5 5 0 1 1 10 0 5 5 0 0 1-10 0m1.766 1.34a3.5 3.5 0 1 0 6.468-2.68 3.5 3.5 0 0 0-6.468 2.68" clipRule="evenodd"/><path fill="currentColor" d="M11.75 5.5a.76.76 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v3a.76.76 0 0 0 .75.75M11.75 18a.76.76 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3a.76.76 0 0 0-.75-.75M6.27 7.33a.75.75 0 0 0 1.06-1.06L5.21 4.15a.75.75 0 1 0-1.06 1.06zM17.23 16.17a.75.75 0 0 0-1.06 1.06l2.12 2.12c.14.142.33.22.53.22a.75.75 0 0 0 .53-1.28zM5.5 11.75a.76.76 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5h3a.76.76 0 0 0 .75-.75M21.75 11h-3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5M6.27 16.17l-2.12 2.12a.75.75 0 0 0 1.06 1.06l2.12-2.12a.75.75 0 0 0-1.06-1.06M16.75 7.55c.2 0 .39-.078.53-.22l2.07-2.12a.75.75 0 1 0-1.06-1.06l-2.12 2.12a.75.75 0 0 0 .58 1.28"/>
      </>
    ) : null}
  </svg>
);

export default Sun;