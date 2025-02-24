
import React from 'react';

interface EmailProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Email: React.FC<EmailProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M6 4h12a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4m7.4 9.55 6.34-4.7a.64.64 0 0 0 .14-.89.62.62 0 0 0-.88-.13l-6.41 4.67a.85.85 0 0 1-1.23 0L5 7.83a.62.62 0 0 0-.87.13.64.64 0 0 0 .13.89l6.3 4.65c.392.372.91.582 1.45.59a2.06 2.06 0 0 0 1.39-.54" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M18 4H6a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4M6 5.59h12a2.4 2.4 0 0 1 2.3 1.73l-7.54 5.59a1.06 1.06 0 0 1-1.53-.05L3.72 7.33A2.4 2.4 0 0 1 6 5.59M3.59 17A2.41 2.41 0 0 0 6 19.41h12A2.41 2.41 0 0 0 20.4 17V8.97l-6.8 5a2.35 2.35 0 0 1-1.6.63 2.5 2.5 0 0 1-1.66-.67l-6.75-5z" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Email;