
import React from 'react'

interface SinaBankProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const SinaBank: React.FC<SinaBankProps> = ({
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
    <path fill="currentColor" d="m16.817 3.383-.663-.398L11.02 0 .75 5.97v11.94l3.725 2.217 5.774-3.468-3.673-2.135V9.357z"/><path fill="currentColor" d="m5.183 20.617.663.398L10.98 24l10.269-5.97V6.09l-3.725-2.217L11.75 7.34l3.673 2.135v5.167z"/><path fill="currentColor" d="M14.5 12c0 1.928-1.572 3.5-3.5 3.5A3.507 3.507 0 0 1 7.5 12c0-1.928 1.572-3.5 3.5-3.5s3.5 1.572 3.5 3.5"/>
  </svg>
);

export default SinaBank;