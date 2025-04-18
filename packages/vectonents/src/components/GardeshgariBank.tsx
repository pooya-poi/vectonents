
import React from 'react'

interface GardeshgariBankProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const GardeshgariBank: React.FC<GardeshgariBankProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M2.155 14.733 6 21.393h2.867l-3.83-6.603.73-1.266 4.543 7.868H18l1.435-2.486-7.643.003L7.225 11l1.663-2.88H5.973zm18 2.926L24 11l-1.433-2.483-3.804 6.618h-1.46l4.542-7.868L18 .607h-2.87l3.824 6.619-4.567 7.91h-3.325l1.458 2.523zM12 8.13a2.916 2.916 0 0 1 2.914 2.914A2.916 2.916 0 0 1 12 13.96a2.916 2.916 0 0 1-2.914-2.915A2.916 2.916 0 0 1 12 8.13m.93-3.79-.73-1.265-7.633.016L6 .608h7.69l3.818 6.612-1.458 2.525-1.663-2.88H5.255l-3.819 6.621L0 11l3.845-6.66z" clipRule="evenodd"/>
  </svg>
);

export default GardeshgariBank;