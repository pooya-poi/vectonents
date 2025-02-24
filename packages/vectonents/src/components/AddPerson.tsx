
import React from 'react';

interface AddPersonProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const AddPerson: React.FC<AddPersonProps> = ({
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
        <path fill="currentColor" d="M14.65 22H5.36a3.38 3.38 0 0 1-3.17-4.15l.23-1.14A3.29 3.29 0 0 1 5.59 14h8.82a3.3 3.3 0 0 1 3.18 2.71l.23 1.14A3.39 3.39 0 0 1 14.65 22M10.5 12h-1a4 4 0 0 1-4-4V5.36A3.36 3.36 0 0 1 8.86 2h2.28a3.35 3.35 0 0 1 3.36 3.36V8a4 4 0 0 1-4 4M21 6.25h-1.37V4.88a.75.75 0 0 0-1.5 0v1.37h-1.36a.75.75 0 0 0 0 1.5h1.36v1.37a.75.75 0 0 0 1.5 0V7.75H21a.75.75 0 0 0 0-1.5"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M14.29 14a3.3 3.3 0 0 1 3.18 2.71l.23 1.14A3.39 3.39 0 0 1 14.53 22H5.24a3.38 3.38 0 0 1-3.17-4.15l.23-1.14A3.29 3.29 0 0 1 5.47 14zm.24 6.5a1.65 1.65 0 0 0 1.29-.64 2 2 0 0 0 .41-1.72L16 17a1.81 1.81 0 0 0-1.71-1.51H5.47A1.8 1.8 0 0 0 3.77 17l-.18 1.15A2 2 0 0 0 4 19.86c.298.386.752.62 1.24.64zM10.38 12h-1a4 4 0 0 1-4-4V5.36A3.36 3.36 0 0 1 8.74 2H11a3.35 3.35 0 0 1 3.38 3.36V8a4 4 0 0 1-4 4M8.74 3.5a1.86 1.86 0 0 0-1.86 1.86V8a2.51 2.51 0 0 0 2.48 2.5h1a2.5 2.5 0 0 0 2.5-2.5V5.36A1.86 1.86 0 0 0 11 3.5z" clipRule="evenodd"/><path fill="currentColor" d="M21.38 6.25H20V4.88a.75.75 0 0 0-1.5 0v1.37h-1.36a.75.75 0 0 0 0 1.5h1.37v1.37a.75.75 0 0 0 1.5 0V7.75h1.37a.75.75 0 0 0 0-1.5"/>
      </>
    ) : null}
  </svg>
);

export default AddPerson;