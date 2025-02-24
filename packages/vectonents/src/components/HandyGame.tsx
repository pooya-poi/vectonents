import React from 'react';

interface HandyGameProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const HandyGame: React.FC<HandyGameProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M16 2H8a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-4 15.75h-1.25V19a.75.75 0 0 1-1.5 0v-1.25H8a.75.75 0 0 1 0-1.5h1.25V15a.75.75 0 0 1 1.5 0v1.25H12a.75.75 0 0 1 0 1.5m3 1a.75.75 0 0 0 .53-.22v-.03a.75.75 0 0 0 .22-.47.7.7 0 0 0-.06-.29.6.6 0 0 0-.16-.24.75.75 0 0 0-1.22.21.75.75 0 0 0 .16.82.7.7 0 0 0 .25.16.7.7 0 0 0 .28.06m1.69-2.46a.6.6 0 0 1-.16.24.74.74 0 0 1-.82.16.75.75 0 1 1 .98-.4m-2.15-4.26a3 3 0 0 0 3-3V6.67a3 3 0 0 0-3-3H9.46a3 3 0 0 0-3 3v2.36a3 3 0 0 0 3 3z" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M10.75 16.25H12a.75.75 0 0 1 0 1.5h-1.25V19a.75.75 0 0 1-1.5 0v-1.25H8a.75.75 0 0 1 0-1.5h1.25V15a.75.75 0 0 1 1.5 0zM15.29 17.34q.135.057.24.16a.6.6 0 0 1 .16.24q.06.139.06.29a.75.75 0 1 1-.46-.69M16.53 15.5a.75.75 0 0 0-1.06 1.06.6.6 0 0 0 .25.16.72.72 0 0 0 .57 0 .74.74 0 0 0 .4-.4.72.72 0 0 0 0-.58.6.6 0 0 0-.16-.24" /><path fill="currentColor" fillRule="evenodd" d="M16 2H8a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1.55 18A1.54 1.54 0 0 1 16 21.55H8A1.54 1.54 0 0 1 6.45 20v-8.25H14a.75.75 0 0 0 0-1.5H6.45V5A1.54 1.54 0 0 1 8 3.5h8A1.54 1.54 0 0 1 17.55 5z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};

export default HandyGame;
