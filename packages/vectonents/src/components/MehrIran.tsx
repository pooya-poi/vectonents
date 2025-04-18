
import React from 'react'

interface MehrIranProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const MehrIran: React.FC<MehrIranProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M10.14.875a10.1 10.1 0 0 1 6.886 2.695c-2.856 2.785-4.304 5.968-4.609 6.81-.045.139-.176.151-.253.02-1.083-2.61-3.892-4.571-6.587-4.5-.117.005-.165.13-.081.219 2.068 2.96.924 9.379 6.604 12.206.226.116.336.014.35-.144.802-6.929 5.823-14.076 11.296-15.869.033-.012.136-.026.205.046.07.072.051.175.029.214-1.381 2.233-2.073 6.324-3.289 9.953-1.642 4.9-5.09 8.6-10.552 8.6C4.54 21.125 0 16.591 0 11 0 5.41 4.54.875 10.14.875" clipRule="evenodd"/>
  </svg>
);

export default MehrIran;