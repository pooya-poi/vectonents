import React from 'react';

interface BoxProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Box: React.FC<BoxProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="m13.46 2.81 6 3.33A3 3 0 0 1 21 8.77v6.46a3 3 0 0 1-1.54 2.63l-6 3.33a3 3 0 0 1-2.92 0l-6-3.33A3 3 0 0 1 3 15.23V8.77a3 3 0 0 1 1.54-2.63l6-3.33a3 3 0 0 1 2.92 0m-.23 9.06 4.23-2.35h-.04a.75.75 0 0 0 .21-1 .76.76 0 0 0-1-.3l-4.22 2.35a1 1 0 0 1-.9 0L7.29 8.22a.76.76 0 0 0-1 .3.75.75 0 0 0 .29 1l4.27 2.35a2.2 2.2 0 0 0 .51.21v4.42a.7.7 0 0 0 1.39 0v-4.43q.251-.075.48-.2" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="m13.46 2.81 6 3.33A3 3 0 0 1 21 8.77v6.46a3 3 0 0 1-1.54 2.63l-6 3.33a3 3 0 0 1-2.92 0l-6-3.33A3 3 0 0 1 3 15.23V8.77a3 3 0 0 1 1.54-2.63l6-3.33a3 3 0 0 1 2.92 0m5.23 13.74a1.53 1.53 0 0 0 .77-1.32V8.77a1.53 1.53 0 0 0-.77-1.32l-6-3.33a1.5 1.5 0 0 0-1.46 0l-6 3.33a1.53 1.53 0 0 0-.77 1.32v6.46a1.53 1.53 0 0 0 .77 1.32l6 3.33a1.5 1.5 0 0 0 1.46 0z" clipRule="evenodd" /><path fill="currentColor" d="m16.68 8.2-4.23 2.35a.9.9 0 0 1-.9 0L7.32 8.2a.75.75 0 1 0-.73 1.31l4.23 2.35q.211.112.44.18v4.46a.75.75 0 0 0 1.5 0V12q.22-.06.42-.17l4.23-2.35a.75.75 0 0 0-.73-1.31z" />
                </>
            ) : null}
        </svg>
    );
};

export default Box;
