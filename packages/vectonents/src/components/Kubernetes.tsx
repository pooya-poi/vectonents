import React from "react";

interface KubernetesProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined";
}

const Kubernetes: React.FC<KubernetesProps> = ({
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
          d="M12.594.017 12 .313 3.562 4.475l-.567.236-.174.718-2.085 9.364-.136.625.397.558 5.84 7.512.427.52.647.009h9.365l.658-.009.418-.52 5.838-7.512.41-.521-.147-.662-2.085-9.364-.133-.66-.61-.293L13.19.313zm-.003 3.062c.23 0 .45.136.55.366a.63.63 0 0 1 0 .479c-.126.302-.17.604-.203.905a4 4 0 0 0-.01.457c-.016.151.06.3.17.451.114.15.126.302.142.453A6.4 6.4 0 0 1 17.2 8.1c.126-.084.247-.174.437-.18.18-.011.344-.044.447-.155q.17-.143.333-.303c.207-.212.408-.44.556-.73a.58.58 0 0 1 .797-.263c.295.15.41.519.257.815a.58.58 0 0 1-.361.308c-.306.09-.562.25-.808.417a4 4 0 0 0-.349.28c-.125.083-.19.24-.24.417-.038.19-.14.296-.244.408a6.73 6.73 0 0 1 1.118 3.74c0 .211-.012.424-.028.63h.007c.141.044.283.082.408.233.126.133.257.235.404.246.148.033.29.055.437.071.3.028.595.04.912-.033a.593.593 0 0 1 .708.464.607.607 0 0 1-.455.719.6.6 0 0 1-.458-.085c-.268-.184-.551-.284-.834-.368a4 4 0 0 0-.432-.095c-.142-.044-.305 0-.469.079-.163.094-.31.079-.463.068h-.017A6.7 6.7 0 0 1 16 18.573v.004c.044.145.093.286.05.476-.038.184-.046.35.031.484.06.134.126.274.197.402.147.263.312.525.553.742.24.23.256.61.038.86a.591.591 0 0 1-1.031-.396c-.011-.33-.094-.619-.192-.91a4 4 0 0 0-.169-.419c-.05-.144-.18-.243-.338-.339-.152-.083-.229-.202-.306-.33a6.413 6.413 0 0 1-4.443.012.7.7 0 0 1-.295.316c-.158.09-.288.196-.337.341a4 4 0 0 0-.175.413c-.099.29-.186.58-.19.91a.6.6 0 0 1-.618.585.6.6 0 0 1-.573-.625.6.6 0 0 1 .197-.43c.24-.222.405-.48.558-.736q.106-.2.195-.406c.077-.129.071-.302.038-.486a.77.77 0 0 1 .045-.44 6.7 6.7 0 0 1-2.898-3.773.66.66 0 0 1-.387-.062c-.17-.072-.327-.117-.47-.066a4 4 0 0 0-.43.111c-.284.095-.562.201-.824.391a.59.59 0 0 1-.83-.145.616.616 0 0 1 .141-.843.6.6 0 0 1 .459-.105c.31.068.61.043.905.005q.222-.025.437-.083c.147-.011.277-.122.397-.261a.75.75 0 0 1 .344-.218 7 7 0 0 1-.033-.699c0-1.428.437-2.75 1.185-3.839-.098-.1-.19-.2-.228-.38-.05-.178-.115-.335-.24-.418q-.171-.15-.35-.273c-.25-.168-.506-.323-.812-.418a.606.606 0 0 1-.41-.748.6.6 0 0 1 .738-.418.6.6 0 0 1 .359.301c.147.29.35.519.562.73.104.106.219.207.333.297.103.111.267.145.447.156.19.006.311.09.437.173l.005.005a6.38 6.38 0 0 1 3.879-1.83c.016-.15.027-.301.142-.452.11-.15.185-.302.169-.453q.006-.224-.01-.457c-.033-.302-.077-.603-.202-.903a.614.614 0 0 1 .311-.799.6.6 0 0 1 .23-.048m-.783 4.252a5.3 5.3 0 0 0-2.772 1.296l.17.104c.507.324.998.665 1.489 1.005.283.184.552.39.819.586.022-.317.048-.64.08-.959.055-.603.112-1.212.188-1.814zm1.572 0v.001h-.001l.028.217v.001c.076.603.13 1.211.185 1.813q.034.358.06.716l.001.006.022.32a3 3 0 0 0 .32-.147c.005-.003.012-.002.018-.006l.03-.022c.292-.166.48-.35.542-.393.49-.34.977-.68 1.478-1.01h.002l.185-.117a5.4 5.4 0 0 0-1.317-.902 5.3 5.3 0 0 0-1.553-.477M8 9.844q-.205.324-.366.677v.002q-.159.353-.27.732v.001a5.6 5.6 0 0 0-.226 1.596c0 .105.005.205.005.306v.001l.256-.09c.562-.206 1.129-.385 1.691-.575q.405-.13.803-.251l.306-.142-.218-.25a16 16 0 0 1-.546-.53c-.426-.43-.846-.853-1.261-1.294zm9.255.105-.07.076-.079.085c-.409.447-.829.877-1.249 1.306-.268.28-.556.547-.834.82q.556.141 1.114.306c.572.168 1.14.33 1.707.52l.202.067q.006-.135.005-.279 0-.4-.053-.785a5.6 5.6 0 0 0-.743-2.116m-4.292 1.76-.995.01-.61.788.231.973.902.423.89-.444.21-.978zm-2.357 2.675a6 6 0 0 0-.32.011c-.256.034-.507.074-.764.102-.594.072-1.179.145-1.774.201l-.294.028a5.6 5.6 0 0 0 .845 1.564 5.6 5.6 0 0 0 1.273 1.204l.076-.234c.186-.58.383-1.15.584-1.725.093-.28.19-.553.295-.832.037-.134.062-.245.08-.32m4.023.045a18 18 0 0 1 .406 1.11c.19.57.387 1.145.567 1.726l.06.201a5.6 5.6 0 0 0 1.247-1.203 5.6 5.6 0 0 0 .826-1.548l-.19-.012a63 63 0 0 1-1.78-.15c-.257-.022-.507-.05-.764-.078-.156-.018-.286-.035-.372-.046m-2.027.896a4 4 0 0 0-.162.368l-.004.003q-.187.36-.392.704c-.3.524-.6 1.05-.916 1.563l-.138.223h.002q.381.12.784.183a5.4 5.4 0 0 0 1.663-.005h.002q.414-.066.803-.194l-.126-.213c-.317-.514-.612-1.044-.907-1.569q-.196-.342-.376-.692z"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          d="M12.6.017c-.275 0-.55.062-.804.187L3.656 4.21a1.88 1.88 0 0 0-.999 1.28L.646 14.493a1.92 1.92 0 0 0 .356 1.592l5.634 7.22c.35.45.885.712 1.448.712h9.032c.563 0 1.096-.262 1.447-.712l5.635-7.219c.349-.448.48-1.034.356-1.592l-2.012-9.005v-.001a1.88 1.88 0 0 0-1-1.279L13.406.204h-.001A1.8 1.8 0 0 0 12.6.016m0 1.073q.179 0 .346.08l8.14 4.005c.218.108.376.31.43.552l2.011 9.004a.83.83 0 0 1-.153.687l-5.634 7.22a.79.79 0 0 1-.624.306H8.084a.79.79 0 0 1-.623-.306l-5.635-7.22a.83.83 0 0 1-.154-.687l2.012-9.003a.8.8 0 0 1 .43-.552l8.14-4.006a.8.8 0 0 1 .346-.08m-.004 2.257a.6.6 0 0 0-.223.046.59.59 0 0 0-.3.767c.121.29.163.579.195.869.01.15.016.295.01.44.017.145-.057.29-.163.435-.11.145-.12.29-.136.435a6.24 6.24 0 0 0-3.74 1.759l-.01-.005c-.12-.08-.235-.162-.42-.167-.173-.01-.331-.042-.431-.15a3 3 0 0 1-.321-.284 2.8 2.8 0 0 1-.543-.703.6.6 0 0 0-.348-.29.577.577 0 0 0-.71.402.58.58 0 0 0 .395.72c.295.09.542.24.784.402q.173.119.337.263c.122.08.184.23.232.402.035.172.131.271.226.368a6.48 6.48 0 0 0-1.112 4.36.7.7 0 0 0-.336.209c-.115.134-.242.24-.384.251a3 3 0 0 1-.42.08c-.285.038-.575.06-.875-.005a.58.58 0 0 0-.442.102.59.59 0 0 0-.137.81.567.567 0 0 0 .8.14c.253-.182.521-.284.795-.376q.204-.066.417-.106c.136-.049.289-.006.452.063a.6.6 0 0 0 .374.054 6.44 6.44 0 0 0 2.8 3.624c-.045.128-.088.263-.047.432.031.177.036.344-.037.468a5 5 0 0 1-.19.39c-.147.247-.305.494-.536.709a.585.585 0 0 0 .363 1.014.58.58 0 0 0 .595-.563c.005-.317.09-.595.184-.874a4 4 0 0 1 .169-.398c.047-.14.173-.242.326-.328.152-.08.22-.193.288-.312a6.2 6.2 0 0 0 2.123.383c.758 0 1.482-.145 2.156-.395.071.124.144.241.297.324.153.092.278.189.326.328q.093.202.163.403c.095.279.174.557.184.874a.572.572 0 0 0 .995.381.6.6 0 0 0-.036-.827c-.232-.209-.39-.461-.532-.713a5 5 0 0 1-.19-.386c-.073-.129-.068-.29-.03-.467.041-.183-.006-.316-.048-.456l-.004-.014a6.44 6.44 0 0 0 2.765-3.635l.018.001c.147.011.29.026.447-.065.158-.075.317-.118.454-.075.136.021.278.053.415.091.274.08.548.177.806.354a.576.576 0 0 0 .88-.61.573.573 0 0 0-.686-.446c-.305.07-.59.058-.879.031a4 4 0 0 1-.421-.069c-.142-.01-.268-.107-.389-.236-.12-.145-.258-.182-.395-.225l-.009-.003q.028-.299.03-.604a6.5 6.5 0 0 0-1.08-3.595c.1-.107.201-.209.238-.39.047-.173.11-.323.231-.403.105-.097.222-.183.337-.268.237-.161.485-.317.78-.403a.56.56 0 0 0 .346-.295.58.58 0 0 0-.246-.783.56.56 0 0 0-.77.251c-.142.28-.336.5-.536.703-.106.102-.21.2-.321.29-.1.108-.258.14-.432.15-.184.006-.3.092-.421.172A6.25 6.25 0 0 0 13.22 6.34c-.016-.145-.027-.29-.137-.435-.105-.145-.18-.29-.163-.435q-.007-.216.01-.44c.032-.29.074-.58.195-.869a.6.6 0 0 0 0-.461.58.58 0 0 0-.53-.352M11.84 7.44l-.026.206c-.073.58-.126 1.165-.179 1.744-.031.306-.058.617-.079.923-.258-.187-.516-.386-.79-.563-.473-.328-.947-.655-1.437-.967l-.165-.104c.74-.65 1.66-1.09 2.676-1.239m1.518 0a5.2 5.2 0 0 1 2.764 1.321l-.176.114c-.484.316-.952.644-1.426.97q-.285.196-.553.398a.218.218 0 0 1-.347-.166c-.016-.231-.037-.456-.058-.687-.053-.58-.105-1.164-.179-1.744zm-5.19 2.41.167.178c.4.424.806.832 1.216 1.245.174.177.348.344.527.51a.221.221 0 0 1-.085.376c-.258.08-.516.155-.774.24-.542.183-1.09.355-1.632.554l-.238.085c-.005-.098-.015-.195-.015-.295 0-1.067.308-2.058.833-2.893m8.925.106c.485.813.77 1.764.77 2.787 0 .09-.01.177-.013.265l-.187-.06c-.548-.183-1.095-.34-1.648-.5a27 27 0 0 0-1.074-.295c.268-.262.548-.52.806-.789.405-.413.81-.826 1.205-1.255zm-4.82 1.714h.641c.1 0 .196.049.248.124l.41.526c.058.07.08.17.064.262l-.148.65a.33.33 0 0 1-.169.23l-.589.279a.28.28 0 0 1-.273 0l-.59-.279c-.085-.048-.159-.128-.169-.23l-.147-.65a.33.33 0 0 1 .064-.262l.41-.526a.3.3 0 0 1 .248-.124m-1.901 2.56a.217.217 0 0 1 .232.295c-.1.268-.195.531-.285.8a61 61 0 0 0-.563 1.657l-.072.23a5.34 5.34 0 0 1-2.04-2.668l.28-.024c.573-.054 1.137-.125 1.71-.194.248-.027.49-.065.738-.097m4.548.075c.248.027.49.054.738.075.573.054 1.142.107 1.716.145l.183.01a5.35 5.35 0 0 1-1.998 2.647l-.06-.195c-.174-.558-.363-1.11-.547-1.657a30 30 0 0 0-.258-.73c-.058-.155.068-.317.226-.295m-2.282 1.058c.075 0 .15.039.192.116q.174.337.364.666c.284.504.568 1.014.873 1.508l.124.205a5.2 5.2 0 0 1-3.14.015l.132-.215c.305-.494.595-.998.884-1.503q.197-.33.38-.676a.22.22 0 0 1 .19-.116"
        />
      </>
    ) : null}
  </svg>
);

export default Kubernetes;
