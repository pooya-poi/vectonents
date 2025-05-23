
import React from 'react'

interface SanatMadanBankProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const SanatMadanBank: React.FC<SanatMadanBankProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="m12 18.504 4.561-4.561L14.618 12 12 14.618 9.382 12H5.496l-2.748 2.748h5.495zM5.366 2.748H2.748v18.504h18.504V2.748h-2.618l-4.691 4.69 1.813 1.814h5.496L18.504 12h-3.886L12 9.382 9.382 12l-1.943-1.943 2.618-2.618zM17.496 0H24v24H0V0h6.504L12 5.496z" clipRule="evenodd"/>
  </svg>
);

export default SanatMadanBank;