
import React from 'react';

interface ExpandProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Expand: React.FC<ExpandProps> = ({
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
        <path fill="currentColor" d="M8.5 20H5a1 1 0 0 1-1-1v-3.5a1 1 0 1 0-2 0V19a3 3 0 0 0 3 3h3.5a1 1 0 1 0 0-2M21 14.5a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1h-3.5a1 1 0 1 0 0 2H19a3 3 0 0 0 3-3v-3.5a1 1 0 0 0-1-1M19 2h-3.5a1 1 0 1 0 0 2H19a1 1 0 0 1 1 1v3.5a1 1 0 1 0 2 0V5a3 3 0 0 0-3-3M8.5 2H5a3 3 0 0 0-3 3v3.5a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h3.5a1 1 0 0 0 0-2"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M18.694 2h-3.81a.816.816 0 1 0 0 1.633h3.81c.752 0 1.36.609 1.36 1.36v3.81a.816.816 0 0 0 1.634 0v-3.81A2.993 2.993 0 0 0 18.694 2M4.68 20.367h3.81a.816.816 0 0 1 0 1.633H4.68a2.993 2.993 0 0 1-2.992-2.993v-3.81a.816.816 0 1 1 1.632 0v3.81c0 .751.61 1.36 1.36 1.36M20.055 15.198a.817.817 0 0 1 1.633-.01v3.815A2.995 2.995 0 0 1 18.694 22h-3.81a.817.817 0 0 1 0-1.635h3.81c.752 0 1.36-.61 1.36-1.362zM4.68 2h3.81a.816.816 0 1 1 0 1.633H4.68c-.75 0-1.36.609-1.36 1.36v3.81a.816.816 0 1 1-1.632 0v-3.81A2.993 2.993 0 0 1 4.68 2"/>
      </>
    ) : null}
  </svg>
);

export default Expand;