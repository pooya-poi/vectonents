import React from 'react';
interface BrushProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Brush: React.FC<BrushProps> = ({
    color,
    className = '',
    variants = 'filled',
    size = 24,
}) => {
    const defaultColor = 'white';
    const fillColor = color || defaultColor;
    return (

        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-${fillColor} ${className}`}
        >
            {variants === 'filled' ? (
                <>
                    <path fill="currentColor" d="M18.37 1.87h-7.62v1.61a.75.75 0 0 1-1.5 0V1.87H7.78v3.34a.75.75 0 1 1-1.5 0V1.87h-.65a2 2 0 0 0-2.13 2v6.34h17V3.87a2 2 0 0 0-2.13-2" /><path fill="currentColor" fillRule="evenodd" d="M6.08 15.06a2.61 2.61 0 0 1-2.57-2.63l-.02-.73h17v.81a2.61 2.61 0 0 1-2.57 2.63l-3.44-.09.09.46c.018.4.146.788.37 1.12a3.65 3.65 0 0 1 .54 1.91 3.58 3.58 0 0 1-1.16 2.66 3.41 3.41 0 0 1-4.65 0 3.57 3.57 0 0 1-1.15-2.61 3.64 3.64 0 0 1 .53-1.91 2.1 2.1 0 0 0 .38-1.12v-.5zm5.86 3.35a.75.75 0 0 0-.75.75v.9a.75.75 0 0 0 1.5 0v-.9a.75.75 0 0 0-.75-.75" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M20.5 4.25a2 2 0 0 0-2.13-2H5.63a2 2 0 0 0-2.13 2v8.56a2.61 2.61 0 0 0 2.57 2.63h3.35v.49A2.2 2.2 0 0 1 9.06 17a3.62 3.62 0 0 0 .61 4.55 3.38 3.38 0 0 0 4.65 0 3.55 3.55 0 0 0 1.16-2.65A3.6 3.6 0 0 0 15 17a2.1 2.1 0 0 1-.38-1.13l-.09-.45 3.44.09a2.61 2.61 0 0 0 2.57-2.63v-1.13zm-15.43 0c0-.15 0-.43.56-.43h12.74c.56 0 .56.28.56.43v5.93H5.07zM18 14.03a1.1 1.1 0 0 0 1-1.13v-1.15H5v1.06a1.1 1.1 0 0 0 1.08 1.13H9.5a1.44 1.44 0 0 1 1.41 1.46v.49a3.65 3.65 0 0 1-.6 1.92 2.1 2.1 0 0 0-.31 1.12c0 .593.255 1.157.7 1.55a2 2 0 0 0 2.63 0 2.08 2.08 0 0 0 .67-1.55 2.2 2.2 0 0 0-.27-1.13 3.6 3.6 0 0 1-.6-1.91v-.49a1.44 1.44 0 0 1 1.43-1.46z" clipRule="evenodd" /><path fill="currentColor" d="M7 4.36a.75.75 0 0 0-.75.75v3.47a.75.75 0 1 0 1.5 0V5.11A.76.76 0 0 0 7 4.36M10 4.36a.76.76 0 0 0-.75.75v1.75a.75.75 0 1 0 1.5 0V5.11a.76.76 0 0 0-.75-.75" />
                </>
            ) :
                variants === 'filled-1' ? (
                    <>
                        <path fill="currentColor" fillRule="evenodd" d="M19.11 1.41a3 3 0 0 1 2.1.87 3 3 0 0 1 .25 4.02l-7.66 9.36-.1.11a4.15 4.15 0 0 1-3 1.23 4.4 4.4 0 0 1-1.28-.23c.3.56.458 1.185.46 1.82a4 4 0 0 1-4 4h-2.5a1.5 1.5 0 0 1-1.5-1.5v-2.5a4 4 0 0 1 4-4c.38.003.758.064 1.12.18a4.13 4.13 0 0 1 .74-4.92l.12-.1 9.36-7.66a3 3 0 0 1 1.89-.68M11 13.6l3-3a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 .53 1.28.7.7 0 0 0 .53-.22" clipRule="evenodd" />
                    </>
                ) : variants === 'outlined-1' ? (
                    <>
                        <path fill="currentColor" fillRule="evenodd" d="M21.51 2.58a3 3 0 0 0-2.11-.87 3 3 0 0 0-1.88.67L8.15 10l-.15.15a4.12 4.12 0 0 0-.71 4.91 4.2 4.2 0 0 0-1.12-.18 4 4 0 0 0-4 4v2.5a1.5 1.5 0 0 0 1.5 1.5h2.5a4 4 0 0 0 3.54-5.82c.4.135.818.206 1.24.21a4.1 4.1 0 0 0 2.95-1.22l.1-.11 7.67-9.37a3 3 0 0 0-.16-3.99m-15.3 18.8h-2.5v-2.5a2.5 2.5 0 1 1 2.5 2.5M12.88 15l7.67-9.38a1.48 1.48 0 0 0-2.08-2.08L9.1 11.21A2.676 2.676 0 0 0 12.88 15" clipRule="evenodd" /><path fill="currentColor" d="m13.2 9.83-3 3a.75.75 0 0 0 1.06 1.06l3-3a.75.75 0 1 0-1.06-1.06" />
                    </>
                ) : null}
        </svg>
    );
};
export default Brush;
