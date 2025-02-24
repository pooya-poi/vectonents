
import React from 'react';

interface DribbbleProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: 'filled' | 'outlined';
}

const Dribbble: React.FC<DribbbleProps> = ({
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
        <path fill="currentColor" d="M13.233 9.199c.49.844.945 1.7 1.378 2.567l.256-.09c2.227-.629 4.56-.799 6.855-.5a9.84 9.84 0 0 0-2.789-6.188l-1.622 1.4a23.6 23.6 0 0 1-4.078 2.811M8.533 2.61a43.5 43.5 0 0 1 3.834 5.167 21.5 21.5 0 0 0 3.855-2.656l1.445-1.233a9.76 9.76 0 0 0-9.134-1.289zM4.422 10.288a21.8 21.8 0 0 0 6.445-1.733A42 42 0 0 0 7.3 3.732l-.378-.389a9.86 9.86 0 0 0-4.844 7.212zM15.344 13.277a44 44 0 0 1 2.223 6.033l.144.533a9.81 9.81 0 0 0 3.978-7 15.4 15.4 0 0 0-6.345.434M4.856 18.843a15.17 15.17 0 0 1 5.455-5.277 22 22 0 0 1 2.722-1.245c-.41-.81-.833-1.6-1.289-2.366a23.8 23.8 0 0 1-7.133 1.988L2 12.233v.3a9.87 9.87 0 0 0 2.856 6.31M15.956 19.766a41 41 0 0 0-2.223-5.934q-1.366.515-2.655 1.2A13.6 13.6 0 0 0 6.1 19.943a9.87 9.87 0 0 0 10.1.811z" />
      </>
    ) : variants === 'outlined' ? (
      <>
        <path fill="currentColor" fillRule="evenodd" d="M20.77 11.32a8.87 8.87 0 0 0-2.87-6l-.01-.06a.63.63 0 0 0-.29-.2A8.85 8.85 0 0 0 11.89 3h-.59a9.1 9.1 0 0 0-3.21.9H8a8.9 8.9 0 0 0 3.89 16.9h.59a8.9 8.9 0 0 0 8.29-9.48m-6.68.35c-.32-.62-.65-1.24-1-1.84a18.4 18.4 0 0 0 3.11-2.16l1-.88a7.35 7.35 0 0 1 2 4.41 13.3 13.3 0 0 0-5 .43zM11.9 4.52h-.49a7.3 7.3 0 0 0-1.81.38 33 33 0 0 1 2.71 3.65 17.5 17.5 0 0 0 2.92-2l.83-.72a7.3 7.3 0 0 0-4.16-1.31m-3.72 1 .07.07a32 32 0 0 1 2.71 3.64 17.1 17.1 0 0 1-4.9 1.32l-1.46.16a7.42 7.42 0 0 1 3.58-5.2zm-3.67 6.7v.16a7.37 7.37 0 0 0 2.05 4.6 11.9 11.9 0 0 1 4.1-3.87q.974-.525 2-.93c-.29-.57-.59-1.13-.91-1.68a18.3 18.3 0 0 1-5.52 1.53zm7.86 7.06h-.49a7.3 7.3 0 0 1-4.21-1.34 10.5 10.5 0 0 1 3.68-3.53 19 19 0 0 1 2-.9 33 33 0 0 1 1.67 4.54l.14.48a7.2 7.2 0 0 1-2.79.75m4.08-1.56a7.4 7.4 0 0 0 1-.94 7.33 7.33 0 0 0 1.81-4.08 12.1 12.1 0 0 0-4.5.34 34.5 34.5 0 0 1 1.69 4.62z" clipRule="evenodd" />
      </>
    ) : null}
  </svg>
);

export default Dribbble;