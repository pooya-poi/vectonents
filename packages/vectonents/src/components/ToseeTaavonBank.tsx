
import React from 'react'

interface ToseeTaavonBankProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const ToseeTaavonBank: React.FC<ToseeTaavonBankProps> = ({
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
    <path fill="currentColor" d="M11.598 17.904a.76.76 0 0 0-.286-.65 4.8 4.8 0 0 1-2.597-1.248.77.77 0 0 0-.69.181l-.04.038c-.818.751-2.618 2.404-3.443 3.168a.69.69 0 0 0-.123.87c.327.526.566 1 .778 1.417.442.874.762 1.505 1.493 1.857.732.351 1.424.206 2.383.006.46-.096.979-.205 1.593-.278a.69.69 0 0 0 .603-.64c.083-1.14.255-3.641.329-4.721M15.976 16.182a.76.76 0 0 0-.69-.18 4.8 4.8 0 0 1-2.594 1.25.76.76 0 0 0-.286.651v.005c.076 1.082.251 3.578.335 4.716.023.33.276.597.604.639.614.072 1.134.18 1.593.276.96.2 1.652.343 2.383-.01.731-.352 1.05-.983 1.491-1.858.211-.418.45-.892.776-1.418a.69.69 0 0 0-.124-.87c-.83-.765-2.642-2.426-3.457-3.173zM7.521 15.556a.76.76 0 0 0 .33-.63 4.78 4.78 0 0 1-.644-2.808.76.76 0 0 0-.572-.423l-.025-.004c-1.083-.169-3.532-.549-4.654-.719a.69.69 0 0 0-.758.447 18 18 0 0 1-.623 1.49c-.407.891-.702 1.535-.52 2.326.181.79.726 1.241 1.481 1.865.362.299.77.637 1.211 1.071.238.23.605.26.877.073.934-.641 2.97-2.047 3.873-2.672zM17.36 11.688a.76.76 0 0 0-.57.423q.015.192.015.387c0 .883-.239 1.711-.655 2.423 0 .248.12.485.33.63l.023.015c.904.623 2.942 2.027 3.878 2.667.272.187.64.157.876-.074.44-.435.849-.773 1.21-1.072.754-.626 1.299-1.077 1.479-1.868s-.115-1.434-.524-2.324a18 18 0 0 1-.625-1.49.69.69 0 0 0-.758-.446c-1.13.173-3.608.56-4.678.729M6.815 10.907c.243.073.503.02.697-.135a4.83 4.83 0 0 1 1.795-2.254.76.76 0 0 0-.025-.712l-.022-.04c-.55-.96-1.768-3.09-2.331-4.066a.69.69 0 0 0-.822-.314c-.585.202-1.1.33-1.555.443-.95.237-1.637.408-2.142 1.043-.506.635-.518 1.342-.536 2.321-.008.469-.017 1-.082 1.614a.69.69 0 0 0 .49.73c1.094.334 3.495 1.057 4.533 1.37M14.709 7.803a.76.76 0 0 0-.024.711 4.83 4.83 0 0 1 1.798 2.252.77.77 0 0 0 .697.134l.079-.024c1.075-.325 3.386-1.024 4.452-1.351a.69.69 0 0 0 .49-.73 18 18 0 0 1-.085-1.615c-.02-.979-.032-1.686-.539-2.32-.506-.635-1.193-.805-2.144-1.04-.455-.113-.97-.24-1.555-.442a.694.694 0 0 0-.822.315c-.57.99-1.811 3.17-2.347 4.11M10.017 7.452a.76.76 0 0 0 .539.462c.455-.143.94-.22 1.443-.22a4.8 4.8 0 0 1 1.442.22.76.76 0 0 0 .54-.462c.4-1.005 1.33-3.334 1.75-4.397a.69.69 0 0 0-.267-.838 18 18 0 0 1-1.315-.94C13.372.68 12.81.25 11.999.25c-.812 0-1.374.43-2.151 1.027a18 18 0 0 1-1.315.94.69.69 0 0 0-.266.838c.42 1.063 1.349 3.392 1.75 4.397M15.759 12.504a3.76 3.76 0 0 0-3.76-3.76 3.76 3.76 0 0 0-3.76 3.76 3.76 3.76 0 0 0 3.76 3.76 3.76 3.76 0 0 0 3.76-3.76"/>
  </svg>
);

export default ToseeTaavonBank;