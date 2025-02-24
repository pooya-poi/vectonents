
import React from 'react';

interface WalletProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Wallet: React.FC<WalletProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M22 15.818a4.545 4.545 0 0 1-4.546 4.546H6.545A4.545 4.545 0 0 1 2 15.818V8.545A4.545 4.545 0 0 1 6.545 4h10.91A4.545 4.545 0 0 1 22 8.545zm0-2.536v-2.2h-4.546a1.1 1.1 0 0 0 0 2.2z" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M22 15.818a4.545 4.545 0 0 1-4.546 4.546H6.545A4.545 4.545 0 0 1 2 15.818V8.545A4.545 4.545 0 0 1 6.545 4h10.91A4.545 4.545 0 0 1 22 8.545zM6.545 5.628h10.91a2.92 2.92 0 0 1 2.918 2.917v.91h-2.919a2.727 2.727 0 0 0 0 5.454h2.919v.91a2.92 2.92 0 0 1-2.919 2.917H6.545a2.92 2.92 0 0 1-2.918-2.918V8.545a2.92 2.92 0 0 1 2.918-2.918m13.828 7.654v-2.2h-2.919a1.1 1.1 0 0 0 0 2.2z" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Wallet;