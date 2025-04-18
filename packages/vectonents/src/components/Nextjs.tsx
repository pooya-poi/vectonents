 import React from "react";
interface NextjsProps {
  color?: string;
  className?: string;
  variants?: "filled" | "outlined";
  size?: number;
}

const Nextjs: React.FC<NextjsProps> = ({
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
          <path fill="currentColor" d="M9.21 15.813a.862.862 0 1 1-1.725 0v-8.05a.864.864 0 0 1 1.566-.499l9.647 13.63c2.956-2.086 4.902-5.521 4.902-9.394C23.6 5.175 18.425 0 12.1 0S.6 5.175.6 11.5 5.775 23 12.1 23c1.835 0 3.568-.447 5.111-1.22L9.21 10.474zm5.75-8.625a.862.862 0 1 1 1.725 0v7.958l-1.725-2.431z"/>
        </>
      ) : variants === "outlined" ? (
        <>
          <path fill="currentColor" d="M14.36 7.188a.862.862 0 1 1 1.725 0v7.958l-1.725-2.431z"/><path fill="currentColor" fillRule="evenodd" d="M23 11.5c0 3.873-1.945 7.308-4.902 9.394a8.2 8.2 0 0 1-1.486.886A11.4 11.4 0 0 1 11.5 23C5.175 23 0 17.825 0 11.5S5.175 0 11.5 0 23 5.175 23 11.5M7.748 16.675a.86.86 0 0 0 .862-.863v-5.338l7.497 10.592a10.6 10.6 0 0 1-4.607 1.05C5.637 22.115.885 17.362.885 11.5S5.637.885 11.5.885 22.115 5.637 22.115 11.5c0 3.593-1.784 6.768-4.516 8.69L8.451 7.263a.862.862 0 0 0-1.566.498v8.05c0 .477.386.863.863.863m6.612-9.487a.862.862 0 1 1 1.725 0v7.958l-1.725-2.431z" clipRule="evenodd"/>
        </>
      ) : null}
    </svg>
  )
 }; 
  

export default Nextjs;