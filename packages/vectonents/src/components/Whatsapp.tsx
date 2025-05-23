import React from "react";

interface WhatsappProps {
  size?: number;
  fillColor?: string;
  className?: string;
  variants?: "filled" | "outlined";
}

const Whatsapp: React.FC<WhatsappProps> = ({
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
          d="M12 0C5.373 0 0 5.373 0 12c0 2.251.632 4.35 1.71 6.15L.108 24l5.975-1.568A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0M7.893 6.402c.195 0 .395 0 .568.008.214.005.447.02.67.514.265.586.842 2.056.916 2.205s.126.324.023.52c-.098.2-.149.32-.293.498-.149.172-.312.385-.447.515-.149.15-.303.313-.13.61.171.297.769 1.27 1.652 2.056 1.135 1.014 2.092 1.326 2.39 1.475s.47.125.643-.075c.177-.194.743-.864.943-1.162.195-.298.394-.246.664-.148.274.098 1.735.818 2.033.967s.494.223.569.344c.077.125.077.72-.17 1.414-.247.693-1.46 1.363-2.004 1.41-.55.05-1.061.246-3.568-.74-3.024-1.191-4.932-4.289-5.08-4.489-.15-.195-1.211-1.61-1.211-3.07 0-1.465.768-2.183 1.037-2.48a1.1 1.1 0 0 1 .795-.372"
        />
      </>
    ) : variants === "outlined" ? (
      <>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.504 3.488A11.9 11.9 0 0 0 12.05 0C5.465 0 .1 5.335.1 11.891a11.8 11.8 0 0 0 1.594 5.946L0 24l6.336-1.657a12 12 0 0 0 5.71 1.45h.005c6.586 0 11.945-5.334 11.949-11.894a11.8 11.8 0 0 0-3.496-8.411M12.05 21.784h-.004a9.97 9.97 0 0 1-5.055-1.377l-.363-.214-3.762.98 1.004-3.647-.234-.374a9.83 9.83 0 0 1-1.52-5.26c0-5.449 4.457-9.882 9.938-9.882a9.9 9.9 0 0 1 7.02 2.897A9.8 9.8 0 0 1 21.98 11.9c0 5.452-4.458 9.885-9.93 9.885m5.445-7.404c-.297-.148-1.765-.867-2.039-.965-.273-.1-.473-.147-.672.148-.2.3-.77.968-.945 1.167-.172.194-.348.221-.645.074-.3-.148-1.261-.463-2.402-1.478-.887-.786-1.488-1.761-1.66-2.057-.176-.3-.02-.459.129-.607.136-.132.3-.346.449-.52.148-.172.2-.296.3-.495.098-.198.048-.373-.027-.52-.074-.148-.671-1.614-.921-2.21-.243-.579-.489-.497-.672-.509-.172-.007-.371-.007-.57-.007-.2 0-.524.073-.798.373C6.75 7.069 5.98 7.789 5.98 9.25s1.07 2.877 1.22 3.076c.148.194 2.105 3.196 5.1 4.483a17 17 0 0 0 1.7.626c.715.226 1.367.195 1.883.12.574-.085 1.765-.719 2.015-1.415.247-.692.247-1.287.172-1.411-.074-.125-.273-.199-.574-.35"
          clipRule="evenodd"
        />
      </>
    ) : null}
  </svg>
);

export default Whatsapp;
