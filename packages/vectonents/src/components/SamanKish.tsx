
import React from 'react'

interface SamanKishProps {
  size?: number;
  fillColor?: string;
  className?: string;
}

const SamanKish: React.FC<SamanKishProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M18.237 4.361c.177.134.31.32.395.522h.772V7.75q.282-.004.563 0v.752h-.563q.002.456 0 .91h-.835v-.88h-2.86c.042-.371.188-.728.415-1.026.257-.34.567-.63.877-.92l.054-.052c.155-.146.309-.292.454-.447.167-.17.303-.381.332-.622.019-.178-.008-.375-.132-.513-.122-.136-.317-.18-.494-.169a.56.56 0 0 0-.404.192c-.114.14-.138.327-.158.5-.28-.03-.561-.054-.842-.086.034-.347.146-.712.415-.952.286-.254.678-.359 1.055-.357.336-.003.687.07.956.281m.333 1.584c-.108.222-.246.43-.412.615-.167.18-.347.346-.528.512l-.073.067q-.127.116-.25.234-.175.164-.303.364c.523.001 1.046.004 1.569 0v-.896q0-.448-.003-.896M17.37.3l.44-.3c.145.098.287.201.431.3q-.214.36-.43.718-.22-.36-.44-.717M18.996.376q.285-.094.568-.19l.374.463-.69.644q-.13-.457-.252-.917M20.61.968c.227-.006.453.004.68-.014.09.21.169.424.249.638q-.488.227-.975.458c.012-.361.03-.722.046-1.082M22.135 2.188c.24.082.476.173.715.258q.003.375.003.751-.596.043-1.19.094c.157-.367.317-.734.472-1.103M22.329 4.918c.305-.308.618-.607.925-.913.2.187.406.368.606.555q-.154.372-.302.747c-.41-.127-.818-.264-1.23-.39M22.306 6.782c.435-.18.868-.366 1.303-.547q.196.4.391.802c-.207.21-.403.428-.61.637-.359-.3-.728-.589-1.084-.892M21.418 8.467c.542.001 1.082.017 1.624.029.006.34.027.68.03 1.02-.312.126-.622.258-.936.383q-.356-.717-.718-1.432M19.855 10.695c.008-.321.003-.643.025-.963l1.53.85q-.242.49-.483.985c-.364-.022-.727-.068-1.092-.1.007-.257.003-.515.02-.772M16.761 11.724c.341-.58.699-1.154 1.047-1.732.352.583.708 1.164 1.056 1.75q-.507.34-1.01.683c-.026.015-.058.05-.086.017-.334-.241-.678-.47-1.007-.718M.831 9.429q.212-.183.421-.369.075.087.152.172l-.274.235c.074.108.142.219.216.327.065.121.235.096.344.055l-.021-.17q.108-.03.217-.051c.016.073.008.16.06.221.092.048.203.034.303.022.026-.077 0-.154-.02-.229l.214-.045c.032.108.068.22.047.333-.025.111-.141.176-.25.18-.134.002-.281.022-.4-.058a.7.7 0 0 1-.61-.01.6.6 0 0 1-.242.07H.306c-.098-.002-.217-.016-.273-.108-.058-.102-.018-.224.003-.332q.112.021.224.039c-.002.044-.007.088-.005.133.035.04.09.036.14.037h.571c.042-.002.094.004.12-.037-.049-.157-.17-.277-.255-.415m3.716-.001.423-.367c.051.054.104.107.146.17-.08.086-.18.153-.265.236.088.137.157.294.286.399.066.036.196.002.186-.09 0-.195-.055-.385-.091-.576q.112-.022.226-.036c.046.239.11.477.11.721.005.08-.052.148-.12.18a.55.55 0 0 1-.501-.023.83.83 0 0 1-.47.065c-.047-.01-.09-.033-.132-.055a.49.49 0 0 1-.403.033c.01.15-.098.271-.22.341-.09.05-.18.102-.277.14-.046-.057-.071-.129-.104-.195.133-.072.307-.114.375-.264.028-.11-.035-.214-.07-.315q.105-.04.21-.076c.03.05.04.12.095.15a.36.36 0 0 0 .242-.016 3 3 0 0 0-.02-.171 4 4 0 0 1 .218-.051c.02.081.002.208.101.24a1 1 0 0 0 .312 0 .23.23 0 0 0-.03-.102c-.067-.118-.151-.226-.227-.338m1.196-.26h.225v.944h-.225zm2.48.003h.203v.207h-.203zm.718-.002h.225v.943h-.225zm-6.72.048h.204v.205h-.203zm1.805.048h.2v.198h-.2zm.26 0h.197v.197h-.196zm2.575-.006h.205v.207h-.205zm.281 0h.204v.206h-.204zm2.372.226q.097-.064.197-.125c.094.16.228.312.244.504.009.128-.106.228-.227.242-.136.014-.273.003-.41.006l.001-.234c.135.006.28.038.407-.024-.063-.127-.138-.248-.212-.37m-1.506-.037c.242.055.484.118.727.174.006.066.012.134.005.201-.022.037-.073.042-.108.064-.134.056-.245.163-.389.199-.118.026-.24.03-.362.026a.33.33 0 0 1-.161-.057.4.4 0 0 1-.21.057H6.74c-.118-.001-.253-.06-.29-.181-.025-.094.011-.189.025-.281.078.01.156.025.234.037-.008.045-.02.09-.022.136.027.049.09.055.14.057q.265 0 .529 0c.061 0 .13.003.18-.038.022-.05-.001-.105-.003-.156q.113-.02.224-.039c.016.08-.003.215.106.23.196.012.392-.03.574-.104a5 5 0 0 0-.275-.064l-.012.045a6 6 0 0 1-.215-.059q.035-.123.072-.247m-5.335.28c.082-.102.178-.21.31-.242.126-.015.226.107.234.223.006.133.003.266.002.398-.001.122-.097.215-.192.277a3 3 0 0 1-.319.16 4 4 0 0 1-.096-.198c.132-.063.275-.114.383-.217-.102-.021-.216-.021-.305-.082-.098-.075-.093-.23-.017-.319m8.243-.085c.071-.015.143-.032.215-.04.03.133.096.291 0 .413-.114.125-.31.11-.46.074a.34.34 0 0 1-.143.285c-.11.082-.237.135-.357.197q-.05-.1-.1-.2c.123-.066.273-.107.357-.228.069-.114-.013-.242-.053-.351q.105-.04.212-.078c.033.059.047.156.13.16.075.002.168.024.228-.031.007-.069-.018-.135-.03-.201M2.81 9.87a.6.6 0 0 1 .2-.158q.005.107.003.215a1 1 0 0 1-.203-.057m-1.258.445h.197v.2h-.197zm.257.2v-.2h.199v.2zm8.99-.2h.196v.2h-.198zm.26 0h.197l-.001.2h-.197zm-.129.255h.198l-.001.201h-.198zM17.785 1.085c.03-.03.065.008.093.023.318.225.64.445.955.671q-.51.845-1.016 1.692c-.352-.563-.695-1.131-1.04-1.699.336-.228.67-.46 1.008-.687M14.602 1.927c.378.015.755.047 1.133.072l.005 1.795-1.566-.811c-.053-.012-.02-.064-.008-.096q.22-.48.436-.96M12.555 3.977q.475-.187.95-.373.354.729.704 1.458c-.286-.005-.572-.023-.858-.028-.259-.02-.519-.01-.778-.034-.001-.341-.01-.682-.018-1.023M11.639 6.477c.212-.217.414-.444.63-.658.37.308.747.61 1.12.915q-.672.284-1.346.569zM12.076 8.198c.411.122.82.255 1.231.378-.302.31-.611.613-.918.918-.2-.185-.406-.364-.608-.547q.149-.374.295-.749M12.799 10.29c.377-.025.754-.033 1.13-.06-.154.346-.319.687-.476 1.031-.223-.084-.442-.178-.665-.262 0-.237.009-.473.011-.71M14.093 11.899l.967-.425c-.024.355-.045.71-.074 1.064-.224-.006-.448-.014-.671-.014-.073-.209-.152-.416-.222-.625M15.69 12.865c.23-.219.451-.446.679-.667.091.306.19.61.277.918-.19.066-.378.138-.569.203q-.194-.227-.387-.454M17.427 13.19c.132-.205.252-.419.389-.622.125.212.255.422.377.637q-.196.126-.388.258-.191-.134-.378-.273M1.86 11.009h.319v.311q-.16.002-.319 0zm2.092.692c.22-.19.443-.376.663-.567.08.082.152.17.228.254l-.434.359c.115.179.284.344.303.567.018.16-.096.303-.237.364-.19.095-.408.06-.612.064-.108.005-.204-.045-.297-.093a.9.9 0 0 1-.557.087c-.085-.01-.16-.05-.236-.086a.78.78 0 0 1-.534.077c-.055-.01-.099-.047-.14-.082a.38.38 0 0 1-.376.073c.036.14.072.283.1.425-.266.09-.524.203-.794.278-.175.051-.36.078-.541.05a.57.57 0 0 1-.462-.499c-.029-.315.098-.614.186-.91q.167.064.337.124c-.056.223-.164.44-.15.675 0 .105.07.205.17.24.132.052.275.013.406-.02.154-.046.3-.112.451-.168-.065-.262-.135-.523-.2-.784q.184-.046.367-.092c.031.1.038.21.1.298.037.053.13.083.173.022.063-.084.069-.194.085-.295.12.021.241.038.36.061a.55.55 0 0 0-.019.244c.078.027.205.05.24-.049.002-.084-.031-.163-.05-.244q.163-.048.324-.1c.03.1.034.21.082.305.067.118.223.125.342.1.037-.012.098-.02.102-.068.002-.08-.023-.156-.035-.233q.168-.038.336-.08c.025.1.025.208.068.304.055.093.18.084.273.088.126-.005.265.025.376-.052-.018-.094-.075-.173-.127-.252q-.132-.194-.271-.385m3.068-.41q.177-.002.353-.001v1.094c.061.002.122.01.182 0a.34.34 0 0 0 .166-.122c.084-.108.15-.229.235-.335.096-.115.268-.18.411-.118.09.037.134.13.157.219.04.151.09.303.1.46.013.194-.178.366-.37.345-.163-.014-.281-.141-.411-.227a.4.4 0 0 1-.265.135c-.187.01-.373-.025-.558-.045zm1.858-.001h.354v1.094c.103 0 .214.025.31-.02.087-.049.039-.161.023-.236q.17-.034.34-.066c.02.1.026.21.089.293.037.055.124.042.156-.011.055-.085.053-.19.074-.286q.165.032.333.059c-.006.08-.04.16-.025.241.085.058.218.04.278-.045 0-.1-.042-.194-.064-.29q.169-.04.34-.074c.028.15.085.298.078.453-.018.18-.198.29-.361.327-.15.029-.33.028-.441-.092-.066.058-.146.108-.237.106-.12.011-.229-.052-.307-.136-.096.118-.255.14-.398.137-.182.001-.362-.027-.542-.047zm-7.235.134q.16-.002.322 0v.314h-.322zm.438 0H2.4v.314H2.08zm3.567.771q-.001-.161.001-.322.157-.001.314.002v.32zm.51-.22q.171-.04.342-.071c.082.364.17.727.254 1.091-.338.117-.67.264-1.024.326-.193.034-.408.01-.565-.114a.56.56 0 0 1-.22-.456c-.01-.28.114-.537.193-.798q.173.04.344.085c-.068.233-.178.467-.151.716.026.15.19.233.334.22.242-.02.466-.121.694-.198-.068-.267-.13-.535-.2-.802m1.857.385c.058-.085.112-.177.197-.24.042.028.057.08.071.126.026.091.05.188.027.282-.106-.042-.2-.106-.295-.168m-4.893.703h.3v.308h-.3zm.4 0h.307v.308h-.306zm1.444 1.08c-.022-.091-.081-.171-.084-.266a.8.8 0 0 1 .225.491c.02.228-.055.476-.23.628.016-.087.055-.168.077-.253.06-.194.061-.404.012-.6M.23 15c-.307-.29-.307-.834.002-1.123-.018.107-.07.204-.093.31-.045.175-.042.36.002.536.022.095.082.179.09.277m1.288-.858h.125v.4a.73.73 0 0 0 .36-.062c-.093-.026-.191-.004-.283-.036l.038-.14c.143.026.282.064.423.098l-.001.118c-.103.038-.188.115-.295.143-.121.01-.244.004-.365 0-.015-.174-.007-.348-.002-.521m.364.003h.12v.12h-.12zm1.774.515v-.519h.132v.403q.069-.002.138-.008-.016-.08-.035-.16.062-.015.125-.026c.016.069.033.138.035.21q.087-.016.174-.029l-.006-.083.118-.024.03.111.057.006.033-.117.12.022-.006.097.1-.01-.026-.123.125-.028c.011.075.06.167 0 .232-.066.074-.18.07-.265.036a.2.2 0 0 1-.197-.01c-.068.033-.145.038-.22.047a.16.16 0 0 0 .029.122l-.098.08a.27.27 0 0 1-.071-.22 1.3 1.3 0 0 1-.292-.01m-2.744-.162c.119-.084.246-.201.403-.187.171.043.127.343-.041.358q-.165.01-.329-.002l.037.156c-.135.044-.267.105-.41.122-.105.014-.222-.052-.245-.16-.025-.119.03-.234.064-.346l.131.031c-.026.081-.061.163-.058.25-.003.056.055.093.106.093.091-.006.176-.044.261-.074a6 6 0 0 0-.07-.29l.13-.031zm2.458-.161c.046-.015.118-.02.142.033.029.062.043.13.052.197.018.086-.08.167-.162.137-.04-.018-.075-.045-.114-.064a.6.6 0 0 1-.164.039l.012.1a.57.57 0 0 1-.35.112c-.104.004-.213-.059-.246-.161-.03-.108 0-.22.05-.318l.123.045c-.03.081-.095.194-.017.268.106.078.244.014.345-.043-.047-.025-.096-.047-.138-.08-.006-.045.029-.08.046-.117.072.046.162.075.247.048.07-.053.095-.152.174-.196m-2.313.202c.072-.042.144-.088.227-.1l-.001.094a1 1 0 0 1-.226.006m2.283-.007q.04-.047.085-.091.018.076.033.156a2 2 0 0 1-.118-.065" clipRule="evenodd"/>
  </svg>
);

export default SamanKish;