
import React from 'react'

interface RaaziInsuranceProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const RaaziInsurance: React.FC<RaaziInsuranceProps> = ({
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
    <path fill="currentColor" d="M2.282.008c6.18-.014 12.36-.002 18.54-.006.541.01 1.104-.056 1.62.154.91.331 1.564 1.258 1.555 2.231.004 6.157 0 12.314.001 18.47-.01.515.052 1.05-.14 1.543-.315.915-1.226 1.583-2.194 1.598-6.407.004-12.814 0-19.22.002a2.41 2.41 0 0 1-2.006-1.082c-.265-.38-.363-.84-.438-1.288.002-6.436-.002-12.873.002-19.31.076-.394.162-.802.38-1.147a2.41 2.41 0 0 1 1.9-1.165m.719 2.402a.6.6 0 0 0-.516.372c-.07.204-.047.423-.05.634v17.497c-.032.347.252.693.61.68H21c.323.006.617-.293.591-.618V3.295c-.008-.196.034-.407-.073-.582a.62.62 0 0 0-.577-.306C14.962 2.409 8.98 2.4 3 2.41"/><path fill="currentColor" d="M16.193 4.808c1.005-.008 2.009.01 3.013-.009-3.778 4.808-7.58 9.599-11.366 14.4-1.003 0-2.007.006-3.01-.003.008-2 0-4 .003-6q1.2.003 2.4 0c.002.987-.005 1.973.003 2.96 2.978-3.789 5.975-7.563 8.957-11.35z"/>
  </svg>
);

export default RaaziInsurance;