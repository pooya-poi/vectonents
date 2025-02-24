
import React from 'react';

interface TrashProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Trash: React.FC<TrashProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M18.75 5h-2.67l-1.21-1.32A2.37 2.37 0 0 0 13.21 3h-2.92a2.4 2.4 0 0 0-1.68.71L7.42 5H4.75a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5m-9.06-.26a.86.86 0 0 1 .6-.25h2.92a.84.84 0 0 1 .58.23l.25.27H9.46zM4.23 9.52V17a4.46 4.46 0 0 0 4.46 4.46h6.12A4.46 4.46 0 0 0 19.27 17V9.52a2 2 0 0 0-2-2h-11a2 2 0 0 0-2.04 2m5.27 3.53a.75.75 0 0 1-1.5 0v-2.37a.75.75 0 0 1 1.5 0zm2.25 4.7a.75.75 0 0 0 .75-.75v-6.32a.75.75 0 0 0-1.5 0V17c0 .414.336.75.75.75m3.75-4.7a.75.75 0 0 1-1.5 0v-2.37a.75.75 0 0 1 1.5 0z" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M18.79 7a.79.79 0 0 0-.79.79v8.84A3.37 3.37 0 0 1 14.63 20H8.95a3.37 3.37 0 0 1-3.37-3.37V7.79a.79.79 0 1 0-1.58 0v8.84a5 5 0 0 0 5 4.95h5.68a5 5 0 0 0 4.95-4.95V7.79a.79.79 0 0 0-.84-.79"/><path fill="currentColor" fillRule="evenodd" d="M18.79 5.58h-14a.79.79 0 1 1 0-1.58h2.65l1.18-1.28A2.4 2.4 0 0 1 10.33 2h2.92a2.4 2.4 0 0 1 1.69.7l1.2 1.3h2.65a.79.79 0 1 1 0 1.58m-5.54-2h-2.92a.8.8 0 0 0-.54.21l-.19.2h4.38l-.19-.2a.78.78 0 0 0-.54-.21" clipRule="evenodd"/><path fill="currentColor" d="M8.04 8.79v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0M11.04 8.79v8a.75.75 0 0 0 1.5 0v-8a.75.75 0 0 0-1.5 0M14.04 8.79v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0"/>
      </>
    ) : null}
  </svg>
);

export default Trash;