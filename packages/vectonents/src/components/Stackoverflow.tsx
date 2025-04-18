import React from "react";

interface StackoverflowProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined";
}

const Stackoverflow: React.FC<StackoverflowProps> = ({
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
          fillRule="evenodd"
          d="M5 0a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm9.556 3.1a.72.72 0 0 1 .931.173l4.943 6.185a.68.68 0 0 1-.122.972.72.72 0 0 1-.995-.12l-4.942-6.184a.69.69 0 0 1-.083-.74.7.7 0 0 1 .268-.285m-2.754 2.632a.72.72 0 0 1 .866.03l6.238 4.94a.7.7 0 0 1 .27.467.68.68 0 0 1-.153.515.7.7 0 0 1-.484.254.72.72 0 0 1-.524-.16l-6.239-4.94a.678.678 0 0 1-.231-.769.7.7 0 0 1 .257-.337M9.717 8.896a.72.72 0 0 1 .776-.088l7.215 3.44a.7.7 0 0 1 .36.397.68.68 0 0 1-.033.529.7.7 0 0 1-.406.351.72.72 0 0 1-.542-.032l-7.215-3.44a.7.7 0 0 1-.332-.317.68.68 0 0 1 .177-.84m-1.267 3.5a.72.72 0 0 1 .626-.143l7.82 1.765a.72.72 0 0 1 .46.303.684.684 0 0 1-.23.97.72.72 0 0 1-.548.076l-7.822-1.765a.7.7 0 0 1-.428-.277.68.68 0 0 1 .122-.929m-4.183 1.946A.96.96 0 0 1 5.3 14.13a.95.95 0 0 1 .52.508.9.9 0 0 1 .07.36v4.155h13.222V15a.9.9 0 0 1 .272-.662.9.9 0 0 1 .308-.203.96.96 0 0 1 1.037.203A.92.92 0 0 1 21 15v4.154C21 20.162 20.143 21 19.11 21H5.889C4.857 21 4 20.162 4 19.153V15a.91.91 0 0 1 .267-.657m4.137 1.583a1 1 0 0 1 .082-.003h8.028a.72.72 0 0 1 .507.2.7.7 0 0 1 .211.492.68.68 0 0 1-.21.494.7.7 0 0 1-.508.199H8.486a.73.73 0 0 1-.507-.2.7.7 0 0 1-.211-.493.68.68 0 0 1 .21-.493.7.7 0 0 1 .426-.196"
          clipRule="evenodd"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          d="M14.8 0a1 1 0 0 0-.519.134.94.94 0 0 0-.362.381.89.89 0 0 0 .113.987l6.686 8.246a.985.985 0 0 0 1.346.16c.2-.152.33-.373.36-.616a.9.9 0 0 0-.195-.682L15.542.364a.95.95 0 0 0-.328-.263 1 1 0 0 0-.415-.1m-3.692 3.47a1 1 0 0 0-.553.173.93.93 0 0 0-.347.45.9.9 0 0 0-.013.56c.056.184.17.346.325.465l8.442 6.586a.97.97 0 0 0 .709.213 1 1 0 0 0 .362-.106 1 1 0 0 0 .292-.232.9.9 0 0 0 .207-.687.9.9 0 0 0-.117-.347.9.9 0 0 0-.248-.277l-8.44-6.584a.98.98 0 0 0-.619-.214M8.322 7.645a.98.98 0 0 0-.587.216.92.92 0 0 0-.321.52.9.9 0 0 0 .081.6.94.94 0 0 0 .45.423l9.762 4.586a.99.99 0 0 0 1.055-.138.898.898 0 0 0 .082-1.304 1 1 0 0 0-.298-.218L8.785 7.744a1 1 0 0 0-.463-.099m-1.645 4.666a.98.98 0 0 0-.657.217.898.898 0 0 0-.164 1.238c.138.189.345.32.58.37l10.582 2.354a1 1 0 0 0 .741-.101.95.95 0 0 0 .282-.249.9.9 0 0 0 .168-.703.9.9 0 0 0-.14-.342.977.977 0 0 0-.62-.403L6.866 12.336a1 1 0 0 0-.19-.026M1.26 14.75a1.3 1.3 0 0 0-.897.372 1.2 1.2 0 0 0-.362.875v5.54C0 22.883 1.16 24 2.556 24h17.888C21.84 24 23 22.883 23 21.538v-5.54a1.2 1.2 0 0 0-.092-.476 1.2 1.2 0 0 0-.276-.406 1.32 1.32 0 0 0-1.82 0 1.2 1.2 0 0 0-.276.406 1.2 1.2 0 0 0-.092.476v5.54H2.556v-5.54a1.2 1.2 0 0 0-.094-.48 1.2 1.2 0 0 0-.281-.408 1.3 1.3 0 0 0-.423-.27 1.3 1.3 0 0 0-.499-.09m4.81 2.478a1 1 0 0 0-.686.266.92.92 0 0 0-.285.657.9.9 0 0 0 .285.658.96.96 0 0 0 .686.266h10.862a1 1 0 0 0 .686-.266.92.92 0 0 0 .285-.658.9.9 0 0 0-.285-.657.96.96 0 0 0-.687-.266z"
        />
      </>
    ) : null}
  </svg>
);

export default Stackoverflow;
