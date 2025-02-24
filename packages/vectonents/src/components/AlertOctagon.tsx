import React from 'react';
interface AlertOctagonProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const AlertOctagon: React.FC<AlertOctagonProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="m20.1 6.47-3.3-3.3A4 4 0 0 0 13.97 2H9.3a4 4 0 0 0-2.83 1.17l-3.3 3.3A4 4 0 0 0 2 9.3v4.67a4 4 0 0 0 1.17 2.82l3.3 3.31a4 4 0 0 0 2.83 1.17h4.67a4 4 0 0 0 2.83-1.17l3.3-3.31a4 4 0 0 0 1.17-2.82V9.3a4 4 0 0 0-1.17-2.83m-9.22 1.8a.75.75 0 0 1 1.5 0v3.1a.75.75 0 0 1-1.5 0zm.76 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="m16.79 3.17 3.3 3.3a4 4 0 0 1 1.17 2.83v4.66a4 4 0 0 1-1.17 2.83l-3.3 3.3a4 4 0 0 1-2.83 1.17H9.3a4 4 0 0 1-2.83-1.17l-3.3-3.3A4 4 0 0 1 2 13.96V9.3a4 4 0 0 1 1.17-2.83l3.3-3.3A4 4 0 0 1 9.3 2h4.66a4 4 0 0 1 2.83 1.17m2.11 12.46a2.33 2.33 0 0 0 .67-1.67V9.27a2.33 2.33 0 0 0-.67-1.64l-3.27-3.27a2.33 2.33 0 0 0-1.7-.67H9.27a2.33 2.33 0 0 0-1.64.67L4.36 7.63a2.33 2.33 0 0 0-.67 1.67v4.69a2.33 2.33 0 0 0 .67 1.64l3.27 3.27a2.33 2.33 0 0 0 1.67.67h4.69a2.33 2.33 0 0 0 1.64-.67z" clipRule="evenodd" /><path fill="currentColor" d="M11.63 13.49a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M11.63 12.12a.76.76 0 0 0 .75-.75v-3.1a.75.75 0 0 0-1.5 0v3.1a.76.76 0 0 0 .75.75" />
                </>
            ) : null}
        </svg>
    );
};
export default AlertOctagon;
