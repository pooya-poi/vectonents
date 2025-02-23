import React from 'react';

interface ShoppingBagProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const ShoppingBag: React.FC<ShoppingBagProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M20.74 6.86 22 15.2c.51 3.65-2 6.97-5.4 7H7.34c-3.34 0-5.88-3.35-5.34-7l1.26-8.34a5.61 5.61 0 0 1 5.34-5h6.8a5.61 5.61 0 0 1 5.34 5M8.1 7.81a3.91 3.91 0 0 0 3.9 3.9 3.91 3.91 0 0 0 3.9-3.9.75.75 0 0 0-1.5 0 2.4 2.4 0 1 1-4.8 0 .75.75 0 1 0-1.5 0" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M20.74 6.86 22 15.2c.51 3.65-2 6.97-5.4 7H7.34c-3.34 0-5.88-3.35-5.34-7l1.26-8.34a5.61 5.61 0 0 1 5.34-5h6.8a5.61 5.61 0 0 1 5.34 5m-4.11 13.81a3.66 3.66 0 0 0 2.77-1.33 4.88 4.88 0 0 0 1.09-3.92l-1.23-8.34a4.11 4.11 0 0 0-3.86-3.75H8.6a4.11 4.11 0 0 0-3.86 3.75l-1.23 8.34a4.88 4.88 0 0 0 1.09 3.92 3.66 3.66 0 0 0 2.77 1.33z" clipRule="evenodd" /><path fill="currentColor" d="M15.15 7.06a.75.75 0 0 0-.75.75 2.4 2.4 0 1 1-4.8 0 .75.75 0 1 0-1.5 0 3.9 3.9 0 0 0 7.8 0 .76.76 0 0 0-.75-.75" />
                </>
            ) : null}
        </svg>
    );
};

export default ShoppingBag;
