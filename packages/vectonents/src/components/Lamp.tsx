
import React from 'react';

interface LampProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Lamp: React.FC<LampProps> = ({
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
        <path fill="currentColor" d="M13.03 5.46a.76.76 0 0 1-.75.75.76.76 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0z"/><path fill="currentColor" fillRule="evenodd" d="M12.35 7.13h-.07a5 5 0 0 0-4.09 8 8 8 0 0 1 1.59 4.62 2.52 2.52 0 0 0 5 0 7 7 0 0 1 1.41-4.45 5 5 0 0 0 1.09-3 5.11 5.11 0 0 0-4.93-5.17m-.07 13.62a1 1 0 0 1-1-1v-.26h2.06v.28a1 1 0 0 1-1.06.98" clipRule="evenodd"/><path fill="currentColor" d="m12.28 7.13.05 1.5a3.54 3.54 0 0 1 2.72 5.74 8.15 8.15 0 0 0-1.58 3.58h-2.4a10.1 10.1 0 0 0-1.68-3.73 3.54 3.54 0 0 1 2.89-5.59zM19.59 4.87a.75.75 0 0 0-1.06 0l-1.87 1.86a.77.77 0 0 0 0 1.07.79.79 0 0 0 1.07 0l1.86-1.87a.75.75 0 0 0 0-1.06M19 11.03h2.63a.75.75 0 0 1 0 1.5H19a.75.75 0 0 1 0-1.5M5.38 11.03H2.75a.75.75 0 0 0 0 1.5h2.63a.75.75 0 0 0 0-1.5M8.014 7.265a.75.75 0 0 1-.224.535.77.77 0 0 1-1.06 0L4.87 5.93a.75.75 0 1 1 1.06-1.06l1.86 1.86a.75.75 0 0 1 .224.535"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M12.35 7.12a5 5 0 0 0-5.11 5 5.1 5.1 0 0 0 .95 3 8 8 0 0 1 1.59 4.62 2.52 2.52 0 0 0 5 0 7 7 0 0 1 1.41-4.44 5 5 0 0 0 1.09-3 5.1 5.1 0 0 0-4.93-5.18m-1.26 12.31a.76.76 0 0 1 0-1.5h2.3a.76.76 0 0 1 0 1.5zm3.84-7.47a.75.75 0 0 0 .73.76l.04.01a.74.74 0 0 0 .73-.73 4 4 0 0 0-3.94-4.07.75.75 0 0 0 0 1.5 2.55 2.55 0 0 1 2.44 2.53" clipRule="evenodd"/><path fill="currentColor" d="M12.28 6.21a.76.76 0 0 0 .75-.75V2.75a.75.75 0 1 0-1.5 0v2.71a.76.76 0 0 0 .75.75M19.59 4.87a.75.75 0 0 0-1.06 0l-1.87 1.86a.75.75 0 0 0 1.06 1.06l1.87-1.86a.75.75 0 0 0 0-1.06M21.63 11.03H19a.75.75 0 0 0 0 1.5h2.63a.75.75 0 0 0 0-1.5M5.38 11.03H2.75a.75.75 0 0 0 0 1.5h2.63a.75.75 0 0 0 0-1.5M7.79 7.79a.74.74 0 0 0 0-1.06L5.93 4.87a.75.75 0 1 0-1.06 1.06l1.86 1.86c.14.142.33.22.53.22a.73.73 0 0 0 .53-.22"/>
      </>
    ) : null}
  </svg>
);

export default Lamp;