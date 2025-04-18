 import React from "react";

interface DeyBankProps {
  color?: string;
  className?: string;
  size?: number;
}

const DeyBank: React.FC<DeyBankProps> = ({
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
      <path fill="currentColor" d="M4.33 5.281c-1.02 0-1.928.563-2.438 1.529-.5.948-.514 2.112 0 3.058.498.916 1.438 1.402 2.4 1.402 2.978 0 4.91-3.285 6.476-5.945a40 40 0 0 1 1.022-1.677q.274-.416.572-.804c.27-.348.555-.676.863-.976C14.366.752 15.807.008 17.793 0h.032v3.648c-.9 0-1.757.358-2.594.935-.39.269-.776.585-1.16.935-.88.803-1.684 1.695-2.487 2.587-.86.953-1.718 1.906-2.672 2.75q-.446.399-.909.742a10 10 0 0 1-.69.468c-.92.565-1.934.935-3 .935a4.1 4.1 0 0 1-2.588-.935 4.5 4.5 0 0 1-.492-.468A4.87 4.87 0 0 1 0 8.324c0-.49.07-.96.197-1.403a4.7 4.7 0 0 1 1.528-2.338 4.1 4.1 0 0 1 2.588-.935c1.151.003 2.244.363 3.259.935a12 12 0 0 1 1.404.935q.028.021.065.045.04.025.086.059l.31.228.005.004-.815 1.278c-1.223-.964-2.744-1.85-4.296-1.85M17.825 3.648v3.599c1.024.003 1.854.915 1.854 2.012 0 1.11-.83 1.998-1.846 2.012h-.008.003q-.007-.002-.016-.002h-.006v.002q-.17-.002-.34-.018c-1.529-.317-3.365-2.024-4.596-3.168l-.035-.033-1.061 1.151c1.854 1.773 4.305 3.783 6.89 3.797h.046a4.08 4.08 0 0 0 2.565-.935q.263-.215.492-.468A4.87 4.87 0 0 0 23 8.324c0-.489-.07-.96-.197-1.403a4.7 4.7 0 0 0-1.528-2.338 4.08 4.08 0 0 0-2.565-.935z"/>
    </svg>
  );
} ;

export default DeyBank;