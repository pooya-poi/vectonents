import React from 'react';

interface ArrowUpDownCornerProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const ArrowUpDownCorner: React.FC<ArrowUpDownCornerProps> = ({
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
                    <path fill="currentColor" d="M8.36 11.82h2a1.5 1.5 0 1 0 0-3H4.74a1.4 1.4 0 0 0-.55.11 1.48 1.48 0 0 0-.82.81 1.6 1.6 0 0 0-.1.54v5.6a1.5 1.5 0 1 0 3 0v-2l3.86 3.87a1.53 1.53 0 0 0 1.06.44 1.5 1.5 0 0 0 1.06-2.56z" /><path fill="currentColor" d="M20.76 13.68v-5.6a1.5 1.5 0 0 0-3 0v2L13.9 6.19a1.5 1.5 0 0 0-2.12 2.12l3.86 3.87h-2a1.5 1.5 0 0 0 0 3h5.59c.189 0 .376-.037.55-.11a1.48 1.48 0 0 0 .82-.81 1.4 1.4 0 0 0 .16-.58" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M5.2 10.76H10a.75.75 0 0 0 0-1.5H3.39a.7.7 0 0 0-.29.06.78.78 0 0 0-.41.41.9.9 0 0 0 0 .28v6.63a.75.75 0 0 0 1.5 0v-4.82l6.34 6.34a.73.73 0 0 0 .53.22.75.75 0 0 0 .53-1.28zM21.36 7.35a.75.75 0 0 0-1.5 0v4.83l-6.34-6.34a.74.74 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l6.34 6.34H14a.75.75 0 0 0 0 1.5h6.63q.151 0 .29-.06a.78.78 0 0 0 .41-.41.9.9 0 0 0 .05-.28z" />
                </>
            ) : null}
        </svg>
    );
};
export default ArrowUpDownCorner;