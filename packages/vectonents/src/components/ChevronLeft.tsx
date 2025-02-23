import React from 'react';

interface ChevronLeftProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const ChevronLeft: React.FC<ChevronLeftProps> = ({
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
                    <path fill="currentColor" d="M16 21.5a1.5 1.5 0 0 1-1.06-.44l-8-8a1.49 1.49 0 0 1 0-2.12l8-8a1.5 1.5 0 1 1 2.12 2.12L10.12 12l6.94 6.94a1.49 1.49 0 0 1 0 2.12 1.5 1.5 0 0 1-1.06.44" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M16 20.75a.74.74 0 0 1-.53-.22l-8-8a.75.75 0 0 1 0-1.06l8-8a.75.75 0 0 1 1.06 1.06L9.06 12l7.47 7.47a.75.75 0 0 1-.53 1.28" />
                </>
            ) : null}
        </svg>
    );
};

export default ChevronLeft;
