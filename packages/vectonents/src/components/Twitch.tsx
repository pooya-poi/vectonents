import React from "react";

interface TwitchProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined";
}

const Twitch: React.FC<TwitchProps> = ({
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
          fillRule="evenodd"
          d="M5.217 3H20.87v10.281L18.033 16h-6.245l-.163.14-2.234 2.141V16H5.217zm4.174 10V6h3.13v7zm5.218 0V6h3.13v7z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m1.728 0-.13.328-1.565 4L0 4.406V21h5.74v3h3.863l.163-.14L12.75 21h4.68l.162-.14L24 14.718V0zm2.446 17V2h17.739v11.703l-.147.156-3.13 3-.163.141h-6.245l-2.983 2.86-.897.843V17zM5.217 3H20.87v10.281L18.033 16h-6.245l-.163.14-2.234 2.141V16H5.217zm4.174 3v7h3.13V6zm5.218 7V6h3.13v7z"
          clipRule="evenodd"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1.636 0 0 4.174V20.87h6V24h3.273l3.273-3.13h4.909L24 14.609V0zm20.182 2.087H4.364v14.609h4.363v3.13L12 16.696h6.546l3.272-3.13z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M15.273 6.26v6.262h2.182V6.26zm-5.455 0v6.262H12V6.26z"
        />
      </>
    ) : null}
  </svg>
);

export default Twitch;
