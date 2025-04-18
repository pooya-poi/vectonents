
import React from 'react'

interface TapsiProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Tapsi: React.FC<TapsiProps> = ({
  size = 24,
  fillColor = 'currentColor',
  className = ''
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-${fillColor} ${className}`}
  >
    <path fill="currentColor" fillRule="evenodd" d="M24 5.953H9.599v-5H24zM24 15.953H0v-5h24z" clipRule="evenodd"/>
  </svg>
);

export default Tapsi;