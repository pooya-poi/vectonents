
import React from 'react'

interface DigikalaProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Digikala: React.FC<DigikalaProps> = ({
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
    <path fill="currentColor" d="M12.812 9.999h.016c4.76-.004 9.013-2.477 11.82-6.354a.96.96 0 0 0-.055-1.17L22.552.156a.424.424 0 0 0-.689.048c-1.995 2.972-5.3 4.916-9.044 4.917-3.743 0-7.05-1.945-9.044-4.917a.424.424 0 0 0-.689-.049L1.047 2.477a.96.96 0 0 0-.055 1.17C3.8 7.524 8.053 9.997 12.812 10"/>
  </svg>
);

export default Digikala;