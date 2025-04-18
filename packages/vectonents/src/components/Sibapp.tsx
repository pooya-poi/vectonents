import React from "react";

interface SibappProps {
  className?: string;
  size?: number;
}

const Sibapp: React.FC<SibappProps> = ({
  className = "",
  size = 24,
}) => 
{
  const defaultColor = "white";
  return(
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-${defaultColor} ${className}`}
    >
      <path fill="currentColor" d="M16.995 11.618c-.004-3.063-2.282-5.377-5.376-5.42q-3.116-.044-6.23 0C2.377 6.244.061 8.507.021 11.444a238 238 0 0 0 0 6.341C.06 20.725 2.416 22.994 5.4 23h3.092c1.03 0 2.093.002 3.138 0 3.022-.005 5.358-2.317 5.367-5.317.005-2.021.002-4.042 0-6.064zm-3.816 5.886c-.017 1.044-.79 1.729-1.857 1.733-.937.005-1.875 0-2.812 0s-1.936.007-2.904-.002c-.958-.007-1.723-.692-1.737-1.636q-.04-2.986 0-5.972c.012-.914.718-1.615 1.644-1.628a220 220 0 0 1 5.997 0c.946.013 1.658.752 1.67 1.72.024 1.928.028 3.857-.001 5.786zM13.713.14c-1.487-.342-2.826-.055-4.016.846-1.226.927-1.815 2.183-1.86 3.693 2.848.861 5.948-1.396 5.877-4.54z"/>
    </svg>
  );
} ;

export default Sibapp;