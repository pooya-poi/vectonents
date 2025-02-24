
import React from 'react';

interface ForwardProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Forward: React.FC<ForwardProps> = ({
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
        <path fill="currentColor" d="m21 10.27-5.3-3.06a2 2 0 0 0-3 1.73v1.93a1.9 1.9 0 0 0-.63-.6L6.71 7.21a2 2 0 0 0-3 1.73v6.12a2 2 0 0 0 3 1.73L12 13.73a1.9 1.9 0 0 0 .63-.6v1.93a2 2 0 0 0 3 1.73L21 13.73a2 2 0 0 0 0-3.46"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="m20.12 10.27-5.3-3.06a2 2 0 0 0-3 1.73v1.93a1.94 1.94 0 0 0-.64-.6l-5.3-3.06a1.94 1.94 0 0 0-1-.28 2 2 0 0 0-2 2v6.12a2 2 0 0 0 2 2 1.94 1.94 0 0 0 1-.28l5.3-3.06a1.94 1.94 0 0 0 .64-.6v1.93a2 2 0 0 0 3 1.73l5.3-3.06a2 2 0 0 0 0-3.44m-9.91 1.78-5.33 3.07a.06.06 0 0 1 0-.06V8.94a.05.05 0 0 1 0-.06L10.21 12zm3.61 3.07 5.33-3.07V12l-5.33-3.12-.06.06v6.12c0 .06.06.06.06.06" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Forward;