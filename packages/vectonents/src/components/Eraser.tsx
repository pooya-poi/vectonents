import React from 'react';
interface EraserProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Eraser: React.FC<EraserProps> = ({
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
                    <path fill="currentColor" d="M3.82 12.17a4 4 0 0 0 0 5.65l3.28 3.29h5.08l2.18-2.18-8.65-8.65zM20.18 7.45l-3-3a4 4 0 0 0-5.66 0l-1.1 1.11 8.65 8.65 1.1-1.11a4 4 0 0 0 .01-5.65" /><path fill="currentColor" fillRule="evenodd" d="M15.42 17.87 6.77 9.22l2.6-2.6 8.65 8.65zm.54-3.66a.75.75 0 0 0-.75-.75H14.1a.75.75 0 0 0 0 1.5h1.11a.75.75 0 0 0 .75-.75M13 11.23a.75.75 0 0 1 0 1.5h-1.13a.75.75 0 0 1 0-1.5zm-1.49-1.48a.75.75 0 0 0-.75-.75H9.65a.75.75 0 1 0 0 1.5h1.11a.75.75 0 0 0 .75-.75" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="m17.18 4.25 3 3a4 4 0 0 1 0 5.65l-1.1 1.1-1.59 1.6-5.31 5.31H7.1l-3.28-3.25a4 4 0 0 1 0-5.66l7.7-7.75a4 4 0 0 1 5.66 0m-2.82 12.36 1.47-1.46L17 14l-6.57-6.52-2.6 2.6zm-2.8 2.8H7.72l-2.84-2.84a2.51 2.51 0 0 1 0-3.54l1.89-1.89 6.53 6.53zM18 13l1.12-1.15a2.5 2.5 0 0 0 .01-3.53l-3-3a2.51 2.51 0 0 0-3.54 0l-1.1 1.1z" clipRule="evenodd" /><path fill="currentColor" d="M8.9 9.56a.74.74 0 0 0 .75.75h1.11a.75.75 0 0 0 0-1.5H9.65a.75.75 0 0 0-.75.75M13.35 14a.74.74 0 0 0 .75.75h1.11a.75.75 0 0 0 0-1.5H14.1a.75.75 0 0 0-.75.75M11.12 11.79a.76.76 0 0 0 .75.75H13A.77.77 0 1 0 13 11h-1.13a.76.76 0 0 0-.75.79" />
                </>
            ) : null}
        </svg>
    );
};
export default Eraser;
