import React from "react";
interface AngularProps {
  className?: string;
  variants?: "filled" | "outlined";
  size?: number;
}

const Angular: React.FC<AngularProps> = ({
  className = "",
  variants = "filled",
  size = 24,
}) => {
  const defaultColor = "white";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-${defaultColor} ${className}`}
    >
      {variants === "filled" ? (
        <>
          <path
            fill="currentColor"
            d="M12.109 0a.6.6 0 0 0-.17.027L.996 3.67a.5.5 0 0 0-.348.532l1.73 13.562c.02.16.12.302.269.38l9.225 4.795a.54.54 0 0 0 .5 0l9.273-4.862a.5.5 0 0 0 .267-.378l1.729-13.561a.5.5 0 0 0-.352-.534L12.278.025a.6.6 0 0 0-.17-.025m.037 2.5 6.795 14h-2.32l-1.453-2.996H9.123L7.67 16.5H5.35zm0 4.75-2.05 4.25h4.099z"
          />
        </>
      ) : variants === "outlined" ? (
        <>
          <path
            fill="currentColor"
            d="M12.146 0 .646 3.862 2.709 18.16 12.146 23l9.436-4.842 2.063-14.296zm0 1.942 9.33 3.133-1.723 11.934-7.607 3.903-7.608-3.903L2.815 5.075zm0 1.766L6.217 16.482h1.976l1.274-2.738h5.357l1.274 2.738h1.976zm0 4.152.019.054.693 1.596 1.115 2.41h-3.655l1.115-2.41.693-1.596z"
          />
        </>
      ) : null}
    </svg>
  );
};

export default Angular;
