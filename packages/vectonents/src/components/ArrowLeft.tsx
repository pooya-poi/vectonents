import React from 'react';

interface ArrowLeftProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
}
const ArrowLeft: React.FC<ArrowLeftProps> = ({
    color,
    className = '',
    variants = 'fill',
}) => {
    const defaultColor = 'white';
    const fillColor = color || defaultColor;
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-${fillColor} ${className}`}
        >
            {variants === 'filled' ? (
                <>
                    <path fill="currentColor" d="M11.48 20.48a1.52 1.52 0 0 1-1.06-.43l-7-7a1.5 1.5 0 0 1 0-2.12l7-7a1.503 1.503 0 1 1 2.12 2.13L8.108 10.5H19.52a1.5 1.5 0 0 1 0 3H8.113l4.427 4.42a1.5 1.5 0 0 1-1.06 2.56" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M10.95 19.52a.77.77 0 0 0 .53.21.7.7 0 0 0 .52-.22.74.74 0 0 0 0-1.06l-5.7-5.7h13.22a.75.75 0 0 0 0-1.5H6.298l5.712-5.73a.74.74 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-7 7a.75.75 0 0 0 0 1.06z" />
                </>
            ) : null}
        </svg>
    );
};
export default ArrowLeft;