
import React from 'react'

interface MellatInsuranceProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const MellatInsurance: React.FC<MellatInsuranceProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M12 0 8.38 3.622l4.189 4.189L8.378 12 12 15.623l7.812-7.812z" clipRule="evenodd"/><path fill="currentColor" d="m20.377 8.377-7.811 7.811 3.623 3.623L24 11.999z"/><path fill="currentColor" fillRule="evenodd" d="m7.244 12.001 4.189-4.19-3.622-3.622L0 12 11.999 24l3.622-3.622z" clipRule="evenodd"/>
  </svg>
);

export default MellatInsurance;