import React from 'react';

interface SquerArrowDownLeftProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const SquerArrowDownLeft: React.FC<SquerArrowDownLeftProps> = ({
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
                    <path fill="currentColor" d="M14.43 3.5H8A1.51 1.51 0 0 0 6.47 5 1.49 1.49 0 0 0 8 6.5h6.36a2.94 2.94 0 0 1 2.85 2.95v2.17a3 3 0 0 1-3 3H9l.37-.37a1.503 1.503 0 1 0-2.13-2.12L4.27 15a1.6 1.6 0 0 0-.33.49 1.54 1.54 0 0 0 0 1.09c.077.183.189.35.33.49L7.19 20a1.51 1.51 0 0 0 2.13 0 1.51 1.51 0 0 0 0-2.12L9 17.57h5.27a6 6 0 0 0 6-6V9.45a5.92 5.92 0 0 0-5.84-5.95" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M14.76 4.78H6.83a.75.75 0 0 0 0 1.5h7.88A3.68 3.68 0 0 1 18.29 10v2.17a3.7 3.7 0 0 1-3.7 3.7H7.5l1.65-1.67a.74.74 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-2.93 2.93a.8.8 0 0 0-.16.24.83.83 0 0 0 0 .58q.058.135.16.24l2.93 2.93a.74.74 0 0 0 .53.22.73.73 0 0 0 .53-.22.74.74 0 0 0 0-1.06L7.5 17.35h7.09a5.2 5.2 0 0 0 5.2-5.2V10a5.17 5.17 0 0 0-5.03-5.22" />
                </>
            ) : null}
        </svg>
    );
};

export default SquerArrowDownLeft;
