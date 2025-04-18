import React from "react";

interface TipaxProps {
  className?: string;
  size?: number;
}

const Tipax: React.FC<TipaxProps> = ({
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
      <path fill="currentColor" d="M16.387 18.76c-.328-.247-.67-.475-1.008-.707-.271-.186-.546-.366-.806-.54.034-.233.034-.25.255-.517.57-.684 1.024-1.442 1.428-2.23.503-.983.849-2.008.71-3.14-.065-.524-.215-1.012-.59-1.408-.322-.34-.74-.311-1.151-.3-.165.006-.26-.096-.343-.226.36-1.333.168-2.613-.421-3.906.518-.501 1.034-1.007 1.558-1.505.57-.542.597-.866.104-1.468a2 2 0 0 0-.09-.099C14.915 1.533 13.489.878 11.965.437 10.459.003 8.904-.066 7.34.044c-1.951.138-3.785.633-5.423 1.74-.447.3-.888.606-1.237 1.02-.482.573-.445 1.031.137 1.489.379.298.785.561 1.176.843.083.059.198.09.223.23-.195.221-.441.412-.57.696-.121.274-.184.574-.322.817-.24.072-.464-.029-.68.093-.181.49-.516.926-.622 1.463-.082.423.037.75.367 1.049.283.256.607.473.846.77q.328.407.658.81c.363.442.74.876.998 1.391.173.343.333.693.617.944.004.324-.284 2.121-.372 2.33-1.66.31-1.958.806-1.163 2.015-.397.27-.783.526-1.163.79-.631.439-.713.887-.259 1.516.374.52.841.941 1.38 1.294.817.535 1.713.878 2.64 1.157 1.439.434 2.912.512 4.404.494 1.824-.022 3.569-.373 5.218-1.151.959-.452 1.813-1.044 2.387-1.968.317-.508.278-.759-.196-1.118zm-.69 1.657c-.705.671-1.553 1.104-2.451 1.452q-2.101.81-4.354.772c-.902-.014-1.807.038-2.7-.13-1.467-.273-2.888-.672-4.149-1.515-.497-.332-.929-.727-1.25-1.233-.277-.439-.237-.621.189-.914.47-.324.948-.64 1.422-.96.058-.038.132-.057.156-.158-.168-.142-.354-.279-.486-.47-.31-.448-.167-.88.351-1.056.242-.083.492-.084.742-.097.23-.012.342-.113.373-.36.079-.638.189-1.27.287-1.906.03-.193.082-.384.064-.6-.335-.225-.493-.588-.674-.937-.34-.656-.854-1.185-1.296-1.769-.398-.53-.888-.96-1.376-1.398-.178-.16-.214-.36-.18-.585.068-.474.373-.843.52-1.26.478-.093.73-.009.93.38.427.827 1.056 1.478 1.741 2.085q.08.07.167.135c.028.02.062.033.109.058.199-.152.345-.347.481-.531-.133-1.158-.487-2.247-.75-3.425-.444.553-.992.799-1.704.621.041-.625.583-.91.961-1.343-.261-.179-.505-.34-.741-.507-.365-.258-.734-.511-1.086-.785-.364-.283-.386-.563-.09-.92.435-.523 1.014-.866 1.584-1.22C4.024.891 5.719.48 7.502.381c1.635-.09 3.262-.015 4.82.528 1.245.433 2.43 1.003 3.371 1.97l.037.04c.489.53.484.683-.033 1.194q-.764.75-1.527 1.504c-.07.069-.132.142-.19.206.596 1.291.979 2.58.36 3.992.244.11.444.297.632.475.189-.008.358-.01.526-.025.413-.035.682.168.856.518.349.706.375 1.451.197 2.197-.315 1.317-1.002 2.457-1.792 3.537-.252.343-.556.65-.627 1.119.753.558 1.626 1.001 2.333 1.685-.188.448-.451.792-.77 1.094zM1.815 7.027c.512-.042 1.061.093 1.514-.35.162.499.3.928.385 1.372q.102.539.207 1.078c.024.136.038.27-.132.335-.875-.625-1.417-1.52-1.974-2.437z"/><path fill="currentColor" d="M3.579 17.3c.084-.058.164-.106.268-.097a.6.6 0 0 0 .444-.13l.27.028q.148-.549.292-1.084c.155-.57.34-1.13.646-1.64.242-.404.535-.65 1.079-.582 1.21.148 2.383-.102 3.53-.481.684-.226 1.333-.554 2.073-.621.558-.05 1.045-.811.921-1.462-.278.813-.885.9-1.554.816-.12.206-.296.257-.49.278-.355.038-.712.062-1.063.12-.75.127-1.52.047-2.264.234-.24.06-.479-.01-.71-.088-.065-.022-.117-.05-.081-.149.207-.037.41.084.62.058.495-.058.991-.085 1.49-.107.56-.027 1.117-.123 1.678-.17.306-.027.62-.01.777-.36.884.195 1.358-.247 1.595-1 .276-.082.54-.16.634-.413.15-.401.266-.806.5-1.18.17-.276.047-.627-.08-.92.097-.374.065-.717-.137-1.04a.5.5 0 0 1-.053-.204c-.04-.338-.126-.65-.42-.843-.142-.557-.257-.692-.802-.95-.134-.36-.42-.525-.814-.547-.17-.361-.48-.48-.852-.502a.3.3 0 0 1-.173-.059c-.322-.274-.75-.258-1.116-.415-.227-.098-.459.057-.567.286-.115.242-.074.444.149.616.162.126.343.226.508.347.64.461.903 1.142.643 1.886-.476 1.358-1.439 2.204-2.845 2.533-.167.039-.35.07-.516-.024.039-.265.096-.337.348-.42A4.4 4.4 0 0 0 8.79 8.36c.535-.402.954-.891 1.12-1.556.174-.692-.133-1.446-.727-1.713a.72.72 0 0 1-.464-.628 1.16 1.16 0 0 0-.272-.602c-.241-.291-.484-.322-.796-.104-.277.194-.465.468-.65.741-.156.228-.351.401-.598.531-.455-.13-.905-.273-1.364-.386-.52-.13-.995-.024-1.393.35q-.594.56-1.183 1.129c-.046.045-.126.081-.084.18.271.059.453-.105.633-.264.247-.219.472-.466.764-.63.275-.153.563-.246.871-.159.043.166-.02.213-.138.234-.496.087-.53.139-.533.633-.002.395.146.752.257 1.117.215.71.243 1.46.509 2.187-.244.34-.498.69-.846.96-.069-.023-.123-.033-.167-.06a1.5 1.5 0 0 1-.221-.148c-.782-.648-1.503-1.35-1.967-2.273-.079-.158-.173-.324-.433-.25-.127.316-.36.601-.403.967-.03.254.088.35.33.283.04-.011.077-.05.128-.003.052.1-.058.198.003.368.426.217.69.67 1.018 1.065.49.59 1.013 1.156 1.352 1.856.167.346.311.713.744.812 0 .062.005.098 0 .13q-.205 1.42-.419 2.835c-.039.26-.312.484-.588.493-.259.008-.521.003-.767.095-.26.097-.311.275-.16.506.292.443.804.549 1.23.247zm8.564-5.675c-.523.096-.83-.004-.974-.313.002-.139.139-.175.21-.276.003-.153-.193-.253-.132-.48.5.328 1.025.427 1.581.371-.015.33-.323.633-.685.698m.74-.936c-.454.039-.887-.054-1.305-.225a.45.45 0 0 1-.257-.232c.41-.067.713-.246.848-.657.45.281.894.405 1.38.276.023.463-.255.802-.667.838m.722-1.065c-.414.074-.796-.047-1.157-.244-.107-.06-.14-.159-.112-.275.03-.12.113-.176.234-.182.027-.001.056-.007.08 0 .469.12.902.042 1.3-.259.253.364.047.892-.345.962zm.217-2.013c.27.335.142.844-.232.952-.283.082-.582.108-.868.01-.139-.047-.276-.13-.3-.372.486-.135 1.086-.052 1.399-.59m-.378-1.013c.246.245.306.787.13.969-.247.256-1.029.34-1.265.123.002-.177.05-.33.22-.368.422-.093.764-.281.915-.724m-.68-.91c.316.158.352.43.385.7.028.226-.038.4-.256.506-.263.13-.597.15-.707.518-.246-.344-.155-.8.138-.95.337-.175.35-.196.439-.774zm-.777-.701a.68.68 0 0 1 .518.828c-.075.326-.368.516-.755.44.135-.41.227-.83.237-1.268m-.97.765c.09-.408.185-.811.074-1.233.49 0 .777.315.668.728-.107.402-.28.777-.637 1.063a.7.7 0 0 1-.104-.558M9.544 4.164c.112-.118.246-.102.356-.014.185.145.3.338.292.609-.43-.054-.65-.266-.648-.595m.796.044c.5.068.701.478.552 1.092-.312-.215-.48-.541-.552-1.092m-.1 7.233q.105-.36.491-.387c.193.254.158.666.53.835-.307.165-.6.245-.88.058-.169-.113-.2-.309-.142-.506m-.265.127c-.006.214.09.38.235.52-.449.273-.92.04-.955-.451.21-.196.423-.221.72-.069m-1.649.1c.232-.068.445.068.686.061.082.175.16.322.3.483-.298.063-.555.121-.793-.044-.16-.111-.25-.271-.192-.5m-.407.07c.085.155.12.341.262.509-.334.114-.63.184-.937-.02.07-.335.261-.466.675-.488m-1.392 1.366c-.184.003-.212-.121-.159-.233.195-.405.11-.825.074-1.238-.035-.389-.01-.747.263-1.054.034-.037.043-.096.056-.127-.019-.225-.25-.223-.287-.397q-.01-.122.118-.173c.298.085.484.34.47.674-.383.208-.403.595-.413.985-.009.312-.004.623.028.935.022.22.017.447-.151.627zm.456-.846c-.214-.1-.237-.294-.05-.53.185.171.195.298.05.53M4.208 5.777c.083-.08.154-.12.244-.058a.65.65 0 0 1-.212.33c-.08-.08-.047-.174-.032-.271zm.366.856-.223-.075a.27.27 0 0 1-.077-.194c.317-.247.61-.494.779-.878.441-.15.378.417.667.479l.05.288c.048.072.123.049.194.091-.033.15.064.249.154.305.086.097.037.21.124.268.173-.13.169-.179-.056-.572.291-.04.362-.229.353-.491-.01-.296.09-.551.298-.779.155-.169.26-.381.394-.57.12-.167.236-.338.374-.49.126-.14.281-.265.493-.185.195.075.272.24.302.439.032.22.083.438.126.665-.056.216-.255.276-.431.356-.31.14-.632.249-.92.431-.137.085-.266.179-.336.324.636.746.744 1.166.437 1.653-.268.422-.657.588-1.111.455-.213.115-.318.436-.638.38-.026.19.094.354-.046.518-.175.044-.369.155-.562.003-.116-.092-.134-.22-.092-.341.116-.089.21.026.312-.018.084-.064.089-.16.084-.259-.064-.16-.266-.214-.304-.384.037-.115.139.006.199-.091-.161-.441-.471-.841-.542-1.33zm-.37 5.708c-.344-.33-.236-1.261.177-1.519-.078.525-.26.984-.178 1.519"/><path fill="currentColor" d="m10.986 19.129.16-.62.42-.038c.373-.648.866-1.214 1.365-1.772.144-.162.215-.331.154-.535-.198-.653-.011-1.182.453-1.67.705-.744 1.017-1.663 1.076-2.677.009-.148.005-.305.093-.435.441-.138.758.037.834.52.085.54.09 1.08-.136 1.606-.509 1.183-1.226 2.236-1.991 3.26-.157.211-.332.413-.442.664.524.104.762-.006 1.001-.431a3 3 0 0 1 .29-.418q.45-.55.818-1.16c.474-.791.93-1.593 1.123-2.504.145-.673.154-1.348-.166-1.99a.52.52 0 0 0-.511-.315c-.225 0-.44.043-.66.1-.192-.274-.344-.592-.763-.545-.047.11-.087.209-.13.306-.232.522-.363 1.085-.64 1.589-.235.429-.533.8-1.042.891a8 8 0 0 0-1.854.56c-1.285.563-2.66.743-4.067.596-.051-.006-.11-.024-.15.088.362.23.769.11 1.152.136.407.029.811-.032 1.196-.065.06.097.04.155.018.215-.22.576-.425 1.157-.585 1.753-.028.102-.11.157-.174.23-.323.373-.805.523-1.163.852-.261.241-.576.415-.93.436-.266.015-.424.148-.585.32-.199.213-.386.443-.645.633-.453-.3-.897-.593-1.352-.896-.736.506-1.498.948-2.176 1.49.04.246.179.391.303.54.603.729 1.385 1.21 2.249 1.553 1.808.715 3.643.998 5.495.92h.004a16 16 0 0 0 3.133-.46c1.081-.268 2.095-.72 2.976-1.426.355-.284.677-.602.904-1.05-.809-.605-1.644-1.142-2.498-1.685-.75.674-1.594 1.117-2.56 1.433zm-5.187-.05c.37-.23.476-.798.99-.765.117-.09.074-.2.13-.27.479-.357 1.05-.556 2.217-.77.028-.458.4-.664.694-.93.426-.385.958-.674 1.148-1.3.31.53.555 1.07.986 1.497-.223.425-.423.835-.725 1.177-.2.226-.509.312-.78.395-.435.133-.55.466-.664.822-.049.15-.071.31-.108.477-1.32.237-2.597.01-3.888-.2 0-.069-.013-.126.002-.134zm7.463 1.154a2.6 2.6 0 0 1-.67.348c-.42.16-.84.3-1.262.438-.294.095-.602.133-.902.196-.04.008-.077.014-.13.036.127.031.267.029.395.051l-.155.204c.14-.1.223-.217.34-.33q.153.031.313.058c.058-.064.108-.12.162-.184.264.045.524.078.797.103-.149.19-.302.376-.468.564-.11-.016-.215-.033-.325-.052-.062.067-.12.126-.182.19-.216-.043-.421-.09-.635-.145-.108.127-.214.245-.33.37a11 11 0 0 1-.861-.149l.088-.105c-.189-.04-.371-.083-.56-.132.1-.1.192-.194.282-.29-.034-.021-.072-.01-.106-.008-.133.006-.266.022-.398.01q-.294-.031-.39-.192c-.01-.016-.016-.034-.04-.044-.032.01-.026.03-.031.045-.03.104-.142.163-.323.18-.282.029-.57.018-.858-.016a8 8 0 0 1-.763-.131c-.316-.068-.638-.137-.914-.288a.14.14 0 0 0-.077-.018c-.12.01-.248-.017-.372-.048-.053.013-.065.048-.102.068a1 1 0 0 0-.08.052c-.247.19-.661.152-1.116-.002a2.05 2.05 0 0 1-.727-.409c-.207-.189-.28-.37-.257-.53.046-.31.276-.483.646-.56a.4.4 0 0 1 .127-.006.4.4 0 0 1 .254.114c.07.067.084.14.044.195-.048.064-.147.086-.213.136-.046.034-.094.066-.128.106-.071.082-.04.163.12.266.223.143.467.22.713.258q.013.001.038-.002c.028-.17-.044-.354-.13-.546q.243-.07.476-.146c.076-.024.173.004.264.013.094.096.146.19.174.289q.014.054.029.108c.005.022.005.045.053.055.04-.013 0-.044.01-.074q.361-.102.736-.244c.04.114.076.22.1.34.18-.073.343-.146.501-.222.044.019.035.05.064.066.406-.128.86-.167 1.3-.247q.053-.008.107-.015a.38.38 0 0 1 .262.05q.108-.064.208-.126.055-.037.112-.072a.33.33 0 0 1 .25-.04c.09.023.134.07.143.132l.093.752c.007.053.007.108.012.167.233-.01.445-.025.667-.049-.03-.052-.115-.066-.152-.11.103-.125.2-.255.301-.385.042-.055.13-.077.207-.111.322.072.43.258.573.431.142-.019.28-.055.43-.088-.037-.049-.123-.051-.167-.091q.129-.211.259-.43c.032-.055.116-.086.184-.13.332.027.463.199.633.352.137-.036.27-.093.419-.146-.049-.04-.13-.034-.181-.065q.079-.174.153-.351c-.02-.02-.05-.017-.084-.018-.042.069-.083.131-.128.201a9 9 0 0 1-.707-.113c.12-.177.23-.35.335-.53.095.012.186.022.285.032l.108-.192c.237.023.47.034.716.038a8 8 0 0 1-.16.311c.12.032.227.07.322.123a.92.92 0 0 1 .413.478c.03.078-.022.166-.136.254z"/><path fill="currentColor" d="M9.712 21.41a11 11 0 0 1-.36-.073c-.103.112-.202.217-.309.325q.284.069.55.12c-.004.042-.067.07-.063.113q.305.062.638.11c.105-.117.198-.229.292-.343l-.146-.027c.076-.093.149-.181.222-.277a10 10 0 0 1-.688-.091l-.134.142zm.391.498c-.135-.02-.263-.042-.4-.067l.16-.189c.134.025.262.046.399.066-.043.068-.1.125-.159.19m-.191-.544q.206.032.434.059l-.163.194a13 13 0 0 1-.39-.06c-.073.043-.081.099-.153.144a10 10 0 0 1-.403-.083q.086-.09.17-.183c.12.024.234.047.352.068.072-.04.083-.096.153-.142zM8.057 20.408c-.139.03-.303.048-.477.083.207.125.42.23.585.363l.022-.007a32 32 0 0 1-.049-.507c-.06.014-.036.047-.081.07zM11.331 21.579c.102.018.202.034.312.05.12-.136.231-.269.346-.412a10 10 0 0 1-.593-.08c-.07.066-.098.127-.17.184a9 9 0 0 1-.312-.058c-.117.13-.23.247-.352.37.193.049.379.091.57.132.087-.06.113-.13.198-.186zm-.233.081a10 10 0 0 1-.345-.075c.069-.072.133-.142.203-.219.112.021.21.04.316.057.076-.058.102-.12.174-.185.115.02.23.036.354.051-.068.08-.13.156-.202.238l-.312-.053c-.079.059-.114.122-.188.185z"/><path fill="currentColor" d="M12.53 19.446q.08-.144.162-.306a9 9 0 0 1-.537-.03c-.038.07-.07.129-.107.194a8 8 0 0 1-.287-.033c-.08.136-.161.264-.246.394.176.033.344.059.523.081q.067-.1.131-.2l.255.026q-.074.19-.156.374c.09.03.196.044.269.098a5 5 0 0 1-.702.26c-.074-.09-.146-.176-.253-.244-.085-.055-.16-.118-.303-.121-.042.023-.085.042-.103.073q-.105.188-.219.374c.096.038.186.07.255.13a5 5 0 0 1-.722.164l-.041-.065a1 1 0 0 0-.325-.321.3.3 0 0 0-.16-.047c-.175.115-.216.268-.35.397.084.053.175.094.236.165-.329.057-.646.071-.962.084q-.01-.027-.011-.041-.054-.45-.1-.9c-.002-.024-.005-.047-.021-.069-.042-.055-.122-.07-.198-.028-.12.066-.227.142-.34.21v.04q.046.483.101.968a.3.3 0 0 0 .054.128c.068.098.205.153.386.145.338-.014.674-.026 1.01-.069.223-.028.44-.079.659-.125.3-.064.608-.106.905-.2.376-.122.748-.255 1.125-.389a3.6 3.6 0 0 0 .653-.302c.149-.09.21-.173.18-.24-.119-.289-.33-.504-.761-.574zm-.13.03c-.098-.008-.188-.017-.289-.028-.041.069-.08.13-.123.2a10 10 0 0 1-.311-.046c.039-.078.089-.151.14-.232q.14.019.28.03c.059-.065.072-.13.123-.193.104.008.207.014.32.02-.047.084-.09.163-.14.25zm.674.711c-.1.064-.208.115-.316.166-.311.146-.639.24-.96.352-.189.066-.373.139-.565.193-.274.077-.553.116-.83.174-.179.038-.355.084-.536.11-.363.054-.728.062-1.092.082-.166.009-.264-.046-.303-.142-.038-.092-.028-.187-.044-.282-.035-.238-.06-.475-.086-.713v-.032q.138-.093.287-.182c.038.019.027.042.029.064q.041.435.087.87a.3.3 0 0 0 .013.065c.012.038.049.06.119.058.363-.012.727-.03 1.087-.104a.16.16 0 0 0 .074-.032c-.05-.087-.165-.148-.264-.22.071-.092.139-.184.212-.285a.95.95 0 0 1 .405.453c.34-.064.686-.124 1.024-.255-.078-.09-.19-.138-.305-.192.058-.1.116-.201.176-.312a.97.97 0 0 1 .465.395c.335-.111.672-.212.988-.392-.087-.075-.207-.108-.325-.147.046-.11.09-.217.134-.332.136.026.227.08.312.138a.8.8 0 0 1 .3.378c.02.047-.026.086-.087.127zM7.884 20.757c-.161-.085-.305-.18-.47-.265-.019-.01-.045-.016-.048-.04q.156-.021.312-.047.157-.024.314-.052a1 1 0 0 0 .108-.236c.016-.053-.05-.097-.136-.095a1 1 0 0 0-.108.01c-.178.025-.35.056-.525.085-.217.037-.437.066-.642.119-.122.03-.203.13-.164.215.052.115.198.193.332.288q.037-.025.065-.046c.127.066.243.127.367.208a6 6 0 0 1-.768-.123c-.022-.172.034-.339-.131-.517-.167.079-.328.15-.492.217.03.072.092.138.068.21a.9.9 0 0 1-.27-.094c.118-.128.148-.268.049-.444a11 11 0 0 1-.545.183c.005.042.036.086-.01.117-.085-.01-.168-.043-.254-.07-.037-.14-.04-.277-.181-.427-.235-.005-.359.1-.552.133.04.106.087.205.102.301.016.097.034.195-.002.281a2.05 2.05 0 0 1-.875-.281c-.231-.14-.29-.278-.185-.39a.8.8 0 0 1 .262-.181c.032-.015.064-.03.08-.058.02-.034.016-.071-.032-.115a.23.23 0 0 0-.16-.058.5.5 0 0 0-.147.023c-.293.079-.476.232-.527.477-.045.212.11.453.446.66q.252.153.536.236c.405.121.744.121.947-.047.052-.042.11-.081.166-.124.168.047.333.083.48.058q.091.046.176.087c.212.098.443.155.677.204.295.063.59.126.889.161.25.03.5.041.745.02.24-.022.278-.052.324-.187.052-.156-.008-.284-.22-.395zm.1.277c-.016.067-.009.138-.072.202-.14.034-.293.032-.443.03-.325 0-.645-.052-.962-.113-.17-.032-.334-.077-.507-.108a2 2 0 0 1-.616-.229l-.086-.047c-.17.053-.368-.008-.565-.069q-.09.079-.18.153c-.184.151-.48.157-.848.044a2 2 0 0 1-.536-.246c-.247-.163-.349-.337-.321-.496.042-.247.218-.4.519-.472q.033-.007.067-.009.009.002.028.006c-.003.038-.047.044-.075.058a1 1 0 0 0-.24.158c-.17.156-.086.367.266.571.291.167.601.26.908.282h.097c.068-.098.042-.25-.064-.6q.164-.052.346-.116c.051.074.065.138.08.2s.02.122.033.19c.15.046.298.104.446.119.072-.038.081-.057.09-.156q.151-.048.306-.103c.046.06.047.06-.118.306.101.098.414.201.563.182.037-.076-.012-.16-.051-.252.097-.04.195-.085.306-.138.043.16.029.304.022.452.395.08.789.162 1.22.155a5 5 0 0 0-.676-.394c-.042-.005-.049.02-.083.018a1 1 0 0 1-.142-.104c-.093-.085-.063-.177.073-.205.375-.08.764-.138 1.156-.2a.08.08 0 0 1 .052.005.7.7 0 0 1-.08.176c-.267.05-.54.082-.805.127.006.03.042.036.066.048.27.128.51.27.739.42.069.045.104.093.09.154z"/><path fill="currentColor" d="M6.629 20.689c-.012.046.022.056.085.06-.012-.03-.037-.046-.085-.06M8.47 3.424c1.963.045 3.778.528 5.244 1.974.68-.643 1.374-1.238 1.988-1.905-.044-.08-.06-.124-.088-.157a2 2 0 0 0-.145-.156 7.7 7.7 0 0 0-2.443-1.619C10.395.447 7.702.342 4.974 1.126c-1.367.391-2.597 1.05-3.625 2.053-.1.098-.214.19-.251.408L3.118 5.1C4.692 3.816 6.512 3.381 8.47 3.426zm-4.422.558-.68.35V3.233l.68-.343zm8.37-2.144c.074.03.134.09.163.165l.12.32.077.038.223-.317.604.425-.413.438c-.23-.247-.94-.47-.94-.47l-.45-.846.618.246zm-.15.899.843.429a.45.45 0 0 1 .207.22l.577 1.313-.782-.42-.318-.87-.134-.07-.33.592-.705-.388zM9.922 1.16s.287-.063.451.051l.363.69a.02.02 0 0 1-.021.028l-1.149-.214.356-.552zm-.527.884s1.106.107 1.5.24l.571 1.259-.667-.196-.305-.731-.7-.064-.26.616-.673-.064zm-3.451-.762S7.736.825 8.442 1.13c0 0 .197.101.083.559H7.87c.083-.45-1.265-.05-1.265-.05l-.019.193a3.4 3.4 0 0 0-.642.104zm0 .978s.809-.343 2.615-.235v.064c.005.126-.182.444-.34.406s-1.615.07-1.615.07v.699c-.179.006-.662.083-.662.083V2.26zm-.992-.699s.268-.145.656-.158v.66s-.375 0-.656.198zm0 .985s.306-.203.656-.165v1.06s-.414.012-.656.229zm-2.193.12s.75-.603 2.009-.977v.635s-1.112.35-2.01.978zM3.633 17.709c.317.21.572.38.828.552.236-.233.456-.44.663-.661a.5.5 0 0 1 .397-.176c.324 0 .61-.117.86-.325.242-.2.49-.384.77-.531.196-.103.413-.24.493-.44.18-.452.306-.926.47-1.433-.413 0-.778-.01-1.142.002-.381.013-.744-.046-1.098-.261-.593.975-.762 2.06-1.053 3.112-.4-.08-.777-.091-1.187.16m2.365-2.797c.517.195 1.047.105 1.606.143-.139.525-.197 1.047-.761 1.287-.257.109-.453.313-.673.481-.288.22-.532.285-.849.213.167-.717.352-1.425.677-2.124M13.424 16.032c.1-.005.122-.044.15-.08.543-.71.974-1.489 1.382-2.284.252-.49.313-.998.271-1.53-.013-.163-.026-.333-.272-.46.026 1.49-.693 2.618-1.615 3.627zM12.2 18.247c.21-.122.38-.225.549-.39-.134-.06-.226-.037-.326-.01-.085.106-.206.195-.22.4z"/><path fill="currentColor" d="M7.072 5.479c.037-.005.1.007.14-.02.331-.223.68-.428.98-.689.234-.202.182-.51-.062-.719-.371-.02-.469.298-.615.496-.089.096-.205.063-.27.177.089.257-.112.395-.28.52-.02.118.003.187.107.235M7.27 7.099c.026-.353-.17-.577-.444-.749-.27.17-.314 1.31-.059 1.593.336-.181.477-.481.503-.844M5.506 8.27c.32-.07.16-.24.132-.385q.335-.747.237-.981c-.227.102-.498.053-.74.212zM5.3 6.153c-.22.103-.253-.329-.516-.126.067.119.038.223-.017.342-.1.21.035.376.164.522.108.121.234.101.37-.023.027-.21.035-.435 0-.715M9.395 19.092c.059-.466.31-.835.54-1.22.91-.064 1.355-.656 1.666-1.428-.23-.213-.369-.489-.533-.825-.206.374-.522.564-.792.805-.38.339-.852.614-.88 1.242-.812-.03-1.514.154-2.146.604l-.02.285c-.244.145-.61.026-.778.394.984.214 1.945.287 2.943.144m1.568-2.784a.3.3 0 0 1 .193.2c-.259.69-.853 1.118-1.37.94.282-.516.794-.77 1.177-1.14m-3.292 2.426c-.067-.095-.065-.173-.037-.29.53-.341 1.11-.47 1.768-.417-.092.275-.249.483-.308.754-.497.02-.971.09-1.423-.047"/>
    </svg>
  );
} ;

export default Tipax;