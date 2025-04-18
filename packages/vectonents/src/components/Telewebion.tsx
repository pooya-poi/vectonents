
import React from 'react'

interface TelewebionProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const Telewebion: React.FC<TelewebionProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M20.988 0H3.012C1.31 0 0 1.308 0 3.007v18C0 22.69 1.316 24 3.001 24h18C22.686 24 24 22.688 24 21.005v-18C24 1.308 22.69 0 20.988 0M8.972 7.51q-.268.003-.552.003h-.002c.318.275.448.579.532.922q.992 3.992 1.996 7.98l.112.446c.186.742.807 1.228 1.554 1.228.74.002 1.357-.492 1.543-1.238l.146-.592.146-.592 1.05-4.208c.06.025.068.069.075.112l.006.03.183.74q.164.667.33 1.333l.242.97c.185.747.37 1.494.565 2.24.194.738.815 1.209 1.547 1.205a1.585 1.585 0 0 0 1.547-1.207q.999-4.02 1.993-8.044a1.08 1.08 0 0 0-.796-1.298c-.555-.14-1.098.196-1.246.785q-.353 1.4-.701 2.8l-.467 1.87q-.155.62-.313 1.24c-.048-.03-.056-.054-.062-.081l-.455-1.815q-.455-1.815-.907-3.63a1.55 1.55 0 0 0-.47-.797c-.91-.819-2.28-.358-2.585.87l-.66 2.662v.004l-.662 2.666-.005.033c-.006.04-.01.082-.075.087l-.297-1.184-.375-1.499v-.004a923 923 0 0 0-.801-3.189c-.132-.516-.485-.824-.998-.841a27 27 0 0 0-1.138-.007m-1.578 6.96-.001-1.027-.002.002h-.002v-.72q.001-1.44-.004-2.879c0-.163.039-.215.206-.208q.298.007.598.004t.6.004c.184.006.203-.046.157-.209-.059-.209-.109-.42-.16-.632q-.043-.186-.09-.37c-.156-.622-.515-.924-1.155-.926-.998-.006-1.996-.004-2.995-.002l-1.497.002c-.2 0-.388.041-.56.149a1.066 1.066 0 0 0 .55 1.98q.999.012 1.998-.002c.186-.005.233.045.233.231q-.003 2.336 0 4.673v2.336c0 .173.007.343.068.508.178.48.677.767 1.184.68.491-.083.867-.51.869-1.023q.004-1.285.003-2.57" clipRule="evenodd"/>
  </svg>
);

export default Telewebion;