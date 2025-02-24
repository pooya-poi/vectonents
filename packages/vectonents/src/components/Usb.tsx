import React from 'react';
interface UsbProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Usb: React.FC<UsbProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="m16.37 4.07 3.55 3.54a2 2 0 0 1 0 2.81l-1.86 1.84a2 2 0 0 1-.5 2l-4.78 4.78a4 4 0 0 1-5.65 0l-.45-.44L5 20.25a.92.92 0 0 1-.6.28 1 1 0 0 1-.64-.27.89.89 0 0 1 0-1.26l1.65-1.67-.47-.47a4 4 0 0 1 0-5.66L9.7 6.42a2 2 0 0 1 2-.49l1.86-1.86a2 2 0 0 1 2.81 0m-1.49 2.24-.29.3a.75.75 0 0 0 1.06 1.06l.29-.3a.72.72 0 0 0 0-1.06.74.74 0 0 0-1.06 0m1.2 6.3a.75.75 0 0 1-1.06 0L11.39 9a.75.75 0 0 1 1.06-1.06l3.63 3.63a.75.75 0 0 1 0 1.03zm1.2-3.31.3-.3a.75.75 0 0 0-1.06-1.06l-.3.3a.75.75 0 0 0 0 1.06.8.8 0 0 0 .53.22.78.78 0 0 0 .53-.22" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="m19.78 7.76-3.54-3.54a2 2 0 0 0-2.82 0l-1.86 1.85A2.1 2.1 0 0 0 11 6a2 2 0 0 0-1.41.59l-4.78 4.76a4 4 0 0 0 0 5.66l.47.47-1.65 1.66a.89.89 0 1 0 1.26 1.26l1.65-1.66.45.45a4 4 0 0 0 5.66 0l4.78-4.78a2 2 0 0 0 .5-2l1.85-1.86a2 2 0 0 0 0-2.79m-3.33 5.67-4.78 4.78a2.61 2.61 0 0 1-3.7 0L5.79 16a2.61 2.61 0 0 1 0-3.7l4.78-4.78a.6.6 0 0 1 .43-.15.7.7 0 0 1 .33.11l5.19 5.19a.7.7 0 0 1 .11.33.6.6 0 0 1-.18.43m.65-2.25 1.64-1.64a.53.53 0 0 0 0-.74L15.2 5.26a.53.53 0 0 0-.74 0L12.82 6.9z" clipRule="evenodd" /><path fill="currentColor" d="M15.81 6.45a.75.75 0 0 0-1.06 0l-.3.3a.75.75 0 0 0 0 1.06A.74.74 0 0 0 15 8a.7.7 0 0 0 .53-.22l.3-.3a.74.74 0 0 0-.02-1.03M16.38 8.08l-.3.3a.75.75 0 0 0 1.06 1.06l.3-.3a.75.75 0 1 0-1.06-1.06" />
                </>
            ) : null}
        </svg>
    );
};
export default Usb;
