
import React from 'react';

interface MicrophoneProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Microphone: React.FC<MicrophoneProps> = ({
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
        <path fill="currentColor" d="M19.841 11.47a8 8 0 0 1-7.16 8.05v2.45a.76.76 0 1 1-1.52 0v-2.41a8 8 0 0 1-7.16-8 .761.761 0 0 1 1.52-.09 6.5 6.5 0 0 0 6.4 6.61 6.5 6.5 0 0 0 6.4-6.61.76.76 0 1 1 1.52 0"/><path fill="currentColor" fillRule="evenodd" d="M10.025 1.374a5 5 0 0 1 6.896 4.595v5a5 5 0 1 1-10 0v-5a5 5 0 0 1 3.104-4.595M13 10.218V5.79c-.01-.433-.454-.783-1.005-.79-.55 0-.995.35-.995.782v4.428c.01.433.454.782 1.005.79.55 0 .995-.35.995-.782" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" d="M19.82 11.75a.75.75 0 0 0-1.5 0 6.51 6.51 0 0 1-6.41 6.62 6.51 6.51 0 0 1-6.41-6.62.75.75 0 0 0-1.5 0 8 8 0 0 0 7.16 8v2.5a.75.75 0 0 0 1.5 0v-2.42a8 8 0 0 0 7.16-8.08"/><path fill="currentColor" fillRule="evenodd" d="M17 12a5 5 0 0 1-10 0V7a5 5 0 0 1 10 0zm-5-8.5A3.5 3.5 0 0 0 8.5 7v5a3.5 3.5 0 1 0 7 0V7A3.5 3.5 0 0 0 12 3.5" clipRule="evenodd"/>
      </>
    ) : null}
  </svg>
);

export default Microphone;