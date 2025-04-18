
import React from 'react'

interface AsanPardakhtProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const AsanPardakht: React.FC<AsanPardakhtProps> = ({
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
    <path fill="currentColor" d="M23.771 4.757a5.3 5.3 0 0 0-1.104-.74 3.7 3.7 0 0 0-1.05-.315 6 6 0 0 0-.99-.06c-.258 0-.497.036-.725.084a4.3 4.3 0 0 0-1.752.855c-.39.303-.762.636-1.11.988a74 74 0 0 1-1.32 1.315c-.246.237-.528.473-.84.722q-.585.453-1.206.751a5.6 5.6 0 0 1-2.448.546q-.602 0-1.158-.164a2.7 2.7 0 0 1-.906-.46 2.16 2.16 0 0 1-.84-1.45c-.054-.37-.03-.733.066-1.097A7 7 0 0 1 9.39 3.574a8.15 8.15 0 0 1 2.322-2.273A8.06 8.06 0 0 1 15.108.077a9 9 0 0 1 1.8-.055c2.25.176 4.278 1.17 5.717 2.928a8.8 8.8 0 0 1 1.14 1.807z"/><path fill="currentColor" d="M24 5.472c.017.594-.36 1.018-.925 1.115-.492.085-1.037-.012-1.5-.176a7 7 0 0 1-1.277-.63l-1.08-.673a5.5 5.5 0 0 0-.714-.394l-.006-.012a3.9 3.9 0 0 1 1.476-.679 3.3 3.3 0 0 1 .666-.079h.125c.276 0 .552.018.816.055q.489.072.966.29c.312.152.66.383 1.044.704q.223.18.402.388.007.045.006.09M15.648 15.789a2.72 2.72 0 0 0 1.326-1.17q.54-.935.342-1.97c-.036-.212-.072-.364-.09-.449q-.056-.209-.282-.982l-.09-.284a6.3 6.3 0 0 1-.3-1.498c-.06-.848.186-1.758.702-2.418.21-.267.534-.522.864-.6.696-.17 1.242.206 1.68.739.893 1.091 1.277 2.6 1.067 4-.252 1.637-1.211 3.183-2.651 3.995a5 5 0 0 1-2.562.637zM9.864 11.03s0 .019.012.025c.6.466 1.332.818 2.064.897.402.042.816.036 1.254-.012a3.7 3.7 0 0 0 1.446-.48q.389-.226.822-.581c-.24.51-.534.994-.87 1.449a7.9 7.9 0 0 1-2.328 2.133c-1.902 1.146-4.23 1.431-6.402.91a8.06 8.06 0 0 1-5.316-4.256 6 6 0 0 1-.462-1.267A2.6 2.6 0 0 1 .03 8.794c.204-1.407 1.482-2.031 2.742-2.067a5.7 5.7 0 0 1 2.658.563c.366.176.738.413 1.11.691.444.34.888.734 1.338 1.195.564.57.954.963 1.182 1.182.24.23.492.442.756.648a.1.1 0 0 0 .048.024"/><path fill="currentColor" d="M15.69 9.988V10c-.12.321-.324.54-.426.643a3.6 3.6 0 0 1-.774.545c-.18.103-.66.364-1.326.443a4.812 4.812 0 0 1-1.188.012c-.588-.06-1.212-.322-1.788-.74q.295-.126.564-.297c.438-.273.816-.503 1.128-.703a7.2 7.2 0 0 1 1.38-.697 3.4 3.4 0 0 1 1.152-.212c.48-.006.948.151 1.17.606q.09.18.108.388M17.046 13.528a2.6 2.6 0 0 1-.33.94 2.4 2.4 0 0 1-1.17 1.036q-.253.09-.498.127c-.144-.109-.216-.29-.222-.527a.76.76 0 0 1 .072-.364 1.9 1.9 0 0 1 .282-.454 3.2 3.2 0 0 1 .75-.667c.15-.097.444-.291.894-.57a3 3 0 0 0 .228-.164c.024.213.024.43 0 .643zM6.042 17.486q.442.426.984.552c.642.151 1.23.036 1.752-.334q.315-.228.414-.32.494-.446.852-.765.477-.409.99-.636c.72-.315 1.974-.382 2.46.424.168.273.186.619.096.946-.06.218-.132.4-.222.558q-.855 1.527-2.52 1.964a4.1 4.1 0 0 1-1.32.115q-1.28-.09-2.244-.837-.81-.629-1.242-1.667"/><path fill="currentColor" d="M7.314 18.086c.09.013.18.013.264.013H7.56a4 4 0 0 1-.246-.013M8.472 17.547a1.7 1.7 0 0 1-.912.248q-.236 0-.462-.054a1.8 1.8 0 0 1-.852-.48 4 4 0 0 1-.282-.296c.054-.212.222-.34.492-.382.054-.006.15-.006.288.018.336.049.678.225.966.425q.584.408.744.509c0 .006.012.006.018.012M14.844 11.328a3.8 3.8 0 0 0 .624-.461 7 7 0 0 1-.624.46"/>
  </svg>
);

export default AsanPardakht;