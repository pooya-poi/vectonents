import React from 'react';
interface CloseRectangleProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const CloseRectangle: React.FC<CloseRectangleProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m9.48 13.48a.75.75 0 0 0 0-1.06L13.06 12l2.42-2.42a.75.75 0 0 0-1.06-1.06L12 10.94 9.58 8.52a.75.75 0 0 0-1.06 1.06L10.94 12l-2.42 2.42a.75.75 0 0 0 0 1.06.8.8 0 0 0 .53.22.77.77 0 0 0 .53-.22L12 13.06l2.42 2.42a.77.77 0 0 0 .53.22.8.8 0 0 0 .53-.22" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m13.768 17.768A2.5 2.5 0 0 0 20.5 18V6A2.5 2.5 0 0 0 18 3.5H6A2.5 2.5 0 0 0 3.5 6v12A2.5 2.5 0 0 0 6 20.5h12a2.5 2.5 0 0 0 1.768-.732" clipRule="evenodd" /><path fill="currentColor" d="M15.69 8.73a.75.75 0 0 0-1.06 0l-2.42 2.42-2.42-2.42a.75.75 0 0 0-1.06 1.06l2.42 2.42-2.42 2.42a.75.75 0 0 0 1.06 1.06l2.42-2.42 2.42 2.42c.14.14.331.22.53.22a.8.8 0 0 0 .53-.22.75.75 0 0 0 0-1.06l-2.42-2.42 2.42-2.42a.75.75 0 0 0 0-1.06" />
                </>
            ) : null}
        </svg>
    );
};
export default CloseRectangle;
