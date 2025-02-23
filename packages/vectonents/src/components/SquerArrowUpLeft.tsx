import React from 'react';

interface SquerArrowUpLeftProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const SquerArrowUpLeft: React.FC<SquerArrowUpLeftProps> = ({
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
                    <path fill="currentColor" d="M14.22 6.43H9l.37-.37a1.52 1.52 0 1 0-2.18-2.12L4.27 6.87a1.5 1.5 0 0 0-.33.49 1.54 1.54 0 0 0 0 1.09c.072.203.185.39.33.55l2.92 2.93a1.51 1.51 0 1 0 2.13-2.14L9 9.43h5.27a3 3 0 0 1 3 3v2.17a2.93 2.93 0 0 1-2.81 2.95h-8a1.5 1.5 0 1 0 0 3h8a5.93 5.93 0 0 0 5.76-5.95v-2.22a6 6 0 0 0-6-5.95" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M14.59 7.18H7.5l1.65-1.65a.74.74 0 0 0 0-1.06.75.75 0 0 0-1.06 0L5.16 7.4a.8.8 0 0 0-.16.24.8.8 0 0 0 0 .57.7.7 0 0 0 .16.25l2.93 2.93a.8.8 0 0 0 .53.22.77.77 0 0 0 .53-.22.74.74 0 0 0 0-1.06L7.5 8.68h7.09a3.7 3.7 0 0 1 3.7 3.7v2.17a3.68 3.68 0 0 1-3.56 3.7h-7.9a.75.75 0 0 0 0 1.5h7.93a5.17 5.17 0 0 0 5-5.2v-2.17a5.2 5.2 0 0 0-5.17-5.2" />
                </>
            ) : null}
        </svg>
    );
};

export default SquerArrowUpLeft;
