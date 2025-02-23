import React from 'react';

interface SquerArrowUpRightProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const SquerArrowUpRight: React.FC<SquerArrowUpRightProps> = ({
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
                    <path fill="currentColor" d="M14.68 11.92a1.51 1.51 0 0 0 2.13 0L19.73 9a1.6 1.6 0 0 0 .33-.49 1.7 1.7 0 0 0 .1-.55 1.6 1.6 0 0 0-.1-.55 1.5 1.5 0 0 0-.33-.49l-2.92-2.98a1.503 1.503 0 0 0-2.13 2.12l.37.37H9.78a6 6 0 0 0-5.95 6v2.17a5.92 5.92 0 0 0 5.74 5.9h8a1.5 1.5 0 0 0 0-3H9.71a2.94 2.94 0 0 1-2.85-2.95v-2.17a3 3 0 0 1 2.95-3h5.27l-.37.37a1.51 1.51 0 0 0-.03 2.17" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M15.58 11.39a.8.8 0 0 0 .53.22.77.77 0 0 0 .53-.22l2.93-2.93a.7.7 0 0 0 .16-.25.7.7 0 0 0 0-.57.8.8 0 0 0-.16-.24l-2.93-2.93a.75.75 0 1 0-1.06 1.06l1.65 1.65h-7.09a5.2 5.2 0 0 0-5.2 5.2v2.28a5.11 5.11 0 0 0 5 5.09h7.18a.76.76 0 0 0 .78-.75.75.75 0 0 0-.74-.75H10a3.69 3.69 0 0 1-3.58-3.7v-2.17a3.7 3.7 0 0 1 3.7-3.7h7.09l-1.65 1.65a.75.75 0 0 0 .02 1.06" />
                </>
            ) : null}
        </svg>
    );
};

export default SquerArrowUpRight;
