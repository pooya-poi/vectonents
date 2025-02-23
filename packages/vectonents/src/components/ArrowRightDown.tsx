import React from 'react';

interface ArrowRightDownProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const ArrowRightDown: React.FC<ArrowRightDownProps> = ({
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
                    <path fill="currentColor" d="M18.8 7.42a1.5 1.5 0 0 0-3 .01v6.26L7.75 5.62a1.503 1.503 0 0 0-2.12 2.13l8.06 8.06H7.43a1.5 1.5 0 0 0 0 3h9.89a1.49 1.49 0 0 0 1.5-1.5z" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M18.05 7.43a.74.74 0 0 0-.75-.75.75.75 0 0 0-.75.75v8.07L7.22 6.16a.75.75 0 1 0-1.06 1.06l9.34 9.34H7.43a.75.75 0 0 0 0 1.5h9.88a.75.75 0 0 0 .75-.75z" />
                </>
            ) : null}
        </svg>
    );
};
export default ArrowRightDown;