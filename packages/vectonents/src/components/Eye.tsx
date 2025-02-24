
import React from 'react';

interface EyeProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Eye: React.FC<EyeProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="m17.028 7.65 4.18 3.34a1.14 1.14 0 0 1 0 1.78l-4.18 3.34a7.55 7.55 0 0 1-9.42 0l-4.18-3.34a1.14 1.14 0 0 1 0-1.78l4.18-3.34a7.55 7.55 0 0 1 9.42 0m-7.01 4.23a2.3 2.3 0 1 0 4.6 0 2.3 2.3 0 0 0-4.6 0" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M9.126 12.148c0-1.544 1.192-2.796 2.663-2.796s2.663 1.252 2.663 2.796-1.192 2.796-2.663 2.796-2.663-1.252-2.663-2.796m1.737 0c0 .537.414.973.926.973.511 0 .926-.436.926-.973s-.415-.973-.926-.973-.926.436-.926.973" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m17.243 7.005 4.84 4.06c.313.264.495.662.495 1.083s-.183.819-.495 1.082l-4.84 4.06c-3.19 2.674-7.718 2.674-10.908 0l-4.84-4.06A1.41 1.41 0 0 1 1 12.148c0-.42.182-.819.495-1.082l4.84-4.06c3.19-2.674 7.718-2.674 10.907 0M7.412 15.93c2.562 2.14 6.192 2.14 8.754 0l4.423-3.781-4.423-3.72c-2.562-2.141-6.192-2.141-8.754 0l-4.423 3.72z" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Eye;