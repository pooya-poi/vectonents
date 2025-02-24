import React from 'react';
interface BookProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Book: React.FC<BookProps> = ({
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
                    <path fill="currentColor" d="M20.26 14.83V6.75A3.75 3.75 0 0 0 16.51 3H7.75A3.75 3.75 0 0 0 4 6.75v10.54a3.21 3.21 0 0 0 3.21 3.21h12.3a.75.75 0 0 0 0-1.5H7.21a1.71 1.71 0 0 1 0-3.42h12.3a.75.75 0 0 0 .75-.75" /><path fill="currentColor" d="M7.21 16.54a.75.75 0 0 0 0 1.5h11.07a.75.75 0 0 0 0-1.5z" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M20.26 14.83V6.75A3.75 3.75 0 0 0 16.51 3H7.75A3.75 3.75 0 0 0 4 6.75v10.54a3.21 3.21 0 0 0 3.21 3.21h12.3a.75.75 0 0 0 0-1.5H7.21a1.71 1.71 0 0 1 0-3.42h12.3a.75.75 0 0 0 .75-.75M5.5 14.58V6.75A2.25 2.25 0 0 1 7.75 4.5h8.76a2.25 2.25 0 0 1 2.25 2.25v7.33H7.21a3.2 3.2 0 0 0-1.71.5" clipRule="evenodd" /><path fill="currentColor" d="M6.46 17.29a.75.75 0 0 1 .75-.75h11.07a.75.75 0 0 1 0 1.5H7.21a.75.75 0 0 1-.75-.75" />
                </>
            ) : null}
        </svg>
    );
};
export default Book;
