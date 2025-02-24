import React from 'react';
interface BellProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Bell: React.FC<BellProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M20.407 13.97a2 2 0 0 0 .7 1.51c1.51 1.35.44 3.66-1.7 3.66h-3.8a3.43 3.43 0 0 1-3.2 2.25 3.38 3.38 0 0 1-3.2-2.25h-3.8c-2.14 0-3.21-2.31-1.7-3.66a2 2 0 0 0 .7-1.51V9.14c0-3.94 3.58-7.14 8-7.14s8 3.2 8 7.14zm-9.52 5.17a1.93 1.93 0 0 0 1.52.75 1.93 1.93 0 0 0 1.48-.75z" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M21.107 15.48a2 2 0 0 1-.7-1.52V9.14c0-3.95-3.58-7.14-8-7.14s-8 3.19-8 7.14v4.82a2 2 0 0 1-.7 1.52c-1.51 1.35-.44 3.65 1.7 3.65h3.8a3.4 3.4 0 0 0 6.4 0h3.8c2.14 0 3.21-2.3 1.7-3.65m-8.7 4.4a1.93 1.93 0 0 1-1.52-.75h3a1.9 1.9 0 0 1-1.48.75m7.01-2.25a.88.88 0 0 0 .87-.49.45.45 0 0 0-.17-.54 3.6 3.6 0 0 1-1.2-2.64V9.14c0-3.11-2.92-5.64-6.5-5.64s-6.5 2.53-6.5 5.64v4.82a3.6 3.6 0 0 1-1.2 2.64.45.45 0 0 0-.18.54.88.88 0 0 0 .87.49z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};
export default Bell;
