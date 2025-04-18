
import React from 'react'

interface OtaghakProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Otaghak: React.FC<OtaghakProps> = ({
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
    <path fill="currentColor" d="M12.034 33c-.386-.27-.546-.63-.756-.94-2.914-4.243-5.803-8.507-8.732-12.74-1.07-1.546-1.944-3.164-2.3-5.021-.649-3.374-.008-6.48 2.004-9.28C4.064 2.491 6.507.86 9.574.26c3.974-.78 7.499.203 10.52 2.9 2.155 1.925 3.405 4.356 3.789 7.183.383 2.84-.14 5.55-1.767 7.953-3.237 4.79-6.521 9.547-9.789 14.316-.08.117-.172.227-.293.384zM3.816 11.868c-.002 4.585 3.616 8.202 8.2 8.167 4.779-.037 8.251-3.772 8.154-8.362-.09-4.358-3.64-7.836-8.058-7.915-4.593-.083-8.338 3.674-8.296 8.112z"/><path fill="currentColor" d="M9.945 17.296V6.587c1.313-.311 2.653-.633 4.071-.97v12.536c-1.368-.19-2.668-.583-4.071-.857"/>
  </svg>
);

export default Otaghak;