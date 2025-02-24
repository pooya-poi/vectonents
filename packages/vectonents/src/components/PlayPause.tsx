
import React from 'react';

interface PlayPauseProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const PlayPause: React.FC<PlayPauseProps> = ({
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
        <path fill="currentColor" d="M10.57 9.83 5.75 7.05A2.5 2.5 0 0 0 2 9.22v5.56A2.5 2.5 0 0 0 5.75 17l4.82-2.78a2.51 2.51 0 0 0 0-4.39M15.3 6.62a1 1 0 0 0-1 1v8.89a1 1 0 1 0 2 0V7.62a1 1 0 0 0-1-1M21 6.62a1 1 0 0 0-1 1v8.89a1 1 0 1 0 2 0V7.62a1 1 0 0 0-1-1"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="m5.87 7.08 4.82 2.79a2.5 2.5 0 0 1 0 4.35L5.87 17a2.4 2.4 0 0 1-1.25.32 2.5 2.5 0 0 1-2.5-2.5V9.25a2.49 2.49 0 0 1 3.75-2.17m-.75 8.6 4.82-2.81v.04a1 1 0 0 0 0-1.73L5.12 8.39a1 1 0 0 0-.5-.14 1 1 0 0 0-1 1v5.57a1 1 0 0 0 1.5.86" clipRule="evenodd"/><path fill="currentColor" d="M15.42 6.9a.76.76 0 0 0-.75.75v8.89a.75.75 0 0 0 1.5 0V7.65a.75.75 0 0 0-.75-.75M21.13 6.9a.76.76 0 0 0-.75.75v8.89a.75.75 0 0 0 1.5 0V7.65a.76.76 0 0 0-.75-.75"/>
      </>
    ) : null}
  </svg>
);

export default PlayPause;