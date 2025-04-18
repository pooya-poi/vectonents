
import React from 'react'

interface SaderatBankProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const SaderatBank: React.FC<SaderatBankProps> = ({
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
    <path fill="currentColor" d="M15.905 24h7.845V4.062C21.007-2.421 11.267.179 10.57 2.809c2.41-1.346 4.415-1.618 5.335.517zM8.095 0H.25v19.938c2.743 6.483 12.483 3.883 13.18 1.253-2.41 1.346-4.415 1.618-5.335-.517z"/><path fill="currentColor" d="M15.842 12c0 2.102-1.726 3.817-3.842 3.817S8.158 14.102 8.158 12 9.884 8.183 12 8.183 15.842 9.898 15.842 12"/>
  </svg>
);

export default SaderatBank;