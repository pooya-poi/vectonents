import React from 'react';

interface ArrowRightLeftProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
}
const ArrowRightLeft: React.FC<ArrowRightLeftProps> = ({
    color,
    className = '',
    variants = 'filled',
}) => {
    const defaultColor = 'white';
    const fillColor = color || defaultColor;
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-${fillColor} ${className}`}
        >
            {variants === 'filled' ? (
                <>
                    <path fill="currentColor" d="M14.77 14.45H9.3l1.39-1.39a1.5 1.5 0 0 0-2.12-2.12l-3.95 4a2 2 0 0 0-.19.23.3.3 0 0 1 0 .07c0 .06-.07.12-.1.19v.09a1 1 0 0 0 0 .19 1.4 1.4 0 0 0 0 .29q-.015.15 0 .3a.8.8 0 0 0 0 .16v.12l.09.17v.09q.087.117.19.22l4 4a1.53 1.53 0 0 0 1.06.44 1.5 1.5 0 0 0 1.06-2.56L9.3 17.45h5.47a1.5 1.5 0 1 0 0-3" /><path fill="currentColor" d="M19.61 8.81c0-.06.07-.12.1-.19a.5.5 0 0 1 0-.09q.035-.093.05-.19.015-.145 0-.29.015-.15 0-.3a1 1 0 0 0-.05-.17v-.11a2 2 0 0 0-.1-.18v-.08a2 2 0 0 0-.23-.21l-3.95-4a1.51 1.51 0 0 0-2.12 0 1.49 1.49 0 0 0 0 2.12l1.39 1.4H9.23a1.5 1.5 0 0 0 0 3h5.47l-1.39 1.39a1.5 1.5 0 0 0 0 2.13c.281.28.663.435 1.06.43a1.52 1.52 0 0 0 1.06-.43l3.95-4q.103-.108.19-.23z" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="m6.28 14.94 3.41-3.41a.753.753 0 1 0-1.06-1.07L4 15.15a.8.8 0 0 0-.16.25.8.8 0 0 0 0 .57.8.8 0 0 0 .16.25l4.69 4.69a.8.8 0 0 0 .53.22.75.75 0 0 0 .53-.22.74.74 0 0 0 0-1.06l-3.44-3.41h9a.75.75 0 1 0 0-1.5zM20.19 6a.8.8 0 0 0-.19-.22l-4.66-4.69a.75.75 0 0 0-1.06 0 .74.74 0 0 0 0 1.06l3.41 3.42h-9a.75.75 0 1 0 0 1.5h9l-3.41 3.41a.74.74 0 0 0 0 1.06c.14.14.331.22.53.22a.8.8 0 0 0 .53-.22L20 6.85a.8.8 0 0 0 .16-.25.8.8 0 0 0 .03-.6" />
                </>
            ) : null}
        </svg>
    );
};
export default ArrowRightLeft;