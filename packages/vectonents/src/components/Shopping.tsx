import React from 'react';

interface ShoppingProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Shopping: React.FC<ShoppingProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M8.316 2h7.368A6.316 6.316 0 0 1 22 8.316v7.368A6.316 6.316 0 0 1 15.684 22H8.316A6.316 6.316 0 0 1 2 15.684V8.316A6.316 6.316 0 0 1 8.316 2m.793 8.42A4.05 4.05 0 0 0 12 11.547a4.063 4.063 0 0 0 4.147-3.968.79.79 0 0 0-1.579 0A2.495 2.495 0 0 1 12 9.969a2.484 2.484 0 0 1-2.558-2.39.79.79 0 1 0-1.579 0A4.05 4.05 0 0 0 9.11 10.42" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M8.5 2.5h7a6 6 0 0 1 6 6v7a6 6 0 0 1-6 6h-7a6 6 0 0 1-6-6v-7a6 6 0 0 1 6-6m7 17.5a4.51 4.51 0 0 0 4.5-4.5v-7A4.51 4.51 0 0 0 15.5 4h-7A4.51 4.51 0 0 0 4 8.5v7A4.51 4.51 0 0 0 8.5 20z" clipRule="evenodd" /><path fill="currentColor" d="M15.18 7a.76.76 0 0 0-.75.75A2.36 2.36 0 0 1 12 10.07a2.36 2.36 0 0 1-2.43-2.28.75.75 0 0 0-1.5 0A3.86 3.86 0 0 0 12 11.57a3.86 3.86 0 0 0 3.93-3.78.75.75 0 0 0-.75-.79" />
                </>
            ) : null}
        </svg>
    );
};

export default Shopping;
