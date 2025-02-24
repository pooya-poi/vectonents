
import React from 'react';

interface NextProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Next: React.FC<NextProps> = ({
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
        <path fill="currentColor" d="M8.71 4.38 17 9.14c.63.36 1.104.94 1.33 1.63V4.05a.75.75 0 0 1 1.5 0V20a.75.75 0 1 1-1.5 0v-7.29A2.93 2.93 0 0 1 17 14.34L8.71 19.1a3 3 0 0 1-4.5-2.6V7a3 3 0 0 1 4.5-2.62"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M18.25 4.05A.75.75 0 0 1 19 3.3a.76.76 0 0 1 .83.75V20a.75.75 0 0 1-1.5 0v-7.29A2.93 2.93 0 0 1 17 14.34l-8.29 4.75a2.94 2.94 0 0 1-1.49.41 3 3 0 0 1-3-3V7a3 3 0 0 1 3-3 2.94 2.94 0 0 1 1.49.38L17 9.14a2.93 2.93 0 0 1 1.25 1.63zM8 17.8l8.21-4.8.04.04a1.5 1.5 0 0 0 0-2.6L8 5.68a1.4 1.4 0 0 0-.78-.21A1.52 1.52 0 0 0 5.71 7v9.5a1.52 1.52 0 0 0 1.55 1.51c.261 0 .518-.073.74-.21" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Next;