
import React from 'react';

interface CommandProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Command: React.FC<CommandProps> = ({
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
        <path fill="currentColor" d="M7.923 8.68a1 1 0 0 1 .757-.97 1 1 0 0 1 1 .94v1h-1a1 1 0 0 1-.757-.97M7.71 15.56a1 1 0 1 0 1.94 0v-1h-1a1 1 0 0 0-.94 1M16.13 7.615a1 1 0 0 1 .4 1.065 1 1 0 0 1-.94 1h-1v-1a1 1 0 0 1 1.54-1.065M14.59 15.56a1 1 0 1 0 1-1h-1zM13.09 11.15h-1.94v1.94h1.94z"/><path fill="currentColor" fillRule="evenodd" d="M14.24 2H10a8 8 0 0 0-8 8v4.24a8 8 0 0 0 8 8h4.24a8 8 0 0 0 8-8V10a8 8 0 0 0-8-8m1.32 11.12a2.47 2.47 0 1 1-2.44 2.44v-1h-2v1a2.47 2.47 0 1 1-2.44-2.44h1v-2h-1a2.47 2.47 0 1 1 2.44-2.44v1h2v-1a2.47 2.47 0 1 1 2.44 2.44h-1v2z" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M15.5 14h2.25A3.75 3.75 0 1 1 14 17.75V15.5H9.5v2.25A3.75 3.75 0 1 1 5.75 14H8V9.5H5.75A3.75 3.75 0 1 1 9.5 5.75V8H14V5.75a3.75 3.75 0 1 1 3.75 3.75H15.5zm2.25-10.5a2.25 2.25 0 0 0-2.25 2.25V8h2.25a2.25 2.25 0 0 0 0-4.5M8 17.75a2.25 2.25 0 1 1-2.25-2.25H8zM5.75 8H8V5.75A2.25 2.25 0 1 0 5.75 8M14 14H9.5V9.5H14zm1.5 3.75a2.25 2.25 0 1 0 2.25-2.25H15.5z" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Command;