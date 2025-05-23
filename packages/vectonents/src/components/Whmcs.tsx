import React from "react";

interface WhmcsProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined";
}

const Whmcs: React.FC<WhmcsProps> = ({
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
          d="M18.45 7.726c0-1.2-.975-2.25-2.25-2.25-1.2 0-2.25.975-2.25 2.25 0 1.2.975 2.25 2.25 2.25s2.325-.975 2.25-2.25"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 0a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm5.65 5.1L11.1 3h1.725l.45 1.875-.9-.226-.226-.149-.149.226-.45.75-.15.224.15.15.676.674-.976.3-.226.075v.75C9.15 8.1 7.65 9.75 7.65 11.774a4.274 4.274 0 0 0 4.276 4.276c2.025 0 3.75-1.425 4.125-3.3h.825l.075-.3.225-.974h.075l.675.75.224.224.226-.15.825-.45.225-.15-.074-.3-.3-.825L21 11.25v1.575l-2.25.526-.15.899 1.575 1.425-.75 1.5-2.175-.6-.6.6.675 2.1-1.5.9-1.575-1.574-.9.224L12.826 21H11.1l-.526-2.175-.825-.224-1.5 1.574-1.5-.9.675-2.025-.526-.675-2.25.6-.75-1.425 1.5-1.5-.224-.9L3 12.75V11.1l2.175-.6.224-.75-1.574-1.575.824-1.425 2.176.6.6-.6-.6-2.175L8.25 3.75l1.5 1.575zm4.874-1.05L15.75 3h.9l.3 1.05.45.15.826-.825.75.45-.3 1.125.3.3 1.274-.3.375.75-.825.824.075.452L21 7.35v.824l-1.274.3-.077.525.827.75-.375.825-1.125-.375-.3.3.449 1.125-.825.524-.824-.899-.452.15-.298 1.124h-.901l-.3-1.125-.45-.149-.75.825-.825-.45.3-1.05-.3-.375-1.2.3-.45-.75.9-.825-.075-.526-1.2-.298V7.2l1.126-.3.074-.376-.824-.824.45-.75 1.124.3.375-.3-.3-1.125.75-.45.75.825z"
          clipRule="evenodd"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          d="m10.8 0-.6 2.8-1.2.3L7 1 5.1 2.1 5.9 5l-.8.8L2.2 5 1.1 6.9 3.2 9l-.3 1-2.9.8V13l2.9.8.3 1.2-2 2 1 1.9 3-.8.7.9-.9 2.7 2 1.2 2-2.1 1.1.3.7 2.9h2.3l.7-2.9 1.2-.3 2.1 2.1 2-1.2-.9-2.8.8-.8 2.9.8 1-2-2.1-1.9.2-1.2 3-.7V11l-2.6-.9.4 1.1.1.4-.3.2-1.1.6-.3.2-.3-.3-.9-1h-.1l-.3 1.3-.1.4h-1.1c-.5 2.5-2.8 4.4-5.5 4.4-3.2 0-5.7-2.6-5.7-5.7 0-2.7 2-4.9 4.5-5.5v-1l.3-.1 1.3-.4-.9-.9-.2-.2.2-.3.6-1 .2-.3.3.2 1.2.3-.6-2.5zM17 0l-.3 1.4-.7.2-1-1.1-1 .6.4 1.5-.5.4-1.5-.4-.6 1 1.1 1.1-.1.5-1.5.4v1.2l1.6.4.1.7L11.8 9l.6 1 1.6-.4.4.5-.4 1.4 1.1.6 1-1.1.6.2.4 1.5h1.2l.4-1.5.6-.2 1.1 1.2 1.1-.7-.6-1.5.4-.4 1.5.5.5-1.1-1.1-1 .1-.7 1.7-.4V5.8l-1.5-.5-.1-.6 1.1-1.1-.5-1-1.7.4-.4-.4.4-1.5-1-.6-1.1 1.1-.6-.2-.4-1.4zm.6 3.3c1.7 0 3 1.4 3 3 .1 1.7-1.3 3-3 3s-3-1.4-3-3c0-1.7 1.4-3 3-3"
        />
      </>
    ) : null}
  </svg>
);

export default Whmcs;
