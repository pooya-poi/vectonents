
import React from 'react';

interface ExternalLinkProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
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
        <path fill="currentColor" d="m17.34 7.04-4.24 4.24a.75.75 0 0 1-1.06-1.06l4.24-4.24a4.4 4.4 0 0 0-2.44-.77H7.33A4.33 4.33 0 0 0 3 9.51v6.48a4.33 4.33 0 0 0 4.33 4.33h6.48a4.33 4.33 0 0 0 4.33-4.33V9.54a4.33 4.33 0 0 0-.8-2.5"/><path fill="currentColor" d="M20.26 3.46a.7.7 0 0 0-.4-.4.8.8 0 0 0-.29-.06h-5a.75.75 0 0 0 0 1.5h3.19l-1.47 1.47c.41.29.77.65 1.06 1.06l1.47-1.47v3.19a.75.75 0 0 0 1.5 0v-5a.8.8 0 0 0-.06-.29"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M20.44 3.46a.76.76 0 0 0-.69-.46h-5a.75.75 0 0 0 0 1.5h3.19l-5.72 5.72a.75.75 0 0 0 1.06 1.06L19 5.56v3.19a.75.75 0 0 0 1.5 0v-5a.8.8 0 0 0-.06-.29"/><path fill="currentColor" d="M17.75 11a.76.76 0 0 0-.75.75v4A3.26 3.26 0 0 1 13.75 19h-6a3.26 3.26 0 0 1-3.25-3.25v-6A3.26 3.26 0 0 1 7.75 6.5h4a.75.75 0 0 0 0-1.5h-4A4.75 4.75 0 0 0 3 9.75v6a4.75 4.75 0 0 0 4.75 4.75h6a4.75 4.75 0 0 0 4.75-4.75v-4a.76.76 0 0 0-.75-.75"/>
      </>
    ) : null}
  </svg>
);

export default ExternalLink;