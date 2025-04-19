 import React from "react";
interface NpmProps {
  color?: string;
  className?: string;
  variants?: "filled" | "outlined";
  size?: number;
}

const Npm: React.FC<NpmProps> = ({
  color,
  className = "",
  variants = "filled",
  size = 24,
}) =>{
 const defaultColor = "white";
  const fillColor = color || defaultColor;
  return(
    <svg
      width={size}
      height={size}
      viewBox={`0 -2 24 ${size/2}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-${fillColor} ${className}`}
    >
      {variants === "filled" ? (
        <>
          <path fill="currentColor" fillRule="evenodd" d="M13.106.002v6.491h-3.084V8H6.939V.002zM10.022 4.99V1.508h1.541V4.99z" clipRule="evenodd"/><path fill="currentColor" d="M6.169 0v6.493H4.626V1.507H3.084v4.986H0V0zM23 .002v6.493h-1.543V1.508h-1.541v4.987h-1.541V1.508H16.83v4.987H13.75V.002z"/>
        </>
      ) : variants === "outlined" ? (
        <>
          <path fill="currentColor" d="M.6.017v7.615h6.468v1.385H12.1V7.632h11.5V.017zm1.277 1.23H6.99v5.309H5.71V2.479H4.434v4.077H1.877zm6.39 0h5.112v5.307h-2.557v1.232H8.267zm6.389 0h7.667v5.309h-1.278V2.479h-1.278v4.077H18.49V2.479h-1.28v4.077h-2.554zM10.822 2.48v2.846H12.1V2.48z"/>
        </>
      ) : null}
    </svg>
  )
 }; 
  

export default Npm;