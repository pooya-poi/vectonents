
import React from 'react';

interface HeartProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Heart: React.FC<HeartProps> = ({
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
        <path fill="currentColor" d="M22.1 9.1C22 5.7 19.3 3 15.9 3c-1.1 0-2.8.8-3.5 2.1-.1.3-.5.3-.6 0-.8-1.2-2.4-2-3.6-2-3.3 0-6.1 2.7-6.2 6v.2c0 1.7.7 3.3 1.9 4.5v.1c.1.1 4.9 4.3 7.1 6.2.6.5 1.5.5 2.1 0 2.2-1.9 6.9-6.1 7.1-6.2v-.1c1.2-1.1 1.9-2.7 1.9-4.5z"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M12.1 20.8c-.5 0-1.1-.2-1.5-.6C4.1 14.5 4 14.4 4 14.3l-.1-.1C2.7 13 2 11.3 2 9.6v-.2C2.1 5.8 5 3 8.6 3c1.1 0 2.6.6 3.5 1.8C13 3.6 14.6 3 15.7 3c3.6 0 6.4 2.8 6.6 6.4v.2c0 1.8-.7 3.4-1.9 4.7l-.1.1c-.1.1-.9.8-6.6 5.9-.5.3-1 .5-1.6.5M5.5 14c.4.4 2.4 1.8 6.1 5 .3.3.7.3 1 0 3.8-3.4 6-5.3 6.5-5.7l.1-.1c1-1 1.5-2.3 1.5-3.6v-.2c-.1-2.8-2.3-4.9-5.1-4.9-.7 0-2.1.5-2.6 1.6-.2.4-.6.6-1 .6s-.8-.2-1-.6c-.5-1-1.8-1.6-2.6-1.6-2.7 0-5 2.2-5.1 4.9v.3c0 1.3.6 2.6 1.5 3.5z"/>
      </>
    ) : null}
  </svg>
);

export default Heart;