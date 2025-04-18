 import React from "react";
interface FigmaProps {
  color?: string;
  className?: string;
  variants?: "filled" | "outlined";
  size?: number;
}

const Figma: React.FC<FigmaProps> = ({
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-${fillColor} ${className}`}
    >
      {variants === "filled" ? (
        <>
          <path fill="currentColor" d="M7 0v7H3.5A3.507 3.507 0 0 1 0 3.5C0 1.573 1.573 0 3.5 0zm0 8v7H3.5A3.507 3.507 0 0 1 0 11.5C0 9.572 1.573 8 3.5 8zm0 8v3.5C7 21.427 5.428 23 3.5 23A3.507 3.507 0 0 1 0 19.5C0 17.573 1.573 16 3.5 16zm8-12.5C15 5.428 13.428 7 11.5 7H8V0h3.5C13.428 0 15 1.573 15 3.5M11.5 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"/>
        </>
      ) : variants === "outlined" ? (
        <>
          <path fill="currentColor" d="M4.387 0C1.974 0 0 1.925 0 4.28c0 1.467.815 2.704 1.978 3.476C.815 8.527 0 9.765 0 11.233c0 1.47.77 2.772 1.936 3.543C.767 15.604 0 16.944 0 18.453 0 20.955 2.097 23 4.661 23c2.565 0 4.662-2.045 4.662-4.547V8.558h3.29C15.026 8.558 17 6.633 17 4.28S15.026 0 12.613 0zm0 1.605h3.29v5.348h-3.29c-1.524 0-2.742-1.187-2.742-2.674s1.218-2.674 2.742-2.674m4.936 0h3.29c1.524 0 2.742 1.187 2.742 2.674s-1.218 2.674-2.742 2.674h-3.29zM4.387 8.558h3.29v5.349h-3.29c-1.524 0-2.742-1.188-2.742-2.674 0-1.487 1.218-2.675 2.742-2.675m8.5 0a3.6 3.6 0 0 0-2.52 1.018 3.43 3.43 0 0 0-1.044 2.459c0 .922.375 1.806 1.044 2.458a3.6 3.6 0 0 0 2.52 1.019 3.6 3.6 0 0 0 2.52-1.019 3.43 3.43 0 0 0 1.045-2.458c0-.922-.376-1.806-1.044-2.459a3.6 3.6 0 0 0-2.52-1.018m-8.226 6.954h3.016v2.941c0 1.635-1.34 2.942-3.016 2.942s-3.016-1.307-3.016-2.942c0-1.634 1.34-2.941 3.016-2.941"/>
        </>
      ) : null}
    </svg>
  )
 }; 
  

export default Figma;