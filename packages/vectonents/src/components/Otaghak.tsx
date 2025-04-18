import React from "react";

interface OtaghakProps {
  className?: string;
  size?: number;
}

const Otaghak: React.FC<OtaghakProps> = ({
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
      <path fill="currentColor" d="M8.523 23c-.274-.188-.387-.44-.536-.655-2.064-2.958-4.11-5.929-6.185-8.88-.758-1.077-1.378-2.205-1.63-3.5-.46-2.35-.005-4.515 1.42-6.467C2.877 1.736 4.608.6 6.78.181c2.814-.544 5.312.14 7.452 2.02 1.526 1.342 2.412 3.037 2.683 5.007.272 1.98-.1 3.868-1.251 5.543-2.293 3.338-4.62 6.654-6.934 9.978-.057.082-.122.158-.207.268zM2.7 8.272c-.001 3.195 2.561 5.717 5.81 5.692 3.384-.026 5.843-2.629 5.774-5.828-.064-3.037-2.579-5.461-5.707-5.517C5.324 2.562 2.67 5.18 2.7 8.273z"/><path fill="currentColor" d="M7.042 12.054V4.591l2.884-.676v8.737c-.969-.132-1.89-.406-2.884-.598"/>
    </svg>
  );
} ;

export default Otaghak;