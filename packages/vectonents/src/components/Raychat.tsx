
import React from 'react'

interface RaychatProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Raychat: React.FC<RaychatProps> = ({
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
    <path fill="currentColor" d="M10.49 15.442c.497.206 1.03.31 1.567.31a4.08 4.08 0 0 0 2.894-1.197l-.723-.724a3.074 3.074 0 0 1-4.342 0l-.724.724c.38.38.831.682 1.328.887"/><path fill="currentColor" fillRule="evenodd" d="M12 0C4 0 0 .988 0 12c0 10.503 4 12 12 12s12-1.03 12-12C24 1.2 20 0 12 0m6.122 7.683a7.3 7.3 0 0 1 1.165 3.958 7.26 7.26 0 0 1-2.404 5.402h.023l-.193.154a4 4 0 0 1-.214.167l-5.378 4.328v-2.823a7.288 7.288 0 1 1 7.001-11.186" clipRule="evenodd"/>
  </svg>
);

export default Raychat;