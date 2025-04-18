
import React from 'react'

interface ToseeInsuranceProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const ToseeInsurance: React.FC<ToseeInsuranceProps> = ({
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
      <path fill="currentColor" fillRule="evenodd" d="M3.467 4.415 11.508 0l8.047 4.415v4.341l-8.047-4.31-8.04 4.31zM3.471 9.07H0L.039 23H23V9.068h-3.422L19.56 19.91l-4.158-.002h-.635q-.27.24-.57.438c-.692.471-1.49.743-2.3.81a4.76 4.76 0 0 1-2.398-.42 5 5 0 0 1-1.274-.833q-2.374-.005-4.75-.015zM9.02 19.903q.318.216.665.371c1.366.635 3.014.5 4.272-.357l.015-.01h-.002c1.185-.786 2.006-2.172 2.164-3.663q.035-.281.036-.564c.012-1.365-.513-2.728-1.433-3.67-.999-1.047-2.449-1.565-3.83-1.363-1.33.172-2.564 1.007-3.298 2.212-.513.818-.776 1.802-.776 2.785 0 .59.095 1.18.286 1.733a5 5 0 0 0 1.903 2.526z" clipRule="evenodd"/>
    </svg>
);

export default ToseeInsurance;