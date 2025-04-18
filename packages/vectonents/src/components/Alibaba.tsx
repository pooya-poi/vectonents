
import React from 'react'

interface AlibabaProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Alibaba: React.FC<AlibabaProps> = ({
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
    <path fill="currentColor" d="M21.536 20.75c-.158.2-.384.333-.633.372l-2.774.8a1.03 1.03 0 0 1-.753 0 1.08 1.08 0 0 1-.369-.656C12.978 5.965 12.423 2.665 10.8 2.665s-2.178 3.3-6.207 18.608c-.042.257-.172.49-.37.656-.241.095-.51.095-.752 0l-2.774-.807a1 1 0 0 1-.63-.373 1.1 1.1 0 0 1 0-.758C4.177 4.403 6.495 0 10.8 0s6.615 4.403 10.733 19.992c.088.244.089.512.003.757"/><path fill="currentColor" d="M24 10.903a1.1 1.1 0 0 1-.098.433l-.116.32a.85.85 0 0 1-.32.464.85.85 0 0 1-.576.035 15.98 15.98 0 0 0-10.714 1.334 16.4 16.4 0 0 0-7.529 7.877c-.114.255-.293.633-.698.633a1.6 1.6 0 0 1-.478-.077l-2.774-.797c-.32-.093-.683-.232-.683-.66.012-.192.064-.378.15-.547 1.972-4.3 5.469-7.681 9.789-9.461a18.12 18.12 0 0 1 13.494-.133c.214.083.553.218.553.58"/>
  </svg>
);

export default Alibaba;