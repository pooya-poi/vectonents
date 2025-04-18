import React from "react";

interface SlackProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined";
}

const Slack: React.FC<SlackProps> = ({
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
          d="M8.842 6.316H2.526a2.526 2.526 0 1 0 0 5.052h6.316a2.526 2.526 0 1 0 0-5.052m2.526-3.79v2.527H8.842a2.526 2.526 0 1 1 2.526-2.527M6.316 15.158v6.316a2.526 2.526 0 1 0 5.052 0v-6.316a2.526 2.526 0 1 0-5.052 0m-3.79-2.526h2.527v2.526a2.526 2.526 0 1 1-2.527-2.526m12.632 5.052h6.316a2.526 2.526 0 1 0 0-5.052h-6.316a2.526 2.526 0 1 0 0 5.052m-2.526 3.79v-2.527h2.526a2.526 2.526 0 1 1-2.526 2.527m5.052-12.632V2.526a2.526 2.526 0 1 0-5.052 0v6.316a2.526 2.526 0 1 0 5.052 0m3.79 2.526h-2.527V8.842a2.526 2.526 0 1 1 2.527 2.526"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          d="M8.87 0a2.617 2.617 0 0 0-2.61 2.609 2.617 2.617 0 0 0 2.61 2.608h2.087a.52.52 0 0 0 .521-.521V2.609A2.617 2.617 0 0 0 8.87 0m6.26 0a2.617 2.617 0 0 0-2.608 2.609v6.26a2.617 2.617 0 0 0 2.608 2.61 2.617 2.617 0 0 0 2.61-2.61V2.61A2.617 2.617 0 0 0 15.13 0M8.87 1.043c.87 0 1.565.695 1.565 1.566v1.565H8.87c-.87 0-1.566-.695-1.566-1.565S8 1.043 8.87 1.043m6.26 0c.87 0 1.566.695 1.566 1.566v6.26c0 .871-.695 1.566-1.566 1.566-.87 0-1.565-.695-1.565-1.565V2.609c0-.87.695-1.566 1.565-1.566M2.61 6.261A2.617 2.617 0 0 0 0 8.87a2.617 2.617 0 0 0 2.609 2.608h6.26a2.617 2.617 0 0 0 2.61-2.608 2.617 2.617 0 0 0-2.61-2.61zm18.782 0a2.617 2.617 0 0 0-2.608 2.609v2.087a.52.52 0 0 0 .521.521h2.087A2.617 2.617 0 0 0 24 8.87a2.617 2.617 0 0 0-2.609-2.61M2.61 7.304h6.26c.871 0 1.566.695 1.566 1.566 0 .87-.695 1.565-1.565 1.565H2.609c-.87 0-1.566-.695-1.566-1.565s.695-1.566 1.566-1.566m18.782 0c.87 0 1.566.695 1.566 1.566 0 .87-.695 1.565-1.566 1.565h-1.565V8.87c0-.87.695-1.566 1.565-1.566M2.61 12.522A2.617 2.617 0 0 0 0 15.13a2.617 2.617 0 0 0 2.609 2.61 2.617 2.617 0 0 0 2.608-2.61v-2.087a.52.52 0 0 0-.521-.521zm6.26 0a2.617 2.617 0 0 0-2.608 2.608v6.261A2.617 2.617 0 0 0 8.87 24a2.617 2.617 0 0 0 2.608-2.609v-6.26a2.617 2.617 0 0 0-2.608-2.61m6.261 0a2.617 2.617 0 0 0-2.608 2.608 2.617 2.617 0 0 0 2.608 2.61h6.261A2.617 2.617 0 0 0 24 15.13a2.617 2.617 0 0 0-2.609-2.608zM2.61 13.565h1.565v1.565c0 .87-.695 1.566-1.565 1.566S1.043 16 1.043 15.13s.695-1.565 1.566-1.565m6.26 0c.871 0 1.566.695 1.566 1.565v6.261c0 .87-.695 1.566-1.565 1.566s-1.566-.695-1.566-1.566v-6.26c0-.871.695-1.566 1.566-1.566m6.261 0h6.261c.87 0 1.566.695 1.566 1.565s-.695 1.566-1.566 1.566h-6.26a1.56 1.56 0 0 1-1.566-1.566c0-.87.695-1.565 1.565-1.565m-2.087 5.218a.52.52 0 0 0-.521.521v2.087A2.617 2.617 0 0 0 15.13 24a2.617 2.617 0 0 0 2.61-2.609 2.617 2.617 0 0 0-2.61-2.608zm.522 1.043h1.565c.87 0 1.566.695 1.566 1.565S16 22.957 15.13 22.957s-1.565-.695-1.565-1.566z"
        />
      </>
    ) : null}
  </svg>
);

export default Slack;
