import React from "react";
interface AndroidProps {
  className?: string;
  variants?: "filled" | "outlined" | "filled-1" | "outlined-1";
  size?: number;
}

const Android: React.FC<AndroidProps> = ({
  className = "",
  variants = "filled",
  size = 24,
}) => {
  const defaultColor = "white";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-${defaultColor} ${className}`}
    >
      {variants === "filled" ? (
        <>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12.1 23c6.35 0 11.5-5.149 11.5-11.5S18.45 0 12.1 0C5.748 0 .6 5.149.6 11.5S5.748 23 12.1 23M8.482 3.935a.39.39 0 0 1 .263-.102c.096 0 .191.034.264.102l1.105 1.034A4.7 4.7 0 0 1 12.1 4.53a4.7 4.7 0 0 1 1.985.439l1.105-1.034a.39.39 0 0 1 .527 0 .333.333 0 0 1 0 .493l-.977.914c1.11.76 1.832 1.985 1.832 3.37H7.627c0-1.385.723-2.61 1.832-3.37l-.977-.914a.333.333 0 0 1 0-.493m2.127 2.686a.553.553 0 0 0-.745 0 .47.47 0 0 0 0 .697c.205.193.539.193.745 0a.47.47 0 0 0 0-.697m3.727 0a.553.553 0 0 0-.746 0 .47.47 0 0 0 0 .697c.206.193.54.193.746 0a.47.47 0 0 0 0-.697M5.39 10.106c0-.385.334-.697.746-.697.411 0 .745.312.745.697v4.182c0 .385-.334.697-.745.697-.412 0-.746-.312-.746-.697zm2.236 4.879V9.409h8.945v5.576c0 .385-.334.697-.745.697h-.746v2.44c0 .576-.5 1.045-1.118 1.045-.617 0-1.118-.469-1.118-1.046v-2.44h-1.49v2.44c0 .577-.502 1.046-1.119 1.046s-1.118-.469-1.118-1.046v-2.44h-.745c-.412 0-.746-.311-.746-.696m9.69-4.879c0-.385.334-.697.746-.697.411 0 .745.312.745.697v4.182c0 .385-.334.697-.745.697-.412 0-.746-.312-.746-.697z"
            clipRule="evenodd"
          />
        </>
      ) : variants === "outlined" ? (
        <>
          <path
            fill="currentColor"
            d="m5.119.002-.056.013a.45.45 0 0 0-.324.273.43.43 0 0 0 .056.414l.957 1.402c-1.62.831-2.781 2.265-3.052 3.97v.097a1 1 0 0 0 0 .069v.618a1.8 1.8 0 0 0-.9-.247c-.99 0-1.8.791-1.8 1.758v5.277c0 .967.81 1.759 1.8 1.759a1.8 1.8 0 0 0 .9-.248v1.127c0 .723.61 1.32 1.35 1.32h.45v2.637c0 .967.81 1.759 1.8 1.759s1.8-.792 1.8-1.759v-2.638h1.8v2.638c0 .967.81 1.759 1.8 1.759s1.8-.792 1.8-1.759v-2.638h.45c.74 0 1.35-.596 1.35-1.319v-1.127a1.8 1.8 0 0 0 .9.248c.99 0 1.8-.792 1.8-1.76V8.37c0-.967-.81-1.758-1.8-1.758a1.8 1.8 0 0 0-.9.247v-.605a.5.5 0 0 0 0-.123v-.028c-.262-1.717-1.424-3.163-3.052-3.998l.957-1.402a.43.43 0 0 0 .01-.5.45.45 0 0 0-.474-.187.45.45 0 0 0-.282.193l-1.054 1.525A7.3 7.3 0 0 0 9 1.334c-.847 0-1.663.138-2.405.399L5.541.208a.46.46 0 0 0-.422-.206M9 2.214c.846 0 1.638.161 2.334.453l.043.014c1.408.603 2.432 1.731 2.826 3.05H3.797c.388-1.3 1.392-2.415 2.77-3.023a.4.4 0 0 0 .085-.04A6 6 0 0 1 9 2.213M6.525 3.533a.666.666 0 0 0-.675.66c0 .365.3.659.675.659a.666.666 0 0 0 .675-.66.67.67 0 0 0-.675-.66m4.95 0a.67.67 0 0 0-.675.66c0 .365.302.659.675.659a.665.665 0 0 0 .675-.66c0-.364-.3-.66-.675-.66M3.6 6.61h10.8v9.673a.44.44 0 0 1-.45.44h-3.516a.5.5 0 0 0-.182 0H5.034a.5.5 0 0 0-.182 0H4.05a.44.44 0 0 1-.45-.44zm-1.8.88c.503 0 .9.387.9.878v5.277c0 .491-.397.88-.9.88a.883.883 0 0 1-.9-.88V8.369c0-.49.397-.879.9-.879m14.4 0c.503 0 .9.387.9.878v5.277c0 .491-.397.88-.9.88a.883.883 0 0 1-.9-.88V8.369c0-.49.397-.879.9-.879M5.4 17.602h1.8v2.638c0 .491-.397.88-.9.88a.883.883 0 0 1-.9-.88zm5.4 0h1.8v2.638c0 .491-.397.88-.9.88a.883.883 0 0 1-.9-.88z"
          />
        </>
      ) : variants === "filled-1" ? (
        <>
          <path
            fill="currentColor"
            d="M5.1.017a.499.499 0 0 0-.354.853l1.31 1.31A5.99 5.99 0 0 0 3.6 7.018h12c0-1.988-.97-3.744-2.457-4.836l1.31-1.31a.5.5 0 0 0-.707-.708l-1.482 1.483a5.97 5.97 0 0 0-5.328 0L5.453.163A.5.5 0 0 0 5.1.017m1.5 4a.707.707 0 1 1 1 1 .707.707 0 0 1-1-1m5 0a.707.707 0 1 1 1 1 .707.707 0 0 1-1-1m-10 4a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m2 0v8a1 1 0 0 0 1 1h1v3.5a1.5 1.5 0 0 0 3 0v-3.5h2v3.5a1.5 1.5 0 0 0 3 0v-3.5h1a1 1 0 0 0 1-1v-8zm14 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1"
          />
        </>
      ) : variants === "outlined-1" ? (
        <>
          <path
            fill="currentColor"
            d="m8.934 3.834-.039.01a.31.31 0 0 0-.224.19.3.3 0 0 0 .04.289l.661.977c-1.12.579-1.925 1.579-2.112 2.767v.546a1.24 1.24 0 0 0-1.869 1.054v3.677a1.24 1.24 0 0 0 1.869 1.054v.785c0 .504.422.92.934.92h.312v1.838c0 .674.56 1.226 1.246 1.226a1.24 1.24 0 0 0 1.245-1.226v-1.839h1.246v1.839c0 .674.561 1.226 1.246 1.226a1.24 1.24 0 0 0 1.246-1.226v-1.839h.312a.93.93 0 0 0 .934-.92v-.784a1.24 1.24 0 0 0 1.869-1.054V9.667a1.24 1.24 0 0 0-1.87-1.054v-.421a.4.4 0 0 0 0-.086v-.02C15.8 6.89 14.996 5.881 13.87 5.3l.662-.977a.3.3 0 0 0 .007-.349.31.31 0 0 0-.329-.13.3.3 0 0 0-.194.134l-.73 1.063a5 5 0 0 0-1.665-.278 5 5 0 0 0-1.664.278l-.73-1.063a.32.32 0 0 0-.292-.144m2.686 1.542c.586 0 1.134.113 1.616.316l.03.01c.974.42 1.683 1.207 1.956 2.126H8.019c.27-.906.964-1.683 1.918-2.107a.3.3 0 0 0 .058-.029 4.2 4.2 0 0 1 1.625-.316m-1.713.92a.463.463 0 0 0-.467.46c0 .254.208.459.467.459a.463.463 0 0 0 .468-.46c0-.253-.21-.46-.468-.46m3.427 0a.464.464 0 0 0-.468.46c0 .254.21.459.468.459.259 0 .467-.205.467-.46a.463.463 0 0 0-.467-.46M7.883 8.44h7.475v6.742a.305.305 0 0 1-.312.306h-2.433a.3.3 0 0 0-.126 0H8.876a.3.3 0 0 0-.127 0h-.555a.305.305 0 0 1-.311-.306zm-1.246.613c.348 0 .623.27.623.613v3.677a.613.613 0 0 1-.623.613.613.613 0 0 1-.623-.613V9.667c0-.343.275-.613.623-.613m9.967 0c.348 0 .623.27.623.613v3.677a.613.613 0 0 1-.623.613.613.613 0 0 1-.623-.613V9.667c0-.343.275-.613.623-.613m-7.475 7.048h1.246v1.839a.613.613 0 0 1-.623.613.613.613 0 0 1-.623-.613zm3.737 0h1.246v1.839a.613.613 0 0 1-.623.613.613.613 0 0 1-.623-.613z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12.1 22.042c5.822 0 10.541-4.72 10.541-10.542S17.921.958 12.1.958 1.558 5.678 1.558 11.5 6.278 22.042 12.1 22.042m0 .958c6.35 0 11.5-5.149 11.5-11.5S18.45 0 12.1 0C5.748 0 .6 5.149.6 11.5S5.748 23 12.1 23"
            clipRule="evenodd"
          />
        </>
      ) : null}
    </svg>
  );
};

export default Android;
