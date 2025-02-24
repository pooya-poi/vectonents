
import React from 'react';

interface SpaceShuttleProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const SpaceShuttle: React.FC<SpaceShuttleProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="m19.76 14.775-2.1-.7v-3.18a10.43 10.43 0 0 0-4.91-8.64 1.61 1.61 0 0 0-1.74 0 10.43 10.43 0 0 0-4.91 8.64v3.22l-2.1.7a1.47 1.47 0 0 0-1 1.4v4a1.87 1.87 0 0 0 2.46 1.77l1-.34a1.5 1.5 0 0 0 1.08.44h1.53a1.3 1.3 0 0 0 1.37-1.2v-2.69a1.37 1.37 0 0 1 1.44-1.27 1.37 1.37 0 0 1 1.44 1.27v2.61a1.3 1.3 0 0 0 1.37 1.2h1.52a1.5 1.5 0 0 0 1.08-.44l1 .34a1.87 1.87 0 0 0 2.48-1.79v-4a1.47 1.47 0 0 0-1.01-1.34m-7.13-.77a.75.75 0 0 1-1.5 0v-1.75a.75.75 0 0 1 1.5 0zm-2.28-5c0 .845.685 1.53 1.53 1.53a1.54 1.54 0 0 0 1.53-1.53 1.53 1.53 0 0 0-3.06 0" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M11.88 7.47A1.53 1.53 0 1 0 13.41 9a1.54 1.54 0 0 0-1.53-1.53M11.13 12.25a.76.76 0 0 1 .75-.75.76.76 0 0 1 .75.75V14a.75.75 0 1 1-1.5 0z"/><path fill="currentColor" fillRule="evenodd" d="m17.66 14.07 2.1.7c.582.201.978.744.99 1.36v4A1.87 1.87 0 0 1 18.88 22c-.2 0-.4-.033-.59-.1l-1-.34a1.5 1.5 0 0 1-1.08.44h-1.52a1.3 1.3 0 0 1-1.37-1.2v-2.61a1.37 1.37 0 0 0-1.44-1.27 1.37 1.37 0 0 0-1.44 1.27v2.61A1.3 1.3 0 0 1 9.07 22H7.55a1.5 1.5 0 0 1-1.08-.44l-1 .34A1.87 1.87 0 0 1 3 20.17v-4a1.47 1.47 0 0 1 1-1.4l2.1-.7v-3.18a10.43 10.43 0 0 1 4.91-8.64 1.6 1.6 0 0 1 .87-.25c.308-.004.61.083.87.25a10.43 10.43 0 0 1 4.91 8.64zM4.98 20.48l.32-.11.03-4.45-.82.27v3.94c0 .205.166.37.37.37zm11.08-.11h-1.18v-2.18a3 3 0 0 0-3-2.87 3 3 0 0 0-3 2.87v2.21H7.7v-9.51a8.88 8.88 0 0 1 4.18-7.29 8.88 8.88 0 0 1 4.19 7.3zm2.84.1a.37.37 0 0 0 .37-.37v-3.93l-.81-.27v4.46l.32.11z" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default SpaceShuttle;