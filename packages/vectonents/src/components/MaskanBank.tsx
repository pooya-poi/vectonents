
import React from 'react'

interface MaskanBankProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const MaskanBank: React.FC<MaskanBankProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M0 24h24V0H0zm3.429-3.43h17.142V3.428H3.429zm16.482-5.142v-3.692L12 8.571l-7.911 3.165v3.691L12 12.265z" clipRule="evenodd"/>
  </svg>
);

export default MaskanBank;