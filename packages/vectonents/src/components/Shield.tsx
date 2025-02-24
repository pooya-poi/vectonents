
import React from 'react';

interface ShieldProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Shield: React.FC<ShieldProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="m22.107 12.79-1.69-8.14A3.33 3.33 0 0 0 17.157 2H7.107a3.33 3.33 0 0 0-3.31 2.65l-1.69 8.14a2.17 2.17 0 0 0 .79 2.43l7.93 5.76a2.16 2.16 0 0 0 2.56 0l7.93-5.76a2.17 2.17 0 0 0 .79-2.43M8.937 9l2.11-2.11a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06l-2.11 2.11a.7.7 0 0 1-.53.22.75.75 0 0 1-.53-1.28m.54 4.79 6.32-6.36v.04a.75.75 0 1 0-1.06-1.06l-6.32 6.32a.74.74 0 0 0 0 1.06.7.7 0 0 0 .53.22c.2.001.39-.078.53-.22" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="m14.736 6.37-6.32 6.33a.74.74 0 0 0 0 1.06c.14.141.331.22.53.22a.8.8 0 0 0 .53-.22l6.32-6.33a.74.74 0 0 0 0-1.06.75.75 0 0 0-1.06 0M9.466 10.29a.77.77 0 0 0 .53-.22l2.11-2.11a.75.75 0 0 0-1.06-1.06l-2.11 2.11a.75.75 0 0 0 0 1.06.8.8 0 0 0 .53.22"/><path fill="currentColor" fillRule="evenodd" d="m22.106 12.83-1.69-8.17A3.33 3.33 0 0 0 17.156 2H7.106a3.33 3.33 0 0 0-3.31 2.66l-1.69 8.17a2.19 2.19 0 0 0 .79 2.44l7.93 5.8a2.2 2.2 0 0 0 2.56 0l7.93-5.76a2.19 2.19 0 0 0 .79-2.48m-1.78 1.07-7.93 5.77a.51.51 0 0 1-.58 0l-7.93-5.77a.48.48 0 0 1-.18-.55 1 1 0 0 0 0-.18L5.446 5a1.65 1.65 0 0 1 1.66-1.31h10.1A1.65 1.65 0 0 1 18.816 5l1.69 8.17q-.006.09 0 .18a.48.48 0 0 1-.18.55" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Shield;