import React from "react";

interface UnityProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined";
}

const Unity: React.FC<UnityProps> = ({
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
          d="m22.408 12.113 1.539-2.606c.061-.13.07-.279.023-.413L20.923.367a.547.547 0 0 0-.643-.352l-8.955 2.182a.55.55 0 0 0-.377.328L9.995 4.91H7.091a.55.55 0 0 0-.4.174L.145 12.175a.546.546 0 0 0 .024.765l6.865 6.545c.1.098.236.152.375.152h3.13l.954 2.384c.07.177.228.302.413.334l9.524 1.636q.046.01.092.009a.544.544 0 0 0 .533-.428l1.932-8.853a.54.54 0 0 0-.068-.4zM9.995 4.91 17.683 3.5l-4.047 7.954h-9.18zm.546 14.727-6.086-6h9.181l4.773 7.182zm9.852-.056-4.575-7.035 4-7.954 2.59 7.523z"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          d="M20.427 0a.5.5 0 0 0-.15.017L11.328 2.2a.53.53 0 0 0-.377.326L9.995 4.91H7.091a.54.54 0 0 0-.4.177L.144 12.177a.54.54 0 0 0 .025.763l6.861 6.545a.54.54 0 0 0 .377.152h3.133l.954 2.384a.54.54 0 0 0 .411.334l9.524 1.637a.547.547 0 0 0 .627-.42l1.93-8.853a.55.55 0 0 0-.066-.4l-1.27-2.084 1.296-2.728c.062-.13.07-.279.021-.413L20.923.367A.55.55 0 0 0 20.427 0m-.37 1.194 2.81 8.047-.806 1.694-1.905-6.187a.544.544 0 0 0-1.007-.084l-3.819 7.637a.55.55 0 0 0 .032.543l4.364 6.66a.546.546 0 0 0 .986-.178l1.354-5.954.81 1.328-1.774 8.128-8.71-1.495-.61-1.526 6.318 1.174a.546.546 0 0 0 .552-.842l-4.564-6.807a.55.55 0 0 0-.451-.24H4.909a.545.545 0 0 0-.366.947l4.956 4.507H7.628L1.31 12.52 7.33 6h1.8l-4.624 5.088A.543.543 0 0 0 4.91 12h8.728a.55.55 0 0 0 .487-.3l3.819-7.636a.545.545 0 0 0-.61-.778L11.26 4.688l.596-1.496zM16.448 4.61l-3.15 6.298H6.144l4.51-4.96zm3.068 1.76 1.737 5.65-1.32 5.81-3.487-5.321zM6.32 14.182h7.027l3.677 5.489-5.861-1.09z"
        />
      </>
    ) : null}
  </svg>
);

export default Unity;
