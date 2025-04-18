
import React from 'react'

interface MaInsuranceProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const MaInsurance: React.FC<MaInsuranceProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M12.616 12.57.902 18.301 12.616 24zM13.265 24l.003-.001 11.568-5.767-11.571-5.663zM13.265 11.998l11.571 5.663.066-11.36zM13.265 11.427 24.902 5.73v-.001L13.281.009 13.265 0zM12.616 11.427V0L.986 5.726l-.006.003v.001zM12.616 11.998.98 6.3l-.078 11.43z" clipRule="evenodd"/>
  </svg>
);

export default MaInsurance;