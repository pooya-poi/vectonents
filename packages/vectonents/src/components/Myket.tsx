
import React from 'react'

interface MyketProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Myket: React.FC<MyketProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12m-8.9-5.496a4.263 4.263 0 0 1 4.262 4.075c0 .031 0 .055.047.11v4.762c0 .578-.468 1.054-1.054 1.054h-.023a1.055 1.055 0 0 1-1.054-1.054v-4.669h-.008a2.126 2.126 0 0 0-2.124-2.124 2.12 2.12 0 0 0-2.123 2.109v3.942c0 .594-.476 1.07-1.07 1.07h-.023c-.594 0-1.07-.476-1.07-1.07v-3.935h-.008A2.126 2.126 0 0 0 8.73 8.651a2.126 2.126 0 0 0-2.124 2.123h-.008v4.661c0 .594-.476 1.07-1.07 1.07h-.023c-.593 0-1.07-.476-1.07-1.07v-4.817c0-.055 0-.117.008-.164a4.263 4.263 0 0 1 4.255-3.95c1.273 0 2.42.562 3.202 1.444a4.27 4.27 0 0 1 3.2-1.444m.023 10.493s.156-.156.203-.078c.062.093-.024.242-.031.242-.758 1.093-1.913 1.585-3.264 1.585s-2.506-.492-3.263-1.585c0 0-.094-.149-.032-.242.047-.086.203.078.203.078.602.64 1.82 1.054 3.092 1.054s2.499-.414 3.092-1.054" clipRule="evenodd"/>
  </svg>
);

export default Myket;