
import React from 'react';

interface PluseRegtangleProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const PluseRegtangle: React.FC<PluseRegtangleProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m6.75 10.75H16a.75.75 0 0 0 0-1.5h-3.25V8a.75.75 0 0 0-1.5 0v3.25H8a.75.75 0 0 0 0 1.5h3.25V16a.75.75 0 0 0 1.5 0z" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m13.704 17.704A2.4 2.4 0 0 0 20.41 18V6A2.41 2.41 0 0 0 18 3.59H6A2.41 2.41 0 0 0 3.59 6v12A2.41 2.41 0 0 0 6 20.41h12a2.4 2.4 0 0 0 1.704-.706" clipRule="evenodd"/><path fill="currentColor" d="M16 11.25h-3.25V8a.75.75 0 0 0-1.5 0v3.25H8a.75.75 0 0 0 0 1.5h3.25V16a.75.75 0 0 0 1.5 0v-3.25H16a.75.75 0 0 0 0-1.5"/>
      </>
    ) : null}
  </svg>
);

export default PluseRegtangle;