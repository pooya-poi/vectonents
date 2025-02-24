
import React from 'react';

interface InstantProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Instant: React.FC<InstantProps> = ({
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
        <path fill="currentColor" d="m16.48 4.24-5.53 9.68a.6.6 0 0 0 .51.9h3.15c.657 0 1.19.533 1.19 1.19v4a.6.6 0 0 0 1.1.33l5.44-8.17a.59.59 0 0 0-.49-.92h-3.11a1.2 1.2 0 0 1-1.2-1.2V4.51a.59.59 0 0 0-1.06-.27M8.75 8.11h-4.8a.75.75 0 1 1 0-1.5h4.8a.75.75 0 0 1 0 1.5M7.55 12.84h-4.8a.75.75 0 0 1 0-1.5h4.8a.75.75 0 0 1 0 1.5M8.75 18.61h-4.8a.75.75 0 0 1 0-1.5h4.8a.75.75 0 0 1 0 1.5"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M20.95 9.11a2 2 0 0 1 1.77 1.06 2 2 0 0 1-.05 2.05l-4.57 6.85a2 2 0 0 1-3.7-1.1v-2.85h-2.14a2 2 0 0 1-1.74-3L15.16 4a2 2 0 0 1 3.73 1v4.11zm-4.15 9.13 4.57-6.85a.5.5 0 0 0-.42-.8h-2.56a1 1 0 0 1-1-1V4.98a.5.5 0 0 0-.51-.5.48.48 0 0 0-.43.27l-4.64 8.12a.5.5 0 0 0 .44.74h2.64a1 1 0 0 1 1 1v3.35a.5.5 0 0 0 .91.28" clipRule="evenodd"/><path fill="currentColor" d="M8.75 5.85h-4.8a.75.75 0 0 0 0 1.5h4.8a.75.75 0 0 0 0-1.5M8.3 11.33a.76.76 0 0 0-.75-.75h-4.8a.75.75 0 0 0 0 1.5h4.8a.75.75 0 0 0 .75-.75M8.75 16.35h-4.8a.75.75 0 0 0 0 1.5h4.8a.75.75 0 0 0 0-1.5"/>
      </>
    ) : null}
  </svg>
);

export default Instant;