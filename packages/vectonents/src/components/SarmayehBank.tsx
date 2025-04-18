
import React from 'react'

interface SarmayehBankProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const SarmayehBank: React.FC<SarmayehBankProps> = ({
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
    <path fill="currentColor" d="M4.093 8.208v3.432c2.921-2.122 6.012-3.107 9.414-3.172l.357-.006v3.223c1.232-.964 2.465-2.161 3.698-3.633l-.02-8.019C13.477 4.923 9.07 8.047 4.094 8.208M7.614 20.985A3.02 3.02 0 0 0 10.63 24a3.02 3.02 0 0 0 3.015-3.015 3.02 3.02 0 0 0-3.015-3.014 3.02 3.02 0 0 0-3.015 3.014"/><path fill="currentColor" d="M13.514 15.825V8.818c-4.49.085-8.98 1.803-13.47 7.163L.065 24c4.067-4.89 8.474-8.014 13.45-8.175"/>
  </svg>
);

export default SarmayehBank;