
import React from 'react';

interface PersonProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Person: React.FC<PersonProps> = ({
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
        <path fill="currentColor" d="M16.64 22H7.36a3.39 3.39 0 0 1-3.18-4.15l.24-1.14A3.29 3.29 0 0 1 7.59 14h8.82a3.29 3.29 0 0 1 3.17 2.71l.24 1.14A3.39 3.39 0 0 1 16.64 22M12.5 12h-1a4 4 0 0 1-4-4V5.36A3.35 3.35 0 0 1 10.86 2h2.28a3.35 3.35 0 0 1 3.36 3.36V8a4 4 0 0 1-4 4"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="m19.58 16.71.24 1.14A3.39 3.39 0 0 1 16.64 22H7.36a3.39 3.39 0 0 1-3.18-4.15l.24-1.14A3.29 3.29 0 0 1 7.59 14h8.82a3.29 3.29 0 0 1 3.17 2.71m-2.94 3.78a1.68 1.68 0 0 0 1.3-.64v.01a2.08 2.08 0 0 0 .41-1.72L18.11 17a1.79 1.79 0 0 0-1.7-1.51H7.59A1.79 1.79 0 0 0 5.89 17l-.24 1.14a2.08 2.08 0 0 0 .41 1.71 1.68 1.68 0 0 0 1.3.64zM12.5 12h-1a4 4 0 0 1-4-4V5.36A3.35 3.35 0 0 1 10.86 2h2.28a3.35 3.35 0 0 1 3.36 3.36V8a4 4 0 0 1-4 4m-1.64-8.5A1.86 1.86 0 0 0 9 5.36V8a2.5 2.5 0 0 0 2.5 2.5h1A2.5 2.5 0 0 0 15 8V5.36a1.86 1.86 0 0 0-1.86-1.86z" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Person;