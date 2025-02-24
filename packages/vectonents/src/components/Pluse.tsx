
import React from 'react';

interface PluseProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Pluse: React.FC<PluseProps> = ({
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
        <path fill="currentColor" d="M20.5 11H15a1 1 0 0 1-1-1V4.5a1.5 1.5 0 0 0-3 0V10a1 1 0 0 1-1 1H4.5a1.5 1.5 0 0 0 0 3H10a1 1 0 0 1 1 1v5.5a1.5 1.5 0 0 0 3 0V15a1 1 0 0 1 1-1h5.5a1.5 1.5 0 0 0 0-3"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M19.75 11H12.5V3.75a.75.75 0 0 0-1.5 0V11H3.75a.75.75 0 0 0 0 1.5H11v7.25a.75.75 0 0 0 1.5 0V12.5h7.25a.75.75 0 0 0 0-1.5"/>
      </>
    ) : null}
  </svg>
);

export default Pluse;