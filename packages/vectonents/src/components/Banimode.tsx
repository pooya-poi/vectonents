 import React from "react";

interface BanimodeProps {
  color?: string;
  className?: string;
  size?: number;
}

const Banimode: React.FC<BanimodeProps> = ({
  color,
  className = "",
  size = 24,
}) => 
{
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
      <path fill="currentColor" fillRule="evenodd" d="M22.927 7.658a3.97 3.97 0 0 0-.837-1.886 3.8 3.8 0 0 0-1.655-1.179L9.06.323l.883 5.237a4.5 4.5 0 0 1 1.885.464c.589.291 1.11.71 1.53 1.226 1.693 2.08 1.336 5.002-.64 6.72l-5.042 4.37a.954.954 0 0 1-1.367-.122 1.3 1.3 0 0 1-.244-.618L3.748 3.867a1.03 1.03 0 0 1 .142-.772 1 1 0 0 1 .277-.281.95.95 0 0 1 .75-.135 1 1 0 0 1 .353.168 1.021 1.021 0 0 1 .386.677L7.71 15.7l3.768-3.261c1.158-1.002 1.386-2.68.395-3.897a2.63 2.63 0 0 0-1.642-.944 2.59 2.59 0 0 0-1.835.418L7.27 1.375 5.206.599A3.7 3.7 0 0 0 3.205.405c-.672.122-1.3.43-1.816.89A3.9 3.9 0 0 0 .225 2.982 4 4 0 0 0 .06 5.048l2.552 14.959c.109.695.398 1.346.837 1.885.439.54 1.01.946 1.655 1.178.638.25 1.33.317 2.002.194.671-.122 1.299-.43 1.815-.889l2.497-2.165 8.794-7.586 1.388-1.2a3.9 3.9 0 0 0 1.166-1.695 4 4 0 0 0 .16-2.071" clipRule="evenodd"/>
    </svg>
  );
} ;

export default Banimode;