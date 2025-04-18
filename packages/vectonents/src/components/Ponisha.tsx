
import React from 'react'

interface PonishaProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Ponisha: React.FC<PonishaProps> = ({
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
    <path fill="currentColor" d="M12.052.677c1.629 0 3.258-.01 4.886 0 3.905.029 7.027 3.159 7.048 7.086.017 3.281.02 6.566 0 9.847-.025 3.864-3.164 7.019-7.006 7.047-3.142.02-6.289.01-9.431.003-4.155-.003-7.211-2.727-7.413-6.882-.17-3.562-.205-7.141.038-10.707.24-3.523 3.317-6.34 6.818-6.39 1.684-.025 3.372-.004 5.06-.004M2.555 12.651c0 1.555-.01 3.106 0 4.66.02 2.822 1.984 4.879 4.768 4.914 3.167.038 6.337.042 9.507 0 2.61-.035 4.67-2.029 4.723-4.622q.095-4.919 0-9.837c-.049-2.61-2.113-4.621-4.691-4.646a524 524 0 0 0-9.679 0c-2.575.028-4.59 2.099-4.625 4.695-.02 1.611-.003 3.222-.007 4.833z"/><path fill="currentColor" d="M19.089 8.868c.153.776.164 1.47-.014 2.253H5.078c-.216-.754-.14-1.456-.063-2.253zM5.913 16.262c.432-.495.96-.737 1.653-.986 1.32 2.362 3.64 2.538 5.972 2.523.25.716.209 1.295.08 1.87-3.024.643-6.584-.789-7.705-3.407"/>
  </svg>
);

export default Ponisha;