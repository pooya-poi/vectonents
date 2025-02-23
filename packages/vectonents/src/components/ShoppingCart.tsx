import React from 'react';

interface ShoppingCartProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
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
                    <path fill="currentColor" d="m20.68 14.4.6-4.14-.04-.04a3.18 3.18 0 0 0-3.13-3.64H7.68l-.21-.69a3.19 3.19 0 0 0-3-2.27h-1a.75.75 0 1 0 0 1.5h1a1.68 1.68 0 0 1 1.61 1.2l2.53 8.53a3.2 3.2 0 0 0 3.05 2.27h5.87a3.2 3.2 0 0 0 3.15-2.72M11.43 18.38a1 1 0 1 0 0 2 1 1 0 0 0 0-2M17.43 18.38a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M3.47 4.25h1l.05.01a3.2 3.2 0 0 1 3 2.27l.2.69h10.43a3.2 3.2 0 0 1 2.4 1.1c.603.7.87 1.627.73 2.54l-.6 4.14a3.2 3.2 0 0 1-3.14 2.8h-5.88a3.2 3.2 0 0 1-3.05-2.27L6.08 7a1.68 1.68 0 0 0-1.61-1.25h-1a.75.75 0 0 1 0-1.5m6.58 10.8a1.68 1.68 0 0 0 1.61 1.2h5.88a1.7 1.7 0 0 0 1.66-1.43l.6-4.15a1.68 1.68 0 0 0-1.63-1.96h-10z" clipRule="evenodd" /><path fill="currentColor" d="M11.43 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2M17.43 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </>
            ) : null}
        </svg>
    );
};

export default ShoppingCart;
