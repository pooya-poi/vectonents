import React from 'react';

interface ArrowUpDownProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const ArrowUpDown: React.FC<ArrowUpDownProps> = ({
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
                    <path fill="currentColor" d="M21 13.31a1.49 1.49 0 0 0-2.12 0l-1.4 1.39V9.23a1.5 1.5 0 0 0-3 0v5.47l-1.39-1.39a1.5 1.5 0 0 0-2.12 2.12l4 3.95q.108.103.23.19l.08.05.17.09h.12l.16.05c.198.04.402.04.6 0l.18-.05h.1l.18-.1h.08l.22-.19 4-3.95a1.51 1.51 0 0 0-.09-2.16" /><path fill="currentColor" d="M10.94 10.69c.28.283.662.442 1.06.44a1.45 1.45 0 0 0 1.06-.44 1.49 1.49 0 0 0 0-2.12l-4-3.95a1.6 1.6 0 0 0-.49-.33 1.56 1.56 0 0 0-1.1 0 1.5 1.5 0 0 0-.47.33l-4 4a1.51 1.51 0 0 0 0 2.12 1.49 1.49 0 0 0 2.12 0L6.55 9.3v5.47a1.5 1.5 0 0 0 3 0V9.3z" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M21.91 14.28a.75.75 0 0 0-1.07 0l-3.4 3.41v-9a.75.75 0 1 0-1.5 0v9l-3.41-3.41a.753.753 0 1 0-1.07 1.06l4.7 4.66c.067.07.15.125.24.16a.72.72 0 0 0 .57 0 .7.7 0 0 0 .25-.16l4.69-4.69a.75.75 0 0 0 0-1.03M11.47 9.72a.76.76 0 0 0 1.07 0 .75.75 0 0 0 0-1.06L7.84 4a.7.7 0 0 0-.24-.16.8.8 0 0 0-.57 0 .8.8 0 0 0-.25.16L2.09 8.66a.75.75 0 0 0 0 1.06.74.74 0 0 0 1.06 0l3.41-3.41v9a.75.75 0 0 0 1.5 0v-9z" />
                </>
            ) : null}
        </svg>
    );
};
export default ArrowUpDown;