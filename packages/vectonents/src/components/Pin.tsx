
import React from 'react';

interface PinProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Pin: React.FC<PinProps> = ({
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
        <path fill="currentColor" d="m19.35 9.164-4.55-4.55a2.14 2.14 0 0 0-3 0l-2.83 2.79a2.2 2.2 0 0 1-.55.4l-3.07 1.54a2.14 2.14 0 0 0-.56 3.43l2.67 2.67-3.24 3.24a.75.75 0 0 0 0 1.06.8.8 0 0 0 .53.22.75.75 0 0 0 .53-.22l3.24-3.24 2.67 2.67a2.14 2.14 0 0 0 3.43-.56l1.54-3.09c.103-.204.238-.39.4-.55l2.79-2.79a2.14 2.14 0 0 0 0-3.02"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="m14.794 4.61 4.55 4.55a2.14 2.14 0 0 1 0 3.02l-2.79 2.79a2.4 2.4 0 0 0-.4.55l-1.54 3.09a2.15 2.15 0 0 1-3.43.56l-2.67-2.67-3.23 3.23a.74.74 0 0 1-.53.22.7.7 0 0 1-.53-.22.74.74 0 0 1 0-1.06l3.23-3.23-2.67-2.67a2.14 2.14 0 0 1 .56-3.43l3.09-1.54a2.4 2.4 0 0 0 .55-.4l2.81-2.79a2.15 2.15 0 0 1 3 0m.63 9.22 2.78-2.78a.54.54 0 0 0 .03-.76l-4.54-4.54a.53.53 0 0 0-.76 0l-2.78 2.78a3.7 3.7 0 0 1-1 .7l-3.09 1.55a.51.51 0 0 0-.29.39.5.5 0 0 0 .15.46l6.4 6.4a.5.5 0 0 0 .37.16.52.52 0 0 0 .48-.3l1.55-3.06c.176-.37.412-.708.7-1" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Pin;