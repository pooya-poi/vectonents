import React from 'react';

interface SdCardProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const SdCard: React.FC<SdCardProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M11.19 2h6a2.41 2.41 0 0 1 2.31 2.5v15a2.41 2.41 0 0 1-2.31 2.5H6.81a2.41 2.41 0 0 1-2.31-2.5V9.29a2.62 2.62 0 0 1 .68-1.77l4.38-4.79A2.2 2.2 0 0 1 11.19 2m-.69 6.75a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-1.5 0v1c0 .414.336.75.75.75M14.25 8a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 1.5 0zm2.25.75a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-1.5 0v2c0 .414.336.75.75.75" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M11.19 2h6a2.41 2.41 0 0 1 2.31 2.5v15a2.41 2.41 0 0 1-2.31 2.5H6.81a2.41 2.41 0 0 1-2.31-2.5V9.29a2.57 2.57 0 0 1 .68-1.77l4.37-4.79A2.23 2.23 0 0 1 11.19 2m6 18.5a.93.93 0 0 0 .81-1l.04-15a.93.93 0 0 0-.81-1h-6a.7.7 0 0 0-.53.25L6.28 8.54a1.1 1.1 0 0 0-.28.75V19.5a.93.93 0 0 0 .81 1z" clipRule="evenodd" /><path fill="currentColor" d="M16.5 5a.76.76 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2A.76.76 0 0 0 16.5 5M13.5 5a.76.76 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2A.76.76 0 0 0 13.5 5M10.5 6.25a.76.76 0 0 0-.75.75v.75a.75.75 0 1 0 1.5 0V7a.76.76 0 0 0-.75-.75" />
                </>
            ) : null}
        </svg>
    );
};

export default SdCard;
