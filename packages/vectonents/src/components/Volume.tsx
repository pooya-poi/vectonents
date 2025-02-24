
import React from 'react';

interface VolumeProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Volume: React.FC<VolumeProps> = ({
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
        <path fill="currentColor" d="m16.07 3.88-6.4 4.27a2.2 2.2 0 0 1-1.24.38H6.7a2.22 2.22 0 0 0-2.23 2.22v2.5a2.22 2.22 0 0 0 2.23 2.22h1.73c.442 0 .874.132 1.24.38l6.4 4.27a2.23 2.23 0 0 0 3.46-1.85V5.73a2.23 2.23 0 0 0-3.46-1.85"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M16.51 3.88a2.2 2.2 0 0 1 1.23-.37A2.21 2.21 0 0 1 20 5.73v12.54a2.23 2.23 0 0 1-3.49 1.85l-6.4-4.27a2.2 2.2 0 0 0-1.24-.38H7.14a2.22 2.22 0 0 1-2.23-2.22v-2.5a2.22 2.22 0 0 1 2.23-2.22h1.73a2.2 2.2 0 0 0 1.24-.38zm1.23 15.11c.4 0 .725-.32.73-.72V5.73a.73.73 0 0 0-1.13-.6l-6.4 4.27a3.7 3.7 0 0 1-2.07.6H7.14a.73.73 0 0 0-.73.78v2.5c.005.4.33.72.73.72h1.73a3.7 3.7 0 0 1 2.07.6l6.4 4.27a.75.75 0 0 0 .4.12" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Volume;