
import React from 'react';

interface VolumeDownProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const VolumeDown: React.FC<VolumeDownProps> = ({
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
        <path fill="currentColor" d="M21.72 11.25h-4.84a.75.75 0 0 0 0 1.5h4.84a.75.75 0 1 0 0-1.5M12.18 4.55 6.3 8.47a2.1 2.1 0 0 1-1.13.34h-1.6a2 2 0 0 0-2 2v2.3a2 2 0 0 0 2 2h1.6c.402.002.794.12 1.13.34l5.88 3.92a2 2 0 0 0 3.17-1.69V6.24a2 2 0 0 0-3.17-1.69"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M22.14 11.25H17.3a.75.75 0 0 0 0 1.5h4.84a.75.75 0 0 0 0-1.5"/><path fill="currentColor" fillRule="evenodd" d="M12.6 4.55a2 2 0 0 1 1.13-.35 2 2 0 0 1 2.05 2.04v11.44a2 2 0 0 1-3.17 1.69l-5.88-3.92a2.1 2.1 0 0 0-1.13-.34H4a2 2 0 0 1-2-2v-2.3a2 2 0 0 1 2-2h1.59a2.1 2.1 0 0 0 1.13-.34zm1.13 13.75a.54.54 0 0 0 .54-.54l.05-11.52a.54.54 0 0 0-.84-.45L7.6 9.72a3.6 3.6 0 0 1-2 .59H4a.54.54 0 0 0-.54.54v2.3c0 .298.242.54.54.54h1.55a3.6 3.6 0 0 1 2 .59l5.88 3.93a.55.55 0 0 0 .3.09" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default VolumeDown;