import React from 'react';

interface ArrowRightProps {
  color?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}
const ArrowRight: React.FC<ArrowRightProps> = ({
  color,
  className = '',
  variants = 'filled',
}) => {
  const defaultColor = 'white';
  const fillColor = color || defaultColor;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-${fillColor} ${className}`}
    >
      {variants === 'filled' ? (
        <>
          <path fill="currentColor" d="m20.58 10.94-7-7a1.503 1.503 0 1 0-2.12 2.13l4.43 4.42H4.48a1.5 1.5 0 0 0 0 3h11.41l-4.43 4.42a1.5 1.5 0 0 0 1.06 2.56 1.48 1.48 0 0 0 1.06-.47l7-7a1.5 1.5 0 0 0 0-2.12z" />
        </>
      ) : variants === 'outlined' ? (
        <>
          <path fill="currentColor" d="m20.05 11.47-7-7A.753.753 0 0 0 12 5.55l5.71 5.7H4.48a.75.75 0 0 0 0 1.5H17.7l-5.7 5.7a.74.74 0 0 0 0 1.06.7.7 0 0 0 .53.22.74.74 0 0 0 .53-.22l7-7a.75.75 0 0 0 0-1.06z" />
        </>
      ) : null}
    </svg>
  );
};
export default ArrowRight;