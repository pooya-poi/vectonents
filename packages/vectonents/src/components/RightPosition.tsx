import React from 'react';

interface RightPositionProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const RightPosition: React.FC<RightPositionProps> = ({
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
                    <path fill="currentColor" d="M11.33 7.25h1.34c.69 0 1.25-.56 1.25-1.25V2.25h-3.84V6c0 .69.56 1.25 1.25 1.25" /><path fill="currentColor" fillRule="evenodd" d="M15.41 2.25h.33a6 6 0 0 1 6 6v7.49a6 6 0 0 1-6 6H8.25a6 6 0 0 1-6-6V8.25a6 6 0 0 1 6-6h.33V6a2.75 2.75 0 0 0 2.75 2.75h1.33A2.75 2.75 0 0 0 15.41 6zm-1.45 12.48a.7.7 0 0 0 .53-.22.74.74 0 0 0 .04-1.06l-2-2a.8.8 0 0 0-.24-.17.83.83 0 0 0-.58 0 .8.8 0 0 0-.24.17l-2 2a.74.74 0 0 0 0 1.06.75.75 0 0 0 1.06 0l.7-.7v2.74a.75.75 0 0 0 1.5 0v-2.74l.7.7c.14.142.33.22.53.22" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M12.51 11.47a.8.8 0 0 0-.24-.16.7.7 0 0 0-.57 0 .8.8 0 0 0-.25.16l-2 2a.75.75 0 0 0 0 1.06.74.74 0 0 0 1.06 0l.7-.7v2.75a.75.75 0 0 0 1.5 0v-2.77l.71.7a.73.73 0 0 0 .53.22.75.75 0 0 0 .53-1.28z" /><path fill="currentColor" fillRule="evenodd" d="M15.75 2.25h-7.5a6 6 0 0 0-6 6v7.5a6 6 0 0 0 6 6h7.5a6 6 0 0 0 6-6v-7.5a6 6 0 0 0-6-6M10 3.75h4a.7.7 0 0 0-.05.25v2c0 .69-.56 1.25-1.25 1.25h-1.37c-.69 0-1.25-.56-1.25-1.25V4a.7.7 0 0 0-.08-.25m5.72 16.5a4.51 4.51 0 0 0 4.5-4.5l.03-7.5a4.51 4.51 0 0 0-4.5-4.5h-.38q.04.121.05.25v2a2.75 2.75 0 0 1-2.75 2.75h-1.34A2.75 2.75 0 0 1 8.58 6V4a1 1 0 0 1 .05-.25h-.38a4.51 4.51 0 0 0-4.5 4.5v7.5a4.51 4.51 0 0 0 4.5 4.5z" clipRule="evenodd" />
                </>
            ) : null}
        </svg>
    );
};

export default RightPosition;
