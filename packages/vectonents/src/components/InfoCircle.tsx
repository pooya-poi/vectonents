
import React from 'react';

interface InfoCircleProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const InfoCircle: React.FC<InfoCircleProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M2 11.785C2 6.381 6.38 2 11.785 2c5.404 0 9.785 4.38 9.785 9.785 0 5.404-4.38 9.785-9.785 9.785C6.381 21.57 2 17.19 2 11.785m9.79 3.735a.75.75 0 0 1-.75-.75v-3.1a.75.75 0 0 1 1.5 0v3.12a.76.76 0 0 1-.75.73m-.75-6.27c0 .414.336.75.75.75a.76.76 0 0 0 .75-.73V8.9a.75.75 0 1 0-1.5 0z" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M11.79 8.04a.76.76 0 0 0 0 1.51.74.74 0 0 0 .75-.76.76.76 0 0 0-.75-.75M11.79 10.92a.74.74 0 0 0-.75.75v3.12a.75.75 0 0 0 1.5 0v-3.1a.75.75 0 0 0-.75-.77"/><path fill="currentColor" fillRule="evenodd" d="M11.79 2C6.385 2.006 2.006 6.385 2 11.79c0 5.407 4.383 9.79 9.79 9.79s9.79-4.383 9.79-9.79c-.005-5.405-4.385-9.784-9.79-9.79m0 18.08a8.29 8.29 0 1 1 8.29-8.29 8.3 8.3 0 0 1-8.29 8.29" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default InfoCircle;