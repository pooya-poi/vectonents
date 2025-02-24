
import React from 'react';

interface ListCaptionProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const ListCaption: React.FC<ListCaptionProps> = ({
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
        <path fill="currentColor" d="M15.62 11H6a1 1 0 1 1 0-2h9.62a1 1 0 1 1 0 2M6 14h12.82a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M15.37 10.5H5.75a.75.75 0 0 1 0-1.5h9.62a.75.75 0 0 1 0 1.5M5.75 14h12.82a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1 0-1.5"/>
      </>
    ) : null}
  </svg>
);

export default ListCaption;