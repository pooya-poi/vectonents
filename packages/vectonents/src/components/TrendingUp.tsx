
import React from 'react';

interface TrendingUpProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const TrendingUp: React.FC<TrendingUpProps> = ({
  size = 24,
  fillColor = 'currentColor',
  className = '',
  variants = 'filled'
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-${fillColor} ${className}`}
  >
    {variants === 'filled' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M5.81 2h12.38A3.81 3.81 0 0 1 22 5.81v12.38A3.81 3.81 0 0 1 18.19 22H5.81A3.81 3.81 0 0 1 2 18.19V5.81A3.81 3.81 0 0 1 5.81 2m11.428 11.19c.395 0 .714-.32.714-.714V9.581a.724.724 0 0 0-.714-.714h-2.857a.714.714 0 1 0 0 1.428h.848l-3.39 3.39-1.906-1.904a1.295 1.295 0 0 0-1.828 0l-2.448 2.448a.714.714 0 0 0 1.01 1.01l2.39-2.287 1.905 1.905a1.295 1.295 0 0 0 1.829 0l3.733-3.762v1.381c0 .395.32.714.714.714" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M5.81 2h12.38A3.81 3.81 0 0 1 22 5.81v12.38A3.81 3.81 0 0 1 18.19 22H5.81A3.81 3.81 0 0 1 2 18.19V5.81A3.81 3.81 0 0 1 5.81 2m12.38 18.571a2.38 2.38 0 0 0 2.381-2.38V5.81a2.38 2.38 0 0 0-2.38-2.381H5.81a2.38 2.38 0 0 0-2.381 2.38v12.382a2.38 2.38 0 0 0 2.38 2.38z" clipRule="evenodd"/><path fill="currentColor" d="M17.238 8.905h-2.857a.714.714 0 1 0 0 1.428h.886l-3.39 3.39L9.97 11.82a1.295 1.295 0 0 0-1.828 0l-2.486 2.41a.714.714 0 0 0 1.01 1.01l2.352-2.353 1.905 1.905c.508.504 1.33.504 1.838 0l3.724-3.724v1.41a.714.714 0 1 0 1.428 0V9.618a.724.724 0 0 0-.676-.714"/>
      </>
    ) : null}
  </svg>
);

export default TrendingUp;