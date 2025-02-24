import React from 'react';
interface ArchiveProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}
const Archive: React.FC<ArchiveProps> = ({
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
                    <path fill="currentColor" d="M3 5.18C3 4.528 3.528 4 4.18 4h15.25c.652 0 1.18.528 1.18 1.18v.14a1.18 1.18 0 0 1-1.18 1.18H4.18A1.18 1.18 0 0 1 3 5.32z" /><path fill="currentColor" fillRule="evenodd" d="M4.417 8.387c.2-.199.471-.31.753-.307h13.28a1.05 1.05 0 0 1 1.06 1.06v8.77a2.79 2.79 0 0 1-2.77 2.81H6.88a2.79 2.79 0 0 1-2.77-2.81V9.14a1.05 1.05 0 0 1 .307-.753M9.42 12.89h4.78a.8.8 0 0 0 0-1.6H9.42a.8.8 0 1 0 0 1.6" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M21.567 5.503a2.5 2.5 0 0 0-2.5-2.5H4.607a2.49 2.49 0 0 0-.77 4.89v9a3.36 3.36 0 0 0 3.35 3.36h9.28a3.36 3.36 0 0 0 3.37-3.36v-9a2.49 2.49 0 0 0 1.73-2.39m-5.09 13.24h-9.28a1.85 1.85 0 0 1-1.85-1.85v-8.89h13v8.89a1.85 1.85 0 0 1-1.87 1.85M4.607 6.503h14.46a1 1 0 1 0 0-2H4.607a1 1 0 1 0 0 2" clipRule="evenodd" /><path fill="currentColor" d="M14.087 10.633h-4.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5" />
                </>
            ) : null}
        </svg>
    );
};
export default Archive;
