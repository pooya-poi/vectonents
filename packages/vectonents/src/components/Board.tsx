import React from 'react';
interface BoardProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Board: React.FC<BoardProps> = ({
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
                    <path fill="currentColor" d="M10 18.41h3.411a6 6 0 0 0 6-6V9c0-3.315-2.686-6-6-6H10C6.686 3 4 5.685 4 9v3.41a6 6 0 0 0 6 6M6.205 21.955h11a.75.75 0 0 0 0-1.5h-11a.75.75 0 0 0 0 1.5" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M13.42 3H10a6 6 0 0 0-6 6v3.4a6 6 0 0 0 6 6h3.42a6 6 0 0 0 6-6V9a6 6 0 0 0-6-6m4.5 9.4a4.51 4.51 0 0 1-4.5 4.5H10a4.51 4.51 0 0 1-4.5-4.5V9A4.51 4.51 0 0 1 10 4.5h3.42a4.51 4.51 0 0 1 4.5 4.5z" clipRule="evenodd" /><path fill="currentColor" d="M6.21 20.45h11a.75.75 0 1 1 0 1.5h-11a.75.75 0 0 1 0-1.5" />
                </>
            ) : null}
        </svg>
    );
};
export default Board;
