
import React from 'react'

interface TakhfifanProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Takhfifan: React.FC<TakhfifanProps> = ({
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
    <path fill="currentColor" d="M6.68 11.686c0 1.018.858 1.844 1.917 1.844 1.058 0 1.917-.825 1.917-1.844 0-1.018-.858-1.845-1.917-1.845-1.058 0-1.916.827-1.916 1.845"/><path fill="currentColor" d="M10.308.002c-4.513 0-8.526 2.764-9.98 6.875a8.2 8.2 0 0 0-.321 1.768c-.015 2.725 0 11.351 0 11.351s9.282.009 11.498 0h.878q.617-.028 1.214-.188c4.326-1.383 7.248-5.275 7.253-9.661 0-.31-.04-3.935-.039-5.765H24V0zM4.383 10.103c.025-3.148 2.698-5.681 5.97-5.658 3.273.024 5.906 2.596 5.881 5.744-.025 3.133-2.671 5.659-5.926 5.659 0 0-3.906.007-5.925.007z"/>
  </svg>
);

export default Takhfifan;