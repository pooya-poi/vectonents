import React from 'react';

interface ChevronUpProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const ChevronUp: React.FC<ChevronUpProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M20.42 17.579c-.403 0-.808-.154-1.116-.462L12 9.81l-7.304 7.306a1.58 1.58 0 0 1-2.234 0 1.58 1.58 0 0 1 0-2.234l8.42-8.421a1.58 1.58 0 0 1 2.235 0l8.42 8.42a1.58 1.58 0 0 1 0 2.235 1.57 1.57 0 0 1-1.116.462" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M20 16.75a.74.74 0 0 1-.53-.22L12 9.06l-7.47 7.47a.75.75 0 0 1-1.06-1.06l8-8a.75.75 0 0 1 1.06 0l8 8a.75.75 0 0 1-.53 1.28" />
                </>
            ) : null}
        </svg>
    );
};

export default ChevronUp;
