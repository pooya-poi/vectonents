import React from 'react';
interface ClipboardProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Clipboard: React.FC<ClipboardProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M15.44 3.69v-.17c0-.84-.681-1.52-1.52-1.52H9.38c-.84 0-1.52.68-1.52 1.52v.14A4.21 4.21 0 0 0 4 7.88v10.64a4.22 4.22 0 0 0 4.23 4.22h6.85a4.22 4.22 0 0 0 4.23-4.22V7.88a4.22 4.22 0 0 0-3.87-4.19m-6.062-.17h4.56v1.19h-4.56zm2.323 5.62H8.58a.75.75 0 0 0 0 1.5h3.12a.75.75 0 0 0 0-1.5m2.19 7.55H8.58a.75.75 0 0 1 0-1.5h5.31a.75.75 0 0 1 0 1.5m-5.31-2.93h6.14a.75.75 0 0 0 0-1.5H8.58a.75.75 0 0 0 0 1.5" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M12.05 10.96H8.93a.75.75 0 0 1 0-1.5h3.12a.75.75 0 0 1 0 1.5M8.93 12.57h6.14a.75.75 0 0 1 0 1.5H8.93a.75.75 0 0 1 0-1.5M14.23 15.5h-5.3a.75.75 0 0 0 0 1.5h5.3a.75.75 0 0 0 0-1.5" /><path fill="currentColor" fillRule="evenodd" d="M14.27 2a1.52 1.52 0 0 1 1.52 1.44A4.74 4.74 0 0 1 20 8.09v10.09a4.76 4.76 0 0 1-4.75 4.75h-6.5A4.76 4.76 0 0 1 4 18.18V8.09a4.74 4.74 0 0 1 4.21-4.65A1.53 1.53 0 0 1 9.73 2zm.02 1.44H9.73v1.19h4.56zm4.21 14.74a3.26 3.26 0 0 1-3.25 3.26h-6.5a3.26 3.26 0 0 1-3.25-3.26V8.09a3.25 3.25 0 0 1 2.73-3.2 1.51 1.51 0 0 0 1.5 1.26h4.54a1.51 1.51 0 0 0 1.5-1.26 3.25 3.25 0 0 1 2.73 3.2z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default Clipboard;
