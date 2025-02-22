import React from 'react';

interface ArrowLeftDownProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
}
const ArrowLeftDown: React.FC<ArrowLeftDownProps> = ({
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
                    <path fill="currentColor" d="M6.69 18.06a.75.75 0 0 1-.75-.75V7.43a.74.74 0 0 1 .75-.75.75.75 0 0 1 .75.75v9.13h9.13a.75.75 0 0 1 0 1.5z" /><path fill="currentColor" d="M6.69 18.06a.75.75 0 0 1-.53-1.28L16.78 6.16a.75.75 0 1 1 1.06 1.06L7.22 17.84a.73.73 0 0 1-.53.22" /><path fill="currentColor" d="M6.69 18.81a1.5 1.5 0 0 1-1.5-1.5V7.42A1.5 1.5 0 0 1 6.7 5.93a1.5 1.5 0 0 1 1.5 1.5v8.38h8.38a1.5 1.5 0 0 1 0 3z" /><path fill="currentColor" d="M6.69 18.81a1.51 1.51 0 0 1-1.503-1.5c0-.398.16-.78.443-1.06L16.25 5.62a1.51 1.51 0 0 1 2.13 2.13L7.75 18.37a1.5 1.5 0 0 1-1.06.44" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" d="M6.69 18.06a.75.75 0 0 1-.75-.75V7.43a.74.74 0 0 1 .75-.75.75.75 0 0 1 .75.75v9.13h9.13a.75.75 0 0 1 0 1.5z" /><path fill="currentColor" d="M6.69 18.06a.75.75 0 0 1-.53-1.28L16.78 6.16a.75.75 0 1 1 1.06 1.06L7.22 17.84a.74.74 0 0 1-.53.22" /><path fill="currentColor" d="M6.69 18.06a.75.75 0 0 1-.75-.75V7.43a.74.74 0 0 1 .75-.75.75.75 0 0 1 .75.75v9.13h9.13a.75.75 0 0 1 0 1.5z" /><path fill="currentColor" d="M6.69 18.06a.75.75 0 0 1-.53-1.28L16.78 6.16a.75.75 0 1 1 1.06 1.06L7.22 17.84a.74.74 0 0 1-.53.22" />
                </>
            ) : null}
        </svg>
    );
};
export default ArrowLeftDown;