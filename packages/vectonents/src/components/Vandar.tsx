
import React from 'react'

interface VandarProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Vandar: React.FC<VandarProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M6.845.526.528 6.788A1.8 1.8 0 0 0 0 8.055v14.147c0 .477.191.934.531 1.271.34.338.802.527 1.283.527h11.052c.482 0 .944-.19 1.284-.529l6.317-6.261A1.8 1.8 0 0 0 21 15.94V1.798a1.79 1.79 0 0 0-.533-1.273A1.82 1.82 0 0 0 19.18 0H8.126c-.48 0-.94.19-1.281.526m10.68 14.913-2.14 2.121c-.283.28-.668.438-1.068.439H9.983a.46.46 0 0 1-.418-.278.445.445 0 0 1 .1-.489l2.99-2.955a.447.447 0 0 0-.32-.767H8.132a.76.76 0 0 1-.536-.22.75.75 0 0 1-.222-.531V3.757c0-.2.08-.39.222-.531a.76.76 0 0 1 .536-.22h9.084c.2 0 .394.079.536.22.142.14.222.332.222.531V14.38a1.5 1.5 0 0 1-.447 1.059" clipRule="evenodd"/>
  </svg>
);

export default Vandar;