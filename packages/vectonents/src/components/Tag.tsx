
import React from 'react';

interface TagProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Tag: React.FC<TagProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="m12.53 2.53 8.45 8.45a2.36 2.36 0 0 1-.35 3.28l-6.37 6.37a2.36 2.36 0 0 1-3.28.35l-8.45-8.45a1.87 1.87 0 0 1-.52-1.49l.44-6a2.9 2.9 0 0 1 2.59-2.59l6-.44a1.87 1.87 0 0 1 1.49.52M7.68 9.107c.377 0 .739-.155 1-.429a1.38 1.38 0 0 0 0-2 1.414 1.414 0 0 0-2 2c.26.274.621.43 1 .43" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M7.58 9.08a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/><path fill="currentColor" fillRule="evenodd" d="M11.16 2.02h-.08l-6 .43a2.9 2.9 0 0 0-2.63 2.63l-.44 6a1.89 1.89 0 0 0 .52 1.5l8.44 8.44c.356.344.835.53 1.33.52a2.8 2.8 0 0 0 2-.87l6.37-6.36a2.37 2.37 0 0 0 .35-3.29l-8.49-8.5A1.9 1.9 0 0 0 11.2 2zm.04 1.61a.3.3 0 0 1 .18 0l8.45 8.45a1 1 0 0 1-.36 1l-6.39 6.39c-.211.229-.5.368-.81.39h-.17l-8.42-8.49a.3.3 0 0 1 0-.22l.44-6a1.27 1.27 0 0 1 1.04-1.07l6-.43z" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Tag;