import React from "react";

interface YoutubeProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined";
}

const Youtube: React.FC<YoutubeProps> = ({
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
          d="M11.922 0C8.457 0 5.238.255 3.401.65l-.012.004C2.005.974.702 1.996.427 3.597v.007C.214 4.894 0 6.576 0 9c0 2.42.216 4.057.483 5.415.28 1.554 1.554 2.607 2.96 2.931l.02.006c1.917.39 5.045.648 8.51.648s6.596-.259 8.513-.648l.02-.006c1.385-.32 2.688-1.342 2.962-2.943l.003-.012c.207-1.317.476-2.997.529-5.425v-.019c0-2.429-.27-4.121-.533-5.462-.279-1.557-1.553-2.613-2.96-2.938l-.065-.012C18.57.264 15.388 0 11.922 0M9.903 4.782c.202-.004.411.045.608.16l4.692 2.734c.792.461.792 1.625 0 2.086l-4.692 2.735c-.785.457-1.763-.122-1.763-1.044V5.984c0-.691.55-1.189 1.155-1.202"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          d="M11.922 0C8.457 0 5.238.24 3.401.614l-.012.003C2.005.92.702 1.885.427 3.397v.006C.214 4.622 0 6.211 0 8.5c0 2.285.216 3.832.483 5.114.28 1.468 1.554 2.463 2.96 2.769l.02.005c1.917.368 5.045.612 8.51.612s6.596-.244 8.513-.612l.02-.005c1.385-.302 2.688-1.268 2.962-2.78l.003-.011c.207-1.244.476-2.831.529-5.124V8.45c0-2.294-.27-3.893-.533-5.159-.279-1.47-1.553-2.468-2.96-2.774l-.065-.012C18.57.25 15.388 0 11.922 0m0 1.594c3.36 0 6.474.245 8.242.484.868.195 1.559.786 1.695 1.503l.002.013c.254 1.22.5 2.67.502 4.845-.051 2.18-.299 3.644-.506 4.888-.142.775-.807 1.3-1.7 1.498-1.718.328-4.807.581-8.184.581s-6.465-.254-8.181-.582c-.872-.193-1.565-.785-1.702-1.504l-.003-.014c-.251-1.206-.45-2.613-.45-4.806 0-2.19.199-3.654.401-4.825.141-.777.807-1.304 1.703-1.501 1.59-.323 4.8-.58 8.181-.58M10.07 3.997c-.978.03-1.888.798-1.888 1.84v4.796c0 1.39 1.618 2.29 2.857 1.609l4.358-2.4c1.248-.686 1.248-2.53 0-3.216L11.04 4.228a1.9 1.9 0 0 0-.97-.231m.006 1.57q.075.004.158.048l4.358 2.4c.221.121.221.319 0 .44l-4.358 2.398c-.22.12-.416.008-.416-.22V5.836c0-.114.05-.199.126-.24a.25.25 0 0 1 .132-.028"
        />
      </>
    ) : null}
  </svg>
);

export default Youtube;
