
import React from 'react'

interface BluProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Blu: React.FC<BluProps> = ({
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
    <path fill="currentColor" d="M5.705 2.402a.95.95 0 1 0 0-1.902.95.95 0 0 0 0 1.902M18.067 6.633v4.517c0 .999.74 1.76 1.712 1.76.962 0 1.712-.761 1.711-1.73V6.632c0-.656.533-1.188 1.19-1.188h1.188v5.61a4.089 4.089 0 1 1-8.178 0v-5.61h1.189c.656 0 1.188.532 1.188 1.188"/><path fill="currentColor" fillRule="evenodd" d="M12.6 1.831h1.188v12.124c0 .657-.532 1.19-1.188 1.19H11.41V3.02c0-.657.532-1.189 1.189-1.189" clipRule="evenodd"/><path fill="currentColor" d="M2.377 1.831v4.514c.753-.682 1.712-1.09 2.758-1.09 2.416 0 4.374 2.181 4.374 4.873v.119c0 2.781-2.129 4.897-4.754 4.897-2.58 0-4.68-2.116-4.753-4.754H0V3.02C0 2.36.538 1.83 1.189 1.83zm2.33 5.61c-1.365 0-2.472 1.225-2.472 2.734 0 1.51 1.107 2.734 2.472 2.734s2.472-1.224 2.472-2.734-1.107-2.733-2.472-2.733"/>
  </svg>
);

export default Blu;