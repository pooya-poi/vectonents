import React from "react";

interface RustProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined";
}

const Rust: React.FC<RustProps> = ({
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
          d="m24.48 11.723-1.006-.624-.029-.294.866-.807a.345.345 0 0 0-.115-.579l-1.107-.414-.086-.285.69-.96a.347.347 0 0 0-.225-.545l-1.168-.19a9 9 0 0 0-.14-.262l.49-1.076a.345.345 0 0 0-.328-.49l-1.184.04a9 9 0 0 0-.187-.226l.272-1.154a.347.347 0 0 0-.417-.417l-1.154.271q-.112-.094-.227-.187l.041-1.184a.345.345 0 0 0-.49-.328l-1.076.49-.263-.14-.19-1.167a.347.347 0 0 0-.544-.226l-.96.69q-.143-.045-.285-.086L15.244.466a.346.346 0 0 0-.578-.116l-.808.867q-.146-.016-.293-.028L12.94.18a.347.347 0 0 0-.59 0l-.624 1.008a10 10 0 0 0-.293.028l-.808-.866a.35.35 0 0 0-.578.115l-.414 1.107q-.144.042-.285.087l-.96-.69a.345.345 0 0 0-.545.224l-.19 1.168-.263.14-1.076-.49a.345.345 0 0 0-.49.327l.041 1.185q-.114.092-.227.188L4.485 3.44a.348.348 0 0 0-.417.417L4.34 5.01q-.096.112-.188.226l-1.184-.04a.347.347 0 0 0-.328.49l.49 1.077q-.07.129-.14.262l-1.166.19a.346.346 0 0 0-.226.544l.69.96q-.045.142-.086.285l-1.107.414a.346.346 0 0 0-.115.579l.866.807a10 10 0 0 0-.03.294l-1.006.624a.346.346 0 0 0 0 .59l1.007.622q.012.148.03.294l-.867.808a.347.347 0 0 0 .115.578l1.107.414q.041.144.087.285l-.691.96a.346.346 0 0 0 .226.545l1.167.19q.068.133.14.262l-.49 1.076a.347.347 0 0 0 .327.49l1.184-.04q.093.115.188.227l-.272 1.154a.345.345 0 0 0 .417.416l1.154-.271q.112.095.227.186l-.041 1.186a.345.345 0 0 0 .49.326l1.077-.49q.13.072.262.141l.19 1.166a.346.346 0 0 0 .545.227l.96-.692q.141.046.284.087l.414 1.107a.345.345 0 0 0 .579.115l.808-.866.293.03.624 1.007a.347.347 0 0 0 .59 0l.623-1.008q.148-.012.294-.03l.808.867a.346.346 0 0 0 .577-.115l.415-1.107a10 10 0 0 0 .285-.087l.96.692a.346.346 0 0 0 .545-.227l.19-1.167q.132-.069.262-.14l1.076.49a.346.346 0 0 0 .49-.327l-.04-1.185a7 7 0 0 0 .227-.186l1.153.271a.346.346 0 0 0 .417-.416l-.271-1.154q.095-.112.186-.227l1.185.04a.344.344 0 0 0 .327-.49l-.49-1.076q.071-.13.14-.262l1.167-.19a.345.345 0 0 0 .226-.545l-.69-.96q.044-.142.086-.285l1.107-.414a.345.345 0 0 0 .115-.578l-.867-.808.03-.294 1.007-.623a.347.347 0 0 0 0-.59m-6.742 8.358a.714.714 0 0 1 .299-1.396.714.714 0 0 1-.3 1.396m-.343-2.316a.65.65 0 0 0-.771.5l-.358 1.67a8.7 8.7 0 0 1-3.62.78 8.75 8.75 0 0 1-3.697-.816L8.59 18.23a.65.65 0 0 0-.771-.5l-1.474.317a9 9 0 0 1-.762-.898h7.17c.082 0 .136-.015.136-.089v-2.536c0-.074-.054-.089-.135-.089h-2.097v-1.608h2.268c.207 0 1.107.059 1.395 1.21.09.352.288 1.504.423 1.872.135.413.684 1.239 1.269 1.239h3.573a1 1 0 0 0 .13-.013q-.373.506-.813.953zm-9.917 2.28a.713.713 0 0 1-.3-1.396.714.714 0 1 1 .3 1.397m-2.72-11.03a.713.713 0 1 1-1.303.578.713.713 0 0 1 1.303-.578m-.837 1.982 1.536-.682a.65.65 0 0 0 .33-.859l-.316-.715h1.243v5.606H4.206a8.8 8.8 0 0 1-.285-3.35m6.738-.544V8.8h2.96c.154 0 1.08.177 1.08.87 0 .575-.71.782-1.296.782zM21.42 11.94q0 .33-.025.651h-.9c-.09 0-.126.06-.126.148v.413c0 .974-.549 1.185-1.03 1.239-.457.051-.965-.192-1.027-.473-.27-1.518-.72-1.843-1.431-2.404.881-.56 1.8-1.386 1.8-2.492 0-1.195-.82-1.947-1.378-2.316-.783-.516-1.65-.62-1.884-.62H6.11a8.76 8.76 0 0 1 4.909-2.77l1.097 1.151c.248.26.66.27.919.021l1.228-1.174a8.78 8.78 0 0 1 6.007 4.278l-.84 1.899a.65.65 0 0 0 .33.858l1.619.719q.041.43.042.872m-9.304-9.604a.713.713 0 1 1 .985 1.03.713.713 0 0 1-.985-1.03m8.342 6.714a.713.713 0 1 1 1.302.578.713.713 0 0 1-1.302-.578"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m23.474 11.099 1.007.624a.346.346 0 0 1 0 .59l-1.007.622-.03.294.867.808a.346.346 0 0 1-.115.578l-1.107.414q-.041.143-.086.285l.69.96a.345.345 0 0 1-.226.545l-1.167.19a10 10 0 0 1-.14.262l.49 1.076a.345.345 0 0 1-.327.49l-1.185-.04-.187.227.272 1.154a.346.346 0 0 1-.417.416l-1.154-.271a7 7 0 0 1-.227.186l.041 1.185a.346.346 0 0 1-.49.328L17.9 21.53l-.047.026-.215.114-.19 1.167a.348.348 0 0 1-.545.227l-.96-.692q-.143.046-.285.087l-.415 1.107a.344.344 0 0 1-.577.115l-.808-.866a10 10 0 0 1-.294.029l-.623 1.008a.347.347 0 0 1-.59 0l-.624-1.007-.293-.03-.808.866a.344.344 0 0 1-.579-.115l-.414-1.107a10 10 0 0 1-.285-.087l-.959.692a.346.346 0 0 1-.545-.227l-.19-1.166a10 10 0 0 1-.262-.141l-1.077.49a.346.346 0 0 1-.49-.326l.041-1.186a11 11 0 0 1-.227-.186l-1.154.271a.344.344 0 0 1-.417-.416l.272-1.154a9 9 0 0 1-.188-.227l-1.184.04a.346.346 0 0 1-.328-.49l.492-1.076a8 8 0 0 1-.141-.262l-1.167-.19a.347.347 0 0 1-.226-.545l.69-.96q-.045-.141-.086-.285l-1.107-.414a.347.347 0 0 1-.115-.578l.866-.808a10 10 0 0 1-.03-.294L.81 12.312a.347.347 0 0 1 0-.59l1.007-.623a10 10 0 0 1 .03-.294L.98 9.998a.346.346 0 0 1 .115-.579l1.107-.414q.04-.143.086-.285l-.69-.96a.347.347 0 0 1 .226-.545l1.167-.189q.069-.134.14-.262l-.49-1.077a.347.347 0 0 1 .327-.49l1.184.04q.093-.114.188-.226l-.272-1.154a.348.348 0 0 1 .417-.417l1.154.272q.112-.095.227-.188L5.825 2.34a.345.345 0 0 1 .49-.327l1.076.49.262-.14.19-1.168A.345.345 0 0 1 8.39.97l.96.69q.141-.045.285-.086l.414-1.107a.348.348 0 0 1 .578-.115l.808.866q.147-.016.293-.028L12.351.18a.346.346 0 0 1 .59 0l.624 1.008q.147.012.293.028l.808-.867a.345.345 0 0 1 .578.116l.414 1.107q.143.04.285.086l.96-.69a.347.347 0 0 1 .545.226l.19 1.167.262.14 1.076-.49a.345.345 0 0 1 .49.328l-.04 1.184q.115.093.227.187l1.153-.271a.346.346 0 0 1 .417.417l-.272 1.154q.095.111.187.226l1.184-.04a.345.345 0 0 1 .328.49l-.49 1.076q.072.13.14.262l1.168.19a.347.347 0 0 1 .225.545l-.69.96q.044.143.086.285l1.107.414a.344.344 0 0 1 .115.579l-.866.807zm-5.736 8.982a.714.714 0 0 1 .299-1.396.714.714 0 0 1-.3 1.396m-.596-2.32a.7.7 0 0 1 .253.004l1.508.323q.44-.447.813-.953a1 1 0 0 1-.13.013h-3.573c-.585 0-1.134-.826-1.27-1.239-.086-.237-.199-.796-.292-1.26a16 16 0 0 0-.13-.613c-.288-1.15-1.188-1.21-1.395-1.21h-2.268v1.61h2.097c.08 0 .135.014.135.088v2.536c0 .074-.054.089-.135.089h-7.17q.35.474.761.898l1.474-.317a.65.65 0 0 1 .77.5L8.95 19.9a8.75 8.75 0 0 0 3.696.815 8.7 8.7 0 0 0 3.621-.78l.358-1.67a.65.65 0 0 1 .518-.502M4.206 14.348h2.508V8.74H5.471l.316.715a.65.65 0 0 1-.33.859l-1.536.682a8.8 8.8 0 0 0 .285 3.35m1.903-8.26a8.76 8.76 0 0 1 4.909-2.771l1.097 1.151c.248.26.66.27.919.021l1.228-1.174a8.78 8.78 0 0 1 6.007 4.278l-.84 1.899a.65.65 0 0 0 .33.858l1.619.719a9 9 0 0 1 .017 1.523h-.9c-.09 0-.126.06-.126.148v.413c0 .974-.549 1.185-1.03 1.239-.457.051-.965-.192-1.027-.473-.265-1.484-.7-1.828-1.384-2.367l-.047-.037c.881-.56 1.8-1.386 1.8-2.492 0-1.195-.82-1.947-1.378-2.316-.783-.516-1.65-.62-1.884-.62zm1.369 13.958a.713.713 0 0 1-.3-1.396.714.714 0 1 1 .3 1.397m-2.72-11.03a.713.713 0 1 1-1.303.578.713.713 0 0 1 1.303-.578m7.358-6.679a.713.713 0 1 1 .985 1.03.713.713 0 0 1-.985-1.03m8.342 6.714a.713.713 0 1 1 1.302.578.713.713 0 0 1-1.302-.578m-9.8 1.403V8.8h2.962c.153 0 1.08.177 1.08.87 0 .575-.711.782-1.296.782zm1.987 11.564c5.523 0 10-4.478 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"
          clipRule="evenodd"
        />
      </>
    ) : null}
  </svg>
);

export default Rust;
