
import React from 'react'

interface IranZaminBankProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const IranZaminBank: React.FC<IranZaminBankProps> = ({
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
    <path fill="currentColor" d="M6.408 15.302c-8.232-11.488 6.384-21.1 14.95-11.147-9.733-5.087-17.97 2.214-14.95 11.147"/><path fill="currentColor" d="M15.76 17.283C4.98 26.41-5.72 12.552 3.506 3.213-.79 13.338 7.113 21 15.76 17.283"/><path fill="currentColor" d="M17.245 8.098c9.282 10.653-4.36 21.611-13.827 12.517 10.169 4.139 17.679-3.911 13.827-12.517"/><path fill="currentColor" d="M8.2 6.657c10.72-9.197 21.51 4.592 12.345 13.99C24.775 10.496 16.822 2.884 8.2 6.658"/><path fill="currentColor" d="M16.5 12c0 2.479-2.021 4.5-4.5 4.5A4.51 4.51 0 0 1 7.5 12c0-2.479 2.021-4.5 4.5-4.5s4.5 2.021 4.5 4.5"/>
  </svg>
);

export default IranZaminBank;