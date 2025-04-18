import React from "react";

interface CodepenProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined";
}

const Codepen: React.FC<CodepenProps> = ({
  size = 24,
  fillColor = "currentColor",
  className = "",
  variants = "filled",
}) => (
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
        <path
          fill="currentColor"
          d="M9.175 12.034 12 13.992l2.826-1.959L12 10.107zM12.952 4.833v3.646l3.529 2.405 2.866-1.987zM7.519 10.884l3.529-2.405V4.833L4.653 8.897zM3.905 13.349l1.95-1.329-1.95-1.352zM11.048 15.622 7.51 13.168l-2.848 1.94 6.386 4.06zM16.49 13.168l-3.538 2.454v3.545l6.386-4.059zM20.095 10.668l-1.95 1.352 1.95 1.329z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 0a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM2 8.354 12 2l10 6.354v7.292L12 22 2 15.644z"
          clipRule="evenodd"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          d="M12 0 0 7.625v8.748L12 24l12-7.625v-8.75zm0 14.39-3.39-2.35L12 9.728l3.39 2.312zm1.143-6.615V3.4l7.674 4.877-3.44 2.384zm-2.286 0L6.623 10.66l-3.44-2.384L10.857 3.4zm-6.232 4.25-2.34 1.593v-3.216zm1.987 1.377 4.245 2.944V20.6l-7.663-4.87zm6.53 2.944 4.246-2.944 3.418 2.328-7.663 4.87zm6.233-4.321 2.34-1.623v3.216z"
        />
      </>
    ) : null}
  </svg>
);

export default Codepen;
