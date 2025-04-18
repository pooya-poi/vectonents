 import React from "react";
interface BehanceProps {
  color?: string;
  className?: string;
  variants?: "filled" | "outlined";
  size?: number;
}

const Behance: React.FC<BehanceProps> = ({
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
          <path fill="currentColor" d="M6.496 7.712H3.815v2.68h2.9c.506 0 1.737-.128 1.737-1.36 0-1.359-1.519-1.328-1.9-1.32zM6.913 12.122H3.815v3.166h3.056c.287 0 2.108 0 2.108-1.515 0-1.566-1.45-1.651-2.066-1.651M19.109 10.82c-.283-.277-.755-.427-1.34-.427q-.569 0-.945.175a1.9 1.9 0 0 0-.616.427 1.4 1.4 0 0 0-.307.544c-.06.187-.1.357-.11.505h3.867c-.057-.537-.266-.945-.549-1.224"/><path fill="currentColor" fillRule="evenodd" d="M4.792 0A4.79 4.79 0 0 0 0 4.792v13.416A4.79 4.79 0 0 0 4.792 23h13.416A4.79 4.79 0 0 0 23 18.208V4.792A4.79 4.79 0 0 0 18.208 0zM.958 17.25V5.75h6.11c4.012 0 4.152 1.986 4.152 2.856 0 1.56-1.17 2.144-1.758 2.389.8.204 2.374.891 2.374 2.914 0 3.237-4.01 3.341-4.593 3.341zm14.328-9.383V6.818h4.856v1.05zm-1.89 4.993c0-1.222.766-4.04 4.438-4.04 3.286 0 4.324 2.447 4.198 4.545H15.79c0 .607.17 1.962 2.131 1.962 1.17 0 1.786-.772 1.868-1.01h2.11c-.338.922-1.162 2.583-4.065 2.583-1.077 0-4.44-.415-4.44-4.04" clipRule="evenodd"/>
        </>
      ) : variants === "outlined" ? (
        <>
          <path fill="currentColor" d="M0 0v13h6.558c.607 0 4.792-.118 4.792-3.777 0-2.287-1.642-3.063-2.476-3.294.613-.277 1.834-.936 1.834-2.701 0-.983-.146-3.228-4.334-3.228zm14.95 1.208v1.186h5.067V1.208zM2.98 2.218h2.798c.264 0 2.041-.135 2.041 1.493 0 1.392-1.284 1.537-1.811 1.537H2.98zM17.61 3.47c-3.832 0-4.632 3.186-4.632 4.567 0 4.098 3.508 4.568 4.632 4.568 3.03 0 3.89-1.878 4.242-2.92H19.65c-.086.268-.728 1.141-1.95 1.141-2.046 0-2.224-1.532-2.224-2.218h6.512c.132-2.372-.951-5.138-4.38-5.138m-.069 1.778c.61 0 1.104.17 1.399.483.295.316.513.777.573 1.384h-4.036q.02-.253.115-.571c.063-.217.16-.423.321-.615.16-.19.384-.354.642-.483q.394-.198.986-.198M2.981 7.203h3.233c.642 0 2.155.096 2.155 1.866 0 1.716-1.906 1.713-2.2 1.713H2.98z"/>
        </>
      ) : null}
    </svg>
  )
 }; 
  

export default Behance;