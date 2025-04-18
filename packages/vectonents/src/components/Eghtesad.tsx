
import React from 'react'

interface EghtesadProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Eghtesad: React.FC<EghtesadProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M20.393 16.384A3.61 3.61 0 0 1 24 19.99a3.61 3.61 0 0 1-3.608 3.608 3.61 3.61 0 0 1-3.607-3.608 3.61 3.61 0 0 1 3.607-3.607M10.067 3.475 6.119 23.599H0zM17.275.5c-1.006 5.086-2.883 14.574-4.327 21.887a3.39 3.39 0 0 1-2.597 1.212H6.628L10.88 1.938A3.39 3.39 0 0 1 13.649.5zm.51 0H24l-9.436 18.855-.839 1.677zM3.608.5a3.61 3.61 0 0 1 3.607 3.608 3.61 3.61 0 0 1-3.607 3.607A3.61 3.61 0 0 1 0 4.108 3.61 3.61 0 0 1 3.608.5" clipRule="evenodd"/>
  </svg>
);

export default Eghtesad;