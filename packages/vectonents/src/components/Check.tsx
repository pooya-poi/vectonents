import React from 'react';
interface CheckProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Check: React.FC<CheckProps> = ({
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
                    <path fill="currentColor" d="M8.946 18.235a1.5 1.5 0 0 1-.95-.34l-4.48-3.67a1.5 1.5 0 0 1 1.9-2.32l3.47 2.84 10-9.21a1.5 1.5 0 1 1 2 2.2l-10.92 10.1a1.48 1.48 0 0 1-1.02.4" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M9.21 17.56a.75.75 0 0 1-.47-.14l-4.49-3.71a.74.74 0 0 1-.1-1 .75.75 0 0 1 1-.11l4 3.26 10.5-9.71a.75.75 0 0 1 1 1.11L9.72 17.36a.76.76 0 0 1-.51.2" />
                </>
            ) : null}
        </svg>
    );
};
export default Check;
