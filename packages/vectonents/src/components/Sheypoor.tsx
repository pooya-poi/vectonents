
import React from 'react'

interface SheypoorProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Sheypoor: React.FC<SheypoorProps> = ({
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
    <path fill="currentColor" d="M23.96 11.113a.53.53 0 0 0-.288-.263l-1.896-.703a.5.5 0 0 0-.192-.03.499.499 0 0 0-.45.342l-.348.96-7.056-2.616.072.037a.4.4 0 0 0-.114-.043h-.006q-.08-.038-.168-.067-.009.002-.018-.006h-.012L9.776 7.343 4.436.908a.53.53 0 0 0-.474-.17.5.5 0 0 0-.234.115.45.45 0 0 0-.15.214l-3.54 9.918a.44.44 0 0 0-.025.262.5.5 0 0 0 .108.239.47.47 0 0 0 .21.152c.085.03.175.043.265.025l6.468-1.13a6 6 0 0 0-.612.849 6.24 6.24 0 0 0 .288 6.837 6.13 6.13 0 0 0 2.808 2.145 5.99 5.99 0 0 0 4.626-.208A6.14 6.14 0 0 0 17.3 16.68a6.33 6.33 0 0 0 .276-3.17l2.178.806-.348.965a.7.7 0 0 0-.03.196.7.7 0 0 0 .048.195q.047.093.12.159a.4.4 0 0 0 .168.104l1.896.703q.092.038.192.03a.4.4 0 0 0 .192-.049.497.497 0 0 0 .258-.287l1.722-4.821a.5.5 0 0 0 .03-.202.5.5 0 0 0-.042-.195m-9.498 4.515a3.04 3.04 0 0 1-1.056 1.43c-.48.36-1.056.569-1.656.593a3 3 0 0 1-1.698-.446 3.04 3.04 0 0 1-1.17-1.326 3.1 3.1 0 0 1 .51-3.385c.402-.446.93-.764 1.506-.91a3.05 3.05 0 0 1 1.704.079l.048.018h.006l.012.006.03.012c.732.288 1.326.85 1.662 1.577a3.16 3.16 0 0 1 .102 2.352"/>
  </svg>
);

export default Sheypoor;