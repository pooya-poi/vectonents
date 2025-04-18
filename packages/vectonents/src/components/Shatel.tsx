
import React from 'react'

interface ShatelProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Shatel: React.FC<ShatelProps> = ({
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
    <path fill="currentColor" d="m11.99 0 .015.002C15.82 6.157 19.647 12.31 23.46 18.466h-5.206c-2.09-3.384-4.17-6.772-6.254-10.159-.039.04-.06.09-.09.135-2.058 3.34-4.11 6.684-6.171 10.022-1.735.005-3.47 0-5.204.003.018-.046.046-.088.072-.13C4.403 12.224 8.193 6.11 11.991 0M.107 20.538c.208-.464.745-.794 1.31-.796q1.09-.001 2.18.001.005.424 0 .849c-.727.003-1.454-.002-2.182.002-.25.005-.467.212-.454.434 0 .216.212.406.454.415.347.004.694-.002 1.04.002.47.012.921.247 1.166.602.243.338.286.78.112 1.15-.167.367-.536.656-.968.755-.235.06-.483.039-.725.043-.6-.002-1.2.005-1.798-.004 0-.282-.004-.564.001-.846.72-.003 1.441 0 2.162-.001.256.004.485-.205.474-.433.002-.214-.207-.408-.45-.416-.346-.005-.692 0-1.039-.003-.481-.01-.943-.257-1.186-.623a1.14 1.14 0 0 1-.097-1.13m4.214-.795c.32 0 .64-.004.958.002.001.566-.004 1.132.002 1.698.64 0 1.279.005 1.918-.003 0-.565-.004-1.132.002-1.697q.477-.002.954 0c.006 1.416.003 2.833.002 4.25a31 31 0 0 1-.958-.001q-.002-.845 0-1.691a39 39 0 0 0-1.921.005q.004.843 0 1.687c-.32.003-.639.006-.958-.002 0-1.416-.003-2.832.001-4.248m6.952.003A478 478 0 0 1 13.912 24h-1.19c-.485-.774-.956-1.556-1.44-2.33a.12.12 0 0 0-.048.052c-.468.76-.932 1.52-1.404 2.278H8.637c.872-1.42 1.76-2.834 2.635-4.254m1.682 0c1.28-.008 2.559-.003 3.838-.003a39 39 0 0 1 0 .849c-.48.008-.962-.01-1.44.01q.006 1.695.001 3.391c-.32.002-.639.006-.957-.002q-.001-1.697-.001-3.395c-.48-.01-.96.004-1.44-.006zm4.323-.003c1.038 0 2.077-.004 3.115.002v.845c-.718.008-1.437-.001-2.156.005q-.008.423 0 .848c.638.004 1.276-.002 1.913.002.005.283.008.566 0 .848-.638.003-1.275-.003-1.913.003-.003.282-.008.566.003.848.717.005 1.436-.007 2.152.006q.004.424 0 .85h-3.116c-.001-1.419-.005-2.838.002-4.257m3.6-.001q.476-.002.953.001c.006 1.134-.001 2.267.004 3.4.72.004 1.441-.002 2.162.003.007.282.003.564.002.847q-1.562.006-3.124 0c-.002-1.416-.007-2.834.002-4.251"/><path fill="currentColor" d="M11.705 12.935c1.245-.113 2.51.502 3.114 1.466.495.768.55 1.74.148 2.55-.316.648-.911 1.184-1.638 1.473a3.62 3.62 0 0 1-2.679-.005c-.756-.304-1.368-.876-1.67-1.56a2.58 2.58 0 0 1 .123-2.342c.49-.871 1.506-1.494 2.602-1.582m-.538 9.792c.355-.056.727.164.807.475.098.318-.133.677-.49.765-.383.113-.83-.119-.91-.467-.102-.347.192-.73.593-.773"/>
  </svg>
);

export default Shatel;