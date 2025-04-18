
import React from 'react'

interface ZarinpalProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Zarinpal: React.FC<ZarinpalProps> = ({
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
    <path fill="currentColor" d="M6.666 13.804q-.359 0-.708-.037l4.794-12.314c1.572 1.26 2.58 3.229 2.58 5.446 0 3.812-2.982 6.905-6.666 6.905"/><path fill="currentColor" d="M24 1.602c0 .211-.042.416-.114.609l-7.698 19.777A1.57 1.57 0 0 1 14.736 23H4.68c-.864 0-1.566-.714-1.566-1.602q0-.318.108-.609l2.502-6.426c.306.043.624.062.942.062 4.008 0 7.266-3.378 7.266-7.526 0-2.472-1.152-4.664-2.934-6.036A1.55 1.55 0 0 1 12.378 0h10.056c.858-.006 1.56.714 1.566 1.602"/><path fill="currentColor" d="M13.332 6.899c0 3.812-2.982 6.905-6.666 6.905q-.359 0-.708-.037C2.61 13.4 0 10.463 0 6.899 0 3.092 2.982 0 6.666 0c1.542 0 2.958.54 4.086 1.453 1.572 1.26 2.58 3.229 2.58 5.446"/>
  </svg>
);

export default Zarinpal;