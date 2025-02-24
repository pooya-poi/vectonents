
import React from 'react';

interface RetryRefreshProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const RetryRefresh: React.FC<RetryRefreshProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M7.56 2h8.88A5.56 5.56 0 0 1 22 7.56v8.88A5.56 5.56 0 0 1 16.44 22H7.56A5.56 5.56 0 0 1 2 16.44V7.56A5.56 5.56 0 0 1 7.56 2M5.709 15.205A6.76 6.76 0 0 0 12 19.5a6.76 6.76 0 0 0 1.17-13.41l.16-.17a.83.83 0 0 0-1.17-1.18l-1.49 1.48a.82.82 0 0 0 0 1.18l1.49 1.49a.84.84 0 0 0 .58.24.87.87 0 0 0 .59-.24.82.82 0 0 0 .11-1A5.12 5.12 0 1 1 8.54 9a.831.831 0 0 0-1.13-1.22 6.76 6.76 0 0 0-1.701 7.425" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="m12.512 4.021.76-.76a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06-1.06l-.66-.66a7.23 7.23 0 1 1-5.79 1.86.75.75 0 0 0-1-1.1 8.75 8.75 0 1 0 6.7-2.28z"/>
      </>
    ) : null}
  </svg>
);

export default RetryRefresh;