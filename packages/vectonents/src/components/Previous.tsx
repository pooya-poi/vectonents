
import React from 'react';

interface PreviousProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Previous: React.FC<PreviousProps> = ({
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
        <path fill="currentColor" d="M15.29 4.38 7 9.14a2.93 2.93 0 0 0-1.33 1.63V4.05a.75.75 0 1 0-1.5 0V20a.75.75 0 0 0 1.5 0v-7.29c.226.69.7 1.27 1.33 1.63l8.25 4.76a3 3 0 0 0 4.5-2.6V7a3 3 0 0 0-4.46-2.62"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M15.91 4.41a3 3 0 0 1 1.5-.41 3 3 0 0 1 3 3v9.54a3 3 0 0 1-4.5 2.6l-8.25-4.76a3 3 0 0 1-1.32-1.63V20a.75.75 0 0 1-1.5 0V4.09a.75.75 0 1 1 1.5 0v6.72a3 3 0 0 1 1.32-1.63zm1.5 13.63a1.51 1.51 0 0 0 1.5-1.51V7a1.51 1.51 0 0 0-1.5-1.49 1.47 1.47 0 0 0-.75.21l-8.25 4.76a1.5 1.5 0 0 0 0 2.6l8.25 4.75c.227.136.486.209.75.21" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Previous;