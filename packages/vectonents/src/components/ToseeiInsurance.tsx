
import React from 'react'

interface ToseeiInsuranceProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const ToseeiInsurance: React.FC<ToseeiInsuranceProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M.547 9.463H4.17l.006 11.29c5.595.025 11.19.018 16.784.023l.017-11.313h3.571V24H.587zM4.165 4.607 12.556 0l8.397 4.607v4.53l-8.397-4.498-8.39 4.498z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.928 11.11c1.441-.21 2.954.33 3.996 1.424 1.093 1.118 1.652 2.805 1.458 4.418-.165 1.561-1.028 3.013-2.272 3.83a4.57 4.57 0 0 1-4.458.373c-1.23-.55-2.22-1.675-2.677-3.021-.533-1.541-.345-3.35.511-4.715.766-1.257 2.054-2.13 3.442-2.309" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.87 10.59a4.94 4.94 0 0 1 2.357.244 5.25 5.25 0 0 1 2.032 1.32 5.8 5.8 0 0 1 1.335 2.23c.275.835.376 1.74.27 2.628h.002a6 6 0 0 1-.805 2.414 5.5 5.5 0 0 1-1.698 1.805 5 5 0 0 1-2.4.846 4.97 4.97 0 0 1-2.503-.439 5.3 5.3 0 0 1-1.786-1.33 5.85 5.85 0 0 1-1.156-1.995 6.2 6.2 0 0 1-.292-2.668 5.96 5.96 0 0 1 .855-2.519h.002a5.6 5.6 0 0 1 1.638-1.714 5.04 5.04 0 0 1 2.15-.823zm.058.522c1.441-.21 2.954.33 3.996 1.423 1.093 1.118 1.652 2.806 1.458 4.418-.165 1.562-1.028 3.013-2.272 3.831a4.57 4.57 0 0 1-4.458.373c-1.23-.55-2.22-1.675-2.677-3.022-.533-1.54-.345-3.35.511-4.714.766-1.258 2.054-2.13 3.442-2.31" clipRule="evenodd"/>
  </svg>
);

export default ToseeiInsurance;