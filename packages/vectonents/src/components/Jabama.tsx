
import React from 'react'

interface JabamaProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Jabama: React.FC<JabamaProps> = ({
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
    <path fill="currentColor" d="M23.042 12.255q.763.935 1.539 1.88c-.1.11-.218.185-.326.273q-.758.609-1.523 1.212a17.5 17.5 0 0 1-2.272 1.518c-1 .56-2.045 1.014-3.145 1.346q-.996.303-2.027.464-.672.103-1.35.15-.762.056-1.524.03-.653-.021-1.303-.095a17 17 0 0 1-2.738-.538 19 19 0 0 1-2.364-.842q-1.382-.602-2.655-1.404c-.613-.386-1.18-.828-1.74-1.282q-.493-.394-.984-.784l-.05-.038 1.542-1.886c.042-.002.059.023.08.041.537.427 1.068.858 1.607 1.28.543.426 1.132.786 1.736 1.12q1.478.82 3.096 1.328a14.8 14.8 0 0 0 3.168.624 12.6 12.6 0 0 0 2.749-.063 12.8 12.8 0 0 0 3.12-.824 14.5 14.5 0 0 0 3.188-1.804c.43-.318.84-.659 1.26-.991q.415-.333.831-.665c.022-.017.042-.04.085-.048zM15.207 3.318h3.205V.137H20.3v3.18h3.21V5.18h-3.207v3.185h-1.885V5.185h-3.21V3.317M1.65 5.703l4.868-4.29 4.866 4.29-1.249 1.385-3.619-3.19-3.618 3.189-1.25-1.384z"/>
  </svg>
);

export default Jabama;