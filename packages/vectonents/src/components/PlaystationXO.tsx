import React from 'react';

interface PlaystationXOProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const PlaystationXO: React.FC<PlaystationXOProps> = ({
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
                    <path fill="currentColor" fillRule="evenodd" d="M10.754 10.037A2 2 0 0 1 9.05 11H5.11A2 2 0 0 1 3.3 8.08l2-3.8a2 2 0 0 1 1.78-1.07 2 2 0 0 1 1.74 1.07l2 3.8a2 2 0 0 1-.066 1.957M9.05 9 7.11 5.21 5.11 9zM20.9 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14.9 13h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m0 6h4v-4h-4z" clipRule="evenodd" /><path fill="currentColor" d="M10.78 13a1 1 0 0 0-1.41 0l-2.29 2.27L4.78 13a1 1 0 0 0-1.41 1.41l2.29 2.3L3.37 19a1 1 0 0 0 .71 1.71 1 1 0 0 0 .7-.3l2.3-2.29 2.29 2.29a1 1 0 0 0 .71.3 1 1 0 0 0 .7-1.71l-2.29-2.31 2.29-2.3a1 1 0 0 0 0-1.39" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M7.08 3.21a2 2 0 0 1 1.77 1.07l1.97 3.8A2 2 0 0 1 9.05 11H5.11A2 2 0 0 1 3.3 8.08l2-3.8a2 2 0 0 1 1.78-1.07m1.97 6.31a.5.5 0 0 0 .43-.24v-.02a.48.48 0 0 0 .04-.46l-2-3.8a.47.47 0 0 0-.41-.27.49.49 0 0 0-.45.26l-2 3.8a.5.5 0 0 0 .45.73zM20.9 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1.5 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0M14.9 13h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m4 6.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5z" clipRule="evenodd" /><path fill="currentColor" d="M10.61 13.16a.74.74 0 0 0-1.06 0l-2.47 2.47-2.47-2.47a.75.75 0 0 0-1.06 1.06L6 16.69l-2.45 2.47a.74.74 0 0 0 0 1.06.77.77 0 0 0 .53.22.8.8 0 0 0 .53-.22l2.47-2.47 2.47 2.47a.77.77 0 0 0 .53.22.8.8 0 0 0 .53-.22.75.75 0 0 0 0-1.06l-2.47-2.47 2.47-2.47a.75.75 0 0 0 0-1.06" />
                </>
            ) : null}
        </svg>
    );
};

export default PlaystationXO;
