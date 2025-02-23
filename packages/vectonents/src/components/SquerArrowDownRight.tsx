import React from 'react';

interface SquerArrowDownRightProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const SquerArrowDownRight: React.FC<SquerArrowDownRightProps> = ({
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
                    <path fill="currentColor" d="M20.07 16.62a1.54 1.54 0 0 0 0-1.09 1.6 1.6 0 0 0-.33-.49l-2.92-2.93a1.503 1.503 0 0 0-2.13 2.12l.37.37H9.78a3 3 0 0 1-2.95-3V9.45A2.93 2.93 0 0 1 9.64 6.5h7.9a1.5 1.5 0 0 0 0-3H9.59a5.93 5.93 0 0 0-5.76 5.95v2.17a6 6 0 0 0 5.95 6h5.27l-.37.37a1.51 1.51 0 0 0 0 2.12 1.51 1.51 0 0 0 2.13 0l2.92-2.93a1.5 1.5 0 0 0 .33-.49z" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M19.73 16.31a.8.8 0 0 0-.16-.24l-2.93-2.93a.75.75 0 1 0-1.06 1.06l1.65 1.65h-7.09a3.7 3.7 0 0 1-3.7-3.7V10A3.69 3.69 0 0 1 10 6.28h7.9a.75.75 0 0 0 0-1.5H10a5.18 5.18 0 0 0-5 5.2v2.17a5.21 5.21 0 0 0 5.2 5.2h7.09L15.58 19a.75.75 0 0 0 1.06 1.06l2.93-2.93a.8.8 0 0 0 .16-.24.73.73 0 0 0 0-.58" />
                </>
            ) : null}
        </svg>
    );
};

export default SquerArrowDownRight;
