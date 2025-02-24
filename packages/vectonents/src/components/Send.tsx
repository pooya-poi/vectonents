
import React from 'react';

interface SendProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Send: React.FC<SendProps> = ({
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
        <path fill="currentColor" d="m12.691 3.29 5.994 5.83a.98.98 0 0 1 .031 1.41 1.043 1.043 0 0 1-1.46 0L12.99 6.41v10.63c0 .553-.46 1-1.028 1s-1.028-.447-1.028-1V6.41l-4.236 4.12a1.05 1.05 0 0 1-1.396-.052.98.98 0 0 1-.054-1.357l5.994-5.83a1.05 1.05 0 0 1 1.45 0M6.82 19.04h10.282c.568 0 1.028.448 1.028 1 0 .553-.46 1-1.028 1H6.82c-.568 0-1.028-.447-1.028-1s.46-1 1.028-1"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="m13.024 3.22 5.76 5.82a.756.756 0 0 1 0 1.06.727.727 0 0 1-1.048 0l-4.495-4.54v11.23c0 .414-.332.75-.741.75a.746.746 0 0 1-.741-.75V5.56L7.264 10.1a.72.72 0 0 1-.524.22.73.73 0 0 1-.523-.22.756.756 0 0 1 0-1.06l5.76-5.82a.735.735 0 0 1 1.047 0M7.56 19.08h9.88c.409 0 .74.335.74.75 0 .414-.331.75-.74.75H7.56a.745.745 0 0 1-.74-.75c0-.415.331-.75.74-.75"/>
      </>
    ) : null}
  </svg>
);

export default Send;