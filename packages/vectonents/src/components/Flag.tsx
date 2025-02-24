
import React from 'react';

interface FlagProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Flag: React.FC<FlagProps> = ({
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
        <path fill="currentColor" d="M17.16 7.25h-.91a1.65 1.65 0 0 1-1.74-1.55v-.08a1.65 1.65 0 0 0-1.75-1.55H6.5v-.32a.75.75 0 0 0-1.5 0v17a.75.75 0 0 0 1.5 0v-8.28h1.17a1.65 1.65 0 0 1 1.74 1.55v.06a1.65 1.65 0 0 0 1.74 1.55h6a1.65 1.65 0 0 0 1.74-1.55v-5.3a1.66 1.66 0 0 0-1.73-1.53"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M5 3.77a.76.76 0 0 1 .75-.75L5.74 3a.75.75 0 0 1 .75.75v.32h6.26a1.65 1.65 0 0 1 1.74 1.55v.08a1.65 1.65 0 0 0 1.74 1.55h.91a1.66 1.66 0 0 1 1.75 1.53v5.3a1.65 1.65 0 0 1-1.74 1.55h-6a1.65 1.65 0 0 1-1.74-1.55v-.06a1.65 1.65 0 0 0-1.74-1.55H6.5v8.3a.75.75 0 0 1-1.5 0zm7.9 1.89a.27.27 0 0 0-.15 0v.02H6.59v5.22h1.08a3.24 3.24 0 0 1 3.32 3.05q.075.013.15 0h6q.075.013.15 0V8.78a.27.27 0 0 0-.15 0h-.91a3.24 3.24 0 0 1-3.33-3.12" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Flag;