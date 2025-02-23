import React from 'react';

interface ArrowUpLeftProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const ArrowUpLeft: React.FC<ArrowUpLeftProps> = ({
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
                    <path fill="currentColor" d="M16.25 18.38c.284.276.664.43 1.06.43a1.5 1.5 0 0 0 1.07-2.56l-8.078-8.07h6.288a1.5 1.5 0 1 0 0-3H6.937A1.5 1.5 0 0 0 5.2 7.028v9.552a1.5 1.5 0 0 0 1.5 1.49l-.01-.01a1.5 1.5 0 0 0 1.5-1.5v-6.247z" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M16.78 17.85a.77.77 0 0 0 .53.21.74.74 0 0 0 .755-.745.75.75 0 0 0-.225-.535L8.49 7.43h8.14a.75.75 0 0 0 0-1.5H6.784A.75.75 0 0 0 6 7.006v9.564a.74.74 0 0 0 .7.75l-.01-.01a.75.75 0 0 0 .75-.75V8.5z" />
                </>
            ) : null}
        </svg>
    );
};

export default ArrowUpLeft;
