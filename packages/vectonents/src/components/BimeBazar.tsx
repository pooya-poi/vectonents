import React from "react";

interface BimeBazarProps {
  className?: string;
  size?: number;
}

const BimeBazar: React.FC<BimeBazarProps> = ({
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
      <path fill="currentColor" d="M19.83 9.51c0-.043.04-.086.057-.125l.026-.063.052-.161v-.099Q20 8.867 20 8.67a1.8 1.8 0 0 0-.065-.5c0-.062-.04-.125-.061-.188a1 1 0 0 0-.066-.145c0-.028-.021-.051-.034-.075l-.048-.079a1.5 1.5 0 0 0-.135-.196l-.044-.055a2 2 0 0 0-.217-.224l-3.519-3.181L11.422 0l-3.28 2.96 6.299 5.69-6.303 5.7 3.284 2.95 7.934-7.176a1.992 1.992 0 0 0 .474-.613"/><path fill="currentColor" d="m5.576 14.343 6.281-5.693-3.275-2.965L4.18 9.68.661 12.86l-.082.079-.096.106q-.074.08-.135.17-.169.234-.261.502v.036q-.072.226-.087.46v.26c.023.356.147.701.361 1.002l.052.067c.057.07.113.137.179.204l.082.079L8.6 23l3.258-2.949-4.397-4.006z"/>
    </svg>
  );
} ;

export default BimeBazar;