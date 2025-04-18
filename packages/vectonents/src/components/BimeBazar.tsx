
import React from 'react'

interface BimeBazarProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const BimeBazar: React.FC<BimeBazarProps> = ({
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
    <path fill="currentColor" d="M19.83 9.924c0-.045.04-.09.057-.131l.026-.066.052-.168v-.103q.035-.203.035-.41a2 2 0 0 0-.065-.52c0-.067-.04-.132-.061-.198a1 1 0 0 0-.066-.152c0-.028-.021-.053-.034-.078l-.048-.082a1.5 1.5 0 0 0-.135-.205l-.044-.057a2 2 0 0 0-.217-.234l-3.519-3.319L11.422 0l-3.28 3.09 6.299 5.936-6.303 5.948 3.284 3.077 7.934-7.487a2.065 2.065 0 0 0 .474-.64"/><path fill="currentColor" d="m5.576 14.966 6.281-5.94-3.275-3.094-4.402 4.169-3.519 3.318-.082.082-.096.111a2.061 2.061 0 0 0-.396.702v.037a2 2 0 0 0-.087.48v.271c.023.372.147.732.361 1.046l.052.07c.057.073.113.143.179.213l.082.082L8.6 24l3.258-3.077-4.397-4.18z"/>
  </svg>
);

export default BimeBazar;