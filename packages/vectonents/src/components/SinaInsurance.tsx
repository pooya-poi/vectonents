
import React from 'react'

interface SinaInsuranceProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const SinaInsurance: React.FC<SinaInsuranceProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M0 13.482c9.906 1.243 8.716-1.081 11.784-8.23C13.806.542 16.134-.514 24 .205v10.212c-8.073-.32-8.157-.227-10.364 4.554-2.032 4.401-2.142 10.464-13.635 8.723V13.482z" clipRule="evenodd"/>
  </svg>
);

export default SinaInsurance;