
import React from 'react'

interface IdpayProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Idpay: React.FC<IdpayProps> = ({
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
    <path fill="currentColor" d="M23.736 2.67H4.724L4.892.905C4.964.371 5.324 0 5.876 0h17.332c.408 0 .792.325.792.72l-.12 1.555-.01.13c-.01.172-.017.265-.134.265"/><path fill="currentColor" fillRule="evenodd" d="M7.148 7.94c.576 0 .96-.326.96-.906 0-.302-.216-.51-.432-.627-.276-.115-1.66-.09-2.924-.066-1.037.019-1.994.036-2.189-.027-.216-.046-.384-.325-.288-.626.048-.21.288-.418.6-.418h20.717c0 .101-.006.181-.012.263a4 4 0 0 0-.012.294 9 9 0 0 1-.058.546c-.04.32-.086.676-.086 1.032 0 .163-.024.372-.048.558a4 4 0 0 0-.048.533c-.06.457-.103 1.031-.145 1.607-.042.567-.084 1.136-.143 1.597-.02.13-.03.235-.037.325-.02.23-.03.363-.203.58a.92.92 0 0 1-.768.395H4.7a.93.93 0 0 1-.6-.209c-.288-.222-.254-.593-.217-1.004q.016-.157.024-.32l.217-2.32H.547c-.768 0-.696-1.138.024-1.184 1.79-.082 3.893-.056 5.792-.033h.002zm12.075.417h1.608l.12-1.578h-1.584z" clipRule="evenodd"/><path fill="currentColor" d="M.643 2.67h2.472a.73.73 0 0 0 .432-.163c.384-.325.192-.928-.216-.928H.62c-.576.046-.768 1.09.024 1.09"/>
  </svg>
);

export default Idpay;