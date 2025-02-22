import React from 'react';

interface ArrowUpProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
}
const ArrowUp: React.FC<ArrowUpProps> = ({
    color,
    className = '',
    variants = 'filled',
}) => {
    const defaultColor = 'white';
    const fillColor = color || defaultColor;
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-${fillColor} ${className}`}
        >
            {variants === 'filled' ? (
                <>
                    <path fill="currentColor" d="M19 13a1.47 1.47 0 0 1-1.06-.44L12 6.61l-5.92 5.93A1.5 1.5 0 1 1 4 10.42l7-7A1.5 1.5 0 0 1 12 3a1.5 1.5 0 0 1 1.06.44l7 7a1.51 1.51 0 0 1 0 2.13A1.48 1.48 0 0 1 19 13" /><path fill="currentColor" d="M12 21a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 1 1 3 0v15A1.5 1.5 0 0 1 12 21" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M4.49 12a.74.74 0 0 0 .51.23.74.74 0 0 0 .55-.23l5.7-5.7v13.22a.76.76 0 0 0 .75.75.76.76 0 0 0 .75-.75V6.3l5.7 5.7a.767.767 0 1 0 1.1-1.07l-7-7a.77.77 0 0 0-1.06 0l-7 7a.75.75 0 0 0 0 1.07" />
                </>
            ) : null}
        </svg>
    );
};
export default ArrowUp;