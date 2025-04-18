
import React from 'react'

interface MarkaziBankProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const MarkaziBank: React.FC<MarkaziBankProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M12.836 23.654a1.18 1.18 0 0 1-1.671 0l-2.17-2.17h2.253c.466 0 .913-.184 1.242-.513l5.495-5.495.024 3.004zm-8.073-5.478c.328.329.774.514 1.239.514h7.772l-2.107 2.141H3.169v-4.249zm16.068 2.655h-4.249l1.594-1.594c.329-.328.514-.774.514-1.239v-7.772l2.141 2.107zM.346 12.836a1.18 1.18 0 0 1 0-1.671l2.17-2.17v2.253c0 .466.184.913.513 1.242l5.495 5.495-3.004.024zM12 6.491A5.51 5.51 0 0 1 17.508 12 5.51 5.51 0 0 1 12 17.508 5.51 5.51 0 0 1 6.492 12 5.51 5.51 0 0 1 12 6.492m11.654 4.673a1.18 1.18 0 0 1 0 1.67l-2.17 2.17v-2.253c0-.466-.184-.913-.513-1.242l-5.495-5.495 3.004-.024zM3.169 3.169h4.249L5.824 4.763a1.75 1.75 0 0 0-.514 1.239v7.772L3.17 11.667zm11.836-.654h-2.253c-.466 0-.913.185-1.242.514L6.015 8.524 5.991 5.52 11.165.346a1.18 1.18 0 0 1 1.67 0zm5.826.654v4.249l-1.594-1.594a1.75 1.75 0 0 0-1.239-.514h-7.772l2.107-2.141z" clipRule="evenodd"/>
  </svg>
);

export default MarkaziBank;