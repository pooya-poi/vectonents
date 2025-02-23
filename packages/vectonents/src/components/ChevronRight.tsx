import React from 'react';

interface ChevronRightProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const ChevronRight: React.FC<ChevronRightProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M6.21 20.21c0-.404.154-.808.463-1.117l7.305-7.304-7.305-7.304a1.58 1.58 0 0 1 0-2.234 1.58 1.58 0 0 1 2.233 0l8.421 8.421a1.58 1.58 0 0 1 0 2.234l-8.42 8.421A1.581 1.581 0 0 1 6.21 20.21" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M8 20.75c.199.001.39-.078.53-.22l8-8a.75.75 0 0 0 0-1.06l-8-8a.75.75 0 0 0-1.06 1.06L14.94 12l-7.47 7.47A.75.75 0 0 0 8 20.75" />
                </>
            ) : null}
        </svg>
    );
};

export default ChevronRight;
