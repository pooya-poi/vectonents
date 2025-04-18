
import React from 'react'

interface DigiPayProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const DigiPay: React.FC<DigiPayProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M16 5.556C16 2.487 13.612 0 10.667 0H0v1.852C0 4.92 2.388 7.407 5.333 7.407H16zm0 5.555V9.26H5.333l-.2.004C2.281 9.373 0 11.816 0 14.815V25h1.778l.2-.004c2.853-.11 5.133-2.553 5.133-5.552v-2.777h3.556l.2-.004C13.719 16.553 16 14.11 16 11.11" clipRule="evenodd"/>
  </svg>
);

export default DigiPay;