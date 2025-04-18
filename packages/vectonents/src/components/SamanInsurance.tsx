
import React from 'react'

interface SamanInsuranceProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const SamanInsurance: React.FC<SamanInsuranceProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M0 23.998V4.09l4.07.002v15.833l15.843.002-.01 4.073zM15.539 0C20.414 0 24.002 3.638 24 8.465l-.004 11.397-4.082.004v-10.8c0-1.877-.98-3-2.082-3.881-1.139-.912-2.287-1.095-3.638-1.095H4.068V.002h11.469z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.68 7.49a4.6 4.6 0 0 1 2.024.336c1.49.6 2.598 2.043 2.783 3.64a4.55 4.55 0 0 1-1.21 3.705 4.55 4.55 0 0 1-4.346 1.308 4.54 4.54 0 0 1-2.136-1.165 4.53 4.53 0 0 1-1.328-2.522 4.6 4.6 0 0 1 .34-2.623A4.58 4.58 0 0 1 9.96 7.946a4.5 4.5 0 0 1 1.72-.454z" clipRule="evenodd"/>
  </svg>
);

export default SamanInsurance;