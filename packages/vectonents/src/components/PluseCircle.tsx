
import React from 'react';

interface PluseCircleProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const PluseCircle: React.FC<PluseCircleProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M11.44 2h1.12A9.44 9.44 0 0 1 22 11.44v1.12A9.44 9.44 0 0 1 12.56 22h-1.12A9.44 9.44 0 0 1 2 12.56v-1.12A9.44 9.44 0 0 1 11.44 2m1.31 10.75H16a.75.75 0 0 0 0-1.5h-3.25V8a.75.75 0 0 0-1.5 0v3.25H8a.75.75 0 0 0 0 1.5h3.25V16a.75.75 0 0 0 1.5 0z" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M11.44 2h1.12A9.44 9.44 0 0 1 22 11.44v1.12A9.44 9.44 0 0 1 12.56 22h-1.12A9.44 9.44 0 0 1 2 12.56v-1.12A9.44 9.44 0 0 1 11.44 2m1.12 18.5a8 8 0 0 0 7.94-7.94v-1.12a8 8 0 0 0-7.94-7.94h-1.12a8 8 0 0 0-7.94 7.94v1.12a8 8 0 0 0 7.94 7.94z" clipRule="evenodd"/><path fill="currentColor" d="M16 11.25h-3.25V8a.75.75 0 0 0-1.5 0v3.25H8a.75.75 0 0 0 0 1.5h3.25V16a.75.75 0 0 0 1.5 0v-3.25H16a.75.75 0 0 0 0-1.5"/>
      </>
    ) : null}
  </svg>
);

export default PluseCircle;