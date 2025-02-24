
import React from 'react';

interface ShareProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Share: React.FC<ShareProps> = ({
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
        <path fill="currentColor" d="M16.238 15.594a2.53 2.53 0 0 0-2.46-.12l-3-3a2.52 2.52 0 0 0 .14-1.61 2 2 0 0 0-.08-.22l2.94-2.94a2.48 2.48 0 1 0-1.06-1l-2.77 2.73a2.5 2.5 0 1 0-.83 4.46q.352-.104.66-.3l3 3a2.49 2.49 0 1 0 3.5-1z"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M14.953 15.23c.451.002.894.126 1.28.36h-.01a2.49 2.49 0 1 1-3.49 1l-2.93-2.99a2.6 2.6 0 0 1-.68.29q-.3.077-.61.08a2.5 2.5 0 1 1 0-5c.516 0 1.02.161 1.44.46l2.78-2.78A2.48 2.48 0 0 1 14.953 3a2.47 2.47 0 0 1 1.28.35 2.51 2.51 0 0 1-2.42 4.4l-2.94 2.94q.05.107.08.22a2.46 2.46 0 0 1-.15 1.61l3 3a2.55 2.55 0 0 1 1.15-.29m0-10.73a1 1 0 0 0-.86.48 1 1 0 0 0-.11.76.94.94 0 0 0 .45.61 1 1 0 0 0 .51.15 1 1 0 0 0 .86-.49 1 1 0 0 0-.34-1.37.94.94 0 0 0-.51-.14m-6.44 7.97a1 1 0 0 1-1-.76 1 1 0 0 1 .12-.76 1 1 0 0 1 .61-.45h.24a1 1 0 0 1 .89 1.51l-.06.07a1 1 0 0 1-.55.39zm6.43 6.21a1 1 0 0 0 .86-.48 1 1 0 0 0-.34-1.32 1 1 0 0 0-.51-.15 1 1 0 0 0-.86.49 1 1 0 0 0 .34 1.37.94.94 0 0 0 .51.09" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Share;