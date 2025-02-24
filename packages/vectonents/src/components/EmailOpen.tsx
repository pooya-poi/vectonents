
import React from 'react';

interface EmailOpenProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const EmailOpen: React.FC<EmailOpenProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="m13.29 2.525 6.85 4.81a4 4 0 0 1 1.7 3.28v7.13a4.27 4.27 0 0 1-4.28 4.26H6.28A4.27 4.27 0 0 1 2 17.745v-7.13a4 4 0 0 1 1.7-3.28l6.85-4.81c.78-.7 1.96-.7 2.74 0m.09 13.48 5.47-3.81-.04.05a.75.75 0 1 0-.86-1.23l-5.54 3.87a.83.83 0 0 1-1.22-.05l-5.38-3.82a.74.74 0 0 0-1 .18.75.75 0 0 0 .18 1l5.3 3.76a2.4 2.4 0 0 0 1.6.63 2.17 2.17 0 0 0 1.49-.58" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="m13.29 2.543 6.85 4.81a4 4 0 0 1 1.7 3.27v7.13a4.27 4.27 0 0 1-4.28 4.26H6.28A4.27 4.27 0 0 1 2 17.753v-7.13a4 4 0 0 1 1.7-3.27l6.85-4.81a2 2 0 0 1 2.74 0m6.232 17.166a2.77 2.77 0 0 0 .818-1.956v-7.13a2.5 2.5 0 0 0-1.06-2l-6.85-4.81-.11-.08a.56.56 0 0 0-.8 0l-.11.08-6.85 4.81a2.5 2.5 0 0 0-1.06 2v7.13a2.77 2.77 0 0 0 2.78 2.76h11.28a2.77 2.77 0 0 0 1.962-.804" clipRule="evenodd"/><path fill="currentColor" d="m17.99 11.013-5.54 3.87a.83.83 0 0 1-1.22-.05l-5.38-3.82a.75.75 0 1 0-.86 1.22l5.3 3.78a2.35 2.35 0 0 0 1.6.63 2.2 2.2 0 0 0 1.49-.63l5.47-3.82a.75.75 0 0 0 .19-1 .76.76 0 0 0-1.05-.18"/>
      </>
    ) : null}
  </svg>
);

export default EmailOpen;