
import React from 'react'

interface NovinInsuranceProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const NovinInsurance: React.FC<NovinInsuranceProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M11.797 7.91c-2.098.26-3.545 2.26-3.34 4.492.194 2.132 1.898 3.925 4.091 3.682 1.882-.208 3.498-2.096 3.294-4.478-.178-2.084-1.895-3.962-4.045-3.696" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M0 23.974c.574.054 1.325.006 1.914.006h9.665c2.61-.006 4.233.279 5.99-1.934.691-.873.813-1.723 1.175-2.988l1.584-5.735c.052-.191.2-.649.212-.813h-3.708c-.072.38-.092.673-.188 1.025a5.24 5.24 0 0 1-1.284 2.26c-1.83 1.883-4.62 1.879-6.407.01a5.2 5.2 0 0 1-1.29-2.254c-.101-.363-.118-.663-.197-1.039l-4.29-.006zM3.455 11.49h4.02c.164-2.573 2.239-4.686 4.657-4.694 2.527-.009 4.45 2.096 4.692 4.677.163.05 3.577.027 4.015.017L24 .022c-.264-.04-10.897-.009-11.562-.009-2.402 0-4.316-.297-5.99 1.918-.657.87-.847 1.704-1.19 2.976-.067.247-1.771 6.35-1.803 6.58z" clipRule="evenodd"/>
  </svg>
);

export default NovinInsurance;