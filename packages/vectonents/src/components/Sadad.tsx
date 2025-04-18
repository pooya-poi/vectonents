
import React from 'react'

interface SadadProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Sadad: React.FC<SadadProps> = ({
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
    <path fill="currentColor" d="M23.719 3.4c.013.428-.133.81-.198 1.276q-5.006-.908-8.703 2.74l-.956-.852c.929-1.028 2.014-1.78 3.207-2.42-1.304.164-2.59.166-3.886-.143.07-.445.115-.86.246-1.27 3.328.586 6.204-.325 8.682-2.731l.945.838c-.913 1.055-2.025 1.786-3.213 2.43 1.306-.155 2.588-.162 3.876.131M2.55 12.965c-.833.071-1.678.012-2.55.012v-1.493h1.74c.268 0 .536.005.803-.002.607-.016.775-.291.463-.83-.392-.677-.825-1.327-1.244-1.996l.952-.991c.519.866 1.172 1.62 1.496 2.577.458 1.352-.285 2.604-1.66 2.723M6.43 5.938v7.025H5.16V6.156zM24 11.485v1.448c-.134.105-.306.052-.465.052-3.39.003-6.779-.013-10.169.01-.966.007-1.751-.266-2.279-1.146-.026-.044-.051-.09-.11-.195-.317 1.021-.684 1.31-1.62 1.328-.624.012-1.249.003-1.874 0-.034 0-.07-.024-.125-.043v-1.455h1.88c.243 0 .484.009.723-.055.432-.116.558-.404.314-.797-.36-.577-.738-1.14-1.106-1.71-.057-.087-.107-.179-.158-.265l.963-.96c.067.012.091.145.15.236.637.988 1.277 1.973 1.901 2.97.263.42.616.586 1.091.586 3.466-.008 6.932-.004 10.399-.004z"/>
  </svg>
);

export default Sadad;