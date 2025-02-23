import React from 'react';

interface RotateProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Rotate: React.FC<RotateProps> = ({
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
                    <path fill="currentColor" d="M12 5.21c-5.44 0-9.54 2.33-9.54 5.42 0 2.57 2.83 4.61 6.9 5.23l-.36.37a1.51 1.51 0 0 0 0 2.12 1.51 1.51 0 0 0 2.13 0l2.73-2.73a1.5 1.5 0 0 0 0-2.12l-2.73-2.73a1.5 1.5 0 0 0-2.13 0 1.48 1.48 0 0 0-.11 1.94c-2.16-.51-3.41-1.47-3.41-2.08C5.46 9.78 8 8.21 12 8.21s6.54 1.57 6.54 2.42c0 .52-.95 1.36-2.71 1.9a1.5 1.5 0 1 0 .88 2.86c3-.92 4.83-2.7 4.83-4.76 0-3.09-4.1-5.42-9.54-5.42" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M12 6c-4.93 0-8.79 2-8.79 4.63 0 2.45 3.35 4.39 7.79 4.65l-1.49 1.48a.75.75 0 0 0 0 1.06.76.76 0 0 0 1.07 0l2.73-2.73a.75.75 0 0 0 0-1.06l-2.73-2.73a.77.77 0 0 0-1.07 0 .75.75 0 0 0 0 1.06l1.42 1.41c-3.71-.25-6.22-1.77-6.22-3.14s3-3.17 7.29-3.17 7.29 1.67 7.29 3.17c0 1-1.27 2-3.24 2.61a.753.753 0 1 0 .44 1.44c2.69-.83 4.3-2.34 4.3-4C20.79 8 16.93 6 12 6" />
                </>
            ) : null}
        </svg>
    );
};

export default Rotate;
