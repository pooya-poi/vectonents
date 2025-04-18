
import React from 'react'

interface KhavarMianehBankProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const KhavarMianehBank: React.FC<KhavarMianehBankProps> = ({
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
    <path fill="currentColor" d="m21.233 4.89 2.765-1.036V2.112l-2.885 1.444 2.885-2.319V0h-1.152l-2.584 2.801L21.98 0h-1.624l-1.462 2.667a4.43 4.43 0 0 1 2.34 2.223M23.998 9.62l-2.7-1.133c.183-.43.3-.896.337-1.387a4.4 4.4 0 0 0-.303-1.981l2.666-.645v1.164l-1.59.431 1.59.305V7.54l-1.256.049 1.256.465zM0 16.255V12.92l12.95-5.073a4.43 4.43 0 0 0 1.748 2.53l-8.022 13.62H3.295l7.195-10.434L0 24v-5.232l8.986-7.033zM9.28 23.998l5.669-13.457a4.413 4.413 0 0 0 3.286.521l3.413 12.936h-2.647l-1.82-8.723-.119 8.723H14.36l.627-8.546-2.43 8.546zM18.57 10.97l5.405 12.975.023.053v-6.024l-2.902-5.003 2.902 2.692v-2.066l-1.815-2.43 1.815.902v-1.59L21.16 8.782a4.43 4.43 0 0 1-2.59 2.188M19.677 0l-.993 2.59a4.4 4.4 0 0 0-2.934.01L15.123 0h1.288l.298 1.107L16.75 0h1.184l-.086 1.425L18.289 0zM15.526 2.686 14.474 0h-1.527l.56 1.256L12.497 0h-2.018l1.668 1.824L9.574 0H5.6l7.842 4.495a4.44 4.44 0 0 1 2.085-1.809M2.872 0 13.31 4.727a4.42 4.42 0 0 0-.42 2.849L0 11.043V7.982l8.423-1.134L0 6.31V3.783l9.011 1.17L0 2.357V0z"/>
  </svg>
);

export default KhavarMianehBank;