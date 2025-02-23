import React from 'react';

interface TvProps {
    color?: string;
    className?: string;
    variants?: 'filled' | 'outlined';
    size?: number;
}

const Tv: React.FC<TvProps> = ({
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
                    <path fill="currentColor" d="M17.7 18H6.735a.75.75 0 0 0-.748.75c0 .414.335.75.748.75H17.7a.75.75 0 0 0 .747-.75.75.75 0 0 0-.747-.75" /><path fill="currentColor" fillRule="evenodd" d="M18.013 4H5.987A3.993 3.993 0 0 0 2 8v4.262c0 2.209 1.785 4 3.987 4h12.026a3.994 3.994 0 0 0 3.987-4V8c0-2.21-1.785-4-3.987-4" clipRule="evenodd" />
                </>
            ) : variants === 'outlined' ? (
                <>
                    <path fill="currentColor" fillRule="evenodd" d="M6 4.51h12a4 4 0 0 1 4 4v4.26a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8.51a4 4 0 0 1 4-4M18 15.1a2.33 2.33 0 0 0 2.33-2.33V8.51A2.33 2.33 0 0 0 18 6.18H6a2.33 2.33 0 0 0-2.33 2.33v4.26A2.33 2.33 0 0 0 6 15.1z" clipRule="evenodd" /><path fill="currentColor" d="M17.5 18.74h-11a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5" />
                </>
            ) : null}
        </svg>
    );
};

export default Tv;
