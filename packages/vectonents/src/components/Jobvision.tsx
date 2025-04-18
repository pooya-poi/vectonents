
import React from 'react'

interface JobvisionProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Jobvision: React.FC<JobvisionProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M15.98 7.882h-2.931c-.422 0-.608-.23-.608-.55 0-.231.042-.366.438-.677l-.554-.835c-.86.57-.853 1.02-.853 1.512 0 .793.503 1.586 1.553 1.586h4.043V6.111l-1.089.246zM11.535 1.292l-1.088.245v1.526H7.209v1.165c0 .402-.242.58-.578.58-.243 0-.384-.042-.71-.419l-.876.529c.597.818 1.07.813 1.586.813.833 0 1.665-.48 1.665-1.48v-.152h3.239zM15.278 2.853a.4.4 0 0 1-.063.059c-.13.093-.277.152-1.076.152-.8 0-.857-.059-.986-.152a.5.5 0 0 1-.197-.41c0-.188.092-.335.197-.41.129-.094.186-.153.986-.153.799 0 .947.059 1.076.153a.5.5 0 0 1 .063.057.53.53 0 0 1 .127.353.52.52 0 0 1-.127.351m0-1.849a2 2 0 0 0-.24-.051c-.283-.044-.586-.04-.9-.04q-.245-.001-.47.005c-.449.016-.834.088-1.18.418-.32.304-.492.656-.492 1.166s.172.861.492 1.166c.462.439.992.422 1.65.422.406 0 .794.006 1.14-.09v.228c0 .402-.242.58-.578.58-.242 0-.858.095-1.184-.282l-.876.528c.597.819 1.544.677 2.06.677.833 0 1.665-.48 1.665-1.48V2.5c0-.51-.172-.861-.492-1.165a1.4 1.4 0 0 0-.595-.332" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m6.102 1.292-1.088.245v1.526H1.578c-.422 0-.609-.231-.609-.551 0-.23.043-.365.439-.676L.853 1C-.006 1.57 0 2.02 0 2.51c0 .795.503 1.587 1.553 1.587h4.55zM6.576 2.577h2.627v-.954H6.576zM9.54 5.531h2.628v-.954H9.54z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M2.08 2.577h1.362v-.954H2.08zM6.576 1.305h1.36V.35h-1.36zM13.52 10.35h1.36v-.953h-1.36zM19.568 10.35h1.36v-.953h-1.36zM23.891 7.755c-.564-1.17-2.586-2.48-4.745-1.355l.475.921c1.294-.77 2.601-.02 3.07.561h-3.475c-.422 0-.609-.23-.609-.55V5.17l-1.087.322v1.84c0 .793.621 1.586 1.671 1.586h4.675S24 8.725 24 8.327c0-.187-.027-.404-.109-.572" clipRule="evenodd"/>
  </svg>
);

export default Jobvision;