import React from 'react';
interface ActivityProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Activity: React.FC<ActivityProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M10 2h4.24a8 8 0 0 1 8 8v4.24a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V10a8 8 0 0 1 8-8m6.39 10.87h1.73v.03a.75.75 0 0 0 0-1.5h-1.75a1.94 1.94 0 0 0-1.38.57l-2.15 2.15v-5a1 1 0 0 0-1.79-.79l-2.88 2.9a.45.45 0 0 1-.33.14H6.12a.75.75 0 0 0 0 1.5h1.72a2 2 0 0 0 1.39-.58l2.1-2.15v5a1 1 0 0 0 .65 1 .9.9 0 0 0 .4.08 1.05 1.05 0 0 0 .74-.31L16.07 13a.48.48 0 0 1 .32-.13" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M21.72 11.572h-2.88a2.72 2.72 0 0 0-1.94.8l-4.42 4.42v-9.55a1.25 1.25 0 0 0-2.14-.87l-4.83 4.83a1.24 1.24 0 0 1-.89.37H1.75a.75.75 0 0 0 0 1.5h2.87a2.74 2.74 0 0 0 2-.81l4.34-4.41v9.55a1.24 1.24 0 0 0 .77 1.15 1.23 1.23 0 0 0 1.36-.27l4.87-4.85c.235-.23.55-.36.88-.36h2.88a.75.75 0 1 0 0-1.5" />
                </>
            ) : null}
        </svg>
    );
};
export default Activity;
