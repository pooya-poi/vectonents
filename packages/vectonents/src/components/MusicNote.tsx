
import React from 'react';

interface MusicNoteProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const MusicNote: React.FC<MusicNoteProps> = ({
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
        <path fill="currentColor" d="M19.75 6.3A2.84 2.84 0 0 0 18.44 4a3.93 3.93 0 0 0-3.59-.36L10.3 5.41a3 3 0 0 0-2 2.7v7.32a2.7 2.7 0 0 0-1.3-.32 2.79 2.79 0 1 0 2.79 2.78 1 1 0 0 0 0-.16V8.11a1.52 1.52 0 0 1 1.07-1.31L15.4 5a2.44 2.44 0 0 1 2.2.22c.385.233.628.641.65 1.09v7.27a2.74 2.74 0 0 0-1.3-.34 2.79 2.79 0 1 0 2.77 2.93.7.7 0 0 0 0-.14z"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M19.64 6.88a2.82 2.82 0 0 0-1.31-2.34 3.9 3.9 0 0 0-3.59-.37L10.19 6a3 3 0 0 0-2 2.7V16a2.7 2.7 0 0 0-1.27-.32 2.79 2.79 0 1 0 2.79 2.79V8.68a1.5 1.5 0 0 1 1.06-1.3l4.54-1.81a2.41 2.41 0 0 1 2.2.21c.385.237.628.649.65 1.1v7.26a2.79 2.79 0 1 0 1.47 2.59.7.7 0 0 0 0-.14zM6.92 19.75a1.29 1.29 0 1 1 1.27-1.37v.17a1.27 1.27 0 0 1-1.27 1.2m8.721-2.66a1.29 1.29 0 0 0 1.199.79 1.28 1.28 0 0 0 1.28-1.29 1.29 1.29 0 1 0-2.479.5" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default MusicNote;