
import React from 'react'

interface MiliProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Mili: React.FC<MiliProps> = ({
  size = 24,
  fillColor = 'currentColor',
  className = ''
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-${fillColor} ${className}`}
  >
    <path fill="currentColor" d="M17.745 8.648c-.13 1.053-.887 1.86-1.797 1.86-1.004 0-1.817-.977-1.817-2.183V2.652h.459c1.004 0 1.817.977 1.817 2.183v3.443c0 .467.315.845.703.845.278.003.52-.193.635-.475"/><path fill="currentColor" d="M21.142 8.648c-.13 1.053-.887 1.86-1.798 1.86-1.003 0-1.816-.977-1.816-2.183V2.652h.459c1.003 0 1.817.977 1.817 2.183v3.443c0 .467.315.845.703.845.278.003.52-.193.635-.475M11.87 3.242c.628 0 1.137-.612 1.137-1.367S12.498.508 11.87.508c-.629 0-1.138.612-1.138 1.367s.509 1.367 1.138 1.367"/><path fill="currentColor" d="M24.539 8.648c-.13 1.053-.887 1.86-1.798 1.86-1.003 0-1.817-.977-1.817-2.183V4.19h.46c1.003 0 1.816.977 1.816 2.183v1.906c0 .467.315.845.704.845.28.003.522-.193.635-.475M22.062 3.242c.629 0 1.138-.612 1.138-1.367S22.69.508 22.062.508s-1.138.612-1.138 1.367.51 1.367 1.138 1.367M10.314 9.126c-.388 0-.703-.378-.703-.845V4.838c0-1.206-.814-2.183-1.817-2.183-.777 0-1.439.584-1.7 1.405-.261-.821-.923-1.408-1.7-1.408s-1.438.584-1.7 1.405c-.26-.821-.922-1.405-1.699-1.405H.54v5.67c0 1.206.813 2.183 1.816 2.183.777 0 1.439-.584 1.7-1.405.261.821.923 1.405 1.7 1.405s1.438-.584 1.7-1.405c.26.821.922 1.405 1.699 1.405.913 0 1.668-.807 1.797-1.86-.117.285-.359.481-.637.481m-6.796 0c-.388 0-.703-.378-.703-.845V4.835q0-.299-.064-.575a.65.65 0 0 1 .481-.23c.388 0 .703.38.703.846v3.446q0 .299.064.575a.64.64 0 0 1-.481.23m3.4 0c-.39 0-.704-.378-.704-.845V4.838q0-.302-.064-.575a.65.65 0 0 1 .481-.23c.389 0 .704.38.704.846v3.443q0 .299.063.575a.65.65 0 0 1-.48.23"/><path fill="currentColor" d="M13.71 9.126c-.388 0-.703-.378-.703-.845V6.375c0-1.206-.813-2.183-1.816-2.183h-.46v4.169a.26.26 0 0 1 .127-.086c.25-.067.435.174.403.429a3 3 0 0 1-.23.827c.326.59.882.977 1.515.977.913 0 1.668-.807 1.797-1.86-.11.282-.351.478-.632.478"/><path fill="currentColor" d="M10.314 9.126c-.388 0-.703-.378-.703-.845V4.838c0-1.206-.814-2.183-1.817-2.183-.777 0-1.439.584-1.7 1.405-.261-.821-.923-1.408-1.7-1.408s-1.438.584-1.7 1.405c-.26-.821-.922-1.405-1.699-1.405H.54v5.67c0 1.206.813 2.183 1.816 2.183.777 0 1.439-.584 1.7-1.405.261.821.923 1.405 1.7 1.405s1.438-.584 1.7-1.405c.26.821.922 1.405 1.699 1.405.913 0 1.668-.807 1.797-1.86-.117.285-.359.481-.637.481m-6.796 0c-.388 0-.703-.378-.703-.845V4.835q0-.299-.064-.575a.65.65 0 0 1 .481-.23c.388 0 .703.38.703.846v3.446q0 .299.064.575a.64.64 0 0 1-.481.23m3.4 0c-.39 0-.704-.378-.704-.845V4.838q0-.302-.064-.575a.65.65 0 0 1 .481-.23c.389 0 .704.38.704.846v3.443q0 .299.063.575a.65.65 0 0 1-.48.23"/>
  </svg>
);

export default Mili;