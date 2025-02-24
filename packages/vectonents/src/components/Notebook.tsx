
import React from 'react';

interface NotebookProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Notebook: React.FC<NotebookProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M12.597 3h5.88a3 3 0 0 1 3 3v11.29a3 3 0 0 1-3 3h-5.88a3 3 0 0 1-3-3v-3.48h2.32a2 2 0 0 0 2-2v-.33a2 2 0 0 0-2-2h-2.32V6a3 3 0 0 1 3-3m2.35 4.64h3.35a.75.75 0 0 0 0-1.5h-3.35a.75.75 0 1 0 0 1.5" clipRule="evenodd"/><path fill="currentColor" d="M12.047 10.45h-2.43v2.4h2.43a.91.91 0 0 0 .91-.91v-.58a.91.91 0 0 0-.91-.91"/><path fill="currentColor" fillRule="evenodd" d="M2.007 6.43a3.18 3.18 0 0 1 2.92-3.38 3.17 3.17 0 0 1 2.89 3.38v9.32a2.4 2.4 0 0 1-.38 1.35l-1.87 2.89a.75.75 0 0 1-1.31 0l-1.87-2.89a2.5 2.5 0 0 1-.38-1.35zm2.91 3.72a.75.75 0 0 0 .75-.75V5.94a.74.74 0 0 0-.75-.75.75.75 0 0 0-.75.75V9.4c0 .414.336.75.75.75" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M18.518 3h-5.92a3 3 0 0 0-3 3v11.28a3 3 0 0 0 3 3h5.92a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m-7.38 8h.82a.5.5 0 0 1 .5.5v.32a.5.5 0 0 1-.5.5h-.82zm7.38 7.8a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5h-5.92a1.5 1.5 0 0 0-1.5 1.5v3.48h.82a2 2 0 0 1 2 2v.32a2 2 0 0 1-2 2h-.82v3.5a1.5 1.5 0 0 0 1.5 1.5zM2.008 6.42a3.17 3.17 0 0 1 2.92-3.38 3.17 3.17 0 0 1 2.89 3.39v9.27a2.4 2.4 0 0 1-.38 1.36l-1.87 2.89a.75.75 0 0 1-1.31 0l-1.87-2.89a2.53 2.53 0 0 1-.38-1.36zm4.16 9.82a1 1 0 0 0 .15-.54l.02-9.28c.01-1.02-.64-1.88-1.41-1.88-.76 0-1.41.88-1.41 1.88v9.28a1 1 0 0 0 .13.54l1.26 2z" clipRule="evenodd"/><path fill="currentColor" d="M4.918 5.18a.75.75 0 0 0-.75.75v3.46a.75.75 0 0 0 1.5 0V5.93a.74.74 0 0 0-.75-.75M18.298 6.14h-3.35a.75.75 0 0 0 0 1.5h3.35a.75.75 0 0 0 0-1.5"/>
      </>
    ) : null}
  </svg>
);

export default Notebook;