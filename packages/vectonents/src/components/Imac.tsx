import React from 'react';

interface ImacProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Imac: React.FC<ImacProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M18.003 4h-13a3.15 3.15 0 0 0-3 3.27v5.46a3.15 3.15 0 0 0 3 3.27h3.76q-.165.96-.48 1.88l-.34.94a.86.86 0 0 0 .71 1.18h5.71a.85.85 0 0 0 .7-1.18l-.33-.94c-.22-.61-.38-1.24-.48-1.88h3.75a3.15 3.15 0 0 0 3-3.27V7.27a3.15 3.15 0 0 0-3-3.27m-7.07 10.08a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m-6.43-1.61h14v.03a.75.75 0 0 0 0-1.5h-14a.75.75 0 1 0 0 1.47" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M18.5 4.42h-13a3.15 3.15 0 0 0-3 3.27v5.46a3.15 3.15 0 0 0 3 3.27h3.74a12 12 0 0 1-.46 1.88l-.34.94a.86.86 0 0 0 .71 1.18h5.7a.86.86 0 0 0 .71-1.18l-.34-.94a12 12 0 0 1-.46-1.88h3.74a3.15 3.15 0 0 0 3-3.27V7.69a3.15 3.15 0 0 0-3-3.27m-8.35 14.5v-.12q.326-.919.5-1.88h2.62q.181.958.5 1.88v.12zm8.35-4a1.66 1.66 0 0 0 1.5-1.77V7.69a1.66 1.66 0 0 0-1.5-1.77h-13A1.66 1.66 0 0 0 4 7.69v5.46a1.66 1.66 0 0 0 1.5 1.77z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};

export default Imac;
