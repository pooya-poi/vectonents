
import React from 'react';

interface TrendingDownProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const TrendingDown: React.FC<TrendingDownProps> = ({
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
        <path fill="currentColor" fillRule="evenodd" d="M5.81 2h12.38A3.81 3.81 0 0 1 22 5.81v12.38A3.81 3.81 0 0 1 18.19 22H5.81A3.81 3.81 0 0 1 2 18.19V5.81A3.81 3.81 0 0 1 5.81 2m11.428 13.448c.395 0 .714-.32.714-.715l-.038-2.857a.714.714 0 1 0-1.428 0v1.448L12.752 9.59a1.295 1.295 0 0 0-1.828 0l-1.905 1.905-2.352-2.352a.714.714 0 0 0-1.01.952l2.486 2.438a1.295 1.295 0 0 0 1.828 0l1.905-1.904 3.39 3.39h-.885a.714.714 0 1 0 0 1.429z" clipRule="evenodd"/>
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M5.81 2h12.38A3.81 3.81 0 0 1 22 5.81v12.38A3.81 3.81 0 0 1 18.19 22H5.81A3.81 3.81 0 0 1 2 18.19V5.81A3.81 3.81 0 0 1 5.81 2m12.38 18.571a2.38 2.38 0 0 0 2.381-2.38V5.81a2.38 2.38 0 0 0-2.38-2.381H5.81a2.38 2.38 0 0 0-2.381 2.38v12.382a2.38 2.38 0 0 0 2.38 2.38z" clipRule="evenodd"/><path fill="currentColor" d="M17.308 10.983a.687.687 0 0 0-.692.663v1.283l-3.607-3.468c-.5-.45-1.28-.45-1.78 0l-1.845 1.77-2.316-2.124a.71.71 0 0 0-.85.074.644.644 0 0 0-.128.81l2.371 2.301c.498.45 1.274.45 1.771 0l1.845-1.77 3.284 3.15h-.82a.68.68 0 0 0-.693.664c0 .367.31.664.692.664h2.768c.382 0 .692-.297.692-.664v-2.654a.66.66 0 0 0-.193-.49.72.72 0 0 0-.5-.21"/>
      </>
    ) : null}
  </svg>
);

export default TrendingDown;