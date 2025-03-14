import React from 'react';

interface AirpodProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Airpod: React.FC<AirpodProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M11.02 16.79V8.07a3.82 3.82 0 0 0-1-2.83A4 4 0 0 0 7.07 4a4.045 4.045 0 0 0-.05 8.09v4.62a1.8 1.8 0 0 0 .32 1.46 2 2 0 0 0 1.68.83 2.07 2.07 0 0 0 1.59-.72 2 2 0 0 0 .41-1.49m-5.7-8.68a.74.74 0 0 1 .09 1.05.75.75 0 0 1-1 .1 1.57 1.57 0 0 1-.63-1.21c.01-.48.243-.926.63-1.21a.74.74 0 0 1 1 .09.75.75 0 0 1-.09 1.06l-.07.06zM17.02 12.09a4.045 4.045 0 0 0 0-8.09 4 4 0 0 0-2.9 1.24 3.82 3.82 0 0 0-1.1 2.83v8.72a2 2 0 0 0 .47 1.49 2.05 2.05 0 0 0 1.58.72 2 2 0 0 0 1.63-.8 1.78 1.78 0 0 0 .32-1.46zm1.6-4.1a.75.75 0 0 1-.09-1.06.74.74 0 0 1 1-.09c.387.284.62.731.63 1.21a1.57 1.57 0 0 1-.63 1.21.75.75 0 0 1-1-.1.74.74 0 0 1 .09-1.05l.07-.07z" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M2.768 8.274A4.55 4.55 0 0 1 7.26 4a4.5 4.5 0 0 1 3.26 1.4 4.34 4.34 0 0 1 1.19 3.19v8.68a2.47 2.47 0 0 1-.59 1.84 2.59 2.59 0 0 1-4-.11 2.33 2.33 0 0 1-.41-1.81v-4.13a4.55 4.55 0 0 1-3.942-4.786m5.617 9.906a.9.9 0 0 0 .775.32 1 1 0 0 0 1.1-1.14V8.55a2.91 2.91 0 0 0-3-3.05 3 3 0 0 0-3.05 3.1 3 3 0 0 0 3 3 1.13 1.13 0 0 1 1 .76v5a.9.9 0 0 0 .175.82" clipRule="evenodd" /><path fill="currentColor" d="M6.78 7.43a.74.74 0 0 0-1-.09 1.54 1.54 0 0 0-.68 1.21c.015.478.247.924.63 1.21a.75.75 0 0 0 1-.1.74.74 0 0 0-.09-1.05l-.07-.06.07-.06a.75.75 0 0 0 .14-1.06" /><path fill="currentColor" fillRule="evenodd" d="M20.377 5.333A4.55 4.55 0 0 1 21.71 8.55a4.55 4.55 0 0 1-4 4.51v4.13a2.3 2.3 0 0 1-.42 1.81 2.51 2.51 0 0 1-2 1 2.57 2.57 0 0 1-2-.89 2.42 2.42 0 0 1-.58-1.84V8.59a4.3 4.3 0 0 1 1.18-3.19A4.5 4.5 0 0 1 17.16 4a4.55 4.55 0 0 1 3.217 1.333M16.21 12.31a1.13 1.13 0 0 1 .95-.76v.05a3.06 3.06 0 0 0 3.05-3.05 3 3 0 0 0-3.05-3.05 2.91 2.91 0 0 0-2.95 3.05v8.76a1 1 0 0 0 1 1.14.9.9 0 0 0 1-1.14z" clipRule="evenodd" /><path fill="currentColor" d="M18.69 7.34a.75.75 0 0 0-1.06.09.76.76 0 0 0 .1 1.06.2.2 0 0 1 .06.06l-.06.06a.75.75 0 0 0 .96 1.15 1.57 1.57 0 0 0 .63-1.21 1.54 1.54 0 0 0-.63-1.21" />
                </>
            ) : null}
        </svg>
    );
};

export default Airpod;
