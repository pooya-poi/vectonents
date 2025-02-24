
import React from 'react';

interface BackwardsProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Backwards: React.FC<BackwardsProps> = ({
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
        <path fill="currentColor" d="m19 7.21-5.3 3.06a1.9 1.9 0 0 0-.63.6V8.94A2 2 0 0 0 10 7.21l-5.29 3.06a2 2 0 0 0 0 3.46L10 16.79a2 2 0 0 0 3-1.73v-1.93c.161.246.377.451.63.6L19 16.79a2 2 0 0 0 3-1.73V8.94a2 2 0 0 0-3-1.73"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M19.12 6.93a1.94 1.94 0 0 0-1 .28l-5.3 3.06a1.94 1.94 0 0 0-.64.6V8.94a2 2 0 0 0-3-1.73l-5.3 3.06a2 2 0 0 0 0 3.46l5.3 3.06a2 2 0 0 0 3-1.73v-1.93c.165.246.384.451.64.6l5.3 3.06c.302.183.647.28 1 .28a2 2 0 0 0 2-2V8.94a2 2 0 0 0-2-2.01m-8.88 8.13h-.06l-5.33-3.01v-.1l5.31-3.06s.06 0 .06.06zM13.87 12l5.3 3.06.05-6.16a.06.06 0 0 0-.05-.06l-5.3 3.06z" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Backwards;