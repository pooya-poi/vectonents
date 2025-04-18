
import React from 'react'

interface GhavaminBankProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const GhavaminBank: React.FC<GhavaminBankProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M12.202 16.412a4.44 4.44 0 0 1-4.434-4.446c0-1.032.35-1.981.938-2.736C8.859 7.726 9.906 5 15.482 5c7.702 0 8.018 5.602 8.018 5.602v11.745S23.26 24 22.082 24H9.59L5.5 20.29h13.355v-9.62s-.94-3.623-5.183-3.623c-1.396 0-2.41.341-3.141.8a4.44 4.44 0 0 1 6.106 4.12 4.44 4.44 0 0 1-1.412 3.252C14.907 16.759 13.575 19 8.518 19 .816 19 .5 13.406.5 13.406V1.653S.74 0 1.917 0H14.41l4.09 3.71H5.145v9.62s.94 3.623 5.183 3.623c1.254 0 2.199-.275 2.909-.663q-.499.121-1.035.122" clipRule="evenodd"/>
  </svg>
);

export default GhavaminBank;