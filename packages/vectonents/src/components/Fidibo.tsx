import React from "react";

interface FidiboProps {
  className?: string;
  size?: number;
}

const Fidibo: React.FC<FidiboProps> = ({
  className = "",
  size = 24,
}) => 
{
  const defaultColor = "white";
  return(
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-${defaultColor} ${className}`}
    >
      <path fill="currentColor" d="M14.684 18.605a.353.353 0 0 1-.346-.358c0-.197.155-.358.346-.358s.346.16.346.358a.353.353 0 0 1-.346.358M4.388 21.88c-.916 0-1.39-.69-1.585-.973l-.05-.072.424-.34.063.09c.213.31.61.888 1.466.705a1 1 0 0 0 .082-.023 1.6 1.6 0 0 1-.56-.478c-.397-.519-.247-1.054.062-1.33.425-.383.973-.242 1.273.084.278.303.37.777.247 1.25.44-.125.911-.44 1.357-.778.276-.21.402-.305.574-.22.233.113.2.38.144.822-.018.143-.047.377-.048.525.34-.112 1.222-.64 1.829-1.695l.46.284a4.95 4.95 0 0 1-1.397 1.546c-.247.175-.859.566-1.19.403-.306-.151-.253-.598-.188-1.117-.42.313-1.135.804-1.849.844-.181.219-.419.37-.688.427a2 2 0 0 1-.427.047m.494-2.099a.36.36 0 0 0-.24.096c-.06.053-.235.252.007.567a.97.97 0 0 0 .58.387q.03-.066.051-.139c.09-.297.05-.599-.105-.767a.4.4 0 0 0-.293-.144M7.908 22.926h-.082l.002-.555c.011 0 1.094.003 1.417-.033l.057.552c-.3.033-1.128.036-1.394.036M5.94 22.946a.353.353 0 0 1-.345-.358c0-.197.155-.358.346-.358s.346.16.346.358a.353.353 0 0 1-.346.358M10.933 23l-.058-.552c.378-.042 1.412-.064 1.456-.065l.011.554c-.01 0-1.055.023-1.41.063M9.46 21.892l-.207-.511c1.25-.543 1.524-1.22 1.688-1.623.074-.184.138-.343.27-.444a.28.28 0 0 1 .319-.019c.19.117.165.3.093.843-.031.234-.105.784-.084 1.063.195-.172.513-.524.722-.755.716-.791.955-1.035 1.229-.899.313.156.217.583.073 1.23a8 8 0 0 0-.107.536c.267-.019.81-.122 1.308-.327a1.6 1.6 0 0 1-.32-.676c-.118-.521.088-1.127.707-1.277.595-.144 1.027.268 1.132.728.076.333.042.801-.476 1.245.363.087.808.052 1.274-.104l.166.527c-.764.258-1.476.238-2.012-.054a5.2 5.2 0 0 1-1.12.391c-.853.196-1.014.06-1.067.016-.219-.184-.14-.54-.007-1.13.02-.091.046-.207.069-.32-.15.154-.321.345-.457.494-.746.826-1.01 1.086-1.289 1.009-.347-.097-.393-.542-.352-1.08-.284.376-.747.789-1.552 1.138m5.916-2.33a.4.4 0 0 0-.102.011c-.204.05-.393.236-.309.611q.075.332.301.543.177-.114.308-.254c.23-.248.217-.453.187-.585-.059-.257-.24-.327-.385-.327M14.139 0c-1.598 0-3.052.644-4.14 1.699C8.913.644 7.46 0 5.862 0 3.08 0 .733 1.954 0 4.624l3.03 9.921c-.232-3.672 4.133-4.066 4.78-.673.988 5.182 7.21 3.954 6.279-.65l-.815.198c.151.665-.29 1.407-.89 1.486-2.174.284-1.86-4.644 1.77-4.268 2.093.216 3.018 2.087 3.43 3.255L20 4.625C19.267 1.954 16.92 0 14.139 0m-6.17 6.702-.068.041a1.05 1.05 0 0 0-.366.408q-.05.096-.079.2a1.07 1.07 0 0 0-.444-.607l-.067-.041a1 1 0 0 0-.194-.082 1.04 1.04 0 0 0 .627-.53q.05-.097.079-.2a1.08 1.08 0 0 0 .512.648q.093.05.193.082-.1.03-.193.081m4.88 0-.069.041a1.05 1.05 0 0 0-.365.408 1 1 0 0 0-.08.2 1.06 1.06 0 0 0-.262-.457 1.06 1.06 0 0 0-.442-.273 1.04 1.04 0 0 0 .626-.53 1 1 0 0 0 .08-.2 1.08 1.08 0 0 0 .512.648q.094.05.193.082-.1.03-.194.081"/>
    </svg>
  );
} ;

export default Fidibo;