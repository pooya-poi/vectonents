import React from "react";

interface VisacardProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined";
}

const Visacard: React.FC<VisacardProps> = ({
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
          d="M2.4 0C1.076 0 0 1.059 0 2.361V14.64C0 15.94 1.076 17 2.4 17h19.2c1.324 0 2.4-1.059 2.4-2.361V2.36C24 1.06 22.924 0 21.6 0zm11.85 5.859c.654 0 1.335.265 1.335.265l-.24 1.151s-.518-.34-.975-.34c-.705 0-.96.228-.96.532 0 .596 1.965.701 1.965 2.036 0 1.11-1.4 1.875-2.415 1.875-1.014 0-1.545-.296-1.545-.296l.255-1.121s.53.31 1.35.31c.818 0 .93-.343.93-.487 0-.852-1.95-.614-1.95-2.273 0-.916.761-1.652 2.25-1.652m-6.345.103H9.42l-2.16 5.253H5.7l-1.14-4.25s1.198.602 1.935 2.229c.032.197.12.516.12.516zm2.07 0h1.44l-.855 5.253H9.135zm7.695 0h1.485l1.095 5.253h-1.29l-.15-.752h-1.77l-.285.752h-1.41zM3 5.977h2.19c.559 0 .765.516.765.516l.48 2.39C5.786 6.826 3 5.978 3 5.978m15.21 1.505-.78 1.977h1.17z"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          d="M2.571 0C1.161 0 0 1.152 0 2.55v11.9C0 15.848 1.162 17 2.571 17H21.43C22.839 17 24 15.848 24 14.45V2.55C24 1.152 22.838 0 21.429 0zm0 1.7H21.43c.485 0 .857.369.857.85v11.9c0 .481-.372.85-.857.85H2.57a.84.84 0 0 1-.857-.85V2.55c0-.481.372-.85.857-.85M14.92 5.419c-1.651 0-2.518.807-2.518 1.833 0 1.852 2.196 1.597 2.196 2.55 0 .162-.137.53-1.044.53-.908 0-1.5-.318-1.5-.318l-.268 1.222s.562.345 1.687.345 2.706-.856 2.706-2.098c0-1.494-2.197-1.594-2.197-2.258 0-.339.291-.61 1.072-.61.508 0 1.071.397 1.071.397l.268-1.301s-.747-.292-1.473-.292m-7.045.106L6.429 9.722s-.074-.362-.108-.585C5.504 7.318 4.18 6.641 4.18 6.641l1.258 4.754h1.715l2.41-5.87zm2.304 0-.938 5.87h1.58l.938-5.87zm8.517 0-2.571 5.87h1.554l.321-.823h1.982l.16.823h1.42l-1.205-5.87zm-16.259.027s3.084.936 3.804 3.24l-.536-2.656s-.234-.584-.857-.584zm16.849 1.673.455 2.205h-1.286z"
        />
      </>
    ) : null}
  </svg>
);

export default Visacard;
