import React from 'react';

interface ArrowRightUpProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const ArrowRightUp: React.FC<ArrowRightUpProps> = ({
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
                    <path fill="currentColor" d="M17.3 17.32a.75.75 0 0 1-.75-.75V7.44H7.43a.75.75 0 1 1 0-1.5h9.88a.74.74 0 0 1 .53.21.75.75 0 0 1 .22.54v9.88a.74.74 0 0 1-.76.75" /><path fill="currentColor" d="M6.69 18.06a.74.74 0 0 1-.754-.745.75.75 0 0 1 .224-.535L16.78 6.16a.75.75 0 1 1 1.06 1.06L7.22 17.85a.77.77 0 0 1-.53.21" /><path fill="currentColor" d="M17.3 18.07a1.5 1.5 0 0 1-1.5-1.5V8.19H7.43a1.5 1.5 0 1 1 0-3h9.89a1.47 1.47 0 0 1 1.5 1.5v9.88a1.5 1.5 0 0 1-1.52 1.5" /><path fill="currentColor" d="M6.69 18.81a1.48 1.48 0 0 1-1.06-.43 1.5 1.5 0 0 1 0-2.13L16.25 5.63a1.5 1.5 0 1 1 2.12 2.12L7.75 18.38a1.52 1.52 0 0 1-1.06.43" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M6.224 17.929a.74.74 0 0 0 .53.21.77.77 0 0 0 .53-.21l9.33-9.34v8.06c0 .414.336.75.75.75a.74.74 0 0 0 .76-.75V6.916a.75.75 0 0 0-.897-.897H7.494a.75.75 0 1 0 0 1.5h8.07l-9.34 9.34a.75.75 0 0 0 0 1.07" />
                </>
            ) : variants === '' ? (
                <>

                </>
            ) : variants === '' ? (
                <>

                </>
            ) : null}
        </svg>
    );
};
export default ArrowRightUp;